import "./ProfileHeaderConfirmChangeAvatarBackground.css";

import PublicIcon from "@material-ui/icons/Public";
import { useTranslation } from "react-i18next";

export const ProfileHeaderConfirmChangeAvatarBackground = (props) => {
  const { t } = useTranslation();
  return (
    <div
      className={"confirmChangeAvatarBackground__wrapper"}
      style={{
        visibility: `${props.windowConfirmBackgroundVisibility}`,
        opacity: `${props.windowConfirmBackgroundOpacity}`,
      }}
    >
      <div className={"confirmChangeAvatarBackground"}>
        <div className={"confirmChangeAvatarBackground__description"}>
          <PublicIcon />
          <span>
            {t(
              "authorized.profile.header.confirm-change-avatar-background.description"
            )}
          </span>
        </div>

        <div className={"confirmChangeAvatarBackground__controlPanel"}>
          {props.fetchAvatarBackground ? (
            <>
              <div
                className={
                  "confirmChangeAvatarBackground__controlPanel__cancelButton-disabled"
                }
              >
                <span>
                  {t(
                    "authorized.profile.header.confirm-change-avatar-background.cancel-button"
                  )}
                </span>
              </div>

              <div
                className={`confirmChangeAvatarBackground__controlPanel__saveButton-disabled`}
              >
                <span>
                  {t(
                    "authorized.profile.header.confirm-change-avatar-background.save-button"
                  )}
                </span>
              </div>
            </>
          ) : (
            <>
              <div
                className={`confirmChangeAvatarBackground__controlPanel__cancelButton`}
                onClick={() => {
                  props.clearTempAvatarBackgroundHandler();
                  props.toggleWindowConfirmBackground(false);
                }}
              >
                <span>
                  {t(
                    "authorized.profile.header.confirm-change-avatar-background.cancel-button"
                  )}
                </span>
              </div>
              <div
                className={`confirmChangeAvatarBackground__controlPanel__saveButton`}
                onClick={() => {
                  props.switcherAvatarBackgroundURLorBase64 === 0
                    ? props.changeAvatarBackgroundHandler(
                        props.profileUpdateTempAvatarBackground,
                        props.profileUpdateTempAvatarBackgroundName,
                        props.activeAccountEmail,
                        props.toggleWindowConfirmBackground
                      )
                    : props.changeAvatarBackgroundURLHandler(
                        props.profileUpdateTempAvatarBackground,
                        props.activeAccountEmail,
                        props.toggleWindowConfirmBackground
                      );
                }}
              >
                <span>
                  {t(
                    "authorized.profile.header.confirm-change-avatar-background.save-button"
                  )}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
