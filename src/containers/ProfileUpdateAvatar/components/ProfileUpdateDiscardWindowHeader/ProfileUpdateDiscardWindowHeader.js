import "./ProfileUpdateDiscardWindowHeader.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export const ProfileUpdateDiscardWindowHeader = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"profile-update-discard-window-header"}>
      <div className={"profile-update-discard-window-header__title"}>
        <span>
          {t(
            "authorized.profile.profile-update-avatar.discard-window.header.title"
          )}
        </span>
      </div>
      <div className={"profile-update-discard-window-header__close-icon"}>
        <IconButton
          onClick={() => {
            props.toggleDiscardWindow(false);
          }}
        >
          <CloseOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};
