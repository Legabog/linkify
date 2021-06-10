import { NavLink } from "react-router-dom";
import "./LoginHelp.css";

import { useTranslation } from "react-i18next";

export const LoginHelp = () => {
  const { t } = useTranslation();

  return (
    <div className="login-help">
      <span>
        <NavLink to={"/"}>
          {t("unauthorized.login.signin-block.help.navLink")}
        </NavLink>
        &nbsp; {t("unauthorized.login.signin-block.help.description")}
      </span>
    </div>
  );
};
