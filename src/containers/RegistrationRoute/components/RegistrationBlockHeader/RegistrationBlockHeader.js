import styled, { css } from 'styled-components';

import { useTranslation } from 'react-i18next';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton } from '@mui/material';

import { LinkifyLogo } from 'pres-components';

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const CloseIcon = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > button > span > svg {
    color: #2e81f4;
  }
  & > button:hover {
    background-color: #d6f6ff;
  }
`;

const Description = styled.div`
  padding-top: 20px;
  display: flex;
  align-self: start;
  align-items: center;

  & > h2 {
    color: #4e6482;
  }
`;

const SubDescription = styled.div`
  display: flex;
  align-self: start;
  align-items: center;

  & > span {
    color: rgb(187, 189, 201);
  }
`;

const customLinkifyLogo = css`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RegistrationBlockHeader = (props) => {
  const { t } = useTranslation();
  const clickHandler = () => {
    props.history.push('/');
    props.setDefaultInputsValues();
  };

  return (
    <Wrapper>
      <Container>
        <LinkifyLogo customStyle={customLinkifyLogo} />
        <CloseIcon>
          <IconButton onClick={clickHandler}>
            <CloseOutlinedIcon />
          </IconButton>
        </CloseIcon>
      </Container>
      <Description>
        <h2>{t('unauthorized.registration-block.header.description-1')}</h2>
      </Description>
      <SubDescription>
        <span>{t('unauthorized.registration-block.header.description-2')}</span>
      </SubDescription>
    </Wrapper>
  );
};
