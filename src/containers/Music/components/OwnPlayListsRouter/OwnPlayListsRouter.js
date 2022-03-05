import { connect } from "react-redux";
import { compose } from "redux";
import "./OwnPlayListsRouter.css";

import {
  deleteOwnPlayList,
  deleteTrackFromPlayList,
} from "redux/musical-playlists-reducer";
import {
  setMusicForPlayer,
  playPlayer,
  setIndexOfTrack,
} from "redux/music-player-reducer";

import { HeaderOwnPlayListsRouter } from "../HeaderOwnPlayListsRouter";
import { BodyOwnPlayListsRouter } from "../BodyOwnPlayListsRouter";

const OwnPlayListsRouter_ = (props) => {
  return (
    <div className={"ownPlayListsRouter"}>
      <HeaderOwnPlayListsRouter />
      <BodyOwnPlayListsRouter
        {...props}
        id={props.id}
        img={props.img}
        title={props.title}
        description={props.description}
        tracks={props.tracks}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  ownPlayListsFetchingDeleteTrackFetching:
    state.musicPlayListReducer.ownPlayListsFetchingDeleteTrackFetching,
  musicPlayerPlayList: state.musicPlayerReducer.musicPlayerPlayList,
  musicPlayerIndexOfPlayingTrack:
    state.musicPlayerReducer.musicPlayerIndexOfPlayingTrack,
  musicPlayerIsPlaying: state.musicPlayerReducer.musicPlayerIsPlaying,
  musicPlayerActiveTrack: state.musicPlayerReducer.musicPlayerActiveTrack,
  musicPlayerDisablerButtonPlay: state.musicPlayerReducer.musicPlayerDisablerButtonPlay,
});

export const OwnPlayListsRouter = compose(
  connect(mapStateToProps, {
    deleteOwnPlayList,
    deleteTrackFromPlayList,
    playPlayer,
    setMusicForPlayer,
    setIndexOfTrack,
  })
)(OwnPlayListsRouter_);
