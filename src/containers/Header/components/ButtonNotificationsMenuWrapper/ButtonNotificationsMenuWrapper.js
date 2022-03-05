import { useState } from 'react';

import './ButtonNotificationsMenuWrapper.css';

import CheckIcon from '@mui/icons-material/Check';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SettingsIcon from '@mui/icons-material/Settings';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useTranslation } from 'react-i18next';

export const ButtonNotificationsMenuWrapper = (props) => {
  const { t } = useTranslation();
  const [optionPanel, setOptionalPanel] = useState(false);

  const toggleOptionPanel = (boolean) => {
    boolean ? setOptionalPanel(true) : setOptionalPanel(false);
  };

  return (
    <div
      className={'button-notifications-menu__wrapper'}
      style={
        props.activeButton === 2
          ? { opacity: 1, visibility: 'visible' }
          : { opacity: 0, visibility: 'hidden' }
      }
    >
      <div className='button-notifications-menu__header'>
        <h1>{t('authorized.header.header-right.button-notifications.menu.h1')}</h1>
        <div className='button-notifications-menu__options-icon'>
          <MoreHorizIcon
            onClick={() => {
              optionPanel ? toggleOptionPanel(false) : toggleOptionPanel(true);
            }}
          />
        </div>
        <div
          className='button-notifications-menu__options'
          style={{ display: optionPanel ? null : 'none' }}
        >
          <div className='button-notifications-menu__arrow-icon'>
            <ArrowDropUpIcon />
          </div>
          <div className='options-sections'>
            <div
              className='options-sections__wrapper'
              onClick={() => {
                props.toggleActiveButton();
                toggleOptionPanel(false);
              }}
            >
              <div className='options-sections__icon'>
                <CheckIcon />
              </div>
              <span>
                {t('authorized.header.header-right.button-notifications.menu.sections.item-1')}
              </span>
            </div>

            <div
              className='options-sections__wrapper'
              onClick={() => {
                props.toggleActiveButton();
                toggleOptionPanel(false);
              }}
            >
              <div className='options-sections__icon'>
                <SettingsIcon />
              </div>
              <span>
                {t('authorized.header.header-right.button-notifications.menu.sections.item-2')}
              </span>
            </div>

            <div
              className='options-sections__wrapper'
              onClick={() => {
                props.toggleActiveButton();
                toggleOptionPanel(false);
              }}
            >
              <div className='options-sections__icon'>
                <DesktopWindowsIcon />
              </div>
              <span>
                {t('authorized.header.header-right.button-notifications.menu.sections.item-3')}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='button-notifications-menu__body'>
        <div className='button-notifications-menu__img'>
          <img
            src='https://www.facebook.com/images/comet/empty_states_icons/notifications/null_states_notifications_gray_wash.svg'
            alt='description'
          />
        </div>

        <div className='button-notifications-menu__description'>
          <span>{t('authorized.header.header-right.button-notifications.menu.span')}</span>
        </div>
      </div>
    </div>
  );
};
