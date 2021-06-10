import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./ErrorRouteFooter.css";

export const ErrorRouteFooter = (props) => {
  const { t } = useTranslation();

  return (
    <div className="error-route-footer">
      <NavLink to={"/"}>
        <div className="error-route-footer__button-back">
          <span>{t("unauthorized.error-route.button-back.navLink")}</span>
        </div>
      </NavLink>
    </div>
  );
};
