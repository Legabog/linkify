import styled from "styled-components";

import { Preloader } from "pres-components/Preloader";

const Wrapper = styled.div`
  background-color: #f1f2f5;
  min-height: 100vh;
  & audio {
    display: none;
  }
`;

export const Root = (props) => {
  return (
    <Wrapper>
      {props.Fetching ? (
        <Preloader />
      ) : (
        <>
          {props.children}
          {props.rightBottomComponent}
          {props.leftBottomComponent}
        </>
      )}
    </Wrapper>
  );
};
