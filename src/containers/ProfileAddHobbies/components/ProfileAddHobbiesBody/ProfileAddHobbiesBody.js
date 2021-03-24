import "./ProfileAddHobbiesBody.css";

import { ProfileAddHobbiesBodyState1 } from "containers/ProfileAddHobbies/components/ProfileAddHobbiesBodyState1";
import { ProfileAddHobbiesBodyState2 } from "containers/ProfileAddHobbies/components/ProfileAddHobbiesBodyState2";

export const ProfileAddHobbiesBody = (props) => {
  switch (props.profileAddHobbiesStateComponent) {
    case 0:
      return (
        <div className={"profile-add-hobbies-body"}>
          <ProfileAddHobbiesBodyState1 {...props} />
        </div>
      );
    case 1:
      return (
        <div className={"profile-add-hobbies-body"}>
          <ProfileAddHobbiesBodyState2 {...props} />
        </div>
      );
    default:
      return null;
  }
};
