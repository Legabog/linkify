import "./OverviewComponent.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

import { OverviewComponentSection } from "../OverviewComponentSection";
import { CirclePreloader } from "pres-components/CirclePreloader";
import { useTranslation } from "react-i18next";

export const OverviewComponent = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"OverviewComponent__wrapper"}>
      {props.fetchFullUserInfoAbout ? (
        <CirclePreloader />
      ) : (
        <div className={"OverviewComponent"}>
          <OverviewComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.WorkAndEducation.WorkPlace
            }
            fieldReducer={props.overviewAddAWorkplace}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteAWorkplace}
            editTitle={t(
              "authorized.about.right-section.component-1.section-1.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-1.section-1.delete-title"
            )}
            title={t(
              "authorized.about.right-section.component-1.section-1.title"
            )}
            Icon={WorkIcon}
            activeInputs={4}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-1.section-1.input-placeholder-1"
            )}
            ativeInputPlaceholder2={t(
              "authorized.about.right-section.component-1.section-1.input-placeholder-2"
            )}
            ativeInputPlaceholder3={t(
              "authorized.about.right-section.component-1.section-1.input-placeholder-3"
            )}
            ativeInputPlaceholder4={t(
              "authorized.about.right-section.component-1.section-1.input-placeholder-4"
            )}
            {...props}
          />

          <hr />

          <OverviewComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.WorkAndEducation.HighSchool
            }
            fieldReducer={props.overviewAddAHighSchool}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteAHighSchool}
            title={t(
              "authorized.about.right-section.component-1.section-2.title"
            )}
            editTitle={t(
              "authorized.about.right-section.component-1.section-2.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-1.section-2.delete-title"
            )}
            Icon={SchoolIcon}
            activeInputs={2}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-1.section-2.input-placeholder-1"
            )}
            ativeInputPlaceholder2={t(
              "authorized.about.right-section.component-1.section-2.input-placeholder-2"
            )}
            {...props}
          />

          <OverviewComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.WorkAndEducation.College
            }
            fieldReducer={props.overviewAddACollege}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteACollege}
            title={t(
              "authorized.about.right-section.component-1.section-3.title"
            )}
            editTitle={t(
              "authorized.about.right-section.component-1.section-3.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-1.section-3.delete-title"
            )}
            Icon={SchoolIcon}
            activeInputs={2}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-1.section-3.input-placeholder-1"
            )}
            ativeInputPlaceholder2={t(
              "authorized.about.right-section.component-1.section-3.input-placeholder-2"
            )}
            {...props}
          />

          <hr />

          <OverviewComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.PlacesLived.CurrentCity
            }
            fieldReducer={props.overviewAddACurrentCity}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteACurrentCity}
            title={t(
              "authorized.about.right-section.component-1.section-4.title"
            )}
            editTitle={t(
              "authorized.about.right-section.component-1.section-4.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-1.section-4.delete-title"
            )}
            Icon={LocationCityIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-1.section-4.input-placeholder-1"
            )}
            {...props}
          />

          <OverviewComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.PlacesLived.HomeTown
            }
            fieldReducer={props.overviewAddAHometown}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteAHometown}
            title={t(
              "authorized.about.right-section.component-1.section-5.title"
            )}
            editTitle={t(
              "authorized.about.right-section.component-1.section-5.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-1.section-5.delete-title"
            )}
            Icon={HomeRoundedIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-1.section-5.input-placeholder-1"
            )}
            {...props}
          />

          <hr />

          <OverviewComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.FamilyAndRelationships.Relationship
            }
            fieldReducer={props.overviewAddARelationshipStatus}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteARelationshipStatus}
            title={t(
              "authorized.about.right-section.component-1.section-6.title"
            )}
            editTitle={t(
              "authorized.about.right-section.component-1.section-6.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-1.section-6.delete-title"
            )}
            Icon={FavoriteRoundedIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-1.section-6.input-placeholder-1"
            )}
            {...props}
          />
        </div>
      )}
    </div>
  );
};
