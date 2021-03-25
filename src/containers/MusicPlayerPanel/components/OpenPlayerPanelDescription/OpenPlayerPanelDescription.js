import musicCover from "assets/apple theme/music.jpg";

export const OpenPlayerPanelDescription = (props) => {
  return (
    <>
      <img
        src={
          props.musicPlayerActiveTrack !== null ? props.musicPlayerActiveTrack.albumCover : musicCover
        }
        alt={musicCover}
        onClick={props.toggleMusicPanel}
      />
      <h3 onClick={props.toggleMusicPanel}>
        {props.musicPlayerActiveTrack !== null ? props.musicPlayerActiveTrack.title : "Not Playing"}
      </h3>
    </>
  );
};

