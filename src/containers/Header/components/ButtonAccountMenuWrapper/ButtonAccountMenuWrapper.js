import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ButtonAccountMenuWrapper.css";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import HelpIcon from "@material-ui/icons/Help";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Avatar } from "@material-ui/core";

import { ChangeAvatarSimplePreloader } from "pres-components/ChangeAvatarSimplePreloader";
import { useTranslation } from "react-i18next";

export const ButtonAccountMenuWrapper = memo((props) => {
  const colorOnline = {color: "rgb(25, 189, 0)"}
  const colorOffline = {color: "#F62A54"}
  const { t } = useTranslation();
  const [themeSwitcher, switchTheme] = useState(false);

  const toggleSwitcher = () => {
    themeSwitcher ? switchTheme(false) : switchTheme(true);
  };

  return (
    <div
      className={"button-account-menu__wrapper"}
      style={
        props.activeButton === 3
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div className="button-account-menu__header">
        <NavLink to={"/profile"}>
          <div
            className="button-account-menu__block"
            onClick={props.toggleActiveButton}
          >
            {props.fetchAvatar ? (
              <ChangeAvatarSimplePreloader width={"60px"} height={"60px"} />
            ) : props.user === null ||
              props.user.Avatars.activeAvatarUrl === "" ? (
              <div className="button-account-menu__icon">
                <AccountCircleIcon />
              </div>
            ) : (
              <div className="button-account-menu__icon">
                <Avatar
                  className={"button-account-menu-avatar"}
                  src={props.user.Avatars.activeAvatarUrl}
                  alt={"description"}
                />
              </div>
            )}

            <div className="button-account-menu__block__account-description">
              <div className="button-account-menu__block__account-name">
                <span>
                  {props.user === null
                    ? null
                    : `${props.user.Name} ${props.user.Sername}`}
                </span>
                <div className={"button-account-menu__block__online-section"}>
                  {navigator.onLine ? (
                    <>
                      <FiberManualRecordIcon
                        style={colorOnline}
                      />
                      <span>
                        {t(
                          "authorized.header.header-right.button-account.online-section.online"
                        )}
                      </span>
                    </>
                  ) : (
                    <>
                      <FiberManualRecordIcon style={colorOffline} />
                      <span>
                        {t(
                          "authorized.header.header-right.button-account.online-section.offline"
                        )}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="button-account-menu__block__description">
                <span>
                  {t(
                    "authorized.header.header-right.button-account.description"
                  )}
                </span>
              </div>
            </div>
          </div>
        </NavLink>

        <hr />

        <div
          className="button-account-menu__section"
          onClick={props.toggleActiveButton}
        >
          <div className="button-account-menu__section-icon">
            <AnnouncementIcon />
          </div>
          <div className="button-account-menu__section-info">
            <div className="button-account-menu__section-info-main">
              <span>
                {t(
                  "authorized.header.header-right.button-account.sections.item-1.span-1"
                )}
              </span>
            </div>

            <div className="button-account-menu__section-info-secondary">
              <span>
                {t(
                  "authorized.header.header-right.button-account.sections.item-1.span-2"
                )}
              </span>
            </div>
          </div>
        </div>

        <hr />

        <div
          className="button-account-menu__section"
          onClick={props.toggleActiveButton}
        >
          <div className="button-account-menu__section-icon">
            <SettingsIcon />
          </div>
          <div className="button-account-menu__section-info">
            <div className="buttonAccount__section__info-main">
              <span>
                {t(
                  "authorized.header.header-right.button-account.sections.item-2.span-1"
                )}
              </span>
            </div>
            <div className="button-account-menu__section-info-secondary">
              <span>
                {t(
                  "authorized.header.header-right.button-account.sections.item-2.span-2"
                )}
              </span>
            </div>
          </div>
          <div className="button-account-menu__section-arrow-left">
            <ArrowForwardIosIcon />
          </div>
        </div>

        <div
          className="button-account-menu__section"
          onClick={props.toggleActiveButton}
        >
          <div className="button-account-menu__section-icon">
            <HelpIcon />
          </div>
          <div className="button-account-menu__section-info">
            <div className="button-account-menu__section-info-main">
              <span>
                {t(
                  "authorized.header.header-right.button-account.sections.item-3.span-1"
                )}
              </span>
            </div>
            <div className="button-account-menu__section-info-secondary">
              <span>
                {t(
                  "authorized.header.header-right.button-account.sections.item-3.span-2"
                )}
              </span>
            </div>
          </div>
          <div className="button-account-menu__section-arrow-left">
            <ArrowForwardIosIcon />
          </div>
        </div>

        <div className="button-account-menu__section" onClick={toggleSwitcher}>
          <div className="button-account-menu__section-icon">
            <Brightness2Icon />
          </div>
          <div className="button-account-menu__section-info">
            <div className="button-account-menu__section-info-main">
              <span>
                {t(
                  "authorized.header.header-right.button-account.sections.item-4.span-1"
                )}
              </span>
            </div>
            <div className="button-account-menu__section-info-secondary">
              <span>
                {t(
                  "authorized.header.header-right.button-account.sections.item-4.span-2"
                )}
              </span>
            </div>
          </div>
          <div className="button-account-menu__section-switcher">
            <label className="button-account-menu__switcher">
              <input
                id="themeSwitcher"
                type="checkbox"
                checked={themeSwitcher}
                onChange={toggleSwitcher}
              />
              <span
                className="button-account-menu__slider-round"
                onClick={toggleSwitcher}
              ></span>
            </label>
          </div>
        </div>

        <div
          className="button-account-menu__section"
          onClick={() => {
            props.logoutButton();
            props.history.push("/");
          }}
        >
          <div className="button-account-menu__section-icon">
            <ExitToAppIcon />
          </div>
          <div className="button-account-menu__section-info">
            <div className="button-account-menu__section-info-main">
              <span>
                {t(
                  "authorized.header.header-right.button-account.sections.item-5.span-1"
                )}
              </span>
            </div>
            <div className="button-account-menu__section-info-secondary">
              <span>
                {t(
                  "authorized.header.header-right.button-account.sections.item-5.span-2"
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
