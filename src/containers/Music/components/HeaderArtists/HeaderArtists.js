import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './HeaderArtists.css';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTranslation } from 'react-i18next';

export const HeaderArtists = (props) => {
  const { t } = useTranslation();
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={'artists-header'}>
      <div className={'artists-header__button-back'}>
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

          <h3>{t('authorized.music-player.artists.header.h3')}</h3>
        </NavLink>
      </div>
      <h1>{t('authorized.music-player.artists.header.h1')}</h1>
    </div>
  );
};
