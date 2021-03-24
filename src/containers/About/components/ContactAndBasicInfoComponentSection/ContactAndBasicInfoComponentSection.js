import { useState } from "react";
import "./ContactAndBasicInfoComponentSection.css";

import _ from "lodash/core";

import { ContactAndBasicInfoComponentAddButton } from "../ContactAndBasicInfoComponentAddButton";
import { ContactAndBasicInfoComponentNotNullSection } from "../ContactAndBasicInfoComponentNotNullSection";
import { ContactAndBasicInfoComponentSectionActiveInputs } from "../ContactAndBasicInfoComponentSectionActiveInputs";

export const ContactAndBasicInfoComponentSection = (props) => {
  const [activeComponent, setActiveComponent] = useState(false);

  const toggleActiveComponent = (boolean) => {
    boolean ? setActiveComponent(true) : setActiveComponent(false);
  };

  switch (activeComponent) {
    case false:
      return (
        <div className={"ContactAndBasicInfoComponent__section"}>
          {props.titleBold ? (
            <div className={"ContactAndBasicInfoComponent__sectionTitle"}>
              <span>{props.titleBold}</span>
            </div>
          ) : null}
          {props.user === null ? null : Array.isArray(
              props.componentArguments
            ) ? (
            props.componentArguments.length === 0 ? (
              <ContactAndBasicInfoComponentAddButton
                {...props}
                toggleActiveComponent={toggleActiveComponent}
              />
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
                  <ContactAndBasicInfoComponentNotNullSection
                    {...props}
                    index={index}
                    key={_.uniqueId(e)}
                    toggleActiveComponent={toggleActiveComponent}
                    mainTitle={resultTitle}
                  />
                );
              })
            )
          ) : props.componentArguments === "" ? (
            <ContactAndBasicInfoComponentAddButton
              toggleActiveComponent={toggleActiveComponent}
              {...props}
            />
          ) : (
            <ContactAndBasicInfoComponentNotNullSection
              mainTitle={`${props.ativeInputPlaceholder1}: ${props.componentArguments}`}
              toggleActiveComponent={toggleActiveComponent}
              {...props}
            />
          )}
        </div>
      );

    case true:
      return (
        <>
          {props.titleBold ? (
            <div className={"ContactAndBasicInfoComponent__sectionTitle"}>
              <span>{props.titleBold}</span>
            </div>
          ) : null}
          <ContactAndBasicInfoComponentSectionActiveInputs
            {...props}
            toggleActiveComponent={toggleActiveComponent}
          />
        </>
      );

    default:
      return null;
  }
};
