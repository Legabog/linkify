import { musicApi } from "api/music-api";

const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
const SWITCH_STATE_OF_PLAYLISTS = "SWITCH_STATE_OF_PLAYLISTS";
const ADD_TRACK_TO_PLAYLIST = "ADD_TRACK_TO_PLAYLIST";
const SET_MY_OWN_PLAYLISTS_DATA = "SET_MY_OWN_PLAYLISTS_DATA";
const TOGGLE_MUSICAL_PLAYLISTS_FETCHING = "TOGGLE_MUSICAL_PLAYLISTS_FETCHING";
const TOGGLE_DELETE_TRACK_FETCHING = "TOGGLE_DELETE_TRACK_FETCHING";

let initialState = {
  ownPlayLists: [],
  playListSwitcher: false,
  tempTrack: null,
  fetch: false,
  deleteTrackFetch: false,
  tempTrackPayLoad: null,
};

const musicPlayListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        ownPlayLists: [...state.ownPlayLists, action.playlistData],
      };

    case ADD_TRACK_TO_PLAYLIST:
      return {
        ...state,
        tempTrack: action.track,
      };

    case SWITCH_STATE_OF_PLAYLISTS:
      return {
        ...state,
        playListSwitcher: action.boolean,
      };

    case SET_MY_OWN_PLAYLISTS_DATA:
      return {
        ...state,
        ownPlayLists: action.data,
      };

    case TOGGLE_MUSICAL_PLAYLISTS_FETCHING:
      return {
        ...state,
        fetch: action.value,
      };

    case TOGGLE_DELETE_TRACK_FETCHING:
      return {
        ...state,
        deleteTrackFetch: action.value,
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

export const addToPlayList = (img, name, description) => {
  return {
    type: ADD_TO_PLAYLIST,
    playlistData: { img, name, description },
  };
};

export const addTrackToPlayList = (
  title,
  author,
  trackUrl,
  albumTitle,
  albumCover
) => {
  return {
    type: ADD_TRACK_TO_PLAYLIST,
    track: { title, author, trackUrl, albumTitle, albumCover },
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
      .then((response) => {
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
