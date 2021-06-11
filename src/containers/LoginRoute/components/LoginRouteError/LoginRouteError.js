import { NavLink } from "react-router-dom";
import "./LoginRouteError.css";

import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import { useTranslation } from "react-i18next";

export const LoginRouteError = (props) => {
  const { t } = useTranslation()

  return (
    <div className="login-route-error-info-wrapper">
      <div
        className="login-route-error-info"
        style={{ display: props.loginError ? null : "none" }}
      >
        <WarningRoundedIcon />
        <span>
          {t("unauthorized.login-route.signin-block.error-info.description")}{" "}
          <NavLink to={"/signup"}>
            {t("unauthorized.login-route.signin-block.error-info.navLink")}
          </NavLink>
        </span>
      </div>
    </div>
  );
};
