import "./PlayLists.css";

import { HeaderPlayLists } from "../HeaderPlayLists";
import { BodyPlayLists } from "../BodyPlayLists";

import { connect } from "react-redux";
import { useEffect } from "react";

import {
  addTrackToPlayList,
  switchStateOfPlayLists,
  getMyOwnPlayLists,
  updatePlaylist,
} from "../../../../redux/musical-playlists-reducer";

const PlayLists_ = (props) => {

  useEffect(() => {
    getMyOwnPlayLists();
  }, [props.ownPlayLists]);

  return (
    <div className={"playlists"}>
      <HeaderPlayLists {...props} />
      <BodyPlayLists {...props} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ownPlayLists: state.musicPlayListReducer.ownPlayLists,
    ownPlayListsTempTrack: state.musicPlayListReducer.ownPlayListsTempTrack,
    ownPlayListsSwitcher: state.musicPlayListReducer.ownPlayListsSwitcher,
    ownPlayListsFetching: state.musicPlayListReducer.ownPlayListsFetching,
  };
};

export const PlayLists = connect(mapStateToProps, {
  addTrackToPlayList,
  switchStateOfPlayLists,
  getMyOwnPlayLists,
  updatePlaylist,
})(PlayLists_);
