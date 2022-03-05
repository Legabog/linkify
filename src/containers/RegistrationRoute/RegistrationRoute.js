import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { compose } from "redux";

import { signUp } from "redux/auth-reducer";
import { useRegistrationInput } from "hooks/useRegistrationInput";
import { registrationInputValidation } from "utils/validation/registrationInputValidation";

import { RegistrationBlockHeader, RegistrationBlockBody } from "./components";

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 0px 30px;
  background-color: #fff;
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

const RegistrationRoute_ = (props) => {
  const [name, nameHandler, checkedName, checkNameHandler, setDefaultName] =
    useRegistrationInput("", "name");
  const [
    surname,
    surnameHandler,
    checkedSurname,
    checkSurnameHandler,
    setDefaultSurname,
  ] = useRegistrationInput("", "surname");
  const [
    telephone,
    telephoneHandler,
    checkedTelephone,
    checkTelephoneHandler,
    setDefaultTelephone,
  ] = useRegistrationInput("", "telephone");
  const [
    email,
    emailHandler,
    checkedEmail,
    checkEmailHandler,
    setDefaultEmail,
  ] = useRegistrationInput("", "email");
  const [
    password,
    passwordHandler,
    checkedPassword,
    checkPasswordHandler,
    setDefaultPassword,
  ] = useRegistrationInput("", "password");
  const [
    confirmPassword,
    confirmPasswordHandler,
    checkedConfirmPassword,
    checkConfirmPasswordHandler,
    setDefaultConfirmPassword,
  ] = useRegistrationInput("", "confirmPassword");
  const [
    birthday,
    birthdayHandler,
    checkedBirthday,
    checkBirthdayHandler,
    setDefaultBirthday,
  ] = useRegistrationInput({ day: "00", month: "00", year: "0000" }, "birthday");
  const [sex, sexHandler, checkedSex, checkSexHandler, setDefaultSex] =
    useRegistrationInput(0, "sex");
  const validationInputsFields = () => {
    registrationInputValidation(name, "name")
      ? checkNameHandler(true)
      : checkNameHandler(false);
    registrationInputValidation(surname, "surname")
      ? checkSurnameHandler(true)
      : checkSurnameHandler(false);
    registrationInputValidation(telephone, "telephone")
      ? checkTelephoneHandler(true)
      : checkTelephoneHandler(false);
    registrationInputValidation(email, "email")
      ? checkEmailHandler(true)
      : checkEmailHandler(false);
    registrationInputValidation(password, "password")
      ? checkPasswordHandler(true)
      : checkPasswordHandler(false);
    registrationInputValidation({password, confirmPassword}, "confirmPassword")
      ? checkConfirmPasswordHandler(true)
      : checkConfirmPasswordHandler(false);
    registrationInputValidation(birthday, "birthday")
      ? checkBirthdayHandler(true)
      : checkBirthdayHandler(false);
    registrationInputValidation(sex, "sex")
      ? checkSexHandler(true)
      : checkSexHandler(false);
  };

  const validationResult = () => {
    if (
      !registrationInputValidation(name, "name") &&
      !registrationInputValidation(surname, "surname") &&
      !registrationInputValidation(telephone, "telephone") &&
      !registrationInputValidation(email, "email") &&
      !registrationInputValidation(password, "password") &&
      !registrationInputValidation({password, confirmPassword}, "confirmPassword") &&
      !registrationInputValidation(birthday, "birthday") &&
      !registrationInputValidation(sex, "sex")
    ) {
      props.signUp(
        name,
        surname,
        telephone,
        email,
        password,
        birthday.day,
        birthday.month,
        birthday.year,
        sex,
        props.history
      );
    }
  };

  const setDefaultInputsValues = () => {
    setDefaultName();
    setDefaultSurname();
    setDefaultTelephone();
    setDefaultEmail();
    setDefaultPassword();
    setDefaultConfirmPassword();
    setDefaultBirthday();
    setDefaultSex();
  };

  return (
    <Wrapper adaptive={adaptive}>
      <Container>
        <RegistrationBlockHeader
          setDefaultInputsValues={setDefaultInputsValues}
          {...props}
        />
        <RegistrationBlockBody
          {...props}
          name={name}
          nameHandler={nameHandler}
          checkedName={checkedName}
          checkNameHandler={checkNameHandler}
          // -------------------------
          surname={surname}
          surnameHandler={surnameHandler}
          checkedSurname={checkedSurname}
          checkSurnameHandler={checkSurnameHandler}
          // ------------------------
          telephone={telephone}
          telephoneHandler={telephoneHandler}
          checkedTelephone={checkedTelephone}
          checkTelephoneHandler={checkTelephoneHandler}
          // ------------------------
          email={email}
          emailHandler={emailHandler}
          checkedEmail={checkedEmail}
          checkEmailHandler={checkEmailHandler}
          // ------------------------
          password={password}
          passwordHandler={passwordHandler}
          checkedPassword={checkedPassword}
          checkPasswordHandler={checkPasswordHandler}
          // ------------------------
          confirmPassword={confirmPassword}
          checkedConfirmPassword={checkedConfirmPassword}
          confirmPasswordHandler={confirmPasswordHandler}
          checkConfirmPasswordHandler={checkConfirmPasswordHandler}
          // ------------------------
          day={birthday.day}
          month={birthday.month}
          year={birthday.year}
          dayHandler={birthdayHandler()[0]}
          monthHandler={birthdayHandler()[1]}
          yearHandler={birthdayHandler()[2]}
          birthdayObject={birthday}
          checkedBirthday={checkedBirthday}
          checkBirthdayHandler={checkBirthdayHandler}
          // ------------------------
          sex={sex}
          sexHandler={sexHandler}
          checkedSex={checkedSex}
          checkSexHandler={checkSexHandler}
          // ------------------------
          validationInputsFields={validationInputsFields}
          validationResult={validationResult}
        />
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  registrationFetching: state.authReducer.registrationFetching,
  registrationError: state.authReducer.registrationError,
});

export const RegistrationRoute = compose(
  connect(mapStateToProps, {
    signUp,
  })
)(RegistrationRoute_);
