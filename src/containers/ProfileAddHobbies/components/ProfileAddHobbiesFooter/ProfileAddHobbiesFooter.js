import './ProfileAddHobbiesFooter.css';

import PublicIcon from '@mui/icons-material/Public';
import { useTranslation } from 'react-i18next';

export const ProfileAddHobbiesFooter = (props) => {
  const { t } = useTranslation();
  return (
    <div className={'profile-add-hobbies-footer'}>
      <div className={'profile-add-hobbies-footer__controll-panel'}>
        <div className={'profile-add-hobbies-footer__public'}>
          <div className={'profile-add-hobbies-footer__public-icon'}>
            <PublicIcon />
          </div>
          <div className={'profile-add-hobbies-footer__public-description'}>
            <span>{t('authorized.profile.add-hobbies.footer.description')}</span>
          </div>
        </div>
        {props.tempHobbies.length === 0 ? null : (
          <div className={'profile-add-hobbies-footer__buttons'}>
            <div
              className={'profile-add-hobbies-footer__cancel-button'}
              onClick={props.cancelClick}
            >
              <span>{t('authorized.profile.add-hobbies.footer.cancel-button')}</span>
            </div>

            <div className={'profile-add-hobbies-footer__update-button'} onClick={props.saveClick}>
              <span>{t('authorized.profile.add-hobbies.footer.update-button')}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
