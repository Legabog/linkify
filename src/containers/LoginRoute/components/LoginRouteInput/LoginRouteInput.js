import "./LoginRouteInput.css";

export const LoginRouteInput = (props) => {
  return (
    <div className="login-route-input-wrapper">
      <input
        className="login-route-input"
        type={props.inputData.text}
        name={props.inputData.name}
        id={props.inputData.id}
        placeholder={props.inputData.placeholder}
        value={props.inputData.value}
        ref={props.inputData.ref}
        onChange={props.inputData.onChange}
        style={{
          borderColor: props.loginError ? "red" : null,
        }}
      />
    </div>
  );
};
