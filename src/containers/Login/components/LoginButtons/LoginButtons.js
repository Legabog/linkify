import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./LoginButtons.css";

export const LoginButtons = (props) => {
  const { t } = useTranslation();

  const loginButtonSignInHandler = () => {
    props.signIn(props.email, props.password, props.history, "/signin");
  };

  return (
    <div className="login-buttons">
      <div
        className="login-button-signin"
        onClick={loginButtonSignInHandler}
      >
        <span>{t("unauthorized.login.signin-block.login-button")}</span>
      </div>
      <NavLink to={"/signup"}>
        <div className="login-button-signup">
          <span>
            {t("unauthorized.login.signin-block.registration-button")}
          </span>
        </div>
      </NavLink>
    </div>
  );
};
