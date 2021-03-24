import { addFromTempHobbies } from "redux/about-component-reducer";
import db from "utils/firebase/firebase";

// Icons for Search list
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import BookIcon from "@material-ui/icons/Book";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import SportsIcon from "@material-ui/icons/Sports";
import SportsBaseballIcon from "@material-ui/icons/SportsBaseball";
import SportsCricketIcon from "@material-ui/icons/SportsCricket";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import SportsGolfIcon from "@material-ui/icons/SportsGolf";
import SportsFootballIcon from "@material-ui/icons/SportsFootball";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import SportsHockeyIcon from "@material-ui/icons/SportsHockey";
import SportsMmaIcon from "@material-ui/icons/SportsMma";
import SportsTennisIcon from "@material-ui/icons/SportsTennis";
import SportsVolleyballIcon from "@material-ui/icons/SportsVolleyball";
import RowingIcon from "@material-ui/icons/Rowing";
import MovieIcon from "@material-ui/icons/Movie";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import ChatIcon from "@material-ui/icons/Chat";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RedditIcon from "@material-ui/icons/Reddit";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import CodeIcon from "@material-ui/icons/Code";

const TOGGLE_PROFILE_ADD_HOBBIES_VISIBILITY =
  "TOGGLE_PROFILE_ADD_HOBBIES_VISIBILITY";
const TOGGLE_PROFILE_ADD_HOBBIES_OPACITY = "TOGGLE_PROFILE_ADD_HOBBIES_OPACITY";
const TOGGLE_PROFILE_ADD_HOBBIES_STATE_COMPONENT =
  "TOGGLE_PROFILE_ADD_HOBBIES_STATE_COMPONENT";
const TOGGLE_PROFILE_ADD_HOBBIES_FETCH = "TOGGLE_PROFILE_ADD_HOBBIES_FETCH";

let initialState = {
  profileAddHobbiesStateComponent: 0,
  profileAddHobbiesFetch: false,
  //
  profileAddHobbiesVisibility: "hidden",
  profileAddHobbiesOpacity: 0,
  // List of search hobbies
  profileAddHobbiesRecommendedHobbies: [
    { id: 1, hobbie: "Business", icon: AccountBalanceIcon },
    { id: 2, hobbie: "Investments", icon: AccountBalanceIcon },
    { id: 3, hobbie: "Shares", icon: AccountBalanceIcon },
    //
    { id: 4, hobbie: "Flights", icon: AirplanemodeActiveIcon },
    { id: 5, hobbie: "Travels", icon: AirplanemodeActiveIcon },
    { id: 6, hobbie: "Airplanes", icon: AirplanemodeActiveIcon },
    //
    { id: 7, hobbie: "Money", icon: AttachMoneyIcon },
    { id: 8, hobbie: "Money-making", icon: AttachMoneyIcon },
    { id: 9, hobbie: "Money-making in internet", icon: AttachMoneyIcon },
    //
    { id: 10, hobbie: "Listening to Music", icon: HeadsetMicIcon },
    { id: 11, hobbie: "Playing Music", icon: HeadsetMicIcon },
    { id: 12, hobbie: "Creating Music", icon: HeadsetMicIcon },
    //
    { id: 13, hobbie: "Reading", icon: BookIcon },
    { id: 14, hobbie: "Studing", icon: BookIcon },
    { id: 15, hobbie: "Learning", icon: BookIcon },
    { id: 16, hobbie: "Book Collection", icon: BookIcon },
    { id: 17, hobbie: "Writing", icon: BookIcon },
    { id: 18, hobbie: "Creative Writing", icon: BookIcon },
    //
    { id: 19, hobbie: "Video Games", icon: SportsEsportsIcon },
    { id: 20, hobbie: "Games", icon: SportsEsportsIcon },
    { id: 21, hobbie: "Game Streams", icon: SportsEsportsIcon },
    { id: 22, hobbie: "E-sport", icon: SportsEsportsIcon },
    //
    { id: 23, hobbie: "Sports", icon: SportsIcon },
    { id: 24, hobbie: "Football", icon: SportsSoccerIcon },
    { id: 25, hobbie: "American Football", icon: SportsFootballIcon },
    { id: 26, hobbie: "Basketball", icon: SportsBasketballIcon },
    { id: 27, hobbie: "Baseball", icon: SportsBaseballIcon },
    { id: 28, hobbie: "Cricet", icon: SportsCricketIcon },
    { id: 29, hobbie: "Golf", icon: SportsGolfIcon },
    { id: 30, hobbie: "Handball", icon: SportsHandballIcon },
    { id: 31, hobbie: "Hockey", icon: SportsHockeyIcon },
    { id: 32, hobbie: "MMA", icon: SportsMmaIcon },
    { id: 33, hobbie: "Tennis", icon: SportsTennisIcon },
    { id: 34, hobbie: "Volleyball", icon: SportsVolleyballIcon },
    { id: 35, hobbie: "Rowling", icon: RowingIcon },
    { id: 36, hobbie: "Gym", icon: FitnessCenterIcon },
    //
    { id: 37, hobbie: "Art", icon: CropOriginalIcon },
    { id: 38, hobbie: "Portrait Art", icon: ColorLensIcon },
    { id: 39, hobbie: "Glass Art", icon: ColorLensIcon },
    { id: 40, hobbie: "Screenprinting", icon: ColorLensIcon },
    { id: 41, hobbie: "Landscape Painting", icon: ColorLensIcon },
    //
    { id: 42, hobbie: "Photography", icon: PhotoCameraIcon },
    { id: 43, hobbie: "Macro Photography", icon: PhotoCameraIcon },
    { id: 44, hobbie: "Portrait Photography", icon: PhotoCameraIcon },
    { id: 45, hobbie: "Nature Photography", icon: PhotoCameraIcon },
    { id: 46, hobbie: "Fashion Photography", icon: PhotoCameraIcon },
    { id: 47, hobbie: "Landscape Photography", icon: PhotoCameraIcon },
    //
    { id: 48, hobbie: "Watching Movies", icon: MovieIcon },
    { id: 49, hobbie: "Vlogging", icon: MovieIcon },
    { id: 50, hobbie: "Videography", icon: MovieIcon },
    //
    { id: 51, hobbie: "Chatting", icon: ChatIcon },
    { id: 52, hobbie: "Chatting with friends", icon: ChatIcon },
    { id: 53, hobbie: "Trolling in chat", icon: ChatIcon },
    //
    { id: 54, hobbie: "Instagram", icon: InstagramIcon },
    { id: 55, hobbie: "Github", icon: GitHubIcon },
    { id: 56, hobbie: "LinkedIn", icon: LinkedInIcon },
    { id: 57, hobbie: "Reddit", icon: RedditIcon },
    { id: 58, hobbie: "Twitter", icon: TwitterIcon },
    { id: 59, hobbie: "Facebook", icon: FacebookIcon },
    //
    { id: 60, hobbie: "Coding", icon: CodeIcon },
    { id: 61, hobbie: "Learning Code", icon: CodeIcon },
    //
  ].sort(() => Math.random() - 0.5),
};

const profileAddHobbiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PROFILE_ADD_HOBBIES_VISIBILITY:
      return {
        ...state,
        profileAddHobbiesVisibility: action.state,
      };

    case TOGGLE_PROFILE_ADD_HOBBIES_OPACITY:
      return {
        ...state,
        profileAddHobbiesOpacity: action.state,
      };

    case TOGGLE_PROFILE_ADD_HOBBIES_STATE_COMPONENT:
      return {
        ...state,
        profileAddHobbiesStateComponent: action.state,
      };

    case TOGGLE_PROFILE_ADD_HOBBIES_FETCH:
      return {
        ...state,
        profileAddHobbiesFetch: action.boolean,
      };

    default:
      return state;
  }
};

export const toggleProfileAddHobbiesStateComponent = (state) => {
  return {
    type: TOGGLE_PROFILE_ADD_HOBBIES_STATE_COMPONENT,
    state,
  };
};

export const toggleProfileAddHobbiesVisibility = (state) => {
  return {
    type: TOGGLE_PROFILE_ADD_HOBBIES_VISIBILITY,
    state,
  };
};

export const toggleProfileAddHobbiesOpacity = (state) => {
  return {
    type: TOGGLE_PROFILE_ADD_HOBBIES_OPACITY,
    state,
  };
};

export const toggleProfileAddHobbiesFetch = (boolean) => {
  return {
    type: TOGGLE_PROFILE_ADD_HOBBIES_FETCH,
    boolean,
  };
};

export const toggleProfileAddHobbies = (visibility, opacity) => {
  return (dispatch) => {
    if (visibility === "hidden" && opacity === 0) {
      dispatch(toggleProfileAddHobbiesVisibility("visible"));
      dispatch(toggleProfileAddHobbiesOpacity(1));
    } else {
      dispatch(toggleProfileAddHobbiesVisibility("hidden"));
      dispatch(toggleProfileAddHobbiesOpacity(0));
    }
  };
};

export const addHobbiesWithFirebase = (hobbies, email) => {
  return async (dispatch, getState) => {
    await dispatch(addFromTempHobbies(hobbies));
    const updated_hobbies = getState().aboutComponentReducer.fullUserInfoAbout
      .Hobbies;
    dispatch(toggleProfileAddHobbiesFetch(true));

    db.collection("users_database")
      .get()
      .then((usersDatabase) => {
        usersDatabase.forEach((userDatabase) => {
          if (userDatabase.data().Email === email) {
            db.collection("users_database")
              .doc(userDatabase.id)
              .update({
                "FullInfo.Hobbies": updated_hobbies,
              })
              .then(() => {
                console.log("Upd");
              })
              .catch(() => {
                console.log("Error");
              })
              .finally(() => dispatch(toggleProfileAddHobbiesFetch(false)));
          }
        });
      });
  };
};

export default profileAddHobbiesReducer;
