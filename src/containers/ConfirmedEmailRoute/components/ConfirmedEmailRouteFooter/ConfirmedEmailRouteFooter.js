import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  padding: 12px 20px;
  font-size: 18px;
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

export const ConfirmedEmailRouteFooter = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
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
