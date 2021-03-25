import "../MusicPlayerPanel.css";

import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import { audioRef } from "containers/MusicPlayerPanel/AudioRef";

export const ClosePlayerPanelControl = (props) => {
  return (
    <>
      <div className={"MusicPlayerPanel__open__controlPanel__wrapper"}>
        <div className={"MusicPlayerPanel__open__controlPanel"}>
          <button
            disabled={props.musicPlayerDisablerButtonNext}
            onClick={() => {
              if (props.musicPlayerActiveTrack !== null) {
                switch (props.repeatState) {
                  case 0:
                    if (
                      props.musicPlayerActiveTrack !== null &&
                      audioRef.current.currentTime > 3
                    ) {
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
                    if (
                      props.musicPlayerActiveTrack !== null &&
                      audioRef.current.currentTime > 3
                    ) {
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
            style={{ marginLeft: "45px" }}
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
            style={{ marginLeft: "45px" }}
            disabled={props.musicPlayerDisablerButtonNext}
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
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack + 1
                            ].albumCover !== undefined
                              ? props.musicPlayerPlayList.tracks[
                                  props.musicPlayerIndexOfPlayingTrack + 1
                                ].albumCover
                              : props.musicPlayerPlayList.albumCover,
                          album:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack + 1
                            ].albumTitle !== undefined
                              ? props.musicPlayerPlayList.tracks[
                                  props.musicPlayerIndexOfPlayingTrack + 1
                                ].albumTitle
                              : props.musicPlayerPlayList.title,
                          author:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack + 1
                            ].author !== undefined
                              ? props.musicPlayerPlayList.tracks[
                                  props.musicPlayerIndexOfPlayingTrack + 1
                                ].author
                              : props.musicPlayerPlayList.author,
                          title:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack + 1
                            ].title,
                          trackUrl:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack + 1
                            ].trackUrl,
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
                            props.musicPlayerPlayList.tracks[0].albumCover !==
                            undefined
                              ? props.musicPlayerPlayList.tracks[0].albumCover
                              : props.musicPlayerPlayList.albumCover,
                          album:
                            props.musicPlayerPlayList.tracks[0].albumTitle !==
                            undefined
                              ? props.musicPlayerPlayList.tracks[0].albumTitle
                              : props.musicPlayerPlayList.title,
                          author:
                            props.musicPlayerPlayList.tracks[0].author !==
                            undefined
                              ? props.musicPlayerPlayList.tracks[0].author
                              : props.musicPlayerPlayList.author,
                          title: props.musicPlayerPlayList.tracks[0].title,
                          trackUrl:
                            props.musicPlayerPlayList.tracks[0].trackUrl,
                        },
                        0
                      );
                    } else {
                      props.nextTrack(
                        {
                          albumCover:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack + 1
                            ].albumCover !== undefined
                              ? props.musicPlayerPlayList.tracks[
                                  props.musicPlayerIndexOfPlayingTrack + 1
                                ].albumCover
                              : props.musicPlayerPlayList.albumCover,
                          album:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack + 1
                            ].albumTitle !== undefined
                              ? props.musicPlayerPlayList.tracks[
                                  props.musicPlayerIndexOfPlayingTrack + 1
                                ].albumTitle
                              : props.musicPlayerPlayList.title,
                          author:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack + 1
                            ].author !== undefined
                              ? props.musicPlayerPlayList.tracks[
                                  props.musicPlayerIndexOfPlayingTrack + 1
                                ].author
                              : props.musicPlayerPlayList.author,
                          title:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack + 1
                            ].title,
                          trackUrl:
                            props.musicPlayerPlayList.tracks[
                              props.musicPlayerIndexOfPlayingTrack + 1
                            ].trackUrl,
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
      </div>
    </>
  );
};
