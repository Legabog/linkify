import "./ProfileUpdateBody.css";

import { ProfileUpdateBodySection } from "../ProfileUpdateBodySection";
import { useTranslation } from "react-i18next";

export const ProfileUpdateBody = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"profle-update-avatar-body"}>
      <ProfileUpdateBodySection
        avatarsArray={
          props.user === null || props.user.RecentUploads.length === 0
            ? []
            : props.user.RecentUploads
        }
        {...props}
        titleSection={t(
          "authorized.profile.profile-update-avatar.body.section-1"
        )}
      />
      <ProfileUpdateBodySection
        avatarsArray={
          props.user === null || props.user.Avatars.pofileAvatars.length === 0
            ? []
            : props.user.Avatars.pofileAvatars
        }
        {...props}
        titleSection={t(
          "authorized.profile.profile-update-avatar.body.section-2"
        )}
      />

      <ProfileUpdateBodySection
        avatarsArray={
          props.user === null ||
          props.user.AvatarBackground.pofileAvatarBackgrounds.length === 0
            ? []
            : props.user.AvatarBackground.pofileAvatarBackgrounds
        }
        {...props}
        titleSection={t(
          "authorized.profile.profile-update-avatar.body.section-3"
        )}
      />
    </div>
  );
};
