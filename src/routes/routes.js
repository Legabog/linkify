import { pathToRegexp } from "path-to-regexp";

export const getRoutesPath = (path, countBlocks) => {
  const pathArray = path.split("/");
  return `/${pathArray.slice(1, countBlocks + 1).join("/")}`;
};

export const Routes_ = {
  MAIN: "/",
  // Authorized user
  // Music
  MUSIC: `/music`,
  MUSIC_LIST: `/music-list`,
  MUSIC_LIST_ARTISTS: `/music-list/artists`,
  MUSIC_LIST_ALBUMS: `/music-list/albums`,
  MUSIC_LIST_PLAYLISTS: `/music-list/playlists`,
  MUSIC_LIST_CREATE_PLAYLIST: `/music-list/playlists/create`,
  MUSIC_PLAYER: `/music-player`,
  // Profile
  PROFILE: `/profile`,
  PROFILE_ABOUT: [
    `/profile/about`,
    `/profile/about_overview`,
    `/profile/about_work_and_education`,
    `/profile/about_places`,
    `/profile/about_contact_and_basic_info`,
    `/profile/about_family_and_relationships`,
    `/profile/about_details`,
    `/profile/about_life_events`,
  ],
  PROFILE_FRIENDS: `/profile/friends`,
  PROFILE_PHOTOS: `/profile/photos`,
  PROFILE_ARCHIVE: `/profile/archive`,
  PROFILE_VIDEOS: `/profile/videos`,
  // Other components
  WELCOME: `/welcome`,
  WEATHER: `/weather`,
  TERMINAL: `/terminal`,
  USERS: `/users`,
  MESSAGES: `/messages`,
  GROUPS: `/groups`,
  FRIENDS: `/friends`,
  // Unauthorized user
  SIGNUP: `/signup`,
  CONFIRM_EMAIL: `/confirm_email`,
  CONFIRMED_EMAIL: `/confirmed_email`,
};

export const authorizedUserRoutes = [
  Routes_.MAIN,
  Routes_.WELCOME,
  Routes_.MESSAGES,
  Routes_.GROUPS,
  Routes_.FRIENDS,

  Routes_.MUSIC,
  Routes_.MUSIC_LIST,
  Routes_.MUSIC_LIST_ARTISTS,
  Routes_.MUSIC_LIST_ALBUMS,
  Routes_.MUSIC_LIST_PLAYLISTS,
  Routes_.MUSIC_LIST__CREATE_PLAYLIST,
  Routes_.MUSIC_PLAYER,

  Routes_.PROFILE,
  Routes_.PROFILE_ABOUT,
  Routes_.PROFILE_FRIENDS,
  Routes_.PROFILE_PHOTOS,
  Routes_.PROFILE_ARCHIVE,
  Routes_.PROFILE_VIDEOS,
];

export const unauthorizedUserRoutes = [
  Routes_.MAIN,
  Routes_.SIGNIN,
  Routes_.SIGNUP,
  Routes_.CONFIRM_EMAIL,
  Routes_.CONFIRMED_EMAIL,
];

export class Route {
  constructor() {
    this._route = ``;
  }

  _routesByPath = new Map(
    Object.values(Routes_).map((routePath) => [routePath, new Route(routePath)])
  );

  _regexp = pathToRegexp(this._route);
  _compiled = pathToRegexp.compile(this._route);

  get(routePath) {
    return this._routesByPath.get(routePath);
  }

  exists(pathname) {
    for (const route of this._routesByPath.values()) {
      if (route.test(pathname)) {
        return true;
      }
    }

    return false;
  }

  test(pathname) {
    return this._regexp.test(pathname);
  }

  exec(pathname) {
    return this._regexp.exec(pathname);
  }

  toPath(params) {
    return this._compiled(params);
  }

  toString() {
    return this._route;
  }
}
