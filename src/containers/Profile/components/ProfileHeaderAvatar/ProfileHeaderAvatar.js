import { Avatar } from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import "./ProfileHeaderAvatar.css";

import { ChangeAvatarSimplePreloader } from "pres-components/ChangeAvatarSimplePreloader";

export const ProfileHeaderAvatar = (props) => {
  const avatarStyle = {
    width: "172px",
    marginTop: "4px",
    marginLeft: "4px",
    height: "172px",
    borderRadius: "172px",
  };

  return (
    <div className={"profile__header__avatar"}>
      {props.fetchAvatar ? (
        <ChangeAvatarSimplePreloader width={"172px"} height={"172px"} />
      ) : props.user === null || props.user.Avatars.activeAvatarUrl === "" ? (
        <Avatar
          style={avatarStyle}
          onClick={props.toggleWindowAvatar}
          alt={"description"}
        />
      ) : (
        <Avatar
          src={props.user.Avatars.activeAvatarUrl}
          style={avatarStyle}
          onClick={props.toggleWindowAvatar}
          alt={"description"}
        />
      )}

      <div
        className={"profile__header__photo"}
        onClick={() => {
          props.toggleProfileUpdateAvatar(
            props.profileUpdateVisibility,
            props.profileUpdateOpacity
          );
        }}
      >
        <PhotoCameraIcon />
      </div>

      <input
        type="file"
        id="avatar-uploader"
        accept="image/x-png, image/gif, image/jpeg, image/jpg"
        onChange={(e) => {
          if (e.target.files[0] !== null) {
            props.avatarLoaderBase64Handler(e.target.files[0]);
          }
        }}
      />
    </div>
  );
};
