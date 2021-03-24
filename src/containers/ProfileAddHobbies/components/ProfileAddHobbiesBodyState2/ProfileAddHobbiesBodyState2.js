import { useState } from "react";
import "./ProfileAddHobbiesBodyState2.css";

import { ProfileAddHobbiesBodyInput } from "containers/ProfileAddHobbies/components/ProfileAddHobbiesBodyInput";
import { ProfileAddHobbiesBodySelectedHobbies } from "containers/ProfileAddHobbies/components/ProfileAddHobbiesBodySelectedHobbies";
import { ProfileAddHobbiesBodySearchResults } from "containers/ProfileAddHobbies/components/ProfileAddHobbiesBodySearchResults";
import { useTranslation } from "react-i18next";

export const ProfileAddHobbiesBodyState2 = (props) => {
  const { t } = useTranslation();
  const [searchInput, setSearchInput] = useState("");

  const changeSearchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  let resultAddHobbies = 0;

  props.profileAddHobbiesRecommendedHobbies.map((e, index) => {
    if (searchInput) {
      if (
        t(`authorized.profile.add-hobbies.recommended-hobbies.${e.id - 1}`)
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      ) {
        resultAddHobbies += 1;
      }
    }

    return null;
  });

  return (
    <div className={"profile-add-hobbies-body_state-2"}>
      <ProfileAddHobbiesBodyInput
        searchInput={searchInput}
        changeSearchInputHandler={changeSearchInputHandler}
        {...props}
      />

      {props.tempHobbies.length !== 0 ? (
        <ProfileAddHobbiesBodySelectedHobbies {...props} />
      ) : null}

      <ProfileAddHobbiesBodySearchResults
        resultAddHobbies={resultAddHobbies}
        searchInput={searchInput}
        {...props}
      />
    </div>
  );
};
