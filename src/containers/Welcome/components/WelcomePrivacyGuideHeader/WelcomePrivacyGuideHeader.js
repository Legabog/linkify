import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./WelcomePrivacyGuideHeader.css";
import { useTranslation } from "react-i18next";

export const WelcomePrivacyGuideHeader = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"WelcomePrivacyGuideHeader"}>
      {props.arrowBack ? (
        <div className={"WelcomePrivacyGuideHeader__backIcon"}>
          <IconButton
            onClick={() => {
              if (props.privacyGuideState === 1) {
                props.togglePrivacyGuideState(0);
              } else {
                if (props.privacyGuideState === 2) {
                  props.togglePrivacyGuideState(1);
                }
              }
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </div>
      ) : null}
      <div className={"WelcomePrivacyGuideHeader__title"}>
        <span>{t("authorized.welcome.privacy-guide.header.title")}</span>
      </div>
      <div className={"WelcomePrivacyGuideHeader__closeIcon"}>
        <IconButton
          onClick={() => {
            props.togglePrivacyGuide(false);
            props.togglePrivacyGuideState(0);
          }}
        >
          <CloseOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};
