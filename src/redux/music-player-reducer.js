import { audioRef } from "containers/MusicPlayerPanel/AudioRef";

const SET_MUSIC_FOR_MUSIC_PLAYER = "SET_MUSIC_FOR_MUSIC_PLAYER";
const TOGGLE_MUSIC_PLAYER = "TOGGLE_MUSIC_PLAYER";
const SET_INDEX_OF_TRACK_MUSIC_PLAYER = "SET_INDEX_OF_TRACK_MUSIC_PLAYER";
const SET_ACTIVE_TRACK_MUSIC_PLAYER = "SET_ACTIVE_TRACK_MUSIC_PLAYER";
const SET_DISABLER_BUTTON_NEXT_MUSIC_PLAYER =
  "SET_DISABLER_BUTTON_NEXT_MUSIC_PLAYER";
const SET_DISABLER_BUTTON_PLAY_MUSIC_PLAYER =
  "SET_DISABLER_BUTTON_PLAY_MUSIC_PLAYER";
const SHUFFLE_MUSIC_PLAYER = "SHUFFLE_MUSIC_PLAYER";
const SET_ACTIVE_TRACK_AND_PLAYER_PLAYLIST_NULL =
  "SET_ACTIVE_TRACK_AND_PLAYER_PLAYLIST_NULL";

let initialState = {
  musicPlayerPlayList: null,
  musicPlayerIsPlaying: false,
  musicPlayerIndexOfPlayingTrack: 0,
  musicPlayerActiveTrack: null,
  musicPlayerDisablerButtonNext: false,
  musicPlayerDisablerButtonPlay: false,
};

const musicPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC_FOR_MUSIC_PLAYER:
      return {
        ...state,
        musicPlayerPlayList: action.payload,
      };

    case TOGGLE_MUSIC_PLAYER:
      return {
        ...state,
        musicPlayerIsPlaying: action.boolean,
      };

    case SET_INDEX_OF_TRACK_MUSIC_PLAYER:
      return {
        ...state,
        musicPlayerIndexOfPlayingTrack: action.index,
      };

    case SET_ACTIVE_TRACK_MUSIC_PLAYER:
      return {
        ...state,
        musicPlayerActiveTrack: action.track,
      };

    case SET_DISABLER_BUTTON_NEXT_MUSIC_PLAYER:
      return {
        ...state,
        musicPlayerDisablerButtonNext: action.boolean,
      };

    case SET_DISABLER_BUTTON_PLAY_MUSIC_PLAYER:
      return {
        ...state,
        musicPlayerDisablerButtonPlay: action.boolean,
      };

    case SHUFFLE_MUSIC_PLAYER:
      return {
        ...state,
        musicPlayerPlayList: {
          ...state.musicPlayerPlayList,
          tracks: state.musicPlayerPlayList.tracks.sort(
            () => Math.random() - 0.5
          ),
        },
      };

    case SET_ACTIVE_TRACK_AND_PLAYER_PLAYLIST_NULL:
      return {
        ...state,
        musicPlayerPlayList: null,
        musicPlayerIndexOfPlayingTrack: 0,
        musicPlayerActiveTrack: null,
      };
    default:
      return state;
  }
};

export const setMusicForPlayer = (payload) => {
  return {
    type: SET_MUSIC_FOR_MUSIC_PLAYER,
    payload,
  };
};

export const setIndexOfTrack = (index) => {
  return {
    type: SET_INDEX_OF_TRACK_MUSIC_PLAYER,
    index,
  };
};

export const setActiveTrack = (track) => {
  return {
    type: SET_ACTIVE_TRACK_MUSIC_PLAYER,
    track,
  };
};

export const toggleIsPlaying = (boolean) => {
  return {
    type: TOGGLE_MUSIC_PLAYER,
    boolean,
  };
};

export const setDisablerButtonNext = (boolean) => {
  return {
    type: SET_DISABLER_BUTTON_NEXT_MUSIC_PLAYER,
    boolean,
  };
};

export const setDisablerButtonPlay = (boolean) => {
  return {
    type: SET_DISABLER_BUTTON_PLAY_MUSIC_PLAYER,
    boolean,
  };
};

export const shuffle = () => {
  return {
    type: SHUFFLE_MUSIC_PLAYER,
  };
};

export const setActiveTrackAndPlayerPlayListNull = () => {
  return {
    type: SET_ACTIVE_TRACK_AND_PLAYER_PLAYLIST_NULL,
  };
};

export const playPlayer = (activeTrack, data, index) => {
  return async (dispatch) => {
    await dispatch(toggleIsPlaying(true));
    await dispatch(setIndexOfTrack(index));
    await dispatch(setMusicForPlayer(data));
    await dispatch(setActiveTrack(activeTrack));
    await dispatch(setDisablerButtonPlay(true));
    await dispatch(setDisablerButtonNext(true));

    audioRef.current.src = activeTrack.trackUrl;
    audioRef.current.currentTime = 0;
    await audioRef.current.play();

    dispatch(setDisablerButtonPlay(false));
    dispatch(setDisablerButtonNext(false));
  };
};

export const nextTrack = (activeTrack, index) => {
  return async (dispatch) => {
    await dispatch(toggleIsPlaying(true));
    await dispatch(setIndexOfTrack(index));
    await dispatch(setActiveTrack(activeTrack));
    await dispatch(setDisablerButtonNext(true));

    audioRef.current.src = activeTrack.trackUrl;
    audioRef.current.currentTime = 0;
    await audioRef.current.play();

    dispatch(setDisablerButtonNext(false));
  };
};

export const previousTrack = (activeTrack, index) => {
  return async (dispatch) => {
    await dispatch(toggleIsPlaying(true));
    await dispatch(setIndexOfTrack(index));
    await dispatch(setActiveTrack(activeTrack));
    await dispatch(setDisablerButtonNext(true));

    audioRef.current.src = activeTrack.trackUrl;
    audioRef.current.currentTime = 0;
    await audioRef.current.play();

    dispatch(setDisablerButtonNext(false));
  };
};

export const pausePlayer = () => {
  return (dispatch) => {
    audioRef.current.pause();
    dispatch(toggleIsPlaying(false));
  };
};

export const shuffleMusic = () => {
  return (dispatch) => {
    dispatch(shuffle());
  };
};

export default musicPlayerReducer;
