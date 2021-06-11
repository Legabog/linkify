import { NavLink } from "react-router-dom";
import "./LoginRouteHelp.css";

import { useTranslation } from "react-i18next";

export const LoginRouteHelp = (props) => {
  const { t } = useTranslation()

  return (
    <div className="login-route-help">
      <span>
        <NavLink to={"/"}>
          {t("unauthorized.login.signin-block.help.navLink")}
        </NavLink>
        &nbsp; {t("unauthorized.login.signin-block.help.description")}
      </span>
    </div>
  );
};
