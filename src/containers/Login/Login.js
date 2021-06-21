import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { signIn } from "redux/auth-reducer";

import { LoginSignInBlock, LoginPartImage } from "containers/Login/components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #d6f6ff;

  ${(p) => p.adaptive}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffff;
  border-radius: 20px;
  margin: 0px 10px;
`;

const Login_ = (props) => {
  return (
    <Wrapper>
      <Container>
        <LoginSignInBlock {...props} />
        <LoginPartImage />
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  loginError: state.authReducer.loginError
});

export const Login = compose(
  withRouter,
  connect(mapStateToProps, {
    signIn,
  })
)(Login_);
