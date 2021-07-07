import { Suspense } from "react";
import i18n from "../../i18n";
import { render, waitFor } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import {
  ConfirmEmailRouteHeader,
  ConfirmEmailRouteBody,
  ConfirmEmailRouteFooter,
} from "../../containers/ConfirmEmailRoute/components";

describe("ConfirmEmailRoute", () => {
  it("header should have <h1> with i18n locales", async () => {
    const { getByText } = render(
      <Suspense fallback="Loading...">
        <I18nextProvider i18n={i18n}>
          <ConfirmEmailRouteHeader />
        </I18nextProvider>
      </Suspense>
    );

    await waitFor(() =>
      expect(
        getByText("unauthorized.confirm-email-route.header.h1")
      ).toBeDefined()
    );
  });
  it("body should have <span> with i18n locales", async () => {
    const { getByText } = render(
      <Suspense fallback="Loading...">
        <I18nextProvider i18n={i18n}>
          <ConfirmEmailRouteBody />
        </I18nextProvider>
      </Suspense>
    );

    await waitFor(() =>
      expect(
        getByText(
          "unauthorized.confirm-email-route.body.h2-1 unauthorized.confirm-email-route.body.h2-2"
        )
      ).toBeDefined()
    );
  });
  it("footer should have button with i18n locales", async () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Suspense fallback="Loading...">
        <Router history={history}>
          <I18nextProvider i18n={i18n}>
            <ConfirmEmailRouteFooter />
          </I18nextProvider>
        </Router>
      </Suspense>
    );

    await waitFor(() =>
      expect(
        getByText("unauthorized.confirm-email-route.button-back.navLink")
      ).toBeDefined()
    );
  });
})
