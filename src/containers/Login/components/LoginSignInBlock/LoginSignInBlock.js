import "./LoginSignInBlock.css";

import { useTranslation } from "react-i18next";
import { useInput } from "hooks/useInput";

import { LinkifyLogo } from "pres-components/LinkifyLogo";
import { LoginDescription } from "containers/Login/components/LoginDescription";
import { LoginInput } from "containers/Login/components/LoginInput";
import { LoginRestorePassword } from "containers/Login/components/LoginRestorePassword";
import { LoginButtons } from "containers/Login/components/LoginButtons";
import { LoginHelp } from "containers/Login/components/LoginHelp";

export const LoginSignInBlock = (props) => {
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

  return (
    <div className="login-signin-block">
      <LinkifyLogo />
      <LoginDescription
        tag={"h2"}
        text={t("unauthorized.login.description.h2")}
        padding_top={"50px"}
      />
      <LoginDescription
        tag={"span"}
        text={t("unauthorized.login.description.span")}
        padding_top={"20px"}
      />
      <div className="login-signin-block__inputs-wrapper">
        <div className="login-signin-block__inputs">
          <LoginInput
            input_type={"text"}
            input_name={"email"}
            input_id={"login-email"}
            input_ref={emailRef}
            input_placeholder={t("unauthorized.login.signin-block.login-input")}
            input_value={email}
            inputChangeHandler={emailChangeHandler}
            inputFocusHandler={emailFocusHandler}
            inputBlurHandler={emailBlurHandler}
            inputFocus={emailFocus}
          />
          <LoginInput
            input_type={"password"}
            input_name={"passwird"}
            input_id={"login-password"}
            input_ref={passwordRef}
            input_placeholder={t(
              "unauthorized.login.signin-block.password-input"
            )}
            input_value={password}
            inputChangeHandler={passwordChangeHandler}
            inputFocusHandler={passwordFocusHandler}
            inputBlurHandler={passwordBlurHandler}
            inputFocus={passwordFocus}
          />
        </div>
      </div>
      <LoginRestorePassword
        text={t("unauthorized.login.signin-block.restore-password")}
      />
      <LoginButtons
        {...props}
        email={email}
        password={password}
        signIn={props.signIn}
      />
      <LoginHelp />
    </div>
  );
};
