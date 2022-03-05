import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { useTranslation } from 'react-i18next';
import { useInput } from 'hooks/useInput';

import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { LinkifyLogo, Input, Button } from 'pres-components';

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100%;
  overflow: auto;

  ${(p) => p.adaptive}
`;

const SecondaryWrapper = styled.div``;

const Description = styled.div`
  display: flex;
  align-self: start;
  align-items: center;

  & h2 {
    padding-top: 50px;
    color: #4e6482;
  }
  & span {
    padding-top: 20px;
    color: rgb(187, 189, 201);
  }
`;

const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const ErrorWrapper = styled.div`
  width: 100%;
  justify-content: flex-start;
  align-items: center;

  ${(p) =>
    css`
      display: ${p.loginError ? 'flex' : 'none'};
    `}
`;

const Error = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    color: #f62a54;
  }
`;

const ErrorText = styled.span`
  padding-left: 10px;
  color: #f62a54;

  & > a {
    text-decoration: none;
    font-weight: 600;
    color: #f62a54;
  }
`;

const RestorePassword = styled.div`
  width: 100%;
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;

  & > a {
    color: #4e6482;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
`;

const HelpWrapper = styled.div`
  padding-top: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Help = styled.span`
  color: rgb(187, 189, 201);
  font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;

  & > a {
    color: #4e6482;
    font-family: SFProText-Semibold, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
  }
`;

const adaptive = css`
  @media only screen and (max-width: 750px) {
    width: 100%;
  }
  @media only screen and (max-width: 400px) {
    width: 90%;

    ${Description} h2 {
      padding-top: 20px;
    }
  }
  @media only screen and (max-width: 380px) {
    padding: 0px 0px;

    ${Description} span {
      display: none;
    }

    ${Buttons} {
      padding-top: 20px;
      display: block;
    }
  }
  @media only screen and (max-height: 580px) and (orientation: landscape) {
    ${SecondaryWrapper} {
      height: 100%;
    }
    ${Help} {
      padding-bottom: 20px;
    }
  }
`;

const customLogoStyle = css`
  @media only screen and (max-height: 580px) and (orientation: landscape) {
    padding-top: 20px;
  }
`;

export const LoginSignInBlock = ({ signIn, loginError, history }) => {
  const { t } = useTranslation();

  const [email, emailRef, emailChangeHandler, emailFocus, emailFocusHandler, emailBlurHandler] =
    useInput('');

  const [
    password,
    passwordRef,
    passwordChangeHandler,
    passwordFocus,
    passwordFocusHandler,
    passwordBlurHandler,
  ] = useInput('');

  const inputsOptions = [
    {
      input_type: 'text',
      input_name: 'email',
      input_id: 'login-email',
      input_ref: emailRef,
      input_placeholder: t('unauthorized.login.signin-block.login-input'),
      input_value: email,
      inputChangeHandler: emailChangeHandler,
      inputFocusHandler: emailFocusHandler,
      inputBlurHandler: emailBlurHandler,
      inputFocus: emailFocus,
      inputError: loginError,
    },
    {
      input_type: 'password',
      input_name: 'password',
      input_id: 'login-password',
      input_ref: passwordRef,
      input_placeholder: t('unauthorized.login.signin-block.password-input'),
      input_value: password,
      inputChangeHandler: passwordChangeHandler,
      inputFocusHandler: passwordFocusHandler,
      inputBlurHandler: passwordBlurHandler,
      inputFocus: passwordFocus,
      inputError: loginError,
    },
  ];

  const loginButtonSignInHandler = () => {
    signIn(email, password);
  };

  const loginButtonSignUpHandler = () => {
    history.push('/signup');
  };

  return (
    <Wrapper adaptive={adaptive}>
      <SecondaryWrapper>
        <LinkifyLogo customStyle={customLogoStyle} />
        <Description>
          <h2>{t('unauthorized.login.description.h2')}</h2>
        </Description>
        <Description>
          <span>{t('unauthorized.login.description.span')}</span>
        </Description>
        <ErrorWrapper loginError={loginError}>
          <Error>
            <WarningRoundedIcon />
            <ErrorText>{t('unauthorized.login.signin-block.error-info')}</ErrorText>
          </Error>
        </ErrorWrapper>
        <InputsWrapper>
          {inputsOptions.map((e, index) => (
            <Input key={`login-input_${index}`} inputData={e} />
          ))}
        </InputsWrapper>
        <RestorePassword>
          <NavLink to=''>{t('unauthorized.login.signin-block.restore-password')}</NavLink>
        </RestorePassword>
        <Buttons>
          <Button
            buttonStyle='classic'
            clickHandler={loginButtonSignInHandler}
            insideElements={<span>{t('unauthorized.login.signin-block.login-button')}</span>}
          />
          <Button
            buttonStyle='primary'
            clickHandler={loginButtonSignUpHandler}
            customStyle={css`
              margin-left: 15px;
            `}
            insideElements={<span>{t('unauthorized.login.signin-block.registration-button')}</span>}
          />
        </Buttons>
        <HelpWrapper>
          <Help>
            <NavLink to={'/signup'}>{t('unauthorized.login.signin-block.help.navLink')}</NavLink>
            &nbsp; {t('unauthorized.login.signin-block.help.description')}
          </Help>
        </HelpWrapper>
      </SecondaryWrapper>
    </Wrapper>
  );
};
