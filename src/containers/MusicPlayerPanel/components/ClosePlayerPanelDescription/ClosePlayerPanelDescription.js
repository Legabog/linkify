import musicCover from "assets/images/apple-theme/music.jpg";
import "../MusicPlayerPanel.css"

export const ClosePlayerPanelDescription = (props) => {
  return (
    <>
      {props.musicPlayerIsPlaying ? (
        <div className={"MusicPlayerPanel__open__avatarIsPlaying"}>
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
        <div className={"MusicPlayerPanel__open__avatar"}>
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
      <div className={"MusicPlayerPanel__open__description"}>
        <div className={"MusicPlayerPanel__open__songName"}>
          <h3>
            {props.musicPlayerActiveTrack !== null
              ? props.musicPlayerActiveTrack.title
              : "Not Playing"}
          </h3>
        </div>
        <div className={"MusicPlayerPanel__open__authorNameAlbumName"}>
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
