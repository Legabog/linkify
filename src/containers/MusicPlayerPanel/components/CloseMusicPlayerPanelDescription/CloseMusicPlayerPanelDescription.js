import musicCover from "assets/images/apple-theme/music.jpg";
import { useTranslation } from "react-i18next";

export const CloseMusicPlayerPanelDescription = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <img
        src={
          props.activeTrack !== null ? props.activeTrack.albumCover : musicCover
        }
        alt={musicCover}
        onClick={props.toggleMusicPanel}
      />
      <h3 onClick={props.toggleMusicPanel}>
        {props.activeTrack !== null
          ? props.activeTrack.title
          : t("authorized.music-player-panel.close.h3")}
      </h3>
    </>
  );
};
