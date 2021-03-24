import "./Post.css";

import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

export const Post = ({ profilePic, image, username, timestamp, message }) => {
  const { t } = useTranslation();
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" alt={"description"} />
        <div className="post__top-info">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>

      {image ? (
        <div className="post__image">
          <img src={image} alt="description" />
        </div>
      ) : null}

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>{t("authorized.feed.post.options.p-1")}</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>{t("authorized.feed.post.options.p-2")}</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>{t("authorized.feed.post.options.p-3")}</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
};
