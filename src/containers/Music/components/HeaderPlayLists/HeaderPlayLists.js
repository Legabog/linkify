import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './HeaderPlayLists.css';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTranslation } from 'react-i18next';

export const HeaderPlayLists = (props) => {
  const { t } = useTranslation();
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <>
      {props.ownPlayListsSwitcher ? (
        <div className={'playlists-header'}>
          <NavLink
            to={`/music-player/${props.ownPlayListsTempTrack.author}/${props.ownPlayListsTempTrack.albumTitle}`}
            onMouseOver={() => {
              setHover(1);
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onClick={() => props.switchStateOfPlayLists(false)}
          >
            <div className={'playlists-header__button-back'}>
              {hover ? (
                <ArrowBackIosIcon style={{ color: '#F62A54' }} />
              ) : (
                <ArrowBackIosIcon style={{ color: '#1877F2' }} />
              )}
              <h3>{props.ownPlayListsTempTrack.albumTitle}</h3>
            </div>
          </NavLink>
          <h1>{t('authorized.music-player.playlists.header.h1')}</h1>
        </div>
      ) : (
        <div className={'playlists-header'} onClick={() => props.switchStateOfPlayLists(false)}>
          <NavLink
            to='/music-list'
            onMouseOver={() => {
              setHover(1);
            }}
            onMouseOut={() => {
              setHover(0);
            }}
          >
            <div className={'playlists-header__button-back'}>
              {hover ? (
                <ArrowBackIosIcon style={{ color: '#F62A54' }} />
              ) : (
                <ArrowBackIosIcon style={{ color: '#1877F2' }} />
              )}
              <h3>{t('authorized.music-player.playlists.header.h3')}</h3>
            </div>
          </NavLink>
          <h1>{t('authorized.music-player.playlists.header.h1')}</h1>
        </div>
      )}
    </>
  );
};
