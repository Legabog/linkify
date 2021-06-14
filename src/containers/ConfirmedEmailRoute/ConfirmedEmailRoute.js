import styled from "styled-components";

import {
  ConfirmedEmailRouteBody,
  ConfirmedEmailRouteFooter,
  ConfirmedEmailRouteHeader,
} from "containers/ConfirmedEmailRoute/components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d6f6ff;
`;

const StyledConfirmedEmailRoute = styled.div``;

export const ConfirmedEmailRoute = (props) => {
  return (
    <Wrapper>
      <StyledConfirmedEmailRoute>
        <ConfirmedEmailRouteHeader />
        {/* <ConfirmedEmailRouteBody />
        <ConfirmedEmailRouteFooter /> */}
      </StyledConfirmedEmailRoute>
    </Wrapper>
  );
};
