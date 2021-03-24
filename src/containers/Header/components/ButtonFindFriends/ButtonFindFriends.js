import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./ButtonFindFriends.css";

export const ButtonFindFriends = (props) => {
  const { t } = useTranslation()
  return (
    <div
      className={
        props.location.pathname === "/friends"
          ? "button-find-friends__wrapper_active"
          : "button-find-friends__wrapper"
      }
    >
      <NavLink to={"/friends"}>
        <div
          className={
            props.location.pathname === "/friends"
              ? "button-find-friends_active"
              : "button-find-friends"
          }
        >
          <span>{t("authorized.header.header-right.button-find-friends.span")}</span>
        </div>
      </NavLink>
    </div>
  );
};

