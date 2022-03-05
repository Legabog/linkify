import { connect } from "react-redux";
import { compose } from "redux";
import styled, { css } from "styled-components";

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
  height: 90%;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 30px;
`;

const adaptive = css`
  @media only screen and (max-width: 600px) {
    ${Container} {
      width: 100%;
      height: 100%;
      margin-left: 0px;
      margin-right: 0px;
      border-radius: 0px;
    }
  }
`;

const Login_ = (props) => {
  return (
    <Wrapper adaptive={adaptive}>
      <Container>
        <LoginSignInBlock {...props} />
        <LoginPartImage />
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  loginError: state.authReducer.loginError,
});

export const Login = compose(
  connect(mapStateToProps, {
    signIn,
  })
)(Login_);
