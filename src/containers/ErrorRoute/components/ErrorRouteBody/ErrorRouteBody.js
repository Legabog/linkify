import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 650px) {
    padding: 0 20px;
  }

  @media only screen and (max-width: 500px) {
    padding: 0 12px;
  }
`;

const StyledSpan = styled.span`
  color: #7fc8ff;

  @media only screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const ErrorRouteBody = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <StyledSpan>{t("unauthorized.error-route.body.h2")}</StyledSpan>
    </Wrapper>
  );
};
