import styled, { css } from "styled-components";

import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;

  ${(p) => p.adaptive}
`;

const Text = styled.span`
  color: #7fc8ff;
  font-size: 20px;
`;

const adaptive = css`
  @media only screen and (max-width: 500px) {
    ${Text} {
      font-size: 16px;
    }
  }
`;

export const ConfirmedEmailRouteBody = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper adaptive={adaptive}>
      <Text>
        {t("unauthorized.confirmed-email-route.body.h2-1")}&nbsp;
        {t("unauthorized.confirmed-email-route.body.h2-2")}
      </Text>
    </Wrapper>
  );
};
