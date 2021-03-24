import { useTranslation } from "react-i18next";
import "./HeaderMusicList.css";

export const HeaderMusicList = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"music-list-header"}>
      <div className={"music-list-header__title"}>
        <h1>{t("authorized.music-player.music-list.header")}</h1>
      </div>
    </div>
  );
};
