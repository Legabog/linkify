import { useState } from "react";
import is from "is_js";

export const useRegistrationInput = (initialValue, fieldType) => {
  const [value, setValue] = useState(initialValue);
  const [checked, setChecked] = useState(false);

  const checkHandler = (boolean) => {
    if (fieldType === "telephone") {
      if (
        !boolean &&
        (is.empty(value) ||
          value.trim().split("")[0] !== "+" ||
          value.trim().split("")[1] !== "7")
      ) {
        setValue("+7");
      }
    }
    setChecked(boolean);
  };

  const changeHandler = (e) => {
    if (fieldType === "telephone") {
      setValue(e.target.value.replace(/[^0-9+]/, ""));
    } else if (fieldType === "birthday") {
      const dayHandler = (e) => setValue({ ...value, day: e.target.value });
      const monthHandler = (e) => setValue({ ...value, month: e.target.value });
      const yearHandler = (e) => setValue({ ...value, year: e.target.value });
      return [dayHandler, monthHandler, yearHandler];
    } else if (fieldType === "sex") {
      setValue(e);
    } else {
      setValue(e.target.value);
    }
  };

  const setDefaultValue = () => {
    if (fieldType === "birthday") {
      document.getElementById("birthday-field__select-day").selectedIndex = 0;
      document.getElementById("birthday-field__select-month").selectedIndex = 0;
      document.getElementById("birthday-field__select-year").selectedIndex = 0;
    } else if (fieldType === "sex") {
      setValue(0);
      document.getElementById("gender-field-input-female").checked = false;
      document.getElementById("gender-field-input-male").checked = false;
      document.getElementById("gender-field-input-other").checked = false;
    } else {
      setValue("");
    }
    setChecked(false);
  };

  return [value, changeHandler, checked, checkHandler, setDefaultValue];
};
