import "./ConfirmEmailRoute.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ConfirmEmailRoute = (props) => {
  const { t } = useTranslation();

  return (
    <div className="confirm-email-route__wrapper">
      <div className="confirm-email-route">
        <div className="confirm-email-route__header">
          <h1>{t("unauthorized.confirm-email-route.header.h1")}</h1>
          <hr />
        </div>
        <div className="confirm-email-route__body">
          <h2>
            {t("unauthorized.confirm-email-route.body.h2-1")}
            <br />
            {t("unauthorized.confirm-email-route.body.h2-2")}
          </h2>
        </div>
        <div className="confirm-email-route__button-back">
          <NavLink
            className="button-back"
            to={""}
            onClick={props.displayRegistrationBlockFalse}
          >
            {t("unauthorized.confirm-email-route.button-back.navLink")}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
