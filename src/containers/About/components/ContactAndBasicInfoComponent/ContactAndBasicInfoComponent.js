import "./ContactAndBasicInfoComponent.css";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import LinkIcon from "@material-ui/icons/Link";
import TranslateIcon from "@material-ui/icons/Translate";
import CakeIcon from "@material-ui/icons/Cake";
import FaceIcon from "@material-ui/icons/Face";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import LooksIcon from "@material-ui/icons/Looks";
import MoodIcon from "@material-ui/icons/Mood";

import { ContactAndBasicInfoComponentSection } from "../ContactAndBasicInfoComponentSection";

import { CirclePreloader } from "pres-components/CirclePreloader";
import { useTranslation } from "react-i18next";

export const ContactAndBasicInfoComponent = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"ContactAndBasicInfoComponent__wrapper"}>
      {props.fetchFullUserInfoAbout ? (
        <CirclePreloader />
      ) : (
        <div className={"ContactAndBasicInfoComponent"}>
          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.ContactInfo.Address
            }
            fieldReducer={props.contactAndBasicInfoAddAddress}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteAddress}
            title={t(
              "authorized.about.right-section.component-4.section-1.title"
            )}
            titleBold={t(
              "authorized.about.right-section.component-4.section-1.title-bold"
            )}
            editTitle={t(
              "authorized.about.right-section.component-4.section-1.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-4.section-1.delete-title"
            )}
            Icon={HomeRoundedIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-4.section-1.input-placeholder-1"
            )}
            {...props}
          />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.ContactInfo.MobilePhone
            }
            fieldReducer={props.contactAndBasicInfoAddMobilePhone}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteMobilePhone}
            title={t(
              "authorized.about.right-section.component-4.section-2.title"
            )}
            editTitle={t(
              "authorized.about.right-section.component-4.section-2.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-4.section-2.delete-title"
            )}
            Icon={PhoneRoundedIcon}
            activeInputs={2}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-4.section-2.input-placeholder-1"
            )}
            ativeInputPlaceholder2={t(
              "authorized.about.right-section.component-4.section-2.input-placeholder-2"
            )}
            {...props}
          />

          <hr />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.ContactInfo.Websites
            }
            fieldReducer={props.contactAndBasicInfoAddWebsite}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteWebsite}
            title={t(
              "authorized.about.right-section.component-4.section-3.title"
            )}
            titleBold={t(
              "authorized.about.right-section.component-4.section-3.title-bold"
            )}
            editTitle={t(
              "authorized.about.right-section.component-4.section-3.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-4.section-3.delete-title"
            )}
            Icon={LinkIcon}
            activeInputs={2}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-4.section-3.input-placeholder-1"
            )}
            ativeInputPlaceholder2={t(
              "authorized.about.right-section.component-4.section-3.input-placeholder-2"
            )}
            {...props}
          />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.ContactInfo.SocialLinks
            }
            fieldReducer={props.contactAndBasicInfoAddSocialLink}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteSocialLink}
            title={t(
              "authorized.about.right-section.component-4.section-4.title"
            )}
            editTitle={t(
              "authorized.about.right-section.component-4.section-4.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-4.section-4.delete-title"
            )}
            Icon={LinkIcon}
            activeInputs={2}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-4.section-4.input-placeholder-1"
            )}
            ativeInputPlaceholder2={t(
              "authorized.about.right-section.component-4.section-4.input-placeholder-2"
            )}
            {...props}
          />

          <hr />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.BasicInfo.Gender
            }
            fieldReducer={props.contactAndBasicInfoAddGender}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteGender}
            title={t(
              "authorized.about.right-section.component-4.section-5.title"
            )}
            titleBold={t(
              "authorized.about.right-section.component-4.section-5.title-bold"
            )}
            editTitle={t(
              "authorized.about.right-section.component-4.section-5.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-4.section-5.delete-title"
            )}
            Icon={FaceIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-4.section-5.input-placeholder-1"
            )}
            {...props}
          />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.BasicInfo.Language
            }
            fieldReducer={props.contactAndBasicInfoAddLanguage}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteLanguage}
            title={t(
              "authorized.about.right-section.component-4.section-6.title"
            )}
            editTitle={t(
              "authorized.about.right-section.component-4.section-6.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-4.section-6.delete-title"
            )}
            Icon={TranslateIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-4.section-6.input-placeholder-1"
            )}
            {...props}
          />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.BasicInfo.ReligionViews
            }
            fieldReducer={props.contactAndBasicInfoAddReligionViews}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteReligionViews}
            title={t(
              "authorized.about.right-section.component-4.section-7.title"
            )}
            editTitle={t(
              "authorized.about.right-section.component-4.section-7.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-4.section-7.delete-title"
            )}
            Icon={LooksIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-4.section-7.input-placeholder-1"
            )}
            {...props}
          />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.BasicInfo.PoliticalViews
            }
            fieldReducer={props.contactAndBasicInfoAddPoliticalViews}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeletePoliticalViews}
            title={t(
              "authorized.about.right-section.component-4.section-8.title"
            )}
            editTitle={t(
              "authorized.about.right-section.component-4.section-8.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-4.section-8.delete-title"
            )}
            Icon={AccountBalanceIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-4.section-8.input-placeholder-1"
            )}
            {...props}
          />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.BasicInfo.InterestedMale
            }
            fieldReducer={props.contactAndBasicInfoAddInterestedMale}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteInterestedMale}
            title={t(
              "authorized.about.right-section.component-4.section-9.title"
            )}
            editTitle={t(
              "authorized.about.right-section.component-4.section-9.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-4.section-9.delete-title"
            )}
            Icon={MoodIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-4.section-9.input-placeholder-1"
            )}
            {...props}
          />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.BasicInfo.Birthday_data
            }
            fieldReducer={props.contactAndBasicInfoAddBirthday}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteBirthday}
            title={t(
              "authorized.about.right-section.component-4.section-10.title"
            )}
            editTitle={t(
              "authorized.about.right-section.component-4.section-10.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-4.section-10.delete-title"
            )}
            Icon={CakeIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-4.section-10.input-placeholder-1"
            )}
            {...props}
          />

          <hr />
        </div>
      )}
    </div>
  );
};
