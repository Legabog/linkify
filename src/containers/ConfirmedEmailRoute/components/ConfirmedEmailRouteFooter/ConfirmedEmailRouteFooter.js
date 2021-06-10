import { NavLink } from "react-router-dom";
import "./ConfirmedEmailRouteFooter.css";

import { useTranslation } from "react-i18next";

export const ConfirmedEmailRouteFooter = (props) => {
  const { t } = useTranslation()

  return (
    <div className="confirmed-email-route-footer">
      <NavLink to={"/"}>
        <div className="confirmed-email-route-footer__button-back">
          <span>
            {t("unauthorized.confirmed-email-route.button-back.navLink")}
          </span>
        </div>
      </NavLink>
    </div>
  );
};
