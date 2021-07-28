import styled, { css } from "styled-components";
import { useState } from "react";

import { registrationInputValidation } from "utils/validation/registrationInputValidation";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 10px;
`;
const Description = styled.div`
  display: flex;
  align-items: center;
  color: rgb(187, 189, 201);
  position: relative;
`;
const Selects = styled.div`
  width: 100%;
  padding-top: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const SelectWrapper = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Select = styled.select`
  width: 100%;
  font-size: 17px;
  color: #1d2129;
  padding-top: 10px;
  padding-left: 15px;
  padding-bottom: 10px;

  :focus {
    outline: none;
  }

  ${(p) =>
    css`
      border: ${p.border ? "1px solid red" : "2px solid #f8f8f8"};
    `}
`;
const Option = styled.option``;

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
  const [monthPicker] = useState(setMonthPicker());
  const [yearPicker] = useState(setYearPicker());

  const onFocusSelect = () => props.checkBirthdayHandler(false);
  const onBlurSelect = () => props.checkBirthdayHandler(true);

  return (
    <Wrapper>
      <Description>
        {t("unauthorized.registration-block.body.field-birthday.description")}
      </Description>
      <Selects>
        <SelectWrapper>
          <Select
            id="birthday-field__select-day"
            onClick={props.dayHandler}
            onBlur={onBlurSelect}
            onFocus={onFocusSelect}
            border={
              props.checkedBirthday &&
              registrationInputValidation(props.birthdayObject, "birthday")
            }
          >
            <Option value={"00"} defaultValue>
              {t(
                "unauthorized.registration-block.body.field-birthday.option-1"
              )}
            </Option>
            {dayPicker.map((e, index) => (
              <Option key={`day_${index}`} value={e < 10 ? `0${e}` : `${e}`}>
                {e}
              </Option>
            ))}
          </Select>
        </SelectWrapper>
        <SelectWrapper>
          <Select
            id="birthday-field__select-month"
            onClick={props.monthHandler}
            onBlur={onBlurSelect}
            onFocus={onFocusSelect}
            border={
              props.checkedBirthday &&
              registrationInputValidation(props.birthdayObject, "birthday")
            }
          >
            <Option value={"00"} defaultValue>
              {t(
                "unauthorized.registration-block.body.field-birthday.option-1"
              )}
            </Option>
            {monthPicker.map((e, index) => (
              <Option key={`day_${index}`} value={e < 10 ? `0${e}` : `${e}`}>
                {e}
              </Option>
            ))}
          </Select>
        </SelectWrapper>
        <SelectWrapper>
          <Select
            id="birthday-field__select-year"
            onClick={props.yearHandler}
            onBlur={onBlurSelect}
            onFocus={onFocusSelect}
            border={
              props.checkedBirthday &&
              registrationInputValidation(props.birthdayObject, "birthday")
            }
          >
            <Option value={"0000"} defaultValue>
              {t(
                "unauthorized.registration-block.body.field-birthday.option-3"
              )}
            </Option>
            {yearPicker.map((e, index) => (
              <Option key={`year_${index}`} value={`${e}`}>
                {e}
              </Option>
            ))}
          </Select>
        </SelectWrapper>
      </Selects>
    </Wrapper>
  );
};
