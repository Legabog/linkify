import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
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
  height: 600px;
  justify-content: center;
  background-color: #ffff;
  border-radius: 20px;
  margin: 0px 10px;
`;

const adaptive = css`
  @media only screen and (max-height: 620px) and (orientation: landscape) {
    ${Container} {
      height: 500px;
    }
  }
  @media only screen and (max-height: 520px) and (orientation: landscape) {
    ${Container} {
      height: 400px;
    }
  }
  @media only screen and (max-height: 420px) and (orientation: landscape) {
    ${Container} {
      height: 300px;
    }
  }
  @media only screen and (max-height: 320px) and (orientation: landscape) {
    ${Container} {
      height: 260px;
    }
  }
`

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
  withRouter,
  connect(mapStateToProps, {
    signIn,
  })
)(Login_);
