import { authApi } from "api/auth-api";
import { displayRegistrationBlockFalse } from "redux/registration-block-reducer";
import db from "utils/firebase/firebase";
import { setActiveUser, setUser } from "./user-reducer";

const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_LOGOUT = "AUTH_LOGOUT";
const TOGGLE_AUTH_FETCHING = "TOGGLE_AUTH_FETCHING";
const TOGGLE_REGISTRATION_ERROR = "TOGGLE_REGISTRATION_ERROR";
const TOGGLE_REGISTRATION_FETCHING = "TOGGLE_REGISTRATION_FETCHING";
const TOGGLE_LOGIN_ERROR = "TOGGLE_LOGIN_ERROR";

let initialState = {
  token: null,
  activeAccountEmail: null,
  authFetching: false,
  registrationFetching: false,
  registrationError: false,
  loginError: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        activeAccountEmail: action.activeAccountEmail,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        activeAccountEmail: null,
      };
    case TOGGLE_AUTH_FETCHING:
      return {
        ...state,
        authFetching: action.fetching,
      };
    case TOGGLE_REGISTRATION_ERROR:
      return {
        ...state,
        registrationError: action.boolean,
      };

    case TOGGLE_REGISTRATION_FETCHING:
      return {
        ...state,
        registrationFetching: action.fetching,
      };
    case TOGGLE_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.error,
      };
    default:
      return state;
  }
};

export const authSuccess = (token, activeAccountEmail) => {
  return {
    type: AUTH_SUCCESS,
    token,
    activeAccountEmail,
  };
};

export const logout = () => {
  localStorage.removeItem("_token-id");
  localStorage.removeItem("_user-id");
  localStorage.removeItem("_user-active");
  localStorage.removeItem("_expiration-date");

  return {
    type: AUTH_LOGOUT,
  };
};

export const toggleFetching = (fetching) => {
  return {
    type: TOGGLE_AUTH_FETCHING,
    fetching,
  };
};

export const toggleRegistrationFetching = (fetching) => {
  return {
    type: TOGGLE_REGISTRATION_FETCHING,
    fetching,
  };
};

export const toggleRegistrationError = (boolean) => {
  return {
    type: TOGGLE_REGISTRATION_ERROR,
    boolean,
  };
};

export const toggleLoginError = (error) => {
  return {
    type: TOGGLE_LOGIN_ERROR,
    error,
  };
};

export const signIn = (email, password, history, URL) => {
  return async (dispatch) => {
    const signInData = {
      email,
      password,
      returnSecureToken: true,
    };
    dispatch(toggleFetching(true));

    authApi
      .signIn(signInData)
      .then((data) => {
        const expirationDate = new Date(
          new Date().getTime() + data.expiresIn * 24000
        );

        localStorage.setItem("_token-id", data.idToken);
        localStorage.setItem("_user-id", data.localId);
        localStorage.setItem("_user-active", data.email);
        localStorage.setItem("_expiration-date", expirationDate);

        dispatch(setActiveUser(data.email));
        dispatch(authSuccess(data.idToken, data.email));
        dispatch(autoLogout(data.expiresIn));
      })
      .then(() => {
        dispatch(toggleLoginError(false));
        history.push("/");
      })
      .catch((e) => {
        history.push(`${URL}`);
        dispatch(toggleLoginError(true));
      })
      .finally(() => dispatch(toggleFetching(false)));
  };
};

export const signUp = (
  name,
  sername,
  telephone,
  email,
  password,
  bday,
  mday,
  yday,
  sex,
  history,
  URL
) => {
  return async (dispatch) => {
    const signUpData = {
      email,
      password,
      returnSecureToken: true,
    };
    dispatch(toggleRegistrationFetching(true));

    authApi
      .signUp(signUpData)
      .then((data) => {
        dispatch(toggleRegistrationError(false));
        // add user to db
        db.collection("users_database")
          .add({
            Name: name.trim(),
            Sername: sername.trim(),
            Telephone_number: telephone.trim(),
            Email: email.trim(),
            Password: password.trim(),
            Birthday_data: `${bday}.${mday}.${yday}`,
            Gender:
              sex === 1
                ? "Female"
                : sex === 2
                ? "Male"
                : sex === -1
                ? "Other"
                : "None",
            Avatars: {
              activeAvatarUrl: "",
              pofileAvatars: [],
            },
            AvatarBackground: {
              activeAvatarBackgroundUrl: "",
              pofileAvatarBackgrounds: [],
            },
            RecentUploads: [],
            Bio: "",

            //--------Full information /about profile part
            FullInfo: {
              WorkAndEducation: {
                WorkPlace: [],
                College: [],
                HighSchool: [],
              },
              PlacesLived: {
                CurrentCity: "",
                HomeTown: "",
                Cities: [],
              },
              ContactInfo: {
                MobilePhone: [{ number: telephone.trim() }],
                Address: "",
                ContactEmail: email.trim(),
                Websites: [],
                SocialLinks: [],
              },
              BasicInfo: {
                Language: "",
                ReligionViews: "",
                PoliticalViews: "",
                InterestedMale: "",
                Birthday_data: `${bday}.${mday}.${yday}`,
                Gender:
                  sex === 1
                    ? "Female"
                    : sex === 2
                    ? "Male"
                    : sex === -1
                    ? "Other"
                    : "None",
              },
              FamilyAndRelationships: {
                Relationship: "",
                FamilyMembers: [],
              },
              DetailsAboutYou: {
                AboutYou: "",
                NamePronunciation: [],
                OtherNames: [],
                FavoriteQuotes: "",
              },
              LifeEvents: [],
              Hobbies: [],
            },
          })
          .then(() => {
            // verify message
            authApi
              .verifyEmail(data.idToken)
              .then(() => {
                dispatch(displayRegistrationBlockFalse());
                history.push("/confirm_email");
              })
              .catch(() => {
                dispatch(toggleRegistrationError(true));
              })
              .finally(() => dispatch(toggleRegistrationFetching(false)));
          })
          .catch(() => {
            dispatch(toggleRegistrationFetching(false));
            dispatch(toggleRegistrationError(true));
          });
      })
      .catch((e) => {
        dispatch(toggleRegistrationFetching(false));
        dispatch(toggleRegistrationError(true));
      });
  };
};

export const autoLogin = (history) => {
  return (dispatch) => {
    const token = localStorage.getItem("_token-id");
    const emailActiveUser = localStorage.getItem("_user-active");

    if (!token && !emailActiveUser) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("_expiration-date"));

      if (expirationDate <= new Date()) {
        dispatch(logout());
        history.push("/");
      } else {
        dispatch(authSuccess(token, emailActiveUser));
        dispatch(setActiveUser(emailActiveUser));
        dispatch(
          autoLogout(
            (expirationDate.getTime() - new Date().getTime()) / 1000,
            history
          )
        );
      }
    }
  };
};

export const autoLogout = (time, history) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setUser(null));
      dispatch(logout());
      history.push("/");
    }, time * 1000);
  };
};

export const logoutButton = () => {
  return (dispatch) => {
    dispatch(setUser(null));
    dispatch(logout());
  };
};

export default authReducer;
