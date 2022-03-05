import './ProfileHeaderButtonAddBackground.css';

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useTranslation } from 'react-i18next';

export const ProfileHeaderButtonAddBackground = (props) => {
  const { t } = useTranslation();
  return (
    <div
      className={'profile__header__buttonAddCover'}
      style={{
        display: props.windowConfirmBackgroundOpacity === 1 ? 'none' : null,
      }}
      onClick={props.toggleWindowAvatarBackground}
    >
      <PhotoCameraIcon />
      <span>{t('authorized.profile.header.button-add-background.span')}</span>
    </div>
  );
};
