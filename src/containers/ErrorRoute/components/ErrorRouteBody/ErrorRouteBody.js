import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;

  ${(p) => p.adaptive}
`;

const Text = styled.span`
  color: #7fc8ff;
`;

const adaptive = css`
  @media only screen and (max-width: 500px) {
    ${Text} {
      font-size: 16px;
    }
  }
`;

export const ErrorRouteBody = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper adaptive={adaptive}>
      <Text>{t("unauthorized.error-route.body.h2")}</Text>
    </Wrapper>
  );
};
