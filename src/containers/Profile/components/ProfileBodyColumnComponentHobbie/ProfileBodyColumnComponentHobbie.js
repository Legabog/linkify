import "./ProfileBodyColumnComponentHobbie.css";

export const ProfileBodyColumnComponentHobbie = (props) => {
  return (
    <div className={"profile-body-column-component-hobbie"}>
      <div className={"profile-body-column-component-hobbie__icon"}>
        <props.Icon />
      </div>
      <div className={"profile-body-column-component-hobbie__description"}>
        <span>{props.description}</span>
      </div>
    </div>
  );
};
