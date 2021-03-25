import { musicApi } from "api/music-api";

const SWITCH_STATE_OF_PLAYLISTS = "SWITCH_STATE_OF_PLAYLISTS";
const ADD_TRACK_TO_PLAYLIST = "ADD_TRACK_TO_PLAYLIST";
const SET_MY_OWN_PLAYLISTS_DATA = "SET_MY_OWN_PLAYLISTS_DATA";
const TOGGLE_MUSICAL_PLAYLISTS_FETCHING = "TOGGLE_MUSICAL_PLAYLISTS_FETCHING";
const TOGGLE_DELETE_TRACK_FETCHING = "TOGGLE_DELETE_TRACK_FETCHING";

let initialState = {
  ownPlayLists: [],
  ownPlayListsSwitcher: false,
  ownPlayListsTempTrack: null,
  ownPlayListsFetching: false,
  ownPlayListsFetchingDeleteTrackFetching: false,
};

const musicPlayListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACK_TO_PLAYLIST:
      return {
        ...state,
        ownPlayListsTempTrack: action.track,
      };

    case SWITCH_STATE_OF_PLAYLISTS:
      return {
        ...state,
        ownPlayListsSwitcher: action.boolean,
      };

    case SET_MY_OWN_PLAYLISTS_DATA:
      return {
        ...state,
        ownPlayLists: action.data,
      };

    case TOGGLE_MUSICAL_PLAYLISTS_FETCHING:
      return {
        ...state,
        ownPlayListsFetching: action.value,
      };

    case TOGGLE_DELETE_TRACK_FETCHING:
      return {
        ...state,
        ownPlayListsFetchingDeleteTrackFetching: action.value,
      };
    default:
      return state;
  }
};

export const toggleFetch = (value) => {
  return {
    type: TOGGLE_MUSICAL_PLAYLISTS_FETCHING,
    value,
  };
};

export const toggleDeleteTrackFetch = (value) => {
  return {
    type: TOGGLE_DELETE_TRACK_FETCHING,
    value,
  };
};

export const addTrackToPlayList = (track) => {
  return {
    type: ADD_TRACK_TO_PLAYLIST,
    track
  };
};

export const switchStateOfPlayLists = (boolean) => {
  return {
    type: SWITCH_STATE_OF_PLAYLISTS,
    boolean,
  };
};

export const setMyOwnPlayListsData = (data) => {
  return {
    type: SET_MY_OWN_PLAYLISTS_DATA,
    data,
  };
};

export const createNewPlayList = (data) => {
  return (dispatch) => {
    musicApi
      .createNewPlayList(data)
      .then(() => {
        dispatch(getMyOwnPlayLists());
      })
      .catch((e) => console.log(e));
  };
};

export const deleteOwnPlayList = (id) => {
  return (dispatch) => {
    dispatch(toggleFetch(true));
    musicApi
      .deleteOwnPlayList(id)
      .then(() => {
        dispatch(getMyOwnPlayLists());
      })
      .catch((e) => console.log(e));
  };
};

export const deleteTrackFromPlayList = (id, pid) => {
  return (dispatch) => {
    dispatch(toggleDeleteTrackFetch(true));
    musicApi
      .deleteTrack(id, pid)
      .then(() => {
        dispatch(getMyOwnPlayLists());
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => dispatch(toggleDeleteTrackFetch(false)))
  };
};

export const updatePlaylist = (id, data) => {
  return (dispatch) => {
    musicApi
      .updateOwnPlayList(id, data)
      .then(() => {
        dispatch(getMyOwnPlayLists());
      })
      .catch((e) => console.log(e));
  };
};

export const getMyOwnPlayLists = () => {
  return (dispatch) => {
    dispatch(toggleFetch(true));
    musicApi
      .getMyOwnPlaylists()
      .then((response) => {
        dispatch(setMyOwnPlayListsData(response));
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => dispatch(toggleFetch(false)))
  };
};

export default musicPlayListReducer;
