import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import './BodyMusicPlayerActionSwitcher.css';
import { useTranslation } from 'react-i18next';

export const BodyMusicPlayerActionSwitcher = (props) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setHover(0);
  };

  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div
      className={'action-switcher'}
      onMouseOver={() => {
        setHover(1);
      }}
      onMouseOut={() => {
        setHover(0);
      }}
    >
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
        style={{
          textTransform: 'none',
          color: '#fff',
          transition: 'none' || 'none',
        }}
      >
        <div className={'action-switcher__icon'}>
          {hover ? (
            <MoreHorizIcon style={{ color: '#F62A54' }} />
          ) : (
            <MoreHorizIcon style={{ color: '#1877F2' }} />
          )}
        </div>
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ width: '380px', marginLeft: '-20px' }}
      >
        <div className={'action-switcher__root'}>
          <div className={'action-switcher__description-header'}>
            <img src={props.albumCover} alt='mini_album_cover' />
            <div className={'action-switcher__title-and-author'}>
              <h3>{props.title}</h3>
              <p>{props.author}</p>
            </div>
            <CloseIcon onClick={handleClose} style={{ color: 'rgb(163, 163, 163)' }} />
          </div>
        </div>
        <MenuItem
          onClick={() => {
            props.switchStateOfPlayLists(true);
            props.addTrackToPlayList({
              title: props.title,
              author: props.author,
              trackUrl: props.trackUrl,
              albumTitle: props.albumTitle,
              albumCover: props.albumCover,
            });
          }}
        >
          <NavLink
            style={{ color: '#4A76A8', textDecoration: 'none' }}
            to={`/music-list/playlists`}
          >
            <div className={'action-switcher__add'}>
              <AddIcon style={{ color: 'rgb(163, 163, 163)' }} />
              <h3>{t('authorized.music-player.music-player.body.action-switcher.h3')}</h3>
            </div>
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
};
