import "./ConfirmEmailRoute.css";

import {
  ConfirmRouteBody,
  ConfirmRouteFooter,
  ConfirmRouteHeader,
} from "containers/ConfirmEmailRoute/components";

export const ConfirmEmailRoute = (props) => {
  return (
    <div className="confirm-email-route-wrapper">
      <div className="confirm-email-route">
        <ConfirmRouteHeader />
        <ConfirmRouteBody />
        <ConfirmRouteFooter />
      </div>
    </div>
  );
};
