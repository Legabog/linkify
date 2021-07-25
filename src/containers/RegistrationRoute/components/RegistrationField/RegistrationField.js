import styled, { css } from "styled-components";
import { useState } from "react";
import { registrationInputValidation } from "utils/validation/registrationInputValidation";

import { RegistrationFieldError } from "pres-components/RegistrationFieldError";

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  font-size: 17px;
  color: #1d2129;
  height: 22px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 25px;

  :focus {
    outline: none;
  }

  ${(p) =>
    css`
      border: ${p.border ? "1px solid red" : "2px solid #f8f8f8"};
    `}
`;

const ErrorIcon = styled.svg.attrs({
  focusable: "false",
  viewBox: "0 0 24 24",
})`
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
  position: absolute;
  margin-left: 80%;
  color: red;

  :hover {
    cursor: help;
  }
  :active {
    transform: scale(0.95);
  }

  ${(p) =>
    css`
      display: ${p.displayBool ? null : "none"};
    `}
`;

const ErrorPath = styled.path``;

export const RegistrationField = (props) => {
  const [displayError, setDisplayError] = useState("none");

  const toggleDisplayError = (display) => {
    setDisplayError(display);
  };

  const focusInput = (id) => {
    document.getElementById(`${id}`).focus();
  };

  const blurHandler = () => {
    props.checkHandler(true);
    toggleDisplayError("none");
  };

  const focusHandler = () => {
    props.checkHandler(false);
  };

  const clickHandler = () => {
    toggleDisplayError();
    focusInput(`registration-block__input-${props.name}`);
  };

  return (
    <Container>
      <RegistrationFieldError {...props} display={displayError} />
      <Input
        type={props.type}
        className={`registration-block__input-${props.name}`}
        data-type="text"
        name={props.name}
        autoComplete="off"
        id={`registration-block__input-${props.name}`}
        placeholder={props.placeholder}
        value={props.fieldType === "confirmPassword" ? props.value.confirmPassword : props.value}
        onChange={props.valueHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
        checked={props.checked}
        border={
          props.checked &&
          registrationInputValidation(props.value, props.fieldType)
        }
      />
      <ErrorIcon
        displayBool={
          props.checked &&
          registrationInputValidation(props.value, props.fieldType)
        }
        onClick={clickHandler}
      >
        <ErrorPath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </ErrorIcon>
    </Container>
  );
};
