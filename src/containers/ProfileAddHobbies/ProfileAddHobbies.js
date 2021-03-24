import { useState } from "react";
import _ from "lodash";
import "./ProfileAddHobbies.css";

import { BackDrop } from "pres-components/BackDrop";
import { ProfileAddHobbiesHeader } from "./components/ProfileAddHobbiesHeader";
import { ProfileAddHobbiesBody } from "./components/ProfileAddHobbiesBody";
import { ProfileAddHobbiesFooter } from "./components/ProfileAddHobbiesFooter";

export const ProfileAddHobbies = (props) => {
  const [tempHobbies, setTempHobbies] = useState([]);
  
  const toggleTempHobbies = (id, hobbie, index) => {
    !_.some(tempHobbies, { id, hobbie })
      ? setTempHobbies([...tempHobbies, { id, hobbie }])
      : setTempHobbies(
          tempHobbies.slice(0, index).concat(tempHobbies.slice(index + 1))
        );
  };

  const cancelClick = () => {
    props.toggleProfileAddHobbies(
      props.profileAddHobbiesVisibility,
      props.profileAddHobbiesOpacity
    );
    setTempHobbies([]);
    setTimeout(() => {
      props.toggleProfileAddHobbiesStateComponent(0);
    }, 200);
  };

  const saveClick = () => {
    props.toggleProfileAddHobbies(
      props.profileAddHobbiesVisibility,
      props.profileAddHobbiesOpacity
    );
    props.addHobbiesWithFirebase(tempHobbies, props.activeAccountEmail);
    setTempHobbies([]);
    setTimeout(() => {
      props.toggleProfileAddHobbiesStateComponent(0);
    }, 200);
  };

  return (
    <div
      className={"profile-add-hobbies__wrapper"}
      style={{
        visibility: props.profileAddHobbiesVisibility,
        opacity: props.profileAddHobbiesOpacity,
      }}
    >
      <div className={"profile-add-hobbies"}>
        <ProfileAddHobbiesHeader
          setTempHobbies={setTempHobbies}
          cancelClick={cancelClick}
          {...props}
        />

        <ProfileAddHobbiesBody
          tempHobbies={tempHobbies}
          toggleTempHobbies={toggleTempHobbies}
          {...props}
        />
        <ProfileAddHobbiesFooter
          tempHobbies={tempHobbies}
          setTempHobbies={setTempHobbies}
          cancelClick={cancelClick}
          saveClick={saveClick}
          {...props}
        />
      </div>
      <BackDrop onClick={cancelClick} />
    </div>
  );
};
