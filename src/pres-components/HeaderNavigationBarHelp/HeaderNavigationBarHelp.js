import "./HeaderNavigationBarHelp.css";

export const HeaderNavigationBarHelp = (props) => {
  const helpStyle = {
    opacity: props.helpOpacity,
    visibility: props.helpVisibility,
    marginLeft: `${props.helpMarginLeft}`,
  };

  return (
    <div className="header-navigation-bar__help" style={helpStyle}>
      <span>{props.title}</span>
    </div>
  );
};
