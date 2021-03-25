import "./Albums.css"

import { HeaderAlbums } from "../HeaderAlbums";
import { BodyAlbums } from "../BodyAlbums";

import { connect } from "react-redux";
import { getMusicAlbumsData } from "redux/musical-albums-reducer";
import { toggleSwitcher } from "redux/musical-albums-reducer";

const AlbumsList_ = (props) => {
  return (
    <>
      <div className={"albums"}>
        <HeaderAlbums />
        <BodyAlbums
          musicAlbums={props.musicAlbums}
          musicAlbumsFetching={props.musicAlbumsFetching}
          toggleSwitcher={props.toggleSwitcher}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    musicAlbumsFetching: state.musicAlbumsReducer.musicAlbumsFetching,
  };
};

export const AlbumsList = connect(mapStateToProps, {
  getMusicAlbumsData,
  toggleSwitcher,
})(AlbumsList_);
