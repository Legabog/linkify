import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./Welcome.css";

import {
  togglePrivacyGuide,
  togglePrivacyGuideState,
} from "redux/welcome-component-reducer";

import { WelcomePrivacyGuide } from "./components/WelcomePrivacyGuide";
import { WelcomePrivacySection } from "./components/WelcomePrivacySection";
import { WelcomeSearchSection } from "./components/WelcomeSearchSection";
import { useTranslation } from "react-i18next";

const Welcome_ = (props) => {
  const { t } = useTranslation()
  return (
    <div className={"welcome__wrapper"}>
      <div className={"welcome"}>
        <span>
          {t("authorized.welcome.span")}
          {props.user === null || props.user.Name === ""
            ? null
            : props.user.Name}
        </span>
      </div>

      <WelcomeSearchSection />
      <WelcomePrivacySection {...props}/>
      <WelcomePrivacyGuide {...props}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  privacyGuideState: state.welcomeComponentReducer.privacyGuideState,
  privacyGuideVisibility:
    state.welcomeComponentReducer.privacyGuideVisibility,
  privacyGuideOpacity: state.welcomeComponentReducer.privacyGuideOpacity,
});

export const Welcome = compose(
  withRouter,
  connect(mapStateToProps, {
    togglePrivacyGuide,
    togglePrivacyGuideState
  })
)(Welcome_);
