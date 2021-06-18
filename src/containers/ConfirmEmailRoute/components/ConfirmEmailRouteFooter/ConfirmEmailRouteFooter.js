import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { useTranslation } from "react-i18next";
import { Button } from "pres-components/Button";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmEmailRouteFooter = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Button
        buttonStyle="primary"
        insideElements={
          <NavLink to={"/"}>
           {t("unauthorized.confirm-email-route.button-back.navLink")}
          </NavLink>
        }
      />
    </Wrapper>
  );
};