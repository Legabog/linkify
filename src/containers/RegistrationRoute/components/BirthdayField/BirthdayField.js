import { useState } from "react";
import "./BirthdayField.css";

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

  const onBlurSelect = () => {
    props.checkBirthdayField(true)
  }

  const onFocusSelect = () => {
    props.checkBirthdayField(false)
  }

  return (
    <div className="birthday-field">
      <div className="birthday-field__description">
        {t("unauthorized.registration-block.body.field-birthday.description")}
      </div>
      <div className="birthday-field__selects">
        <div className="birthday-field__block">
          <select
            className="birthday-field__block__select"
            id="birthday-field__select-day"
            onClick={props.bdayHandler}
            onBlur={onBlurSelect}
            onFocus={onFocusSelect}
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
            onBlur={onBlurSelect}
            onFocus={onFocusSelect}
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
            onBlur={onBlurSelect}
            onFocus={onFocusSelect}
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
    </div>
  );
};
