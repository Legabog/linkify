import "./ProfileAddHobbiesHeader.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import addHobbies from "assets/images/addHobies.png";
import { useTranslation } from "react-i18next";

export const ProfileAddHobbiesHeader = (props) => {
  const { t } = useTranslation();
  switch (props.profileAddHobbiesStateComponent) {
    case 0:
      return (
        <div className={"profile-add-hobbies-header-wrapper"}>
          <div className={"profile-add-hobbies-header"}>
            <div className={"profile-add-hobbies-header__img"}>
              <img src={addHobbies} alt="description" />
            </div>

            <div className={"profile-add-hobbies-header__close-icon"}>
              <IconButton onClick={props.cancelClick}>
                <CloseOutlinedIcon />
              </IconButton>
            </div>
          </div>

          <div className={"profile-add-hobbies-header__title"}>
            <div className={"profile-add-hobbies-header__title-main"}>
              <span>
                {t("authorized.profile.add-hobbies.header.state-1.main")}
              </span>
            </div>
            <div className={"profile-add-hobbies-header__title-secondary"}>
              <span>
                {t("authorized.profile.add-hobbies.header.state-1.secondary")}
              </span>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className={"profile-add-hobbies-header-wrapper"}>
          <div className={"profile-add-hobbies-header__close-icon_state-2"}>
            <IconButton onClick={props.cancelClick}>
              <CloseOutlinedIcon />
            </IconButton>
          </div>

          <div className={"profile-add-hobbies-header__title"}>
            <div className={"profile-add-hobbies-header__title-main"}>
              <span>
                {t("authorized.profile.add-hobbies.header.state-2.main")}
              </span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
