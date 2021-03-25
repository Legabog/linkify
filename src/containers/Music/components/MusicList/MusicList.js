import "./MusicList.css";

import { HeaderMusicList } from "../HeaderMusicList";
import { BodyMusicList } from "../BodyMusicList";
import { FooterMusicList } from "../FooterMusicList";

import { connect } from "react-redux";
import {
  toggleSwitcher,
} from "../../../../redux/musical-albums-reducer";
import {switchStateOfPlayLists} from "../../../../redux/musical-playlists-reducer"


const MusicList_ = (props) => {
    return (
      <div className={"music-list"}>
        <HeaderMusicList />
        <BodyMusicList switchStateOfPlayLists={props.switchStateOfPlayLists}/>
        <FooterMusicList
          {...props}
        />
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    musicAlbumsRecentlyPlayed: state.musicAlbumsReducer.musicAlbumsRecentlyPlayed,
  };
};

export const MusicList = connect(mapStateToProps, {
  toggleSwitcher,
  switchStateOfPlayLists
})(MusicList_);
