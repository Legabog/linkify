import { NavLink } from "react-router-dom";
import "./LoginRouteButtons.css";

import { useTranslation } from "react-i18next";

export const LoginRouteButtons = (props) => {
  const { t } = useTranslation();

  const loginButtonSignInHandler = (e) => {
    props.signIn(props.email, props.password, props.history, "/signin");
  };

  return (
    <div className="login-route-buttons">
      <div
        className="login-route-button-signin"
        onClick={loginButtonSignInHandler}
      >
        <span>{t("unauthorized.login.signin-block.login-button")}</span>
      </div>
      <NavLink to={"/signup"}>
        <div className="login-route-button-signup">
          <span>
            {t("unauthorized.login.signin-block.registration-button")}
          </span>
        </div>
      </NavLink>
    </div>
  );
};
