import styled, { css } from "styled-components";
import part_image from "assets/backgrounds/login-background/login-background.jpg";

const Wrapper = styled.div`
  width: 50%;
  height: 100%;

  ${(p) => p.adaptive}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  object-fit: cover;
`;

const adaptive = css`
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const LoginPartImage = (props) => {
  return (
    <Wrapper adaptive={adaptive}>
      <Image src={part_image} alt="part-iamge" />
    </Wrapper>
  );
};
