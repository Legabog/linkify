import "./HeaderNavigationBarItem.css";

export const HeaderNavigationBarItem = (props) => {

  const navigationBarItemHandler = {
    clicHandler() {
      props.toggleActiveLink(props.link);
      props.hideHelp();
    },
    mouseEnter() {
      props.showHelp();
    },
    mouseLeave() {
      props.hideHelp();
    }
  }

  return (
    <div
      className={
        props.activeLink === props.link
          ? "header-navigation-bar__item_active"
          : "header-navigation-bar__item"
      }
      onClick={navigationBarItemHandler.clicHandler}
      onMouseEnter={navigationBarItemHandler.mouseEnter}
      onMouseLeave={navigationBarItemHandler.mouseLeave}
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
