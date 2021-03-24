import { memo } from "react";
import "./FooterMusicList.css";

import _ from "lodash/core";

import { FooterItem } from "../FooterItem";
import { useTranslation } from "react-i18next";

export const FooterMusicList = memo((props) => {
  const { t } = useTranslation();
  return (
    <div className={"music-list-footer"}>
      <h3>{t("authorized.music-player.music-list.footer.h3")}</h3>
      {props.recentlyPlayed.map((e) => (
        <FooterItem
          key={_.uniqueId(e)}
          img={e.img}
          title={e.title}
          author={e.author}
          toggleSwitcher={props.toggleSwitcher}
        />
      ))}
    </div>
  );
});
