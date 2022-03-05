import './BodyPlayLists.css';

import AlbumIcon from '@mui/icons-material/Album';
import PhotoAdd from 'assets/images/apple-theme/playlist_add.jpg';

import { NavLink } from 'react-router-dom';
import { PlayList } from '../PlayList';
import { PlaylistPreloader } from '../PlaylistsPreloader';
import { useTranslation } from 'react-i18next';

export const BodyPlayLists = (props) => {
  const { t } = useTranslation();
  return (
    <div className={'playlists-body'}>
      {props.ownPlayListsSwitcher ? null : (
        <NavLink to='/music-list/playlists/create'>
          <div className={'playlists-body__create-playlist'}>
            <img src={PhotoAdd} alt='descripion' />
            <h3>{t('authorized.music-player.playlists.body.h3')}</h3>
          </div>
        </NavLink>
      )}
      {props.ownPlayListsFetching ? (
        <PlaylistPreloader />
      ) : props.ownPlayLists.length === 0 ? (
        <div className={'playlists-body__no-playlists'}>
          <AlbumIcon />
          <h2>{t('authorized.music-player.playlists.body.h2')}</h2>
        </div>
      ) : (
        props.ownPlayLists.map((e) => (
          <PlayList
            key={e._id}
            img={e.playlistcoverUrl}
            name={e.title}
            description={e.description}
            id={e._id}
            tracks={e.tracks}
            ownPlayListsTempTrack={props.ownPlayListsTempTrack}
            updatePlaylist={props.updatePlaylist}
            ownPlayListsSwitcher={props.ownPlayListsSwitcher}
            addTrackToPlayList={props.addTrackToPlayList}
            switchStateOfPlayLists={props.switchStateOfPlayLists}
          />
        ))
      )}
    </div>
  );
};
