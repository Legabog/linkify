import { useTranslation } from "react-i18next";
import "./RegistrationButton.css";

export const RegistrationButton = (props) => {
  const { t } = useTranslation();
  return (
    <div className="registration-block__registration-button">
      <button
        type="submit"
        className="registration-block-registration-button"
        onClick={() => {
          props.validationInputsFields();
          props.validationResult();
        }}
      >
        {t("unauthorized.registration-block.body.registration-button")}
      </button>
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
