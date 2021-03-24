import "./UsersBody.css";

import { UsersCard } from "containers/Users/components/UsersCard";

export const UsersBody = (props) => {


  return (
    <div className={"users-body"}>
      <div className={"users-container"}>
      {props.users.map((e, index) => {
        return (
          <UsersCard
            key={e.id}
            avatar={e.data.Avatars.activeAvatarUrl}
            backgroundImage={e.data.AvatarBackground.activeAvatarBackgroundUr}
            name={e.data.Name}
            surname={e.data.Sername}
            gender={e.data.Gender}
            email={e.data.Email}
          />
        );
      })}

      </div>
      
    </div>
  );
};
