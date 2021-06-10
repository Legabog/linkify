import "./ErrorRouteBody.css";

import { useTranslation } from "react-i18next";

export const ErrorRouteBody = (props) => {
  const { t } = useTranslation();
  
  return (
    <div className="error-route-body">
      <span>{t("unauthorized.error-route.body.h2")}</span>
    </div>
  );
};
