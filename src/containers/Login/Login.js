import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Login.css";

import { signIn } from "redux/auth-reducer";
import { displayRegistrationBlockTrue } from "redux/registration-block-reducer";
import { useInput } from "hooks/useInput";
import { useTranslation } from "react-i18next";

const Login_ = (props) => {
  const { t } = useTranslation();

  const [
    email,
    emailRef,
    emailChangeHandler,
    emailFocus,
    emailFocusHandler,
    emailBlurHandler,
  ] = useInput("");

  const [
    password,
    passwordRef,
    passwordChangeHandler,
    passwordFocus,
    passwordFocusHandler,
    passwordBlurHandler,
  ] = useInput("");

  const loginButtonSignInHandler = () => {
    props.signIn(email, password, props.history, "/signin");
  };

  return (
    <div className="login">
      <div className="login__main-block">
        <div className="login__block">
          <div className="login__description">
            <h1>{t("unauthorized.login.main-block.description.h1")}</h1>
            <h2>{t("unauthorized.login.main-block.description.h2")}</h2>
          </div>
          <div className="login__signin-block">
            <div className="login__signin-block__form">
              <form>
                <div className="login__signin-block__secondary-header">
                  <h1>{t("unauthorized.login.main-block.description.h1")}</h1>
                </div>
                <div className="login__signin-block__inputs">
                  <div className="login__signin-block__input">
                    <input
                      className="signin-block__input"
                      type="text"
                      name="email"
                      id="login-email"
                      ref={emailRef}
                      placeholder={t(
                        "unauthorized.login.main-block.signin-block.login-input"
                      )}
                      value={email}
                      onChange={emailChangeHandler}
                      onFocus={emailFocusHandler}
                      onBlur={emailBlurHandler}
                      style={{
                        borderColor: emailFocus ? "#1877f2" : null,
                        boxShadow: emailFocus ? "0 0 0 2px #e7f3ff" : null,
                      }}
                    />
                  </div>
                  <div className="login__signin-block__input">
                    <input
                      className="signin-block__input"
                      type="password"
                      name="password"
                      id="login-password"
                      placeholder={t(
                        "unauthorized.login.main-block.signin-block.password-input"
                      )}
                      value={password}
                      ref={passwordRef}
                      onChange={passwordChangeHandler}
                      onFocus={passwordFocusHandler}
                      onBlur={passwordBlurHandler}
                      style={{
                        borderColor: passwordFocus ? "#1877f2" : null,
                        boxShadow: passwordFocus ? "0 0 0 2px #e7f3ff" : null,
                      }}
                    />
                  </div>
                </div>
                <div className="login__signin-block__button">
                  <button
                    className="button-signin"
                    name="login"
                    type="submit"
                    id="login__button"
                    onClick={loginButtonSignInHandler}
                  >
                    {t(
                      "unauthorized.login.main-block.signin-block.login-button"
                    )}
                  </button>
                </div>
                <div className="login__signin-block__restore-password">
                  <a href="/">
                    {t(
                      "unauthorized.login.main-block.signin-block.restore-password"
                    )}
                  </a>
                </div>
                <div className="login__signin-block__hr"></div>
                <div className="login__signin-block__button">
                  <NavLink
                    className="button-create-account"
                    to={"/"}
                    onClick={props.displayRegistrationBlockTrue}
                  >
                    {t(
                      "unauthorized.login.main-block.signin-block.registration-button"
                    )}
                  </NavLink>
                </div>
              </form>
            </div>
            <div className="login__signin-block__help-wrapper">
              <div className="login__signin-block__help">
                <span>
                  <NavLink to={"/"}>
                    {t(
                      "unauthorized.login.main-block.signin-block.help.navLink"
                    )}
                  </NavLink>
                  &nbsp;{" "}
                  {t(
                    "unauthorized.login.main-block.signin-block.help.description"
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export const Login = compose(
  withRouter,
  connect(mapStateToProps, {
    signIn,
    displayRegistrationBlockTrue,
  })
)(Login_);
