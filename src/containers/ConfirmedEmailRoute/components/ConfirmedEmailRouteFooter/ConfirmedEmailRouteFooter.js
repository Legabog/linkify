import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #fff;
  border: 3px solid #7fc8ff;
  & > a {
    display: flex;
    align-items: center;
    align-self: center;
    text-decoration: none;
  }

  :hover {
    cursor: pointer;
  }
  :active {
    transform: scale(0.95);
  }
`;

const TextButton = styled.span`
  white-space: nowrap;
  color: #7fc8ff;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const adaptive = css`
  @media only screen and (max-width: 650px) {
    & > a {
      padding: 30px 20px;
    }
  }
  @media only screen and (max-width: 500px) {
    & > a {
      padding: 30px 12px;
    }
    ${Button} {
      padding: 6px 10px;
    }
    ${TextButton} {
      font-size: 14px;
    }
  }
`;

export const ConfirmedEmailRouteFooter = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper adaptive={adaptive}>
      <Button>
        <NavLink to={"/"}>
          <TextButton>
            {t("unauthorized.confirmed-email-route.button-back.navLink")}
          </TextButton>
        </NavLink>
      </Button>
    </Wrapper>
  );
};
