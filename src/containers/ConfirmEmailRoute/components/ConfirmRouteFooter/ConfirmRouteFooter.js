import { NavLink } from "react-router-dom";
import "./ConfirmRouteFooter.css";

import { useTranslation } from "react-i18next";

export const ConfirmRouteFooter = (props) => {
  const { t } = useTranslation()

  return (
    <div className="confirm-email-route-footer">
      <NavLink to={"/"}>
        <div className="confirm-email-route-footer__button-back">
          <span>
            {t("unauthorized.confirm-email-route.button-back.navLink")}
          </span>
        </div>
      </NavLink>
    </div>
  );
};
