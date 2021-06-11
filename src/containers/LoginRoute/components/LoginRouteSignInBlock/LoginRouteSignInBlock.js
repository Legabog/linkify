import "./LoginRouteSignInBlock.css";

import { useInput } from "hooks/useInput";
import { useTranslation } from "react-i18next";

import { LinkifyLogo } from "pres-components/LinkifyLogo";
import { LoginRouteDescription } from "containers/LoginRoute/components/LoginRouteDescription";
import { LoginRouteInput } from "containers/LoginRoute/components/LoginRouteInput";
import { LoginRouteError } from "containers/LoginRoute/components/LoginRouteError";
import { LoginRouteRestorePassword } from "containers/LoginRoute/components/LoginRouteRestorePassword";
import { LoginRouteButtons } from "containers/LoginRoute/components/LoginRouteButtons";
import { LoginRouteHelp } from "containers/LoginRoute/components/LoginRouteHelp";

export const LoginRouteSignInBlock = (props) => {
  const { t } = useTranslation();
  const [email, emailRef, emailChangeHandler] = useInput("");
  const [password, passwordRef, passwordChangeHandler] = useInput("");

  const inputsArray = [
    {
      type: "text",
      name: "email",
      id: "login-route-email",
      placeholder: t("unauthorized.login-route.signin-block.login-input"),
      value: email,
      ref: emailRef,
      onChange: emailChangeHandler,
    },
    {
      type: "password",
      name: "password",
      id: "login-password",
      placeholder: t("unauthorized.login.signin-block.password-input"),
      value: password,
      ref: passwordRef,
      onChange: passwordChangeHandler,
    },
  ];

  return (
    <div className="login-route-signin-block">
      <LinkifyLogo />
      <LoginRouteDescription
        tag={"h2"}
        text={t("unauthorized.login-route.description.h2")}
      />
      <LoginRouteDescription
        tag={"span"}
        text={t("unauthorized.login-route.description.span")}
      />
      <LoginRouteError {...props}/>
      <div className="login-route-signin-block__inputs-wrapper">
        <div className="login-route-signin-block__inputs">
        {inputsArray.map((e, index) => <LoginRouteInput key={`login-route-input_${index}`} inputData={e} {...props}/>)}
        </div>
      </div>
      <LoginRouteRestorePassword />
      <LoginRouteButtons email={email} password={password} {...props} />
      <LoginRouteHelp />
    </div>
  );
};
