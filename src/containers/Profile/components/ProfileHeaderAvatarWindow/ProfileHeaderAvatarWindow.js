import "./ProfileHeaderAvatarWindow.css";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { useTranslation } from "react-i18next";

export const ProfileHeaderAvatarWindow = (props) => {
  const { t } = useTranslation();
  return (
    <div
      className={"profile__header__avatar__window__wrapper"}
      style={{
        visibility: props.windowAvatarVisibility,
        opacity: props.windowAvatarOpacity,
      }}
    >
      <div className={"profile__header__avatar__window"}>
        <div className={"profile__header__avatar__windowSection"}>
          <AccountBoxIcon />
          <span>{t("authorized.profile.header.avatar-window.section-1")}</span>
        </div>

        <div
          className={"profile__header__avatar__windowSection"}
          onClick={() => {
            props.toggleProfileUpdateAvatar(
              props.profileUpdateVisibility,
              props.profileUpdateOpacity
            );
            props.toggleWindowAvatar();
          }}
        >
          <PhotoLibraryIcon />
          <span>{t("authorized.profile.header.avatar-window.section-2")}</span>
        </div>
      </div>
    </div>
  );
};
