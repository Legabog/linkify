import styled from "styled-components";

import {
  ErrorRouteBody,
  ErrorRouteFooter,
  ErrorRouteHeader,
} from "containers/ErrorRoute/components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d6f6ff;
`;

const Container = styled.div``;

export const ErrorRoute = (props) => {
  return (
    <Wrapper>
      <Container>
        <ErrorRouteHeader />
        <ErrorRouteBody />
        <ErrorRouteFooter />
      </Container>
    </Wrapper>
  );
};
