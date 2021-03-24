import { useTranslation } from "react-i18next";
import "./RegistrationBlockError.css";

export const RegistrationBlockError = (props) => {
  const { t } = useTranslation();

  return (
    <div
      className="registration-block__error"
      style={{ display: props.registrationError ? null : "none" }}
    >
      <div className="registration-block__error__description">
        {t(
          "unauthorized.registration-block.body.registration-error.description-1"
        )}
        <br />
        {t(
          "unauthorized.registration-block.body.registration-error.description-2"
        )}
        <br />
        {t(
          "unauthorized.registration-block.body.registration-error.description-3"
        )}
      </div>
    </div>
  );
};
