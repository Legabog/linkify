import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./HeaderArtistItemRouter.css";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useTranslation } from "react-i18next";

export const HeaderArtistItemRouter = (props) => {
  const { t } = useTranslation()
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={"artist-item-router__header"}>
      <div className={"artist-item-router__button-back"}>
        <NavLink
          to="/music-list/artists"
          onMouseOver={() => {
            setHover(1);
          }}
          onMouseOut={() => {
            setHover(0);
          }}
        >
          {hover ? (
            <ArrowBackIosIcon style={{ color: "#F62A54" }} />
          ) : (
            <ArrowBackIosIcon style={{ color: "#1877F2" }} />
          )}
          <h3>{t("authorized.music-player.artist-item-router.header.h3")}</h3>
        </NavLink>
      </div>
      <h1>{props.nameArtist}</h1>
    </div>
  );
};

