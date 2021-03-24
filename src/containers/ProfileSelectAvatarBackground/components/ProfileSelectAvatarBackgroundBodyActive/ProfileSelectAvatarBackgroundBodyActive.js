import "./ProfileSelectAvatarBackgroundBodyActive.css";

import _ from "lodash/core";
import { useTranslation } from "react-i18next";

export const ProfileSelectAvatarBackgroundBodyActive = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"profile-select-avatar-background-body-wrapper_active"}>
      <div className={"profile-select-avatar-background-body_active"}>
        {props.selectComponentContent === 0
          ? props.user.Avatars.pofileAvatars.map((e, index) => {
              return (
                <img
                  key={_.uniqueId(e)}
                  src={e}
                  alt="description"
                  onClick={() => {
                    props.avatarBackgroundLoaderUrlHandler(e);
                    props.toggleWindowConfirmBackground(true);
                    props.toggleProfileSelectAvatarBackground(
                      props.profileSelectVisibility,
                      props.profileSelectOpacity
                    );
                    props.toggleSelectComponent(
                      0,
                      t(
                        "authorized.profile.select-avatar-background.header.title-1"
                      ),
                      0
                    );
                  }}
                />
              );
            })
          : props.user.AvatarBackground.pofileAvatarBackgrounds.map(
              (e, index) => {
                return (
                  <img
                    key={_.uniqueId(e)}
                    src={e}
                    alt="description"
                    onClick={() => {
                      props.avatarBackgroundLoaderUrlHandler(e);
                      props.toggleWindowConfirmBackground(true);
                      props.toggleProfileSelectAvatarBackground(
                        props.profileSelectVisibility,
                        props.profileSelectOpacity
                      );
                      props.toggleSelectComponent(
                        0,
                        t(
                          "authorized.profile.select-avatar-background.header.title-1"
                        ),
                        0
                      );
                    }}
                  />
                );
              }
            )}
      </div>
    </div>
  );
};
