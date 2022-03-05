import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "./MusicPlayerPanel.css";

import {
  setMusicForPlayer,
  toggleIsPlaying,
  playPlayer,
  pausePlayer,
  setIndexOfTrack,
  nextTrack,
  previousTrack,
  shuffleMusic,
  setActiveTrackAndPlayerPlayListNull,
} from "redux/music-player-reducer";

import { BackDrop } from "pres-components/BackDrop";
import { AudioElement } from "./components/AudioElement";
import { CloseMusicPlayerPanelDescription } from "./components/CloseMusicPlayerPanelDescription";
import { CloseMusicPlayerPanelControl } from "./components/CloseMusicPlayerPanelControl";
import { OpenMusicPlayerDropDownButton } from "./components/OpenMusicPlayerDropDownButton";
import { OpenMusicPlayerPanelDescription } from "./components/OpenMusicPlayerPanelDescription";
import { OpenMusicPlayerTrackBar } from "./components/OpenMusicPlayerTrackBar";
import { OpenMusicPlayerPanelControl } from "./components/OpenMusicPlayerPanelControl";
import { OpenMusicPlayerVolumeBar } from "./components/OpenMusicPlayerVolumeBar";
import { OpenMusicPlayerShuffleAndRepeatButton } from "./components/OpenMusicPlayerShuffleAndRepeatButton";
import { audioRef } from "containers/MusicPlayerPanel/AudioRef";

const MusicPlayerPanel_ = (props) => {
  const [opened, switchCondition] = useState(false);

  const toggleMusicPanel = () => {
    switchCondition(!opened);
  };

  let [audioCurrentTime, setAudioCurrentTime] = useState(0);

  const audioTimeHandler = (e) => {
    setAudioCurrentTime((audioRef.current.currentTime = e.target.value));
  };

  useEffect(() => {
    const upd = setInterval(() => {
      if (props.musicPlayerIsPlaying) {
        setAudioCurrentTime(audioRef.current.currentTime);
      }
    }, 100);

    return () => clearInterval(upd);
  }, [props.musicPlayerIsPlaying]);

  let [volume, volumeH] = useState(1);

  const volumeHandler = (e) => {
    volumeH((audioRef.current.volume = e.target.value));
  };

  let [repeatState, toggleRepeatState] = useState(0);

  const setRepeatState = () => {
    switch (repeatState) {
      case 0:
        toggleRepeatState(1);
        break;
      case 1:
        toggleRepeatState(2);
        break;
      case 2:
        toggleRepeatState(0);
        break;
      default:
        break;
    }
  };

  let cls = "music-player-panel";

  if (opened) {
    cls += "_open";
  } else {
    cls += "_close";
  }

  return (
    <>
      {!opened ? (
        <div className={cls}>
          <CloseMusicPlayerPanelDescription
            {...props}
            toggleMusicPanel={toggleMusicPanel}
          />

          <CloseMusicPlayerPanelControl {...props} repeatState={repeatState} />
        </div>
      ) : (
        <div className={cls}>
          <OpenMusicPlayerDropDownButton toggleMusicPanel={toggleMusicPanel} />
          <OpenMusicPlayerPanelDescription {...props} />
          <OpenMusicPlayerTrackBar
            {...props}
            audioCurrentTime={audioCurrentTime}
            audioTimeHandler={audioTimeHandler}
          />
          <OpenMusicPlayerPanelControl {...props} repeatState={repeatState} />

          <OpenMusicPlayerVolumeBar
            {...props}
            volume={volume}
            volumeH={volumeH}
            volumeHandler={volumeHandler}
          />

          <OpenMusicPlayerShuffleAndRepeatButton
            {...props}
            setRepeatState={setRepeatState}
            repeatState={repeatState}
          />
        </div>
      )}
      {opened ? (
        <BackDrop
          onClick={toggleMusicPanel}
          zIndex={101}
          customBackgroundColor={"rgba(0, 0, 0, .7)"}
        />
      ) : null}
      <AudioElement {...props} volume={volume} repeatState={repeatState} />
    </>
  );
};

const mapStateToProps = (state) => ({
  musicPlayerIsPlaying: state.musicPlayerReducer.musicPlayerIsPlaying,
  musicPlayerPlayList: state.musicPlayerReducer.musicPlayerPlayList,
  musicPlayerIndexOfPlayingTrack:
    state.musicPlayerReducer.musicPlayerIndexOfPlayingTrack,
  musicPlayerActiveTrack: state.musicPlayerReducer.musicPlayerActiveTrack,
  musicPlayerDisablerButtonNext:
    state.musicPlayerReducer.musicPlayerDisablerButtonNext,
  musicPlayerDisablerButtonPlay:
    state.musicPlayerReducer.musicPlayerDisablerButtonPlay,
});

export const MusicPlayerPanel = compose(
  connect(mapStateToProps, {
    setMusicForPlayer,
    toggleIsPlaying,
    playPlayer,
    pausePlayer,
    setIndexOfTrack,
    nextTrack,
    previousTrack,
    shuffleMusic,
    setActiveTrackAndPlayerPlayListNull,
  })
)(MusicPlayerPanel_);
