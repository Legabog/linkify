import { useTranslation } from "react-i18next";
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
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/vF9DX0rAdyp.gif"
          alt="loader"
        />
      </span>
    </div>
  );
};
