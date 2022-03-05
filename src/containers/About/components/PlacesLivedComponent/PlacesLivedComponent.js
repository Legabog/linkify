import './PlacesLivedComponent.css';

import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import { PlacesLivedComponentSection } from '../PlacesLivedComponentSection';
import { CirclePreloader } from 'pres-components/CirclePreloader';
import { useTranslation } from 'react-i18next';

export const PlacesLivedComponent = (props) => {
  const { t } = useTranslation();
  return (
    <div className={'PlacesLivedComponent__wrapper'}>
      {props.fetchFullUserInfoAbout ? (
        <CirclePreloader />
      ) : (
        <div className={'PlacesLivedComponent'}>
          <PlacesLivedComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.PlacesLived.CurrentCity
            }
            fieldReducer={props.overviewAddACurrentCity}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteACurrentCity}
            title={t('authorized.about.right-section.component-3.section-1.title')}
            editTitle={t('authorized.about.right-section.component-3.section-1.edit-title')}
            deleteTitle={t('authorized.about.right-section.component-3.section-1.delete-title')}
            Icon={LocationCityIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              'authorized.about.right-section.component-3.section-1.input-placeholder-1'
            )}
            {...props}
          />

          <hr />

          <PlacesLivedComponentSection
            componentArguments={
              props.fullUserInfoAbout === null ? null : props.fullUserInfoAbout.PlacesLived.HomeTown
            }
            fieldReducer={props.overviewAddAHometown}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteAHometown}
            title={t('authorized.about.right-section.component-3.section-2.title')}
            editTitle={t('authorized.about.right-section.component-3.section-2.edit-title')}
            deleteTitle={t('authorized.about.right-section.component-3.section-2.delete-title')}
            Icon={HomeRoundedIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              'authorized.about.right-section.component-3.section-2.input-placeholder-1'
            )}
            {...props}
          />

          <hr />

          <PlacesLivedComponentSection
            componentArguments={
              props.fullUserInfoAbout === null ? null : props.fullUserInfoAbout.PlacesLived.Cities
            }
            fieldReducer={props.placeslivedAddACity}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.placeslivedDeleteACity}
            title={t('authorized.about.right-section.component-3.section-3.title')}
            titleBold={t('authorized.about.right-section.component-3.section-3.title-bold')}
            editTitle={t('authorized.about.right-section.component-3.section-3.edit-title')}
            deleteTitle={t('authorized.about.right-section.component-3.section-3.delete-title')}
            Icon={LocationCityIcon}
            activeInputs={2}
            ativeInputPlaceholder1={t(
              'authorized.about.right-section.component-3.section-3.input-placeholder-1'
            )}
            ativeInputPlaceholder2={t(
              'authorized.about.right-section.component-3.section-3.input-placeholder-2'
            )}
            {...props}
          />

          <hr />
        </div>
      )}
    </div>
  );
};
