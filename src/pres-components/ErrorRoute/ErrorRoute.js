import "./ErrorRoute.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ErrorRoute = (props) => {
  const { t } = useTranslation();

  return (
    <div className="error-route">
      <div className="error-route__header">
        <h1>{t("unauthorized.error-route.header.h1")}</h1>
      </div>
      <div className="error-route__body">
        <h2>{t("unauthorized.error-route.body.h2")}</h2>
      </div>

      <div className="error-route__button-back">
        <NavLink className="button-back" to={""}>
          {t("unauthorized.error-route.button-back.navLink")}
        </NavLink>
      </div>
    </div>
  );
};
