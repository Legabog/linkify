import "./LoginInput.css";

export const LoginInput = (props) => {
  return (
    <>
      <input
        className="signin-block-input"
        type={props.inputData.input_type}
        name={props.inputData.input_name}
        id={props.inputData.input_id}
        ref={props.inputData.input_ref}
        placeholder={props.inputData.input_placeholder}
        value={props.inputData.input_value}
        onChange={props.inputData.inputChangeHandler}
        onFocus={props.inputData.inputFocusHandler}
        onBlur={props.inputData.inputBlurHandler}
        style={{
          borderColor: props.inputData.inputFocus ? "#7FC8FF" : null,
          boxShadow: props.inputData.inputFocus ? "0 0 0 2px #e7f3ff" : null,
        }}
      />
    </>
  );
};
