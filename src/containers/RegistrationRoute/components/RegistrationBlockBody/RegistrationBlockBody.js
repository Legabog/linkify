import styled from "styled-components";
import { useTranslation } from "react-i18next";

import {
  RegistrationField,
  BirthdayField,
  GenderField,
  PolicyMessage,
  RegistrationButton,
} from "../";
import { RegistrationBlockError } from "pres-components/RegistrationBlockError";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RegistrationBlockBody = (props) => {
  const { t } = useTranslation();

  return (
    <Container>
      <RegistrationBlockError registrationError={props.registrationError} />
      <Group>
        <RegistrationField
          {...props}
          type={"text"}
          name={"firstname"}
          placeholder={t(
            "unauthorized.registration-block.body.field-1.placeholder"
          )}
          value={props.name}
          valueHandler={props.nameHandler}
          checked={props.checkedName}
          checkHandler={props.checkNameHandler}
          fieldType={"name"}
          error_text={t("unauthorized.registration-block.body.field-1.error")}
        />

        <RegistrationField
          {...props}
          type={"text"}
          name={"surname"}
          placeholder={t(
            "unauthorized.registration-block.body.field-2.placeholder"
          )}
          value={props.surname}
          valueHandler={props.surnameHandler}
          checked={props.checkedSurname}
          checkHandler={props.checkSurnameHandler}
          fieldType={"surname"}
          error_text={t("unauthorized.registration-block.body.field-2.error")}
        />
      </Group>

      <Group>
        <RegistrationField
          {...props}
          type={"text"}
          name={"telephone"}
          placeholder={t(
            "unauthorized.registration-block.body.field-3.placeholder"
          )}
          value={props.telephone}
          valueHandler={props.telephoneHandler}
          checked={props.checkedTelephone}
          checkHandler={props.checkTelephoneHandler}
          fieldType={"telephone"}
          error_text={t("unauthorized.registration-block.body.field-3.error")}
        />

        <RegistrationField
          {...props}
          type={"text"}
          name={"email"}
          placeholder={t(
            "unauthorized.registration-block.body.field-4.placeholder"
          )}
          value={props.email}
          valueHandler={props.emailHandler}
          checked={props.checkedEmail}
          checkHandler={props.checkEmailHandler}
          fieldType={"email"}
          error_text={t("unauthorized.registration-block.body.field-4.error")}
        />
      </Group>

      <Group>
        <RegistrationField
          {...props}
          type={"password"}
          name={"password"}
          placeholder={t(
            "unauthorized.registration-block.body.field-5.placeholder"
          )}
          value={props.password}
          valueHandler={props.passwordHandler}
          checked={props.checkedPassword}
          checkHandler={props.checkPasswordHandler}
          fieldType={"password"}
          error_text={t("unauthorized.registration-block.body.field-5.error")}
        />

        <RegistrationField
          {...props}
          type={"password"}
          name={"confirmpassword"}
          placeholder={t(
            "unauthorized.registration-block.body.field-6.placeholder"
          )}
          value={{
            confirmpassword: props.confirmPasword,
            password: props.password,
          }}
          valueHandler={props.confirmPasswordHandler}
          checked={props.checkedConfirmPassword}
          checkHandler={props.checkConfirmPasswordHandler}
          fieldType={"confirmPassword"}
          error_text={t("unauthorized.registration-block.body.field-6.error")}
        />
      </Group>

      <BirthdayField {...props} />
      <GenderField {...props} />
      <PolicyMessage />
      <RegistrationButton {...props} />
    </Container>
  );
};
