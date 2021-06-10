import "./LoginInput.css";

export const LoginInput = (props) => {
  return (
    <>
      <input
        className="signin-block-input"
        type={props.input_text}
        name={props.input_name}
        id={props.input_id}
        ref={props.input_ref}
        placeholder={props.input_placeholder}
        value={props.input_value}
        onChange={props.inputChangeHandler}
        onFocus={props.inputFocusHandler}
        onBlur={props.inputBlurHandler}
        style={{
          borderColor: props.inputFocus ? "#7FC8FF" : null,
          boxShadow: props.inputFocus ? "0 0 0 2px #e7f3ff" : null,
        }}
      />
    </>
  );
};
