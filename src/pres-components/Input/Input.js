import styled, { css } from "styled-components";

const Component = styled.input`
  font-size: 17px;
  width: 100%;
  border: 2px solid #f8f8f8;
  color: #1d2129;
  height: 22px;
  padding-top: 15px;
  padding-left: 15px;
  padding-bottom: 15px;

  :focus {
    outline: none !important;
  }

  ${(p) => css`
    border-color: ${p.inputError ? "#F62A54" : p.inputFocus ? "#7FC8FF" : null};
    box-shadow: ${p.inputFocus ? "0 0 0 2px #e7f3ff" : null};
  `}
`;
export const Input = ({ inputData }) => {
  return (
    <Component
      type={inputData.input_type}
      name={inputData.input_name}
      id={inputData.input_id}
      ref={inputData.input_ref}
      placeholder={inputData.input_placeholder}
      value={inputData.input_value}
      onChange={inputData.inputChangeHandler}
      onFocus={inputData.inputFocusHandler}
      onBlur={inputData.inputBlurHandler}
      inputFocus={inputData.inputFocus}
      inputError={inputData.inputError}
    />
  );
};
