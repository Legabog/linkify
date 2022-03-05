import './ProfileHeaderAvatarBackgroundWindow.css';

import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PublishIcon from '@mui/icons-material/Publish';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';

export const ProfileHeaderAvatarBackgroundWindow = (props) => {
  const { t } = useTranslation();
  return (
    <div
      className={'profile__header__avatarBackground__window__wrapper'}
      style={{
        visibility: props.windowAvatarBackgroundVisibility,
        opacity: props.windowAvatarBackgroundOpacity,
      }}
    >
      <div className={'profile__header__avatarBackground__window'}>
        <div
          className={'profile__header__avatarBackground__windowSection'}
          onClick={() => {
            props.toggleProfileSelectAvatarBackground(
              props.profileSelectVisibility,
              props.profileSelectOpacity
            );
            props.toggleWindowAvatarBackground();
            props.toggleSwitcherAvatarBackgroundURLorBase64(1);
          }}
        >
          <PhotoLibraryIcon />
          <span>{t('authorized.profile.header.background-window.section_1')}</span>
        </div>

        <label htmlFor='avatarBackground-uploader'>
          <div
            className={'profile__header__avatarBackground__windowSection'}
            onClick={props.toggleWindowAvatarBackground}
          >
            <PublishIcon />
            <span>{t('authorized.profile.header.background-window.section_2')}</span>
          </div>
        </label>

        {props.user === null ||
        props.user.AvatarBackground.activeAvatarBackgroundUrl === '' ? null : (
          <div
            className={'profile__header__avatarBackground__windowSection'}
            onClick={() => {
              props.toggleConfirmRemove(true);
              props.toggleWindowAvatarBackground();
            }}
          >
            <DeleteIcon />
            <span>{t('authorized.profile.header.background-window.section_3')}</span>
          </div>
        )}
      </div>
    </div>
  );
};
