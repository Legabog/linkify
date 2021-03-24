import "./WelcomePrivacyGuide.css";

import { WelcomePrivacyGuideHeader } from "../WelcomePrivacyGuideHeader";
import { WelcomePrivacyGuideBody } from "../WelcomePrivacyGuideBody";
import { BackDrop } from "pres-components/BackDrop";
import { useTranslation } from "react-i18next";

export const WelcomePrivacyGuide = (props) => {
  const { t } = useTranslation();
  return (
    <div
      className={"welcome-privacy-guide__wrapper"}
      style={{
        visibility: `${props.privacyGuideVisibility}`,
        opacity: `${props.privacyGuideOpacity}`,
      }}
    >
      <div className={"welcome-privacy-guide"}>
        {props.privacyGuideState === 0 ? (
          <WelcomePrivacyGuideHeader {...props} />
        ) : props.privacyGuideState === 1 ? (
          <WelcomePrivacyGuideHeader arrowBack={true} {...props} />
        ) : props.privacyGuideState === 2 ? (
          <WelcomePrivacyGuideHeader arrowBack={true} {...props} />
        ) : null}

        {props.privacyGuideState === 0 ? (
          <WelcomePrivacyGuideBody
            title={t("authorized.welcome.privacy-guide.body.state-1.title")}
            description={t(
              "authorized.welcome.privacy-guide.body.state-1.description"
            )}
            slideUrl={
              "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/privacy-guide-slides%2FPrivacy-Guide-Slide_1.jpg?alt=media"
            }
            buttonNext={true}
            {...props}
          />
        ) : props.privacyGuideState === 1 ? (
          <WelcomePrivacyGuideBody
            title={t("authorized.welcome.privacy-guide.body.state-2.title")}
            description={t(
              "authorized.welcome.privacy-guide.body.state-2.description"
            )}
            slideUrl={
              "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/privacy-guide-slides%2FPrivacu-Guide-Slide_2.jpg?alt=media"
            }
            buttonNext={true}
            {...props}
          />
        ) : props.privacyGuideState === 2 ? (
          <WelcomePrivacyGuideBody
            title={t("authorized.welcome.privacy-guide.body.state-3.title")}
            description={t(
              "authorized.welcome.privacy-guide.body.state-3.description"
            )}
            slideUrl={
              "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/privacy-guide-slides%2FPrivacy-Guide-Slide_3.jpg?alt=media"
            }
            buttonNext={false}
            {...props}
          />
        ) : null}
      </div>
      <BackDrop
        zIndex={100}
        onClick={() => {
          props.togglePrivacyGuide(false);
          props.togglePrivacyGuideState(0);
        }}
      />
    </div>
  );
};
