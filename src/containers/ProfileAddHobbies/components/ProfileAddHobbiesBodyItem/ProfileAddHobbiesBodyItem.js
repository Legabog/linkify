import "./ProfileAddHobbiesBodyItem.css";
import _ from "lodash";

export const ProfileAddHobbiesBodyItem = (props) => {
  return (
    <div
      className={`profile-add-hobbies-body-item${
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
        className={`profile-add-hobbies-body-item__icon${
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
        className={`profile-add-hobbies-body-item__description${
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
