import { NavLink } from 'react-router-dom';
import './BodyOwnPlayListsRouter.css';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DefaultMusic from 'assets/images/apple-theme/music.jpg';

import { BodyOwnPlayListsRouterTrackItem } from '../BodyOwnPlayListsRouterTrackItem';
import { DeleteTrackPreloader } from '../DeleteTrackPreloader';

export const BodyOwnPlayListsRouter = (props) => {
  return (
    <div className={'bodyOwnPlayListsRouter'}>
      <div className={'bodyOwnPlayListsRouter__playListImage'}>
        <img src={props.img || DefaultMusic} alt='description' />

        <div className={'bodyOwnPlayListsRouter__delete'}>
          <NavLink to='/music-list/playlists/'>
            <DeleteOutlineIcon
              style={{ color: '#F62A54' }}
              onClick={() => {
                props.deleteOwnPlayList(props.id);
              }}
            />
          </NavLink>
        </div>
      </div>
      <div className={'bodyOwnPlayListsRouter__playListTitle'}>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <div className={'bodyOwnPlayListsRouter__playListTracks'}>
          {props.ownPlayListsFetchingDeleteTrackFetching ? (
            <DeleteTrackPreloader />
          ) : (
            props.tracks.map((e) => (
              <BodyOwnPlayListsRouterTrackItem
                key={e._id}
                title={e.title}
                albumTitle={e.albumTitle}
                albumCover={e.albumCover}
                author={e.author}
                trackUrl={e.trackUrl}
                tracks={props.tracks}
                id={e._id}
                pid={props.id}
                deleteTrackFromPlayList={props.deleteTrackFromPlayList}
                playPlayer={props.playPlayer}
                setMusicForPlayer={props.setMusicForPlayer}
                setIndexOfTrack={props.setIndexOfTrack}
                musicPlayerPlayList={props.musicPlayerPlayList}
                musicPlayerIndexOfPlayingTrack={props.musicPlayerIndexOfPlayingTrack}
                musicPlayerIsPlaying={props.musicPlayerIsPlaying}
                musicPlayerActiveTrack={props.musicPlayerActiveTrack}
                musicPlayerDisablerButtonPlay={props.musicPlayerDisablerButtonPlay}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
