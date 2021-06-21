import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    display: flex;
    align-items: center;
    align-self: center;
    text-decoration: none;
    white-space: nowrap;
  }

  & span {
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
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background-color: #fff;
        border: 3px solid #7fc8ff;
      `;
    }
    if (p.buttonStyle === "classic") {
      return css`
        padding: 15px 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background-color: #7fc8ff;

        & > span {
          color: #fff;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `;
    }
  }}

  ${(p) => p.customStyle}
  ${(p) => p.adaptive}
`;

const adaptive = css`
  @media only screen and (max-width: 400px) {
    padding: ${p => p.buttonStyle === "classic" ? "15" : "12"}px 20px;
  }

  @media only screen and (max-width: 380px) {
    margin: 5px 0px;
  }
`;

export const Button = ({
  clickHandler,
  buttonStyle,
  insideElements,
  customStyle,
}) => {
  const buttonClickHandler = () => {
    if (clickHandler) clickHandler();
  };

  return (
    <Wrapper
      adaptive={adaptive}
      buttonStyle={buttonStyle}
      onClick={buttonClickHandler}
      customStyle={customStyle}
    >
      {insideElements}
    </Wrapper>
  );
};
