import styled from "styled-components";
import { useState } from "react";
import "./GenderField.css";

import { RegistrationFieldError } from "pres-components/RegistrationFieldError";
import { RegistrationFormInformation } from "pres-components/RegistrationFormInformation";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div``

export const GenderField = (props) => {
  const { t } = useTranslation();
  const [displayGenderError, setDisplayGenderError] = useState("none");
  const [displayGenderInfo, setDisplayGenderInfo] = useState("none");

  const toggleDisplayGenderError = (display) => {
    setDisplayGenderError(display);
  };

  const toggleDisplayGenderInfo = () => {
    displayGenderInfo === "none"
      ? setDisplayGenderInfo()
      : setDisplayGenderInfo("none");
  };

  const focusComponent = (id) => {
    document.getElementById(`${id}`).focus();
  };

  return (
    <div className="gender-field">
      <div className="gender-field__description">
        {t("unauthorized.registration-block.body.field-gender.description")}
      </div>
      <div className="gender-field__inputs">
        <div
          className="gender-field__input"
          style={{
            border:
              props.validSex && !props.sexValidator() ? "1px solid red" : null,
          }}
        >
          <label
            className="gender-field__input__label"
            htmlFor="gender-field-input-female"
          >
            {t("unauthorized.registration-block.body.field-gender.input-1")}
          </label>
          <input
            name="gender"
            id="gender-field-input-female"
            className="gender-field-input"
            type="radio"
            value={props.sex}
            onClick={() => {
              props.sexHandler(1);
              toggleDisplayGenderError("none");
            }}
            onBlur={() => {
              toggleDisplayGenderError("none");
              props.validSexInput(false);
            }}
          />
        </div>
        <div
          className="gender-field__input"
          style={{
            border:
              props.validSex && !props.sexValidator() ? "1px solid red" : null,
          }}
        >
          <label
            className="gender-field__input__label"
            htmlFor="gender-field-input-male"
          >
            {t("unauthorized.registration-block.body.field-gender.input-2")}
          </label>
          <input
            name="gender"
            id="gender-field-input-male"
            className="gender-field-input"
            type="radio"
            value={props.sex}
            onClick={() => {
              props.sexHandler(2);
              toggleDisplayGenderError("none");
            }}
          />
        </div>
        <div
          className="gender-field__input"
          style={{
            border:
              props.validSex && !props.sexValidator() ? "1px solid red" : null,
          }}
        >
          <label
            className="gender-field__input__label"
            htmlFor="gender-field-input-other"
          >
            {t("unauthorized.registration-block.body.field-gender.input-3")}
          </label>
          <input
            name="gender"
            id="gender-field-input-other"
            className="gender-field-input"
            type="radio"
            value={props.sex}
            onClick={() => {
              props.sexHandler(-1);
              toggleDisplayGenderError("none");
            }}
          />
        </div>
      </div>
      <RegistrationFieldError
        display={displayGenderError}
        error_text={t(
          "unauthorized.registration-block.body.field-gender.error"
        )}
        error_marginLeft={"-300px"}
        error_marginTop={"-40px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />
      <RegistrationFormInformation
        info_text={t("unauthorized.registration-block.body.field-gender.help")}
        info_marginTop={
          navigator.language.slice(0, 2) === "en" ? "-70px" : "-90px"
        }
        info_marginLeft={
          navigator.language.slice(0, 2) === "en" ? "-320px" : "-340px"
        }
        info_e_marginTop={"-120px"}
        display={displayGenderInfo}
        toggleDisplayGenderInfo={toggleDisplayGenderInfo}
      />
    </div>
  );
};
