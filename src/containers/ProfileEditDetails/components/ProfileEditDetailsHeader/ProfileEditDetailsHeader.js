import "./ProfileEditDetailsHeader.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export const ProfileEditDetailsHeader = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={"profile-edit-details__wrapper-header"}>
        <div className={"profile-edit-details__wrapper-header__title"}>
          <span>{t("authorized.profile.edit-details.header.title")}</span>
        </div>
        <div className={"profile-edit-details__wrapper-header__close-icon"}>
          <IconButton
            onClick={() => {
              props.toggleProfileEditDetails(
                props.profileEditDetailsVisibility,
                props.profileEditDetailsOpacity
              );
            }}
          >
            <CloseOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};
