import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./StartScreen.css";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { useTranslation } from "react-i18next";

export const StartScreen = () => {
  let history = useHistory();
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const clickHandler = () => {
    if (!disabled) {
      setDisabled(true);
      isPlaying ? setIsPlaying(false) : setIsPlaying(true);
      setTimeout(() => {
        history.push("/music-list");
      }, 3000);
    }
  };

  return (
    <div className={"start-screen"}>
      <div className={"start-screen-section-1"}>
        <div className={"start-screen-section-1-title"}>
          <h1>{t("authorized.music-player.start-screen.h1")}</h1>
          <h2 onClick={clickHandler}>
            {t("authorized.music-player.start-screen.h2")}
          </h2>
        </div>
      </div>

      <div className={"start-screen-section-2"}>
        <div
          className={isPlaying ? "spinner-wrap pulse playing" : "spinner-wrap"}
          onClick={clickHandler}
        >
          <div className={"spinner-outer"}></div>

          <div className={"spinner-center"}></div>

          {isPlaying ? (
            <div className={"spinner-loader"}>
              <span className={"spinner-loader-stroke"}></span>
              <span className={"spinner-loader-stroke"}></span>
              <span className={"spinner-loader-stroke"}></span>
              <span className={"spinner-loader-stroke"}></span>
              <span className={"spinner-loader-stroke"}></span>
            </div>
          ) : (
            <PlayArrowIcon className={"play-sprite"} />
          )}
        </div>
      </div>
    </div>
  );
};
