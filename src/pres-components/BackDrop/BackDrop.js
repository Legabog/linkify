import "./BackDrop.css";

export const BackDrop = (props) => (
  <div
    className="backdrop"
    style={{ zIndex: `${props.zIndex}`, backgroundColor: `${props.customBackgroundColor}` }}
    onClick={props.onClick}
  ></div>
);
