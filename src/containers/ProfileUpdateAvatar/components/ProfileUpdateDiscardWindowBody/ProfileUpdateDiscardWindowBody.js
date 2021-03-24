import { useTranslation } from "react-i18next";
import "./ProfileUpdateDiscardWindowBody.css";

export const ProfileUpdateDiscardWindowBody = (props) => {
  const { t } = useTranslation();

  return (
    <div className={"profile-update-discard-window-body"}>
      <div className={"profile-update-discard-window-body__description"}>
        <span>
          {t(
            "authorized.profile.profile-update-avatar.discard-window.body.description"
          )}
        </span>
      </div>
      <div className={"profile-update-discard-window-body__control-panel"}>
        <div className={"profile-update-discard-window-body__buttons"}>
          <div
            className={"profile-update-discard-window-body__cancel-button"}
            onClick={() => {
              props.toggleDiscardWindow(false);
            }}
          >
            <span>
              {t(
                "authorized.profile.profile-update-avatar.discard-window.body.cancel-button"
              )}
            </span>
          </div>
          <div
            className={"profile-update-discard-window-body__save-button"}
            onClick={() => {
              props.toggleDiscardWindow(false);
              props.closeHandlerProfileUpdate();
            }}
          >
            <span>
              {t(
                "authorized.profile.profile-update-avatar.discard-window.body.discard-button"
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
