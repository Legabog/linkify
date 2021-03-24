import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import "./ButtonNotificationsWrapper.css";

export const ButtonNotificationsWrapper = (props) => {
  return (
    <div className={"button-notifications__wrapper"}>
      <div
        className={
          props.activeButton === 2
            ? "button-notifications_active"
            : "button-notifications"
        }
        onClick={() => {
          props.activeButton === 2
            ? props.toggleActiveButton()
            : props.toggleActiveButton(2);
          props.hideHelpMessage();
        }}
        onMouseEnter={() => {
          props.showHelpMessage();
        }}
        onMouseLeave={() => {
          props.hideHelpMessage();
        }}
      >
        <NotificationsActiveIcon />
      </div>
    </div>
  );
};
