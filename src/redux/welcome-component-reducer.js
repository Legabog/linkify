const WELCOME_TOGGLE_PRIVACY_GUIDE_STATE = "WELCOME_TOGGLE_PRIVACY_GUIDE_STATE";
const WELCOME_TOGGLE_PRIVACY_GUIDE_VISIBILITY =
  "WELCOME_TOGGLE_PRIVACY_GUIDE_VISIBILITY";
const WELCOME_TOGGLE_PRIVACY_GUIDE_OPACITY =
  "WELCOME_TOGGLE_PRIVACY_GUIDE_OPACITY";

let initialState = {
  welcomePrivacyGuideState: 0,
  welcomePrivacyGuideVisibility: "hidden",
  welcomePrivacyGuideOpacity: 0,
};

const welcomeComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case WELCOME_TOGGLE_PRIVACY_GUIDE_STATE:
      return {
        ...state,
        welcomePrivacyGuideState: action.state,
      };
    case WELCOME_TOGGLE_PRIVACY_GUIDE_VISIBILITY:
      return {
        ...state,
        welcomePrivacyGuideVisibility: action.state,
      };

    case WELCOME_TOGGLE_PRIVACY_GUIDE_OPACITY:
      return {
        ...state,
        welcomePrivacyGuideOpacity: action.state,
      };
    default:
      return state;
  }
};

export const togglePrivacyGuideState = (state) => {
  return {
    type: WELCOME_TOGGLE_PRIVACY_GUIDE_STATE,
    state,
  };
};

export const togglePrivacyGuideVisibility = (state) => {
  return {
    type: WELCOME_TOGGLE_PRIVACY_GUIDE_VISIBILITY,
    state,
  };
};

export const togglePrivacyGuideOpacity = (state) => {
  return {
    type: WELCOME_TOGGLE_PRIVACY_GUIDE_OPACITY,
    state,
  };
};

export const togglePrivacyGuide = (boolean) => {
  return (dispatch) => {
    if (boolean) {
      dispatch(togglePrivacyGuideVisibility("visible"));
      dispatch(togglePrivacyGuideOpacity(1));
    } else {
      dispatch(togglePrivacyGuideVisibility("hidden"));
      dispatch(togglePrivacyGuideOpacity(0));
      setTimeout(() => dispatch(togglePrivacyGuideState(0)), 600);
    }
  };
};

export default welcomeComponentReducer;
