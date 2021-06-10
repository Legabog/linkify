import "./ConfirmedEmailRoute.css";

import { useTranslation } from "react-i18next";

import { ConfirmedEmailRouteBody, ConfirmedEmailRouteFooter, ConfirmedEmailRouteHeader } from "containers/ConfirmedEmailRoute/components";

export const ConfirmedEmailRoute = (props) => {
  return (
    <div className="confirmed-email-route-wrapper">
      <div className="confirmed-email-route">
        <ConfirmedEmailRouteHeader />
        <ConfirmedEmailRouteBody />
        <ConfirmedEmailRouteFooter />
      </div>
    </div>
  );
};
