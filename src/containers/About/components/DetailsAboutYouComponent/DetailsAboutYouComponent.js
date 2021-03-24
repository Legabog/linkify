import "./DetailsAboutYouComponent.css";

import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PanoramaFishEyeIcon from "@material-ui/icons/PanoramaFishEye";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import { DetailsAboutYouComponentSection } from "../DetailsAboutYouComponentSection";
import { CirclePreloader } from "pres-components/CirclePreloader";
import { useTranslation } from "react-i18next";

export const DetailsAboutYouComponent = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"DetailsAboutYouComponent__wrapper"}>
      {props.fetchFullUserInfoAbout ? (
        <CirclePreloader />
      ) : (
        <div className={"DetailsAboutYouComponent"}>
          <DetailsAboutYouComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.DetailsAboutYou.AboutYou
            }
            fieldReducer={props.detailsAboutYouAddDetails}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.detailsAboutYouDeleteDetails}
            title={t(
              "authorized.about.right-section.component-6.section-1.title"
            )}
            titleBold={t(
              "authorized.about.right-section.component-6.section-1.title-bold"
            )}
            editTitle={t(
              "authorized.about.right-section.component-6.section-1.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-6.section-1.delete-title"
            )}
            Icon={InfoOutlinedIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-6.section-1.input-placeholder-1"
            )}
            {...props}
          />

          <hr />

          <DetailsAboutYouComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.DetailsAboutYou.NamePronunciation
            }
            fieldReducer={props.detailsAboutYouAddNamePronunciations}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.detailsAboutYouDeleteNamePronunciations}
            title={t(
              "authorized.about.right-section.component-6.section-2.title"
            )}
            titleBold={t(
              "authorized.about.right-section.component-6.section-2.title-bold"
            )}
            editTitle={t(
              "authorized.about.right-section.component-6.section-2.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-6.section-2.delete-title"
            )}
            Icon={PanoramaFishEyeIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-6.section-2.input-placeholder-1"
            )}
            {...props}
          />

          <hr />

          <DetailsAboutYouComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.DetailsAboutYou.OtherNames
            }
            fieldReducer={props.detailsAboutYouAddOtherName}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.detailsAboutYouDeleteOtherName}
            title={t(
              "authorized.about.right-section.component-6.section-3.title"
            )}
            titleBold={t(
              "authorized.about.right-section.component-6.section-3.title-bold"
            )}
            editTitle={t(
              "authorized.about.right-section.component-6.section-3.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-6.section-3.delete-title"
            )}
            Icon={PanoramaFishEyeIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-6.section-3.input-placeholder-1"
            )}
            {...props}
          />

          <hr />

          <DetailsAboutYouComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.DetailsAboutYou.FavoriteQuotes
            }
            fieldReducer={props.detailsAboutYouAddFavoriteQuotes}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.detailsAboutYouDeleteFavoriteQuotes}
            title={t(
              "authorized.about.right-section.component-6.section-4.title"
            )}
            titleBold={t(
              "authorized.about.right-section.component-6.section-4.title-bold"
            )}
            editTitle={t(
              "authorized.about.right-section.component-6.section-4.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-6.section-4.delete-title"
            )}
            Icon={ChatBubbleOutlineIcon}
            activeInputs={1}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-6.section-4.input-placeholder-1"
            )}
            {...props}
          />

          <hr />
        </div>
      )}
    </div>
  );
};

export default DetailsAboutYouComponent;
