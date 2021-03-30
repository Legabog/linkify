import "./ConfirmedEmailRoute.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ConfirmedEmailRoute = (props) => {
  const { t } = useTranslation();

  return (
    <div className="confirmed-email-route__wrapper">
      <div className="confirmed-email-route">
        <div className="confirmed-email-route__header">
          <h1>{t("unauthorized.confirmed-email-route.header.h1")}</h1>
          <hr />
        </div>
        <div className="confirmed-email-route__body">
          <h2>
            {t("unauthorized.confirmed-email-route.body.h2-1")}
            <br />
            {t("unauthorized.confirmed-email-route.body.h2-2")}
          </h2>
        </div>
        <div className="confirmed-email-route__button-back">
          <NavLink className="button-back" to={"/signin"}>
            {t("unauthorized.confirmed-email-route.button-back.navLink")}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
