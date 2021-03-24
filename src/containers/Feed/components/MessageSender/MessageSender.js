import { memo, useState } from "react";
import "./MessageSender.css";

import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import db from "utils/firebase/firebase";
import { useTranslation } from "react-i18next";

export const MessageSender = memo((props) => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const imageUrlHandler = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: db.FieldValue.serverTimestamp(),
      profilePic: props.user.photoURL,
      username: props.user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="message-sender">
      <div className="message-sender__top">
        <Avatar
          src={
            props.user === null || props.user.Avatars.activeAvatarUrl === ""
              ? null
              : props.user.Avatars.activeAvatarUrl
          }
          alt={"description"}
        />
        <form>
          <input
            value={input}
            onChange={inputHandler}
            className="message-sender__input"
            type="text"
            placeholder={`${t(
              "authorized.feed.message-sender.top.input-1.placeholder"
            )}, ${
              props.user === null || props.user.Name === ""
                ? null
                : props.user.Name
            }`}
          />
          <input
            value={imageUrl}
            onChange={imageUrlHandler}
            type="text"
            placeholder={t(
              "authorized.feed.message-sender.top.input-2.placeholder"
            )}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="message-sender__bottom">
        <div className="message-sender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>{t("authorized.feed.message-sender.bottom.h3-1")}</h3>
        </div>

        <div className="message-sender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>{t("authorized.feed.message-sender.bottom.h3-2")}</h3>
        </div>

        <div className="message-sender__option">
          <InsertEmoticonIcon style={{ color: "yellow" }} />
          <h3>{t("authorized.feed.message-sender.bottom.h3-3")}</h3>
        </div>
      </div>
    </div>
  );
});
