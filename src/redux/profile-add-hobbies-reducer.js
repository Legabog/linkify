import { addFromTempHobbies } from 'redux/about-component-reducer';
import db from 'utils/firebase/firebase';

// Icons for Search list
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import BookIcon from '@mui/icons-material/Book';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SportsIcon from '@mui/icons-material/Sports';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import RowingIcon from '@mui/icons-material/Rowing';
import MovieIcon from '@mui/icons-material/Movie';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ChatIcon from '@mui/icons-material/Chat';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import CodeIcon from '@mui/icons-material/Code';

const TOGGLE_PROFILE_ADD_HOBBIES_VISIBILITY = 'TOGGLE_PROFILE_ADD_HOBBIES_VISIBILITY';
const TOGGLE_PROFILE_ADD_HOBBIES_OPACITY = 'TOGGLE_PROFILE_ADD_HOBBIES_OPACITY';
const TOGGLE_PROFILE_ADD_HOBBIES_STATE_COMPONENT = 'TOGGLE_PROFILE_ADD_HOBBIES_STATE_COMPONENT';
const TOGGLE_PROFILE_ADD_HOBBIES_FETCH = 'TOGGLE_PROFILE_ADD_HOBBIES_FETCH';

let initialState = {
  profileAddHobbiesStateComponent: 0,
  profileAddHobbiesFetch: false,
  //
  profileAddHobbiesVisibility: 'hidden',
  profileAddHobbiesOpacity: 0,
  // List of search hobbies
  profileAddHobbiesRecommendedHobbies: [
    { id: 1, hobbie: 'Business', icon: AccountBalanceIcon },
    { id: 2, hobbie: 'Investments', icon: AccountBalanceIcon },
    { id: 3, hobbie: 'Shares', icon: AccountBalanceIcon },
    //
    { id: 4, hobbie: 'Flights', icon: AirplanemodeActiveIcon },
    { id: 5, hobbie: 'Travels', icon: AirplanemodeActiveIcon },
    { id: 6, hobbie: 'Airplanes', icon: AirplanemodeActiveIcon },
    //
    { id: 7, hobbie: 'Money', icon: AttachMoneyIcon },
    { id: 8, hobbie: 'Money-making', icon: AttachMoneyIcon },
    { id: 9, hobbie: 'Money-making in internet', icon: AttachMoneyIcon },
    //
    { id: 10, hobbie: 'Listening to Music', icon: HeadsetMicIcon },
    { id: 11, hobbie: 'Playing Music', icon: HeadsetMicIcon },
    { id: 12, hobbie: 'Creating Music', icon: HeadsetMicIcon },
    //
    { id: 13, hobbie: 'Reading', icon: BookIcon },
    { id: 14, hobbie: 'Studing', icon: BookIcon },
    { id: 15, hobbie: 'Learning', icon: BookIcon },
    { id: 16, hobbie: 'Book Collection', icon: BookIcon },
    { id: 17, hobbie: 'Writing', icon: BookIcon },
    { id: 18, hobbie: 'Creative Writing', icon: BookIcon },
    //
    { id: 19, hobbie: 'Video Games', icon: SportsEsportsIcon },
    { id: 20, hobbie: 'Games', icon: SportsEsportsIcon },
    { id: 21, hobbie: 'Game Streams', icon: SportsEsportsIcon },
    { id: 22, hobbie: 'E-sport', icon: SportsEsportsIcon },
    //
    { id: 23, hobbie: 'Sports', icon: SportsIcon },
    { id: 24, hobbie: 'Football', icon: SportsSoccerIcon },
    { id: 25, hobbie: 'American Football', icon: SportsFootballIcon },
    { id: 26, hobbie: 'Basketball', icon: SportsBasketballIcon },
    { id: 27, hobbie: 'Baseball', icon: SportsBaseballIcon },
    { id: 28, hobbie: 'Cricet', icon: SportsCricketIcon },
    { id: 29, hobbie: 'Golf', icon: SportsGolfIcon },
    { id: 30, hobbie: 'Handball', icon: SportsHandballIcon },
    { id: 31, hobbie: 'Hockey', icon: SportsHockeyIcon },
    { id: 32, hobbie: 'MMA', icon: SportsMmaIcon },
    { id: 33, hobbie: 'Tennis', icon: SportsTennisIcon },
    { id: 34, hobbie: 'Volleyball', icon: SportsVolleyballIcon },
    { id: 35, hobbie: 'Rowling', icon: RowingIcon },
    { id: 36, hobbie: 'Gym', icon: FitnessCenterIcon },
    //
    { id: 37, hobbie: 'Art', icon: CropOriginalIcon },
    { id: 38, hobbie: 'Portrait Art', icon: ColorLensIcon },
    { id: 39, hobbie: 'Glass Art', icon: ColorLensIcon },
    { id: 40, hobbie: 'Screenprinting', icon: ColorLensIcon },
    { id: 41, hobbie: 'Landscape Painting', icon: ColorLensIcon },
    //
    { id: 42, hobbie: 'Photography', icon: PhotoCameraIcon },
    { id: 43, hobbie: 'Macro Photography', icon: PhotoCameraIcon },
    { id: 44, hobbie: 'Portrait Photography', icon: PhotoCameraIcon },
    { id: 45, hobbie: 'Nature Photography', icon: PhotoCameraIcon },
    { id: 46, hobbie: 'Fashion Photography', icon: PhotoCameraIcon },
    { id: 47, hobbie: 'Landscape Photography', icon: PhotoCameraIcon },
    //
    { id: 48, hobbie: 'Watching Movies', icon: MovieIcon },
    { id: 49, hobbie: 'Vlogging', icon: MovieIcon },
    { id: 50, hobbie: 'Videography', icon: MovieIcon },
    //
    { id: 51, hobbie: 'Chatting', icon: ChatIcon },
    { id: 52, hobbie: 'Chatting with friends', icon: ChatIcon },
    { id: 53, hobbie: 'Trolling in chat', icon: ChatIcon },
    //
    { id: 54, hobbie: 'Instagram', icon: InstagramIcon },
    { id: 55, hobbie: 'Github', icon: GitHubIcon },
    { id: 56, hobbie: 'LinkedIn', icon: LinkedInIcon },
    { id: 57, hobbie: 'Reddit', icon: RedditIcon },
    { id: 58, hobbie: 'Twitter', icon: TwitterIcon },
    { id: 59, hobbie: 'Facebook', icon: FacebookIcon },
    //
    { id: 60, hobbie: 'Coding', icon: CodeIcon },
    { id: 61, hobbie: 'Learning Code', icon: CodeIcon },
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
    if (visibility === 'hidden' && opacity === 0) {
      dispatch(toggleProfileAddHobbiesVisibility('visible'));
      dispatch(toggleProfileAddHobbiesOpacity(1));
    } else {
      dispatch(toggleProfileAddHobbiesVisibility('hidden'));
      dispatch(toggleProfileAddHobbiesOpacity(0));
    }
  };
};

export const addHobbiesWithFirebase = (hobbies, email) => {
  return async (dispatch, getState) => {
    await dispatch(addFromTempHobbies(hobbies));
    const updated_hobbies = getState().aboutComponentReducer.fullUserInfoAbout.Hobbies;
    dispatch(toggleProfileAddHobbiesFetch(true));

    db.collection('users_database')
      .get()
      .then((usersDatabase) => {
        usersDatabase.forEach((userDatabase) => {
          if (userDatabase.data().Email === email) {
            db.collection('users_database')
              .doc(userDatabase.id)
              .update({
                'FullInfo.Hobbies': updated_hobbies,
              })
              .then(() => {
                console.log('Upd');
              })
              .catch(() => {
                console.log('Error');
              })
              .finally(() => dispatch(toggleProfileAddHobbiesFetch(false)));
          }
        });
      });
  };
};

export default profileAddHobbiesReducer;
