import "./MusicPlayer.css";

import { HeaderMusicPlayer } from "../HeaderMusicPlayer";
import { BodyMusicPlayer } from "../BodyMusicPlayer";

import { connect } from "react-redux";
import {
  toggleSwitcher,
  pushAlbumToRecentlyPlayed,
  pushToRecentlyPlayed,
  pushTitleToDisabledArray,
  pushAuthorToDisabledArray,
} from "redux/musical-albums-reducer";

import {
  switchStateOfPlayLists,
  addTrackToPlayList,
} from "redux/musical-playlists-reducer";
import {
  setMusicForPlayer,
  playPlayer,
  setIndexOfTrack,
} from "redux/music-player-reducer";

const MusicPlayer_ = (props) => {
  return (
    <div className={"music-player"}>
      <HeaderMusicPlayer
        nameArtist={props.nameArtist}
        musicAlbumsSwitcher={props.musicAlbumsSwitcher}
        toggleSwitcher={props.toggleSwitcher}
      />
      <BodyMusicPlayer
        {...props}
        author={props.nameArtist}
        title={props.albumTitle}
        musicAlbums={props.musicAlbums}
        img={props.img}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // muisc player reducer
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    musicAlbumsSwitcher: state.musicAlbumsReducer.musicAlbumsSwitcher,
    musicAlbumsRecentlyPlayed:
      state.musicAlbumsReducer.musicAlbumsRecentlyPlayed,
    musicAlbumsDisabledTitles:
      state.musicAlbumsReducer.musicAlbumsDisabledTitles,
    musicAlbumsDisabledAuthors:
      state.musicAlbumsReducer.musicAlbumsDisabledAuthors,
    musicPlayerIsPlaying: state.musicPlayerReducer.musicPlayerIsPlaying,
    musicPlayerPlayList: state.musicPlayerReducer.musicPlayerPlayList,
    musicPlayerIndexOfPlayingTrack:
      state.musicPlayerReducer.musicPlayerIndexOfPlayingTrack,
    musicPlayerActiveTrack: state.musicPlayerReducer.musicPlayerActiveTrack,
    disablerBmusicPlayerDisablerButtonPlayuttonPlay: state.musicPlayerReducer.musicPlayerDisablerButtonPlay,
  };
};

export const MusicPlayer = connect(mapStateToProps, {
  toggleSwitcher,
  pushAlbumToRecentlyPlayed,
  pushToRecentlyPlayed,
  pushTitleToDisabledArray,
  pushAuthorToDisabledArray,
  switchStateOfPlayLists,
  addTrackToPlayList,
  playPlayer,
  setMusicForPlayer,
  setIndexOfTrack,
})(MusicPlayer_);
