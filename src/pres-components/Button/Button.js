import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > a {
    display: flex;
    align-items: center;
    align-self: center;
    text-decoration: none;

    white-space: nowrap;
    color: #7fc8ff;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :hover {
    cursor: pointer;
  }
  :active {
    transform: scale(0.95);
  }

  ${(p) => {
    if (p.buttonStyle === "primary") {
      return css`
        padding: 12px 20px;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background-color: #fff;
        border: 3px solid #7fc8ff;
      `;
    }
  }}
`;

export const Button = ({ clickHandler, buttonStyle, insideElements }) => {
  const buttonClickHandler = () => {
    if (clickHandler) clickHandler();
  };

  return (
    <Wrapper buttonStyle={buttonStyle} onClick={buttonClickHandler}>
      {insideElements}
    </Wrapper>
  );
};
