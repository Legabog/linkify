import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import userReducer from "./user-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import musicAlbumsReducer from "./musical-albums-reducer";
import musicPlayListReducer from "./musical-playlists-reducer";
import musicPlayerReducer from "./music-player-reducer";
import profileUpdateAvatarReducer from "./profile-update-avatar-reducer";
import profileSelectAvatarBackgroundReducer from "./profile-select-avatar-background-reducer";
import welcomeComponentReducer from "./welcome-component-reducer";
import profileBodyReducer from "./profile-body-reducer";
import aboutComponentReducer from "./about-component-reducer";
import profileEditDetailsReducer from "./profile-edit-details-about-you-reducer";
import profileAddHobbiesReducer from "./profile-add-hobbies-reducer";
import onlineStatusToastReducer from "./online-status-toast-reducer";
import weatherReducer from "./weather-reducer";
import terminalReducer from "./terminal-reducer";

let rootReducer = combineReducers({
  userReducer,
  usersReducer,
  authReducer,
  musicAlbumsReducer,
  musicPlayListReducer,
  musicPlayerReducer,
  profileUpdateAvatarReducer,
  profileSelectAvatarBackgroundReducer,
  profileEditDetailsReducer,
  welcomeComponentReducer,
  profileBodyReducer,
  aboutComponentReducer,
  profileAddHobbiesReducer,
  onlineStatusToastReducer,
  weatherReducer,
  terminalReducer,
});

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

window.store = store;

export default store;
