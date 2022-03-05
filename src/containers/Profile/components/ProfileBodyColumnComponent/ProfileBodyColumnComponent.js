import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ProfileBodyColumnComponent.css';

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { ProfileBodyColumnComponentIntroItem } from 'containers/Profile/components/ProfileBodyColumnComponentIntroItem';
import { ProfileBodyColumnComponentHobbie } from 'containers/Profile/components/ProfileBodyColumnComponentHobbie';

import _ from 'lodash/core';
import { useTranslation } from 'react-i18next';
import { CirclePreloader } from 'pres-components/CirclePreloader';

export const ProfileBodyColumnComponent = (props) => {
  const { t } = useTranslation();
  const [hobbieSectionSize, setHobbieSectionSize] = useState(5);

  const toggleHobbieSectionSize = (num) => {
    hobbieSectionSize === 5 ? setHobbieSectionSize(num) : setHobbieSectionSize(5);
  };

  switch (props.stateComponent) {
    case 0:
      return (
        <div className={'profile-body-column-component'}>
          <div className={'profile-body-column-component__description'}>
            <span>{t('authorized.profile.body.title')}</span>
          </div>

          {props.fullUserInfoAbout !== null
            ? props.fullUserInfoAbout.WorkAndEducation.WorkPlace.map((e, index) => {
                return (
                  <ProfileBodyColumnComponentIntroItem
                    key={_.uniqueId(e)}
                    Icon={WorkIcon}
                    mainTitle={`${t('authorized.profile.body.item-1.title-1')} ${e.position}; ${t(
                      'authorized.profile.body.item-1.title-2'
                    )} ${e.company};`}
                  />
                );
              })
            : null}

          {props.fullUserInfoAbout !== null
            ? props.fullUserInfoAbout.WorkAndEducation.College.map((e, index) => {
                return (
                  <ProfileBodyColumnComponentIntroItem
                    key={_.uniqueId(e)}
                    Icon={SchoolIcon}
                    mainTitle={`${t('authorized.profile.body.item-2.title')} ${e.college}`}
                  />
                );
              })
            : null}

          {props.fullUserInfoAbout !== null
            ? props.fullUserInfoAbout.WorkAndEducation.HighSchool.map((e, index) => {
                return (
                  <ProfileBodyColumnComponentIntroItem
                    key={_.uniqueId(e)}
                    Icon={SchoolIcon}
                    mainTitle={`${t('authorized.profile.body.item-3.title')} ${e.school}`}
                  />
                );
              })
            : null}

          {props.fullUserInfoAbout !== null &&
          props.fullUserInfoAbout.PlacesLived.CurrentCity !== '' ? (
            <ProfileBodyColumnComponentIntroItem
              Icon={HomeIcon}
              mainTitle={`${t('authorized.profile.body.item-4.title')} ${
                props.fullUserInfoAbout.PlacesLived.CurrentCity
              }`}
            />
          ) : null}

          {props.fullUserInfoAbout !== null &&
          props.fullUserInfoAbout.PlacesLived.HomeTown !== '' ? (
            <ProfileBodyColumnComponentIntroItem
              Icon={LocationOnIcon}
              mainTitle={`${t('authorized.profile.body.item-5.title')} ${
                props.fullUserInfoAbout.PlacesLived.HomeTown
              }`}
            />
          ) : null}

          {props.fullUserInfoAbout !== null &&
          props.fullUserInfoAbout.FamilyAndRelationships.Relationship !== '' ? (
            <ProfileBodyColumnComponentIntroItem
              Icon={FavoriteIcon}
              mainTitle={`${t('authorized.profile.body.item-6.title')} ${
                props.fullUserInfoAbout.FamilyAndRelationships.Relationship
              }`}
            />
          ) : null}

          <div
            className={'profile-body-column-component__button-info'}
            onClick={() => {
              props.toggleProfileEditDetails(
                props.profileEditDetailsVisibility,
                props.profileEditDetailsOpacity
              );
            }}
          >
            <span>{t('authorized.profile.body.button-1')}</span>
          </div>

          {props.profileAddHobbiesFetch ? (
            <CirclePreloader margin_left={'150px'} />
          ) : (
            <div className={'profile-body-column-component__hobbies-section'}>
              {props.fullUserInfoAbout !== null
                ? props.fullUserInfoAbout.Hobbies.map((e, index) => {
                    if (index < hobbieSectionSize) {
                      return (
                        <ProfileBodyColumnComponentHobbie
                          id={e.id}
                          key={_.uniqueId(e)}
                          Icon={
                            _.find(props.profileAddHobbiesRecommendedHobbies, {
                              id: e.id,
                            }).icon
                          }
                          description={t(
                            `authorized.profile.add-hobbies.recommended-hobbies.${e.id - 1}`
                          )}
                        />
                      );
                    }

                    return null;
                  })
                : null}
              {props.fullUserInfoAbout !== null ? (
                props.fullUserInfoAbout.Hobbies.length > 5 ? (
                  <div
                    className={'profile-body-column-component__hobbies-button'}
                    onClick={() => toggleHobbieSectionSize(props.fullUserInfoAbout.Hobbies.length)}
                  >
                    <span>
                      {hobbieSectionSize === 5
                        ? t('authorized.profile.body.see-all-hide.see-all')
                        : t('authorized.profile.body.see-all-hide.hide')}
                    </span>
                  </div>
                ) : null
              ) : null}
            </div>
          )}

          <div
            className={'profile-body-column-component__button-info'}
            onClick={() => {
              props.toggleProfileAddHobbies(
                props.profileAddHobbiesVisibility,
                props.profileAddHobbiesOpacity
              );
            }}
          >
            <span>
              {props.fullUserInfoAbout !== null && props.fullUserInfoAbout.Hobbies.length !== 0
                ? t('authorized.profile.body.button-2.span-1')
                : t('authorized.profile.body.button-2.span-2')}
            </span>
          </div>

          <div className={'profile-body-column-component__button-info'}>
            <span>{t('authorized.profile.body.button-3')}</span>
          </div>
        </div>
      );

    case 1:
      return (
        <div className={'profile-body-column-component'}>
          <div className={'profile-body-column-component__description'}>
            <span>{t('authorized.profile.body.title-2')}</span>

            <div className={'profile-body-column-component__link'}>
              <NavLink to={'/profile/photos'}>{t('authorized.profile.body.link')}</NavLink>
            </div>
          </div>

          <div className={'profile-body-column-component__photo-container'}>
            {props.user === null || props.user.RecentUploads.length === 0
              ? null
              : props.user.RecentUploads.map((e, index) => {
                  if (index <= 8) {
                    return <img key={_.uniqueId(e)} src={e} alt='description' />;
                  }

                  return null;
                })}
          </div>
        </div>
      );

    case 2:
      return (
        <div className={'profile-body-column-component'}>
          <div className={'profile-body-column-component__description'}>
            <span>{t('authorized.profile.body.title-3')}</span>
            <div className={'profile-body-column-component__link'}>
              <NavLink to={'/profile/friends'}>{t('authorized.profile.body.link')}</NavLink>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};
