import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./Login.css";

import { signIn } from "redux/auth-reducer";

import { LoginSignInBlock } from "containers/Login/components/LoginSignInBlock/LoginSignInBlock";
import { LoginPartImage } from "containers/Login/components";

const Login_ = (props) => {
  return (
    <div className="login-wrapper">
      <div className="login">
        <LoginSignInBlock {...props}/>
        <LoginPartImage />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export const Login = compose(
  withRouter,
  connect(mapStateToProps, {
    signIn,
  })
)(Login_);
