import i18n from "../../i18n";
import { render, waitFor } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "redux/root-reducer";
import { createMemoryHistory } from "history";
import { Login } from "../../containers/Login";
import { Suspense } from "react";

describe("Login", () => {
  it("login signin should conatins all elements with i18n locales", async () => {
    const history = createMemoryHistory();
    const { getByText, getByPlaceholderText, getByAltText } = render(
      <Suspense fallback="Loading...">
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <Router history={history}>
              <Login />
            </Router>
          </Provider>
        </I18nextProvider>
      </Suspense>
    );
    // SignIn part
    // Logo
    await waitFor(() => expect(getByText("Linkify")).toBeDefined());
    // Description
    await waitFor(() =>
      expect(getByText("unauthorized.login.description.h2")).toBeDefined()
    );
    await waitFor(() =>
      expect(getByText("unauthorized.login.description.span")).toBeDefined()
    );
    // Inputs
    await waitFor(() =>
      expect(
        getByPlaceholderText("unauthorized.login.signin-block.login-input")
      ).toBeDefined()
    );
    await waitFor(() =>
      expect(
        getByPlaceholderText("unauthorized.login.signin-block.password-input")
      ).toBeDefined()
    );
    // Forget password
    await waitFor(() =>
      expect(
        getByText("unauthorized.login.signin-block.restore-password")
      ).toBeDefined()
    );
    // Buttons
    await waitFor(() =>
      expect(
        getByText("unauthorized.login.signin-block.login-button")
      ).toBeDefined()
    );
    await waitFor(() =>
      expect(
        getByText("unauthorized.login.signin-block.registration-button")
      ).toBeDefined()
    );
    // Help
    await waitFor(() =>
      expect(
        getByText("unauthorized.login.signin-block.help.navLink")
      ).toBeDefined()
    );
    await waitFor(() =>
      expect(
        getByText("unauthorized.login.signin-block.help.description")
      ).toBeDefined()
    );
    // Image part
    await waitFor(() => expect(getByAltText("part-image")).toBeDefined());
  });
  it("login signin should contains error message", async () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Suspense fallback="Loading...">
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <Router history={history}>
              <Login loginError={true} />
            </Router>
          </Provider>
        </I18nextProvider>
      </Suspense>
    );

    // Error message
    await waitFor(() =>
      expect(
        getByText("unauthorized.login.signin-block.error-info")
      ).toBeDefined()
    );
  });
});
