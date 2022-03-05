import './ProfileAddHobbiesBodyState1.css';

import _ from 'lodash/core';

import SearchIcon from '@mui/icons-material/Search';

import { ProfileAddHobbiesBodyItem } from 'containers/ProfileAddHobbies/components/ProfileAddHobbiesBodyItem';
import { useTranslation } from 'react-i18next';

export const ProfileAddHobbiesBodyState1 = (props) => {
  const { t } = useTranslation();
  return (
    <div className={'profile-add-hobbies-body_state-1'}>
      <div className={'profile-add-hobbies-body_state-1__title'}>
        <span>{t('authorized.profile.add-hobbies.body.state-1.title')}</span>
      </div>
      <div className={'profile-add-hobbies-body_state-1__hobbie-container'}>
        {props.profileAddHobbiesRecommendedHobbies.map((e, index) => {
          if (index <= 9) {
            return (
              <ProfileAddHobbiesBodyItem
                id={e.id}
                key={_.uniqueId(e)}
                Icon={
                  _.find(props.profileAddHobbiesRecommendedHobbies, {
                    id: e.id,
                  }).icon
                }
                description={t(`authorized.profile.add-hobbies.recommended-hobbies.${e.id - 1}`)}
                {...props}
              />
            );
          }
          return null;
        })}

        <div
          className={'profile-add-hobbies-body_state-1__search-wrapper'}
          onClick={() => props.toggleProfileAddHobbiesStateComponent(1)}
        >
          <div className={'profile-add-hobbies-body_state-1__search'}>
            <div className={'profile-add-hobbies-body_state-1__search-icon'}>
              <SearchIcon />
            </div>

            <div className={'profile-add-hobbies-body_state-1__search-description'}>
              <span>{t('authorized.profile.add-hobbies.body.state-1.description')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
