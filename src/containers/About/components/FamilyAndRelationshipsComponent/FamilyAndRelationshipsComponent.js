import "./FamilyAndRelationshipsComponent.css";

import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";

import { FamilyAndRelationshipsComponentSection } from "../FamilyAndRelationshipsComponentSection";
import { CirclePreloader } from "pres-components/CirclePreloader/CirclePreloader";
import { useTranslation } from "react-i18next";

export const FamilyAndRelationshipsComponent = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"FamilyAndRelationshipsComponent__wrapper"}>
      {props.fetchFullUserInfoAbout ? (
        <CirclePreloader />
      ) : (
        <div className={"FamilyAndRelationshipsComponent"}>
          <FamilyAndRelationshipsComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.FamilyAndRelationships.Relationship
            }
            fieldReducer={props.overviewAddARelationshipStatus}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteARelationshipStatus}
            title={t(
              "authorized.about.right-section.component-5.section-1.title"
            )}
            titleBold={t(
              "authorized.about.right-section.component-5.section-1.title-bold"
            )}
            editTitle={t(
              "authorized.about.right-section.component-5.section-1.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-5.section-1.delete-title"
            )}
            Icon={FavoriteIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-5.section-1.input-placeholder-1"
            )}
            {...props}
          />

          <FamilyAndRelationshipsComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.FamilyAndRelationships.FamilyMembers
            }
            fieldReducer={props.familyAndRelationshipsAddFamilyMember}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.familyAndRelationshipsDeleteFamilyMember}
            title={t(
              "authorized.about.right-section.component-5.section-2.title"
            )}
            titleBold={t(
              "authorized.about.right-section.component-5.section-2.title-bold"
            )}
            editTitle={t(
              "authorized.about.right-section.component-5.section-2.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-5.section-2.delete-title"
            )}
            Icon={PersonIcon}
            activeInputs={3}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-5.section-2.input-placeholder-1"
            )}
            ativeInputPlaceholder2={t(
              "authorized.about.right-section.component-5.section-2.input-placeholder-2"
            )}
            ativeInputPlaceholder3={t(
              "authorized.about.right-section.component-5.section-2.input-placeholder-3"
            )}
            {...props}
          />

          <hr />
        </div>
      )}
    </div>
  );
};
