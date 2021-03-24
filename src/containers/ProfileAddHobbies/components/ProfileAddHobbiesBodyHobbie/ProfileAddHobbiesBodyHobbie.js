import "./ProfileAddHobbiesBodyHobbie.css";

import _ from "lodash";

export const ProfileAddHobbiesBodyHobbie = (props) => {
  return (
    <div
      className={`profile-add-hobbies-body-hobbie${
        _.some(props.tempHobbies, {
          id: props.id,
          hobbie: props.description,
        })
          ? "_active"
          : ""
      }`}
      onClick={() => {
        props.toggleTempHobbies(
          props.id,
          props.description,
          _.findIndex(props.tempHobbies, {
            id: props.id,
            hobbie: props.description,
          })
        );
      }}
    >
      <div
        className={`profile-add-hobbies-body-hobbie__icon${
          _.some(props.tempHobbies, {
            id: props.id,
            hobbie: props.description,
          })
            ? "_active"
            : ""
        }`}
      >
        <props.Icon />
      </div>

      <div
        className={`profile-add-hobbies-body-hobbie__description${
          _.some(props.tempHobbies, {
            id: props.id,
            hobbie: props.description,
          })
            ? "_active"
            : ""
        }`}
      >
        <span>{props.description}</span>
      </div>
    </div>
  );
};
