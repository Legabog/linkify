import "./AboutLeftSectionNavBar.css";

import { AboutLeftSectionNavLink } from "../AboutLeftSectionNavLink";
import { useTranslation } from "react-i18next";

export const AboutLeftSectionNavBar = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"AboutLeftSectionNavBar"}>
      <AboutLeftSectionNavLink
        activeLink={
          props.location.pathname === "/profile/about_overview" ||
          props.location.pathname === "/profile/about"
            ? true
            : false
        }
        title={t("authorized.about.left-section.nav-bar.item-1")}
        navLink={"/profile/about_overview"}
      />
      <AboutLeftSectionNavLink
        activeLink={
          props.location.pathname === "/profile/about_work_and_education"
            ? true
            : false
        }
        title={t("authorized.about.left-section.nav-bar.item-2")}
        navLink={"/profile/about_work_and_education"}
      />
      <AboutLeftSectionNavLink
        activeLink={
          props.location.pathname === "/profile/about_places" ? true : false
        }
        title={t("authorized.about.left-section.nav-bar.item-3")}
        navLink={"/profile/about_places"}
      />
      <AboutLeftSectionNavLink
        activeLink={
          props.location.pathname === "/profile/about_contact_and_basic_info"
            ? true
            : false
        }
        title={t("authorized.about.left-section.nav-bar.item-4")}
        navLink={"/profile/about_contact_and_basic_info"}
      />
      <AboutLeftSectionNavLink
        activeLink={
          props.location.pathname === "/profile/about_family_and_relationships"
            ? true
            : false
        }
        title={t("authorized.about.left-section.nav-bar.item-5")}
        navLink={"/profile/about_family_and_relationships"}
      />
      <AboutLeftSectionNavLink
        activeLink={
          props.location.pathname === "/profile/about_details" ? true : false
        }
        title={t("authorized.about.left-section.nav-bar.item-6")}
        navLink={"/profile/about_details"}
      />
      <AboutLeftSectionNavLink
        activeLink={
          props.location.pathname === "/profile/about_life_events"
            ? true
            : false
        }
        title={t("authorized.about.left-section.nav-bar.item-7")}
        navLink={"/profile/about_life_events"}
      />
    </div>
  );
};
