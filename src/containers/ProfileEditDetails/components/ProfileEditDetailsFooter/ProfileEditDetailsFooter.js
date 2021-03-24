import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./ProfileEditDetailsFooter.css";

export const ProfileEditDetailsFooter = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"profile-edit-details-footer"}>
      <div className={"profile-edit-details-footer__controll-panel"}>
        <div className={"profile-edit-details-footer__buttons"}>
          <div
            className={"profile-edit-details-footer__cancel-button"}
            onClick={() => {
              props.toggleProfileEditDetails(
                props.profileEditDetailsVisibility,
                props.profileEditDetailsOpacity
              );
            }}
          >
            <span>
              {t("authorized.profile.edit-details.footer.cancel-button")}
            </span>
          </div>

          <NavLink
            to="/profile/about"
            onClick={() => {
              props.toggleProfileEditDetails(
                props.profileEditDetailsVisibility,
                props.profileEditDetailsOpacity
              );
            }}
          >
            <div className={"profile-edit-details-footer__update-button"}>
              <span>
                {t("authorized.profile.edit-details.footer.update-button")}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
