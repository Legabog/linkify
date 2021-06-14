import styled from "styled-components";

import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 650px) {
    & {
      padding: 10px 10px;
    }
  }

  @media only screen and (max-width: 500px) {
    & > span {
      padding: 0 12px;
      font-size: 16px;
    }
  }
`;

var Text = styled.span`
  color: #7fc8ff;
  font-size: 16px;
`;

export const ConfirmedEmailRouteBody = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Text>
        {t("unauthorized.confirmed-email-route.body.h2-1")}&nbsp;
        {t("unauthorized.confirmed-email-route.body.h2-2")}
      </Text>
    </Wrapper>
  );
};
