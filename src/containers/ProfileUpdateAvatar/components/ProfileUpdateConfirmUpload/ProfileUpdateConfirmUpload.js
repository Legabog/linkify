import "./ProfileUpdateConfirmUpload.css";

import PublicIcon from "@material-ui/icons/Public";

import { ChangeAvatarSimplePreloader } from "pres-components/ChangeAvatarSimplePreloader";
import { useTranslation } from "react-i18next";

export const ProfileUpdateConfirmUpload = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"profile-update-confirm-upload"}>
      <div className={"profile-update-confirm-upload__temp-avatar-wrapper"}>
        <div className={"profile-update-confirm-upload__temp-avatar"}>
          <img src={props.profileUpdateTempAvatar} alt="description" />
        </div>
      </div>

      <div className={"profile-update-confirm-upload__description"}>
        <PublicIcon />
        <span>
          {t(
            "authorized.profile.profile-update-avatar.confirm-upload.description"
          )}
        </span>
      </div>
      <div className={"profile-update-confirm-upload__buttons-wrapper"}>
        <div className={"profile-update-confirm-upload__buttons"}>
          {props.fetchAvatar ? (
            <ChangeAvatarSimplePreloader width={"75px"} height={"36px"} />
          ) : (
            <div
              className={"profile-update-confirm-upload__cancel-button"}
              onClick={() => {
                props.toggleDiscardWindow(true);
              }}
            >
              <span>
                {t(
                  "authorized.profile.profile-update-avatar.confirm-upload.cancel-button"
                )}
              </span>
            </div>
          )}
          {props.fetchAvatar ? (
            <div
              className={"profile-update-confirm-upload__save-button_disabled"}
            >
              <span>
                {t(
                  "authorized.profile.profile-update-avatar.confirm-upload.save-button"
                )}
              </span>
            </div>
          ) : (
            <div
              className={"profile-update-confirm-upload__save-button"}
              onClick={() => {
                props.profileUpdateConditionForAvatar === 0
                  ? props.sendAvatar(
                      props.profileUpdateTempAvatar,
                      props.profileUpdateTempAvatarName,
                      props.activeAccountEmail
                    )
                  : props.changeAvatarHandler(
                      props.profileUpdateTempAvatar,
                      props.activeAccountEmail
                    );
              }}
            >
              <span>
                {t(
                  "authorized.profile.profile-update-avatar.confirm-upload.save-button"
                )}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
