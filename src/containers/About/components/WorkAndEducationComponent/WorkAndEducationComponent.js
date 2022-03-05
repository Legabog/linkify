import './WorkAndEducationComponent.css';

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

import { WorkAndEducationComponentSection } from '../WorkAndEducationComponentSection';
import { CirclePreloader } from 'pres-components/CirclePreloader';
import { useTranslation } from 'react-i18next';

export const WorkAndEducationComponent = (props) => {
  const { t } = useTranslation();
  return (
    <div className={'WorkAndEducationComponent__wrapper'}>
      {props.fetchFullUserInfoAbout ? (
        <CirclePreloader />
      ) : (
        <div className={'WorkAndEducationComponent'}>
          <WorkAndEducationComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.WorkAndEducation.WorkPlace
            }
            fieldReducer={props.overviewAddAWorkplace}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteAWorkplace}
            editTitle={t('authorized.about.right-section.component-2.section-1.edit-title')}
            deleteTitle={t('authorized.about.right-section.component-2.section-1.delete-title')}
            title={t('authorized.about.right-section.component-2.section-1.title')}
            Icon={WorkIcon}
            activeInputs={4}
            ativeInputPlaceholder1={t(
              'authorized.about.right-section.component-2.section-1.input-placeholder-1'
            )}
            ativeInputPlaceholder2={t(
              'authorized.about.right-section.component-2.section-1.input-placeholder-2'
            )}
            ativeInputPlaceholder3={t(
              'authorized.about.right-section.component-2.section-1.input-placeholder-3'
            )}
            ativeInputPlaceholder4={t(
              'authorized.about.right-section.component-2.section-1.input-placeholder-4'
            )}
            {...props}
          />

          <hr />

          <WorkAndEducationComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.WorkAndEducation.HighSchool
            }
            fieldReducer={props.overviewAddAHighSchool}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteAHighSchool}
            title={t('authorized.about.right-section.component-2.section-2.title')}
            editTitle={t('authorized.about.right-section.component-2.section-2.edit-title')}
            deleteTitle={t('authorized.about.right-section.component-2.section-2.delete-title')}
            Icon={SchoolIcon}
            activeInputs={2}
            ativeInputPlaceholder1={t(
              'authorized.about.right-section.component-2.section-2.input-placeholder-1'
            )}
            ativeInputPlaceholder2={t(
              'authorized.about.right-section.component-2.section-2.input-placeholder-2'
            )}
            {...props}
          />

          <hr />

          <WorkAndEducationComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.WorkAndEducation.College
            }
            fieldReducer={props.overviewAddACollege}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteACollege}
            title={t('authorized.about.right-section.component-2.section-3.title')}
            editTitle={t('authorized.about.right-section.component-2.section-3.edit-title')}
            deleteTitle={t('authorized.about.right-section.component-2.section-3.delete-title')}
            Icon={SchoolIcon}
            activeInputs={2}
            ativeInputPlaceholder1={t(
              'authorized.about.right-section.component-2.section-3.input-placeholder-1'
            )}
            ativeInputPlaceholder2={t(
              'authorized.about.right-section.component-2.section-3.input-placeholder-2'
            )}
            {...props}
          />

          <hr />
        </div>
      )}
    </div>
  );
};
