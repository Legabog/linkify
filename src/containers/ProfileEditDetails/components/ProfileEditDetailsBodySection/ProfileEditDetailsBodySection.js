import { Fragment } from "react";
import "./ProfileEditDetailsBodySection.css";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import SettingsIcon from "@material-ui/icons/Settings";

import _ from "lodash/core";

import { ProfileEditDetailsAddButton } from "../ProfileEditDetailsAddButton";
import { ProfileEditDetailsBodyNotNullSection } from "../ProfileEditDetailsBodyNotNullSection";

export const ProfileEditDetailsBodySection = (props) => {
  return (
    <div className={"profile-edit-details-body__section"}>
      <div className={"profile-edit-details-body__section-title"}>
        <span>{props.titleBold}</span>
      </div>

      {props.fullUserInfoAbout === null ? null : Array.isArray(
          props.componentArguments
        ) ? (
        props.componentArguments.length === 0 ? (
          <ProfileEditDetailsAddButton addIcon={ControlPointIcon} {...props} />
        ) : (
          props.componentArguments.map((e, index) => {
            let resultTitle_1 = "";
            let resultTitle_2 = "";
            let resultTitle_3 = "";
            let resultTitle_4 = "";
            let resultTitle = "";

            for (const [, value] of Object.entries(e)) {
              if (props.ativeInputPlaceholder1) {
                resultTitle_1 = `${props.ativeInputPlaceholder1}: «${value}»; `;
                if (props.ativeInputPlaceholder2) {
                  resultTitle_2 = `${props.ativeInputPlaceholder2}: «${value}»; `;
                  if (props.ativeInputPlaceholder3) {
                    resultTitle_3 = `${props.ativeInputPlaceholder3}: «${value}»; `;
                    if (props.ativeInputPlaceholder4) {
                      resultTitle_4 = `${props.ativeInputPlaceholder4}: «${value}»; `;
                    }
                  }
                }
              }

              resultTitle = `${resultTitle_1}${resultTitle_2}${resultTitle_3}${resultTitle_4}`;
            }

            return (
              <Fragment key={_.uniqueId(e)}>
                <ProfileEditDetailsBodyNotNullSection
                  {...props}
                  index={index}
                  mainTitle={resultTitle}
                />
                <ProfileEditDetailsAddButton
                  addIcon={ControlPointIcon}
                  {...props}
                />
              </Fragment>
            );
          })
        )
      ) : props.componentArguments === "" ? (
        <ProfileEditDetailsAddButton addIcon={SettingsIcon} {...props} />
      ) : (
        <>
          <ProfileEditDetailsBodyNotNullSection
            {...props}
            mainTitle={`${props.ativeInputPlaceholder1}: ${props.componentArguments}`}
          />
          <ProfileEditDetailsAddButton addIcon={SettingsIcon} {...props} />
        </>
      )}
    </div>
  );
};
