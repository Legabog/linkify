import styled from "styled-components";

import {
  ConfirmEmailRouteBody,
  ConfirmEmailRouteFooter,
  ConfirmEmailRouteHeader,
} from "./components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d6f6ff;
`;

const Container = styled.div``;

export const ConfirmEmailRoute = (props) => {
  return (
    <Wrapper>
      <Container>
        <ConfirmEmailRouteHeader />
        <ConfirmEmailRouteBody />
        <ConfirmEmailRouteFooter />
      </Container>
    </Wrapper>
  );
};
