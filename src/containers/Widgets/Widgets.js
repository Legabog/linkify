import "./Widgets.css";

export const Widgets = (props) => {
  return (
    <div className="widgets">
      <iframe
        title={"my-iframe"}
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};
