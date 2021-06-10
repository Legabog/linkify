import "./ErrorRoute.css";

import { ErrorRouteBody, ErrorRouteFooter, ErrorRouteHeader } from "containers/ErrorRoute/components";


export const ErrorRoute = (props) => {
  return (
    <div className="error-route-wrapper">
      <div className="error-route">
        <ErrorRouteHeader />
        <ErrorRouteBody />
        <ErrorRouteFooter />
      </div>
    </div>
  );
};
