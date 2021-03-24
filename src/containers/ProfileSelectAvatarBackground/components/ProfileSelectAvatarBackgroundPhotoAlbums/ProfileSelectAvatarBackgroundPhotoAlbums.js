import "./ProfileSelectAvatarBackgroundPhotoAlbums.css";

import { AvatarBackgroundPhotoAlbumsSection } from "../AvatarBackgroundPhotoAlbumsSection";
import { useTranslation } from "react-i18next";

export const ProfileSelectAvatarBackgroundPhotoAlbums = (props) => {
  const { t } = useTranslation()
  return (
    <div className={"profile-select-avatar-background-photo-albums-wrapper"}>
      {props.user === null ||
      (props.user.Avatars.pofileAvatars.length === 0 &&
        props.user.Avatars.pofileAvatars.length === 0) ? (
        <div className={"profile-select-avatar-background-photo-albums"}></div>
      ) : (
        <div className={"profile-select-avatar-background-photo-albums"}>
          {props.user === null ||
          props.user.Avatars.pofileAvatars.length === 0 ? null : (
            <AvatarBackgroundPhotoAlbumsSection
              toggleSelectComponent={props.toggleSelectComponent}
              img={props.user.Avatars.pofileAvatars[0]}
              content={0}
              title={t("authorized.profile.select-avatar-background.header.title-2")}
              uploads={props.user.Avatars.pofileAvatars.length}
            />
          )}

          {props.user === null ||
          props.user.AvatarBackground.pofileAvatarBackgrounds.length ===
            0 ? null : (
            <AvatarBackgroundPhotoAlbumsSection
              img={props.user.AvatarBackground.pofileAvatarBackgrounds[0]}
              toggleSelectComponent={props.toggleSelectComponent}
              content={1}
              title={t("authorized.profile.select-avatar-background.header.title-3")}
              uploads={
                props.user.AvatarBackground.pofileAvatarBackgrounds.length
              }
            />
          )}
        </div>
      )}
    </div>
  );
};

