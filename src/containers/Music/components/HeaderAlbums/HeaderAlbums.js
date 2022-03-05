import './HeaderAlbums.css';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const HeaderAlbums = (props) => {
  const { t } = useTranslation();
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={'albums-header'}>
      <div className={'albums-header__button-back'}>
        <NavLink
          to='/music-list'
          onMouseOver={() => {
            setHover(1);
          }}
          onMouseOut={() => {
            setHover(0);
          }}
        >
          {hover ? (
            <ArrowBackIosIcon style={{ color: '#F62A54' }} />
          ) : (
            <ArrowBackIosIcon style={{ color: '#1877F2' }} />
          )}
          <h3>{t('authorized.music-player.albums.header.h3')}</h3>
        </NavLink>
      </div>
      <h1>{t('authorized.music-player.albums.header.h1')}</h1>
    </div>
  );
};
