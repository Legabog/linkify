import { useTranslation } from "react-i18next";
import "./ProfileHeaderConfirmRemoveBackgroundBody.css";

export const ProfileHeaderConfirmRemoveBackgroundBody = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"profileHeaderConfirmRemoveBackground__body"}>
      <div
        className={"profileHeaderConfirmRemoveBackground__body__description"}
      >
        <span>
          {t(
            "authorized.profile.header.confirm-remove-background.body.description"
          )}
        </span>
      </div>
      <div
        className={"profileHeaderConfirmRemoveBackground__body__controlPanel"}
      >
        <div className={"profileHeaderConfirmRemoveBackground__body__buttons"}>
          <div
            className={
              "profileHeaderConfirmRemoveBackground__body__cancelButton"
            }
            onClick={() => {
              props.toggleConfirmRemove(false);
            }}
          >
            <span>
              {t(
                "authorized.profile.header.confirm-remove-background.body.cancel-button"
              )}
            </span>
          </div>
          <div
            className={"profileHeaderConfirmRemoveBackground__body__saveButton"}
            onClick={() => {
              props.removeAvatarBackgroundHandler(props.activeAccountEmail);
              props.toggleConfirmRemove(false);
            }}
          >
            <span>
              {t(
                "authorized.profile.header.confirm-remove-background.body.save-button"
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
