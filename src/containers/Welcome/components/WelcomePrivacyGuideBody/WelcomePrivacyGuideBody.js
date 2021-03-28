import { useTranslation } from "react-i18next";
import "./WelcomePrivacyGuideBody.css";

export const WelcomePrivacyGuideBody = (props) => {
  const { t } = useTranslation();

  const clickButtonNextHandler = () => {
    props.welcomePrivacyGuideState === 0
      ? props.togglePrivacyGuideState(1)
      : props.togglePrivacyGuideState(2);
  };

  const clickButtonFinishHandler = () => {
    props.togglePrivacyGuide(false);
  };

  const clickButtonHandler = () => {
    props.buttonNext ? clickButtonNextHandler() : clickButtonFinishHandler();
  };

  return (
    <div className={"welcome-privacy-guide-body__wrapper"}>
      <div className={"welcome-privacy-guide-body"}>
        <div className={"welcome-privacy-guide-body__title"}>
          <span>{props.title}</span>
        </div>
        <div className={"welcome-privacy-guide-body__description"}>
          <span>{props.description}</span>
        </div>
        <div className={"welcome-privacy-guide-body__img"}>
          <img src={props.slideUrl} alt="description" />
        </div>
        <div className={"welcome-privacy-guide-body__progress-bar"}>
          <div
            className={"welcome-privacy-guide-body__progress-line"}
            style={{
              width:
                props.welcomePrivacyGuideState === 0
                  ? "33%"
                  : props.welcomePrivacyGuideState === 1
                  ? "66%"
                  : props.welcomePrivacyGuideState === 2
                  ? "100%"
                  : null,
              borderRadius:
                props.welcomePrivacyGuideState === 2 ? "500px" : null,
            }}
          ></div>
        </div>
        <div className={"welcome-privacy-guide-body__footer"}>
          <div
            className={"welcome-privacy-guide-body__button"}
            onClick={clickButtonHandler}
          >
            <span>
              {props.buttonNext
                ? t("authorized.welcome.privacy-guide.body.button-next_1")
                : t("authorized.welcome.privacy-guide.body.button-next_2")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
