import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }  
`;

const StyledPreloader = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 30%;
  ::after {
    content: " ";
    display: block;
    width: 30px;
    height: 30px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #1877f2;
    border-color: #1877f2 transparent#1877F2 transparent;
    animation: ${animation} 1.2s linear infinite;
  }
`;

export const Preloader = (props) => {
  return (
    <Wrapper>
      <StyledPreloader />
    </Wrapper>
  );
};
