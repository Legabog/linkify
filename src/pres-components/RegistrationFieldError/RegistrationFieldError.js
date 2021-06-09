import "./RegistrationFieldError.css";

export const RegistrationFieldError = (props) => {
  return (
    <div
      className="registration-block__field-error"
      style={{
        display: props.display,
      }}
    >
      <div className="registration-block__field-error__label">
        <div className="registration-block__field-error__body">
          <div className="registration-block__field-error__content">
            {props.error_text}
          </div>
          <i className="registration-block__field-error__icon"></i>
        </div>
      </div>
    </div>
  );
};
