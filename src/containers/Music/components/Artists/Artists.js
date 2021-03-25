import { connect } from "react-redux";
import "./Artists.css"

import { HeaderArtists } from "../HeaderArtists";
import { BodyArtists } from "../BodyArtists";

const ArtistsList_ = (props) => {
  return (
    <div className={"artists"}>
      <HeaderArtists />
      <BodyArtists musicAlbumsFetching={props.musicAlbumsFetching} musicAlbums={props.musicAlbums} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    musicAlbumsFetching: state.musicAlbumsReducer.musicAlbumsFetching,
  };
};

export const ArtistsList = connect(mapStateToProps, {})(ArtistsList_);
