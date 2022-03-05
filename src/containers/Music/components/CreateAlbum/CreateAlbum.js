import { connect } from "react-redux";
import { compose } from "redux";
import "./CreateAlbum.css"

import {
  createNewPlayList,
} from "redux/musical-playlists-reducer";

import { HeaderCreateAlbum } from "../HeaderCreateAlbum";

const CreateAlbum_ = (props) => {
  return (
    <div className={"create-album"}>
      <HeaderCreateAlbum
      {...props}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export const CreateAlbum = compose(
  connect(mapStateToProps, {
    createNewPlayList,
  })
)(CreateAlbum_);


