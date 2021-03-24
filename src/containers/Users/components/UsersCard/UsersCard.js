import "./UsersCard.css";
import avatar from "assets/images/user.png"

export const UsersCard = (props) => {
  return (
    <div className={"users-card"}>
      <div className={"users-card-namesurname"}>
        <span>
          {props.name} {props.surname}
        </span>
      </div>
      <div className={"users-avatar"}>
        <img src={props.avatar === "" ? avatar : props.avatar } alt="description" />
        <div className={"users-card-info"}>
          <span>Short info:</span>
          <span>Gender: {props.gender}</span>
          <span>Email: {props.email}</span>
        </div>
      </div>
      
    </div>
  );
};
