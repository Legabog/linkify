import { useTranslation } from "react-i18next";

import { BodyMusicListItem } from "../BodyMusicListItem";

export const BodyMusicList = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"music-list-body"}>
      <BodyMusicListItem
        title={t("authorized.music-player.music-list.body.title-1")}
        link={"artists"}
      />
      <BodyMusicListItem
        title={t("authorized.music-player.music-list.body.title-2")}
        link={"albums"}
      />
      <div
        onClick={() => {
          props.switchStateOfPlayLists(false);
        }}
      >
        <BodyMusicListItem
          title={t("authorized.music-player.music-list.body.title-3")}
          link={"playlists"}
        />
      </div>
    </div>
  );
};
