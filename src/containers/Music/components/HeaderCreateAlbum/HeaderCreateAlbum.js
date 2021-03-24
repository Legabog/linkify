import { useState } from "react";
import { useInput } from "hooks/useInput";
import { NavLink } from "react-router-dom";
import { storage } from "utils/firebase/firebase";
import "./HeaderCreateAlbum.css";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import AddPhoto from "assets/images/apple-theme/photo_add.png";
import DefaultPhoto from "assets/images/apple-theme/music.jpg";
import { useTranslation } from "react-i18next";

export const HeaderCreateAlbum = (props) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    img: AddPhoto,
    nameImg: "",
  });

  const [
    name,
    nameRef,
    nameChangeHandler,
    nameIsFocus,
    nameFocusHandler,
    nameBlurHandler,
  ] = useInput("");
  const [
    description,
    descriptionRef,
    descriptionChangeHandler,
    descriptionIsFocus,
    descriptionFocusHandler,
    descriptionBlurHandler,
  ] = useInput("");

  const imgChangeHandler = (e) => {
    sendImage(e.target.files[0]);
  };

  const handleImageUpload = (img, name) => {
    setState({ ...state, img, nameImg: name });
  };

  const base64Encode = (img) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => handleImageUpload(reader.result, img.name);
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };

  const sendImage = (img) => {
    base64Encode(img);
    setState({
      ...state,
      img: window.URL.createObjectURL(img),
    });
  };

  const buttonDoneHandler = () => {
    if (name.trim()) {
      let storageRef = storage.ref();
      let imagesRef = storageRef.child(
        `playlist-covers/${
          state.img === AddPhoto ? "music.jpg" : state.nameImg
        }`
      );

      imagesRef
        .putString(
          state.img === AddPhoto ? DefaultPhoto : state.img + "",
          "data_url"
        )
        .then(function (snapshot) {
          console.log("Uploaded a data_url string!");
        })
        .then(() => {
          props.createNewPlayList({
            title: name + "",
            description: description + "",
            playlistcoverUrl: `https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/playlist-covers%2F${
              state.img === AddPhoto ? "music.jpg" : state.nameImg
            }?alt=media`,

            tracks: [],
          });
        });
    }
  };

  const inputEnterHandler = (e) => {
    if (e.key === "Enter" && name.trim()) {
      buttonDoneHandler();
      props.history.push("/music-list/playlists");
    }
  };

  return (
    <div className={"create-album-header"}>
      <div className={"create-album-header__buttons"}>
        <NavLink to="/music-list/playlists">
          <div className={"create-album-header__button-back"}>
            <ArrowBackIosIcon />
            <h3>
              {t("authorized.music-player.create-playlist.button-back.h3")}
            </h3>
          </div>
        </NavLink>

        <NavLink
          to="/music-list/playlists"
          onClick={(e) => {
            if (!name.trim()) {
              e.preventDefault();
            }
          }}
        >
          <div
            className={"create-album-header__button-done"}
            onClick={buttonDoneHandler}
          >
            <h3>
              {t("authorized.music-player.create-playlist.button-done.h3")}
            </h3>
          </div>
        </NavLink>
      </div>

      <h1>{t("authorized.music-player.create-playlist.title")}</h1>
      <div className={"create-album-header__inputs"}>
        <div className={"create-album-header__add-photo"}>
          <label htmlFor="image-loader">
            <img src={state.img} alt="description" />
          </label>

          <input
            type="file"
            id="image-loader"
            accept="image/x-png, image/gif, image/jpeg, image/jpg"
            onChange={imgChangeHandler}
          ></input>
        </div>
        <div className={"create-album-header__input-together"}>
          <div className={"create-album-header__name"}>
            <input
              value={name}
              ref={nameRef}
              onKeyDown={inputEnterHandler}
              onChange={nameChangeHandler}
              onFocus={nameFocusHandler}
              onBlur={nameBlurHandler}
              style={{ borderColor: nameIsFocus ? "#1877f2" : "#e9e9e9" }}
              placeholder={t(
                "authorized.music-player.create-playlist.input_1.placeholder"
              )}
            ></input>
          </div>
          <div className={"create-album-header__description"}>
            <input
              value={description}
              ref={descriptionRef}
              onKeyDown={inputEnterHandler}
              onChange={descriptionChangeHandler}
              onFocus={descriptionFocusHandler}
              onBlur={descriptionBlurHandler}
              style={{
                borderColor: descriptionIsFocus ? "#1877f2" : "#e9e9e9",
              }}
              placeholder={t(
                "authorized.music-player.create-playlist.input_2.placeholder"
              )}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};
