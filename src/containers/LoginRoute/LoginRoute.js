import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./LoginRoute.css";

import { signIn } from "redux/auth-reducer";
import { displayRegistrationBlockTrue } from "redux/registration-block-reducer";
import { useInput } from "hooks/useInput";

import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import { useTranslation } from "react-i18next";

const LoginRoute_ = (props) => {
  const { t } = useTranslation();
  const [email, emailRef, emailChangeHandler] = useInput("");
  const [password, passwordRef, passwordChangeHandler] = useInput("");

  const loginButtonSignInHandler = (e) => {
    props.signIn(email, password, props.history, "/signin");
  };

  return (
    <div className="login-route__wrapper">
      <div className="login-route">
        <div className="login-route__header">
          <h1>{t("unauthorized.login-route.header.h1")}</h1>
        </div>
        <div className="login-route__body">
          <div className="login-route__body__header">
            <span>
              <div>{t("unauthorized.login-route.body.body-header.span")}</div>
            </span>
          </div>
          <div className="login-route__body__form">
            <div className="login-route__body__input-wrapper">
              <div className="login-route__body__input">
                <div className="login-route__body__input_error">
                  <input
                    type="text"
                    name="email"
                    id="login-route-email"
                    placeholder={t(
                      "unauthorized.login-route.body.form.login-input"
                    )}
                    autoComplete="off"
                    className="login-route__input"
                    value={email}
                    ref={emailRef}
                    onChange={emailChangeHandler}
                    style={{
                      borderColor: props.loginError ? "red" : null,
                    }}
                  />
                  <WarningRoundedIcon
                    className="login-route__warning-icon"
                    style={{
                      display: props.loginError ? null : "none",
                    }}
                  />
                </div>
                <div className="login-route__error-info-wrapper">
                  <div
                    className="login-route__error-info"
                    style={{ display: props.loginError ? null : "none" }}
                  >
                    <span>
                      {t(
                        "unauthorized.login-route.body.form.error-info.description"
                      )}{" "}
                      <NavLink
                        to={"/signin"}
                        onClick={props.displayRegistrationBlockTrue}
                      >
                        {t(
                          "unauthorized.login-route.body.form.error-info.navLink"
                        )}
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="login-route__body__input-wrapper">
              <input
                type="password"
                name="password"
                id="login-route-password"
                placeholder={t(
                  "unauthorized.login-route.body.form.password-input"
                )}
                className="login-route__input"
                value={password}
                ref={passwordRef}
                onChange={passwordChangeHandler}
              />
            </div>

            <div className="login-route__body__button">
              <div
                className="login-route__button-signin"
                onClick={loginButtonSignInHandler}
              >
                {t("unauthorized.login-route.body.form.login-button")}
              </div>
            </div>
            <div className="login-route__body__restore-account">
              <NavLink to={"/signin"}>
                {t("unauthorized.login-route.body.form.restore-account")}
              </NavLink>
            </div>
            <div className="login-route__body__or">
              <span className="or">
                {t("unauthorized.login-route.body.form.or")}
              </span>
            </div>

            <div className="login-route__body__button">
              <div className="login-route__button-create-account">
                <NavLink
                  to={"/signin"}
                  onClick={props.displayRegistrationBlockTrue}
                >
                  {t(
                    "unauthorized.login-route.body.form.create-account-button"
                  )}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginError: state.authReducer.loginError,
});

export const LoginRoute = compose(
  withRouter,
  connect(mapStateToProps, {
    signIn,
    displayRegistrationBlockTrue,
  })
)(LoginRoute_);
