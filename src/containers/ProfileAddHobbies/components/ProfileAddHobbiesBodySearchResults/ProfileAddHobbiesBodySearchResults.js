import "./ProfileAddHobbiesBodySearchResults.css";

import _ from "lodash";

import { ProfileAddHobbiesBodyHobbieNotFound } from "containers/ProfileAddHobbies/components/ProfileAddHobbiesBodyHobbiesNotFound";
import { ProfileAddHobbiesBodyHobbie } from "containers/ProfileAddHobbies/components/ProfileAddHobbiesBodyHobbie";
import { useTranslation } from "react-i18next";

export const ProfileAddHobbiesBodySearchResults = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"profile-add-hobbies-body-search-results"}>
      {props.searchInput ? (
        <div className={"profile-add-hobbies-body-search-results__description"}>
          <span>
            {t("authorized.profile.add-hobbies.body.state-2.results-for")} "
            {props.searchInput}"
          </span>
        </div>
      ) : null}

      <div
        className={"profile-add-hobbies-body-search-results__search-results"}
      >
        {props.resultAddHobbies === 0 && props.searchInput !== "" ? (
          <ProfileAddHobbiesBodyHobbieNotFound />
        ) : null}

        {props.profileAddHobbiesRecommendedHobbies.map((e, index) => {
          if (props.searchInput) {
            if (
              t(
                `authorized.profile.add-hobbies.recommended-hobbies.${e.id - 1}`
              )
                .toLowerCase()
                .includes(props.searchInput.toLowerCase()) &&
              !_.some(props.tempHobbies, {
                id: e.id,
                hobbie: t(
                  `authorized.profile.add-hobbies.recommended-hobbies.${
                    e.id - 1
                  }`
                ),
              })
            ) {
              return (
                <ProfileAddHobbiesBodyHobbie
                  id={e.id}
                  key={_.uniqueId(e)}
                  description={t(
                    `authorized.profile.add-hobbies.recommended-hobbies.${
                      e.id - 1
                    }`
                  )}
                  Icon={
                    _.find(props.profileAddHobbiesRecommendedHobbies, {
                      id: e.id,
                    }).icon
                  }
                  tempHobbies={props.tempHobbies}
                  toggleTempHobbies={props.toggleTempHobbies}
                />
              );
            }
          }
          return null;
        })}
      </div>
    </div>
  );
};
