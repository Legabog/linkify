import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './HeaderOwnPlayListsRouter.css';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTranslation } from 'react-i18next';

export const HeaderOwnPlayListsRouter = (props) => {
  const { t } = useTranslation();
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={'headerOwnPlayListsRouter'}>
      <NavLink
        to='/music-list/playlists/'
        onMouseOver={() => {
          setHover(1);
        }}
        onMouseOut={() => {
          setHover(0);
        }}
      >
        <div className={'headerOwnPlayListsRouter__buttonBack'}>
          {hover ? (
            <ArrowBackIosIcon style={{ color: '#F62A54' }} />
          ) : (
            <ArrowBackIosIcon style={{ color: '#1877F2' }} />
          )}
          <h3>{t('authorized.music-player.own-playlists-router.header.h3')}</h3>
        </div>
      </NavLink>
    </div>
  );
};
