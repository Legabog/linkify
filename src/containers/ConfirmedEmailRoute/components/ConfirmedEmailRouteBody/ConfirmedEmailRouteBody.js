import "./ConfirmedEmailRouteBody.css";

import { useTranslation } from "react-i18next";

export const ConfirmedEmailRouteBody = (props) => {
  const { t } = useTranslation()

  return (
    <div className="confirmed-email-route-body">
      <span>
        {t("unauthorized.confirmed-email-route.body.h2-1") + " "}
        {t("unauthorized.confirmed-email-route.body.h2-2")}
      </span>
    </div>
  );
};
