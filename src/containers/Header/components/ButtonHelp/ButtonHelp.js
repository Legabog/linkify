import "./ButtonHelp.css";

export const ButtonHelp = (props) => {
  return (
    <div
      className="button-help"
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