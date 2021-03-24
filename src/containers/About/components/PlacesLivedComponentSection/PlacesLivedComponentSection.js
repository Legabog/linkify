import { useState } from "react";
import "./PlacesLivedComponentSection.css";

import _ from "lodash/core";

import { PlacesLivedComponentAddButton } from "../PlacesLivedComponentAddButton";
import { PlacesLivedComponentNotNullSection } from "../PlacesLivedComponentNotNullSection";
import { PlacesLivedComponentSectionActiveInputs } from "../PlacesLivedComponentSectionActiveInputs";

export const PlacesLivedComponentSection = (props) => {
  const [activeComponent, setActiveComponent] = useState(false);

  const toggleActiveComponent = (boolean) => {
    boolean ? setActiveComponent(true) : setActiveComponent(false);
  };

  switch (activeComponent) {
    case false:
      return (
        <div className={"PlacesLivedComponent__section"}>
          <div className={"PlacesLivedComponent__sectionTitle"}>
            <span>{props.titleBold}</span>
          </div>
          {props.user === null ? null : Array.isArray(
              props.componentArguments
            ) ? (
            props.componentArguments.length === 0 ? (
              <PlacesLivedComponentAddButton
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
                  <PlacesLivedComponentNotNullSection
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
            <PlacesLivedComponentAddButton
              toggleActiveComponent={toggleActiveComponent}
              {...props}
            />
          ) : (
            <PlacesLivedComponentNotNullSection
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
          <div className={"PlacesLivedComponent__sectionTitle"}>
            <span>{props.titleBold}</span>
          </div>
          <PlacesLivedComponentSectionActiveInputs
            {...props}
            toggleActiveComponent={toggleActiveComponent}
          />
        </>
      );

    default:
      return null;
  }
};
