import { useTranslation } from "react-i18next";
import "./ProfileSelectAvatarBackgroundNavigation.css";

export const ProfileSelectAvatarBackgroundNavigation = (props) => {
  const { t } = useTranslation()
  return (
    <div className={"profile-select-avatar-background-navigation"}>
      <div
        className={
          props.navigationState === 0
            ? "profile-select-avatar-background-navigation__selector_active"
            : "profile-select-avatar-background-navigation__selector"
        }
        onClick={() => {
          props.setNavigationState(0);
        }}
      >
        <span>{t("authorized.profile.select-avatar-background.body.navigation.item-1")}</span>
      </div>

      <div
        className={
          props.navigationState === 1
            ? "profile-select-avatar-background-navigation__selector_active"
            : "profile-select-avatar-background-navigation__selector"
        }
        onClick={() => {
          props.setNavigationState(1);
        }}
      >
        <span>{t("authorized.profile.select-avatar-background.body.navigation.item-2")}</span>
      </div>
    </div>
  );
};

