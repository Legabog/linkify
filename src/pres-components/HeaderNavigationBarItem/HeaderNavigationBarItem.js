import "./HeaderNavigationBarItem.css";

export const HeaderNavigationBarItem = (props) => {
  return (
    <div
      className={
        props.activeLink === props.link
          ? "header-navigation-bar__item_active"
          : "header-navigation-bar__item"
      }
      onClick={() => {
        props.toggleActiveLink(props.link);
        props.hideHelp();
      }}
      onMouseEnter={() => {
        props.showHelp();
      }}
      onMouseLeave={() => {
        props.hideHelp();
      }}
    >
      <div
        className={
          props.activeLink === props.link
            ? "header-navigation-bar__item__icon_active"
            : "header-navigation-bar__item__icon"
        }
      >
        {props.activeLink === props.link ? (
          <props.activeIcon fontSize="large" />
        ) : (
          <props.Icon fontSize="large" />
        )}
      </div>
    </div>
  );
};
