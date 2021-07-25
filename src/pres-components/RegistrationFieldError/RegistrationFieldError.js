import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 46px;
  z-index: 400;
  opacity: 1;
  outline: none;
  font-size: 12px;
  display: ${(p) => p.display};
`;

const Label = styled.div`
  right: 0px;
  position: absolute;
`;

const Body = styled.div`
  padding-right: 3px;
  padding-left: 3px;
`;

const Content = styled.div`
  background-color: #be4b49;
  box-shadow: 0 0 0 1px rgba(139, 3, 0, 0.75), 0 1px 10px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-size: 12px;
  padding: 13px;
  position: relative;
`;

const Icon = styled.i`
  overflow: hidden;
  position: absolute;
`;

export const RegistrationFieldError = (props) => {
  return (
    <Container display={props.display}>
      <Label>
        <Body>
          <Content>{props.error_text}</Content>
          <Icon />
        </Body>
      </Label>
    </Container>
  );
};
