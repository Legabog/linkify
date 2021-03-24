import "./LifeEventsComponent.css";

import EventBusyIcon from "@material-ui/icons/EventBusy";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

import { LifeEventsComponentSection } from "../LifeEventsComponentSection";
import { CirclePreloader } from "pres-components/CirclePreloader";
import { useTranslation } from "react-i18next";

export const LifeEventsComponent = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"LifeEventsComponent__wrapper"}>
      {props.fetchFullUserInfoAbout ? (
        <CirclePreloader />
      ) : (
        <div className={"LifeEventsComponent"}>
          <LifeEventsComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.LifeEvents
            }
            fieldReducer={props.lifeEventsAddLifeEvent}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.lifeEventsDeleteLifeEvent}
            title={t(
              "authorized.about.right-section.component-7.section.title"
            )}
            titleBold={t(
              "authorized.about.right-section.component-7.section.title-bold"
            )}
            editTitle={t(
              "authorized.about.right-section.component-7.section.edit-title"
            )}
            deleteTitle={t(
              "authorized.about.right-section.component-7.section.delete-title"
            )}
            Icon={EventAvailableIcon}
            activeInputs={2}
            ativeInputPlaceholder1={t(
              "authorized.about.right-section.component-7.section.input-placeholder-1"
            )}
            ativeInputPlaceholder2={t(
              "authorized.about.right-section.component-7.section.input-placeholder-2"
            )}
            {...props}
          />

          {props.fullUserInfoAbout === null ? null : props.fullUserInfoAbout
              .LifeEvents.length === 0 ? (
            <div className={"LifeEventsComponent__section__description"}>
              <EventBusyIcon />
              <span>
                {t("authorized.about.right-section.component-7.description")}
              </span>
            </div>
          ) : null}

          <hr />
        </div>
      )}
    </div>
  );
};
