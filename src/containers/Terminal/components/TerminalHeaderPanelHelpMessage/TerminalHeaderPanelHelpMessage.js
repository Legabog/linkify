import "./TerminalHeaderPanelHelpMessage.css";

export const TerminalHeaderPanelHelpMessage = (props) => {
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