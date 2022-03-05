import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './WelcomePrivacyGuideHeader.css';
import { useTranslation } from 'react-i18next';

export const WelcomePrivacyGuideHeader = (props) => {
  const { t } = useTranslation();

  const backButtonHandler = () => {
    props.welcomePrivacyGuideState === 1
      ? props.togglePrivacyGuideState(0)
      : props.togglePrivacyGuideState(1);
  };

  const closeButtonHandler = () => {
    props.togglePrivacyGuide(false);
  };

  return (
    <div className={'WelcomePrivacyGuideHeader'}>
      {props.arrowBack ? (
        <div className={'WelcomePrivacyGuideHeader__backIcon'}>
          <IconButton onClick={backButtonHandler}>
            <ArrowBackIcon />
          </IconButton>
        </div>
      ) : null}
      <div className={'WelcomePrivacyGuideHeader__title'}>
        <span>{t('authorized.welcome.privacy-guide.header.title')}</span>
      </div>
      <div className={'WelcomePrivacyGuideHeader__closeIcon'}>
        <IconButton onClick={closeButtonHandler}>
          <CloseOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};
