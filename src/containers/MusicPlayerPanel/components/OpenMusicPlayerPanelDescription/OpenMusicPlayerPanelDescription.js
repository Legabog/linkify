import "./OpenMusicPlayerPanelDescription.css";
import musicCover from "assets/images/apple-theme/music.jpg";
import { useTranslation } from "react-i18next";

export const OpenMusicPlayerPanelDescription = (props) => {
  const { t } = useTranslation()
  return (
    <>
      {props.musicPlayerIsPlaying ? (
        <div className={"music-player-panel_open__avatar_playing"}>
          <img
            src={
              props.musicPlayerActiveTrack !== null
                ? props.musicPlayerActiveTrack.albumCover
                : musicCover
            }
            alt={musicCover}
          />
        </div>
      ) : (
        <div className={"music-player-panel_open__avatar"}>
          <img
            src={
              props.musicPlayerActiveTrack !== null
                ? props.musicPlayerActiveTrack.albumCover
                : musicCover
            }
            alt={musicCover}
          />
        </div>
      )}
      <div className={"music-player-panel_open__description"}>
        <div className={"music-player-panel_open__song-name"}>
          <h3>
            {props.musicPlayerActiveTrack !== null
              ? props.musicPlayerActiveTrack.title
              : t("authorized.music-player-panel.open.h3")}
          </h3>
        </div>
        <div className={"music-player-panel_open__author-name-album-name"}>
          <h3>
            {props.musicPlayerActiveTrack !== null
              ? props.musicPlayerActiveTrack.author + " - " + props.musicPlayerActiveTrack.album
              : ""}
          </h3>
        </div>
      </div>
    </>
  );
};

