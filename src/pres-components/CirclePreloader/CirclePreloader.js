import "./CirclePreloader.css";

export const CirclePreloader = (props) => {
  return (
    <div
      className="circle-preloader"
      style={{
        marginLeft: `${props.margin_left}`,
        marginTop: `${props.margin_top}`,
      }}
    >
      <div></div>
      <div></div>
    </div>
  );
};
