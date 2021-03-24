import { NavLink } from "react-router-dom";
import "./ButtonMessangerMenuWrapper.css";

import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

import { MenuMessangerInput } from "../MenuMessangerInput";
import { ButtonMessangerPanelItem } from "../ButtonMessangerPanelItem";
import { useInput } from "hooks/useInput";
import { useTranslation } from "react-i18next";

export const ButtonMessangerMenuWrapper = (props) => {
  const { t } = useTranslation();
  const [
    value,
    ref,
    changeHandler,
    isFocus,
    focusHandler,
    blurHandler,
  ] = useInput("");

  return (
    <div
      className={"button-messanger-menu__wrapper"}
      style={
        props.activeButton === 1
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div className="button-messanger-menu__header">
        <h2>{t("authorized.header.header-right.button-messenger.menu.h2")}</h2>
        <div className="button-messanger-menu__panel">
          <ButtonMessangerPanelItem
            item_help={t(
              "authorized.header.header-right.button-messenger.menu.panel.help-1"
            )}
            help_marginLeft={"-130px"}
            Icon={ZoomOutMapIcon}
            {...props}
          />
          <ButtonMessangerPanelItem
            item_help={t(
              "authorized.header.header-right.button-messenger.menu.panel.help-2"
            )}
            help_marginLeft={"-110px"}
            Icon={VideoCallIcon}
            {...props}
          />
          <ButtonMessangerPanelItem
            item_help={t(
              "authorized.header.header-right.button-messenger.menu.panel.help-3"
            )}
            help_marginLeft={"-80px"}
            Icon={CreateOutlinedIcon}
            {...props}
          />
          <ButtonMessangerPanelItem
            item_help={t(
              "authorized.header.header-right.button-messenger.menu.panel.help-4"
            )}
            help_marginLeft={"-30px"}
            Icon={MoreHorizIcon}
            {...props}
          />
        </div>
      </div>
      <div className="button-messanger-menu__body">
        <MenuMessangerInput
          value={value}
          inputRef={ref}
          changeHandler={changeHandler}
          isFocus={isFocus}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
        />

        <div className="button-messanger-menu__searches">
          {isFocus ? (
            <>
              <span>
                {t(
                  "authorized.header.header-right.button-messenger.menu.searches.focused.span-1"
                )}
              </span>
              <div className="button-messanger-menu__description">
                <span>
                  {t(
                    "authorized.header.header-right.button-messenger.menu.searches.focused.span-2"
                  )}
                </span>
              </div>
            </>
          ) : (
            <>
              <span>
                {t(
                  "authorized.header.header-right.button-messenger.menu.searches.unfocused.span"
                )}
              </span>
              <hr />
              <NavLink
                to={"/messages"}
                onClick={() => {
                  props.toggleActiveButton();
                }}
              >
                {t(
                  "authorized.header.header-right.button-messenger.menu.searches.unfocused.navLink"
                )}
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
