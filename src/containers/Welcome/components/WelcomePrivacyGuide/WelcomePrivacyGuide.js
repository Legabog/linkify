import "./WelcomePrivacyGuide.css";

import { WelcomePrivacyGuideHeader } from "../WelcomePrivacyGuideHeader";
import { WelcomePrivacyGuideBody } from "../WelcomePrivacyGuideBody";
import { BackDrop } from "pres-components/BackDrop";
import { useTranslation } from "react-i18next";

export const WelcomePrivacyGuide = (props) => {
  const { t } = useTranslation();

  const clickBackDropHandler = () => {
    props.togglePrivacyGuide(false);
  };

  return (
    <div
      className={"welcome-privacy-guide__wrapper"}
      style={{
        visibility: `${props.welcomePrivacyGuideVisibility}`,
        opacity: `${props.welcomePrivacyGuideOpacity}`,
      }}
    >
      <div className={"welcome-privacy-guide"}>
        <WelcomePrivacyGuideHeader
          arrowBack={props.welcomePrivacyGuideState !== 0 ? true : false}
          {...props}
        />

        <WelcomePrivacyGuideBody
          title={
            props.welcomePrivacyGuideState === 0
              ? t("authorized.welcome.privacy-guide.body.state-1.title")
              : props.welcomePrivacyGuideState === 1
              ? t("authorized.welcome.privacy-guide.body.state-2.title")
              : t("authorized.welcome.privacy-guide.body.state-3.title")
          }
          description={
            props.welcomePrivacyGuideState === 0
              ? t("authorized.welcome.privacy-guide.body.state-1.description")
              : props.welcomePrivacyGuideState === 1
              ? t("authorized.welcome.privacy-guide.body.state-2.description")
              : t("authorized.welcome.privacy-guide.body.state-3.description")
          }
          slideUrl={
            props.welcomePrivacyGuideState === 0
              ? process.env.REACT_APP_PRIVACY_GUIDE_SLIDE_1
              : props.welcomePrivacyGuideState === 1
              ? process.env.REACT_APP_PRIVACY_GUIDE_SLIDE_2
              : process.env.REACT_APP_PRIVACY_GUIDE_SLIDE_3
          }
          buttonNext={props.welcomePrivacyGuideState !== 2 ? true : false}
          {...props}
        />
      </div>
      <BackDrop zIndex={100} onClick={clickBackDropHandler} />
    </div>
  );
};
