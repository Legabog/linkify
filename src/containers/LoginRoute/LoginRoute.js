import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./LoginRoute.css";

import { signIn } from "redux/auth-reducer";

import { LoginRouteSignInBlock } from "containers/LoginRoute/components";

const LoginRoute_ = (props) => {
 

  return (
    <div className="login-route-wrapper">
      <div className="login-route">
        <LoginRouteSignInBlock {...props}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginError: state.authReducer.loginError,
});

export const LoginRoute = compose(
  withRouter,
  connect(mapStateToProps, {
    signIn,
  })
)(LoginRoute_);
