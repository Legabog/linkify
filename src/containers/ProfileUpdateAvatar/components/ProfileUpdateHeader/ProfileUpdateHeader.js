import './ProfileUpdateHeader.css';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';

export const ProfileUpdateHeader = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={'profile-update-avatar-header'}>
        <div className={'profile-update-avatar-header__title'}>
          <span>{t('authorized.profile.profile-update-avatar.header.title')}</span>
        </div>
        <div className={'profile-update-avatar-header__close-icon'}>
          <IconButton
            onClick={() => {
              props.profileUpdateStateComponent === 0
                ? props.closeHandlerProfileUpdate()
                : props.toggleDiscardWindow(true);
            }}
          >
            <CloseOutlinedIcon />
          </IconButton>
        </div>
      </div>

      {props.profileUpdateStateComponent === 0 ? (
        <div className={'profile-update-avatar-header__controll-panel'}>
          <label htmlFor='avatar-uploader'>
            <div className={'profile-update-avatar-header__upload-photo'}>
              <AddIcon />
              <span>{t('authorized.profile.profile-update-avatar.header.upload-button')}</span>
            </div>
          </label>
        </div>
      ) : null}
    </>
  );
};
