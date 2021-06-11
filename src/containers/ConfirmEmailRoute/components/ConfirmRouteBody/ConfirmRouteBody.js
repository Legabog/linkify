import "./ConfirmRouteBody.css";

import { useTranslation } from "react-i18next";

export const ConfirmRouteBody = (props) => {
  const { t } = useTranslation();

  return (
    <div className="confirm-email-route-body">
      <span>
        {t("unauthorized.confirm-email-route.body.h2-1") + " "}
        {t("unauthorized.confirm-email-route.body.h2-2")}
      </span>
    </div>
  );
};
