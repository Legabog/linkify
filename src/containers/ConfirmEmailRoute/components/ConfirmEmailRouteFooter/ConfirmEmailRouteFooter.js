import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import { useTranslation } from "react-i18next";
import { Button } from "pres-components/Button";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${p => p.adaptive}
`;

const adaptive = css`
  @media only screen and (max-height: 320px) and (orientation: landscape) {
    padding-top: 0px;
  }
`;

export const ConfirmEmailRouteFooter = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper adaptive={adaptive}>
      <Button
        buttonStyle="primary"
        insideElements={
          <NavLink to={"/"}>
            <span>
              {t("unauthorized.confirm-email-route.button-back.navLink")}
            </span>
          </NavLink>
        }
      />
    </Wrapper>
  );
};
