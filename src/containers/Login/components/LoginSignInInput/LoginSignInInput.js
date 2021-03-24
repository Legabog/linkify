import "./LoginSignInInput.css";

export const LoginSignInInput = (props) => {
  return (
    <div className="login__signin-block__input">
      <input
        className="signin-block__input"
        type="text"
        name="email"
        id="login-email"
        ref={emailRef}
        placeholder={t(
          "unauthorized.login.main-block.signin-block.login-input"
        )}
        value={email}
        onChange={emailChangeHandler}
        onFocus={emailFocusHandler}
        onBlur={emailBlurHandler}
        style={{
          borderColor: emailFocus ? "#1877f2" : null,
          boxShadow: emailFocus ? "0 0 0 2px #e7f3ff" : null,
        }}
      />
    </div>
  );
};
