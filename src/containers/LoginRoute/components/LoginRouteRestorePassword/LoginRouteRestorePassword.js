import "./LoginRouteRestorePassword.css";

import { useTranslation } from "react-i18next";

export const LoginRouteRestorePassword = (props) => {
  const { t } = useTranslation()

  return (
    <div className="login-route-restore-password">
      <a href="/">{t("unauthorized.login.signin-block.restore-password")}</a>
    </div>
  );
};
