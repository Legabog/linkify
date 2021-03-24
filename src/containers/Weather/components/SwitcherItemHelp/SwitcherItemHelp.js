import "./SwitcherItemHelp.css";

export const SwitcherItemHelp = (props) => {
  return (
    <div
      className="switcher-item-help"
      style={{
        marginLeft: props.marginLeft,
        marginTop: props.marginTop,
        opacity: props.helpOpacity,
        visibility: props.helpVisibility,
      }}
    >
      <span>{props.title}</span>
    </div>
  );
};