import { musicApi } from "api";

const SET_MUSIC_ALBUMS_DATA = "SET_MUSIC_ALBUMS_DATA";
const TOGGLE_MUSICAL_ALBUMS_FETCHING = "TOGGLE_MUSICAL_ALBUMS_FETCHING";
const TOGGLE_MUSICAL_ALBUMS_SWITCHER = "TOGGLE_MUSICAL_ALBUMS_SWITCHER";
const PUSH_ALBUM_TO_RECENTLY_PLAYED = "PUSH_ALBUM_TO_RECENTLY_PLAYED";
const PUSH_TITLE_TO_DISABLED_ARRAY = "PUSH_TITLE_TO_DISABLED_ARRAY";
const PUSH_AUTHOR_TO_DISABLED_ARRAY = "PUSH_AUTHOR_TO_DISABLED_ARRAY";

let initialState = {
  musicAlbums: [],
  musicAlbumsFetching: false,
  musicAlbumsSwitcher: 1,
  musicAlbumsRecentlyPlayed: [],
  musicAlbumsDisabledTitles: [],
  musicAlbumsDisabledAuthors: [],
};

const musicAlbumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC_ALBUMS_DATA:
      return {
        ...state,
        musicAlbums: action.payload,
      };
    case TOGGLE_MUSICAL_ALBUMS_FETCHING:
      return {
        ...state,
        musicAlbumsFetching: action.Fetching,
      };
    case PUSH_ALBUM_TO_RECENTLY_PLAYED:
      return {
        ...state,
        musicAlbumsRecentlyPlayed: [...state.musicAlbumsRecentlyPlayed, action.data],
      };
    case PUSH_TITLE_TO_DISABLED_ARRAY:
      return {
        ...state,
        musicAlbumsDisabledTitles: [...state.musicAlbumsDisabledTitles, action.title],
      };
    case PUSH_AUTHOR_TO_DISABLED_ARRAY:
      return {
        ...state,
        musicAlbumsDisabledAuthors: [...state.musicAlbumsDisabledAuthors, action.author],
      };
    case TOGGLE_MUSICAL_ALBUMS_SWITCHER:
      return {
        ...state,
        musicAlbumsSwitcher: action.switcher,
      };

    default:
      return state;
  }
};

export const setMusicAlbumsData = (payload) => {
  return {
    type: SET_MUSIC_ALBUMS_DATA,
    payload,
  };
};

export const pushAlbumToRecentlyPlayed = (data) => {
  return {
    type: PUSH_ALBUM_TO_RECENTLY_PLAYED,
    data
  };
};

export const pushTitleToDisabledArray = (title) => {
  return {
    type: PUSH_TITLE_TO_DISABLED_ARRAY,
    title,
  };
};

export const pushAuthorToDisabledArray = (author) => {
  return {
    type: PUSH_AUTHOR_TO_DISABLED_ARRAY,
    author,
  };
};

export const toggleFetching = (Fetching) => {
  return {
    type: TOGGLE_MUSICAL_ALBUMS_FETCHING,
    Fetching,
  };
};

export const toggleSwitcher = (switcher) => {
  return {
    type: TOGGLE_MUSICAL_ALBUMS_SWITCHER,
    switcher,
  };
};

export const pushToRecentlyPlayed = (data) => {
  return (dispatch) => {
    dispatch(pushAlbumToRecentlyPlayed(data));
    dispatch(pushTitleToDisabledArray(data.title));
    dispatch(pushAuthorToDisabledArray(data.author));
  };
};

export const getMusicAlbumsData = () => {
  return (dispatch) => {
    dispatch(toggleFetching(true));
    musicApi
      .getMusicAlbums()
      .then((response) => {
        dispatch(setMusicAlbumsData(response));
      })
      .catch((e) => console.log(`Can't get music albums data: ${e}`))
      .finally(() => dispatch(toggleFetching(false)));
  };
};

export default musicAlbumsReducer;
