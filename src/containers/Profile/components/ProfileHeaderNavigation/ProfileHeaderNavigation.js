import "./ProfileHeaderNavigation.css";

import CreateIcon from "@material-ui/icons/Create";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { ProfileHeaderNavigationButton } from "../ProfileHeaderNavigationButton";
import { ProfileHeaderNavigationItem } from "../ProfileHeaderNavigationItem";
import { ProfileHeaderNavigationItemSpecial } from "../ProfileHeaderNavigationItemSpecial";
import { useTranslation } from "react-i18next";

export const ProfileHeaderNavigation = (props) => {
  const { t } = useTranslation()
  return (
    <div className={"profile__header__navigation__wrap"}>
      <div className={"profile__header__navigation"}>
        <div className={"profile__header__navigationBar"}>
          <ProfileHeaderNavigationItem
            {...props}
            title={t("authorized.profile.header.navigation.item-1.title")}
            NavLinks={["/profile"]}
          />
          <ProfileHeaderNavigationItem
          {...props}
            title={t("authorized.profile.header.navigation.item-2.title")}
            NavLinks={[
              "/profile/about",
              "/profile/about_overview",
              "/profile/about_work_and_education",
              "/profile/about_places",
              "/profile/about_contact_and_basic_info",
              "/profile/about_family_and_relationships",
              "/profile/about_details",
              "/profile/about_life_events",
            ]}
          />

          <ProfileHeaderNavigationItem
          {...props}
            title={t("authorized.profile.header.navigation.item-3.title")}
            NavLinks={["/profile/friends"]}
          />
          <ProfileHeaderNavigationItem
          {...props}
            title={t("authorized.profile.header.navigation.item-4.title")}
            NavLinks={["/profile/photos"]}
          />
          <ProfileHeaderNavigationItem
          {...props}
            title={t("authorized.profile.header.navigation.item-5.title")}
            NavLinks={["/profile/archive"]}
          />
          <ProfileHeaderNavigationItem
          {...props}
            title={t("authorized.profile.header.navigation.item-6.title")}
            NavLinks={["/profile/videos"]}
          />
          <ProfileHeaderNavigationItemSpecial
            title={t("authorized.profile.header.navigation.item-7.title")}
            NavLinks={["/profile/more"]}
            icon={ArrowDropDownIcon}
          />
        </div>

        <div className={"profile__header__buttonPanel"}>
          <ProfileHeaderNavigationButton
            title={t("authorized.profile.header.navigation.button-1.title")}
            icon={CreateIcon}
          />
          <ProfileHeaderNavigationButton icon={VisibilityIcon} />
          <ProfileHeaderNavigationButton icon={SearchIcon} />
          <ProfileHeaderNavigationButton icon={MoreHorizIcon} />
        </div>
      </div>
    </div>
  );
};
