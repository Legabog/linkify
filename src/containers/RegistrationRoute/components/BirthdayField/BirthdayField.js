import { useState } from "react";
import HelpOutlinedIcon from "@material-ui/icons/HelpOutlined";
import ErrorIcon from "@material-ui/icons/Error";
import { IconButton } from "@material-ui/core";
import "./BirthdayField.css";

import { RegistrationFieldError } from "pres-components/RegistrationFieldError";
import { RegistrationFormInformation } from "pres-components/RegistrationFormInformation";
import { useTranslation } from "react-i18next";

export const BirthdayField = (props) => {
  const { t } = useTranslation();

  const setDayPicker = () => {
    const dayPickerArr = [];
    for (let i = 1; i <= 31; i++) {
      dayPickerArr.push(i);
    }
    return dayPickerArr;
  };

  const setMonthPicker = () => {
    const monthPickerArr = [];
    for (let i = 1; i <= 12; i++) {
      monthPickerArr.push(i);
    }
    return monthPickerArr;
  };

  const setYearPicker = () => {
    const yearPickerArr = [];
    const nowYear = new Date().getFullYear();
    for (let i = nowYear; i >= 1900; i--) {
      yearPickerArr.push(i);
    }
    return yearPickerArr;
  };

  const [dayPicker] = useState(setDayPicker());
  const [MonthPicker] = useState(setMonthPicker());
  const [YearPicker] = useState(setYearPicker());

  const [displayBirthdayError, setDisplayBirthdayError] = useState("none");
  const [displayBirthdayInfo, setDisplayBirthdayInfo] = useState("none");

  const toggleDisplayBirthdayError = (display) => {
    setDisplayBirthdayError(display);
  };

  const toggleDisplayBirthdayInfo = () => {
    displayBirthdayInfo === "none"
      ? setDisplayBirthdayInfo()
      : setDisplayBirthdayInfo("none");
  };

  const clickHelpButton = (e) => {
    e.preventDefault();
    focusComponent("birthday-field__help-button");
  }

  const clickErrorButton = () => {
    toggleDisplayBirthdayError();
    focusComponent("birthday-field__select-day");
  }

  const focusComponent = (id) => {
    document.getElementById(`${id}`).focus();
  };

  return (
    <div className="birthday-field">
      <div className="birthday-field__description">
        {t("unauthorized.registration-block.body.field-birthday.description")}
        <IconButton
          id="birthday-field__help-button"
          onBlur={toggleDisplayBirthdayInfo}
          onFocus={toggleDisplayBirthdayInfo}
          onClick={clickHelpButton}
        >
          <HelpOutlinedIcon />
        </IconButton>
        <ErrorIcon
          className="birthday-field__error-icon"
          style={{
            display:
              props.checkedBirthdayInput && props.birthdayValidator()
                ? null
                : "none",
          }}
          onClick={clickErrorButton}
        />
      </div>

      <div className="birthday-field__selects">
        <div className="birthday-field__block">
          <select
            className="birthday-field__block__select"
            id="birthday-field__select-day"
            onClick={props.bdayHandler}
            onBlur={() => {
              props.checkBirthdayField(true);
              toggleDisplayBirthdayError("none");
            }}
            onFocus={() => {
              props.checkBirthdayField(false);
            }}
            style={{
              border:
                props.checkedBirthdayInput && props.birthdayValidator()
                  ? "1px solid red"
                  : null,
            }}
          >
            <option value={"00"} defaultValue>
              {t(
                "unauthorized.registration-block.body.field-birthday.option-1"
              )}
            </option>
            {dayPicker.map((e, index) => (
              <option key={`day_${index}`} value={e < 10 ? `0${e}` : `${e}`}>
                {e}
              </option>
            ))}
          </select>
        </div>

        <div className="birthday-field__block">
          <select
            className="birthday-field__block__select"
            id="birthday-field__select-month"
            onClick={props.mdayHandler}
            onBlur={() => {
              props.checkBirthdayField(true);
              toggleDisplayBirthdayError("none");
            }}
            onFocus={() => {
              props.checkBirthdayField(false);
            }}
            style={{
              border:
                props.checkedBirthdayInput && props.birthdayValidator()
                  ? "1px solid red"
                  : null,
            }}
          >
            <option value={"00"} defaultValue>
              {t(
                "unauthorized.registration-block.body.field-birthday.option-2"
              )}
            </option>
            {MonthPicker.map((e, index) => (
              <option key={`month_${index}`} value={e < 10 ? `0${e}` : `${e}`}>
                {t(
                  `unauthorized.registration-block.body.field-birthday.month-${e}`
                )}
              </option>
            ))}
          </select>
        </div>

        <div className="birthday-field__block">
          <select
            className="birthday-field__block__select"
            id="birthday-field__select-year"
            onClick={props.ydayHandler}
            onBlur={() => {
              props.checkBirthdayField(true);
              toggleDisplayBirthdayError("none");
            }}
            onFocus={() => {
              props.checkBirthdayField(false);
            }}
            style={{
              border:
                props.checkedBirthdayInput && props.birthdayValidator()
                  ? "1px solid red"
                  : null,
            }}
          >
            <option value={"0000"} defaultValue>
              {t(
                "unauthorized.registration-block.body.field-birthday.option-3"
              )}
            </option>
            {YearPicker.map((e, index) => (
              <option key={`year_${index}`} value={`${e}`}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
      <RegistrationFieldError
        display={displayBirthdayError}
        // error
        error_text={t(
          "unauthorized.registration-block.body.field-birthday.error"
        )}
        error_marginLeft={"-300px"}
        error_marginTop={"-50px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />
      <RegistrationFormInformation
        info_text={t(
          "unauthorized.registration-block.body.field-birthday.help"
        )}
        info_marginTop={"-80px"}
        info_marginLeft={
          navigator.language.slice(0, 2) === "en" ? "-290px" : "-270px"
        }
        info_e_marginTop={"-160px"}
        display={displayBirthdayInfo}
        toggleDisplayBirthdayInfo={toggleDisplayBirthdayInfo}
      />
    </div>
  );
};
