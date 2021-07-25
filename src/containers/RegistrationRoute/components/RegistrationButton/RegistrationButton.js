import { useTranslation } from "react-i18next";
import registration_preloader from "assets/images/registration-preloader.gif"
import "./RegistrationButton.css";

export const RegistrationButton = (props) => {
  const { t } = useTranslation();
  const clickHandler = () => {
    props.validationInputsFields();
    props.validationResult();
  };

  return (
    <div className="registration-block__registration-button">
      <div
        className="registration-block-registration-button"
        onClick={clickHandler}
      >
        <span>{t("unauthorized.registration-block.body.registration-button")}</span>
      </div>
      <span
        className="registration-block__loader"
        style={{
          display: props.registrationFetching ? null : "none",
        }}
      >
        <img
          className="registration-block-loader"
          src={registration_preloader}
          alt="loader"
        />
      </span>
    </div>
  );
};
