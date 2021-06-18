import { Suspense } from "react";
import i18n from "../../i18n";
import { render, waitFor } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import {
  ErrorRouteHeader,
  ErrorRouteBody,
  ErrorRouteFooter,
} from "../../containers/ErrorRoute/components";

describe("ErrorRoute", () => {
  it("header should have <h1> with i18n locales", async () => {
    const { getByText } = render(
      <Suspense fallback="Loading...">
        <I18nextProvider i18n={i18n}>
          <ErrorRouteHeader />
        </I18nextProvider>
      </Suspense>
    );

    await waitFor(() =>
      expect(getByText("unauthorized.error-route.header.h1")).toBeDefined()
    );
  });
  it("body should have <span> with i18n locales", async () => {
    const { getByText } = render(
      <Suspense fallback="Loading...">
        <I18nextProvider i18n={i18n}>
          <ErrorRouteBody />
        </I18nextProvider>
      </Suspense>
    );

    await waitFor(() =>
      expect(getByText("unauthorized.error-route.body.h2")).toBeDefined()
    );
  });
  it("footer should have button with i18n locales, button is a route to '/'", async () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Suspense fallback="Loading...">
        <Router history={history}>
          <I18nextProvider i18n={i18n}>
            <ErrorRouteFooter />
          </I18nextProvider>
        </Router>
      </Suspense>
    );

    await waitFor(() =>
      expect(
        getByText("unauthorized.error-route.button-back.navLink")
      ).toBeDefined()
    );

    expect(
      getByText("unauthorized.error-route.button-back.navLink").href
    ).toMatch("/");
  });
});
