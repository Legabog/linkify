import '../MusicPlayerPanel.css';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { audioRef } from 'containers/MusicPlayerPanel/AudioRef';

export const OpenPlayerPanelControl = (props) => {
  return (
    <>
      <div className={'MusicPlayerPanel__close__controlPanel'}>
        <button
          disabled={props.musicPlayerDisablerButtonNext}
          onClick={() => {
            if (props.musicPlayerActiveTrack !== null) {
              switch (props.repeatState) {
                case 0:
                  if (props.musicPlayerActiveTrack !== null && audioRef.current.currentTime > 3) {
                    audioRef.current.currentTime = 0;
                  } else {
                    if (props.musicPlayerIndexOfPlayingTrack - 1 >= 0) {
                      props.previousTrack(
                        {
                          albumCover:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack - 1
                            ].albumCover !== undefined
                              ? props.musicPlayerPlayList.tracks[
                                  props.musicPlayerIndexOfPlayingTrack - 1
                                ].albumCover
                              : props.musicPlayerPlayList.albumCover,
                          album:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack - 1
                            ].albumTitle !== undefined
                              ? props.musicPlayerPlayList.tracks[
                                  props.musicPlayerIndexOfPlayingTrack - 1
                                ].albumTitle
                              : props.musicPlayerPlayList.title,
                          author:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack - 1
                            ].author !== undefined
                              ? props.musicPlayerPlayList.tracks[
                                  props.musicPlayerIndexOfPlayingTrack - 1
                                ].author
                              : props.musicPlayerPlayList.author,
                          title:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack - 1
                            ].title,
                          trackUrl:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack - 1
                            ].trackUrl,
                        },
                        props.musicPlayerIndexOfPlayingTrack - 1
                      );
                    }
                  }
                  break;
                case 1:
                  if (props.musicPlayerActiveTrack !== null && audioRef.current.currentTime > 3) {
                    audioRef.current.currentTime = 0;
                  } else {
                    if (props.musicPlayerIndexOfPlayingTrack - 1 >= 0) {
                      props.previousTrack(
                        {
                          albumCover:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack - 1
                            ].albumCover !== undefined
                              ? props.musicPlayerPlayList.tracks[
                                  props.musicPlayerIndexOfPlayingTrack - 1
                                ].albumCover
                              : props.musicPlayerPlayList.albumCover,
                          album:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack - 1
                            ].albumTitle !== undefined
                              ? props.musicPlayerPlayList.tracks[
                                  props.musicPlayerIndexOfPlayingTrack - 1
                                ].albumTitle
                              : props.musicPlayerPlayList.title,
                          author:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack - 1
                            ].author !== undefined
                              ? props.musicPlayerPlayList.tracks[
                                  props.musicPlayerIndexOfPlayingTrack - 1
                                ].author
                              : props.musicPlayerPlayList.author,
                          title:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack - 1
                            ].title,
                          trackUrl:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack - 1
                            ].trackUrl,
                        },
                        props.musicPlayerIndexOfPlayingTrack - 1
                      );
                    }
                  }
                  break;
                case 2:
                  audioRef.current.currentTime = 0;
                  audioRef.current.play();

                  break;
                default:
                  break;
              }
            }
          }}
        >
          <SkipPreviousIcon />
        </button>

        <button
          disabled={props.musicPlayerDisablerButtonNext}
          aria-label='music_panel_play_pause'
          onClick={() => {
            if (props.musicPlayerActiveTrack !== null) {
              if (props.musicPlayerIsPlaying) {
                audioRef.current.pause();
                props.toggleIsPlaying(false);
              } else {
                audioRef.current.play();
                props.toggleIsPlaying(true);
              }
            }
          }}
        >
          {props.musicPlayerIsPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>

        <button
          disabled={props.musicPlayerDisablerButtonNext}
          aria-label='music_panel_next'
          onClick={() => {
            if (props.musicPlayerActiveTrack !== null) {
              switch (props.repeatState) {
                case 0:
                  if (
                    props.musicPlayerIndexOfPlayingTrack + 1 <
                    props.musicPlayerPlayList.tracks.length
                  ) {
                    props.nextTrack(
                      {
                        albumCover:
                          props.musicPlayerPlayList.tracks[props.musicPlayerIndexOfPlayingTrack + 1]
                            .albumCover !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.musicPlayerIndexOfPlayingTrack + 1
                              ].albumCover
                            : props.musicPlayerPlayList.albumCover,
                        album:
                          props.musicPlayerPlayList.tracks[props.musicPlayerIndexOfPlayingTrack + 1]
                            .albumTitle !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.musicPlayerIndexOfPlayingTrack + 1
                              ].albumTitle
                            : props.musicPlayerPlayList.title,
                        author:
                          props.musicPlayerPlayList.tracks[props.musicPlayerIndexOfPlayingTrack + 1]
                            .author !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.musicPlayerIndexOfPlayingTrack + 1
                              ].author
                            : props.musicPlayerPlayList.author,
                        title:
                          props.musicPlayerPlayList.tracks[props.musicPlayerIndexOfPlayingTrack + 1]
                            .title,
                        trackUrl:
                          props.musicPlayerPlayList.tracks[props.musicPlayerIndexOfPlayingTrack + 1]
                            .trackUrl,
                      },
                      props.musicPlayerIndexOfPlayingTrack + 1
                    );
                  }

                  break;
                case 1:
                  if (
                    props.musicPlayerIndexOfPlayingTrack ===
                    props.musicPlayerPlayList.tracks.length - 1
                  ) {
                    props.nextTrack(
                      {
                        albumCover:
                          props.musicPlayerPlayList.tracks[0].albumCover !== undefined
                            ? props.musicPlayerPlayList.tracks[0].albumCover
                            : props.musicPlayerPlayList.albumCover,
                        album:
                          props.musicPlayerPlayList.tracks[0].albumTitle !== undefined
                            ? props.musicPlayerPlayList.tracks[0].albumTitle
                            : props.musicPlayerPlayList.title,
                        author:
                          props.musicPlayerPlayList.tracks[0].author !== undefined
                            ? props.musicPlayerPlayList.tracks[0].author
                            : props.musicPlayerPlayList.author,
                        title: props.musicPlayerPlayList.tracks[0].title,
                        trackUrl: props.musicPlayerPlayList.tracks[0].trackUrl,
                      },
                      0
                    );
                  } else {
                    props.nextTrack(
                      {
                        albumCover:
                          props.musicPlayerPlayList.tracks[props.musicPlayerIndexOfPlayingTrack + 1]
                            .albumCover !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.musicPlayerIndexOfPlayingTrack + 1
                              ].albumCover
                            : props.musicPlayerPlayList.albumCover,
                        album:
                          props.musicPlayerPlayList.tracks[props.musicPlayerIndexOfPlayingTrack + 1]
                            .albumTitle !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.musicPlayerIndexOfPlayingTrack + 1
                              ].albumTitle
                            : props.musicPlayerPlayList.title,
                        author:
                          props.musicPlayerPlayList.tracks[props.musicPlayerIndexOfPlayingTrack + 1]
                            .author !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.musicPlayerIndexOfPlayingTrack + 1
                              ].author
                            : props.musicPlayerPlayList.author,
                        title:
                          props.musicPlayerPlayList.tracks[props.musicPlayerIndexOfPlayingTrack + 1]
                            .title,
                        trackUrl:
                          props.musicPlayerPlayList.tracks[props.musicPlayerIndexOfPlayingTrack + 1]
                            .trackUrl,
                      },
                      props.musicPlayerIndexOfPlayingTrack + 1
                    );
                  }

                  break;
                case 2:
                  audioRef.current.currentTime = 0;
                  audioRef.current.play();

                  break;
                default:
                  break;
              }
            }
          }}
        >
          <SkipNextIcon />
        </button>
      </div>
    </>
  );
};
