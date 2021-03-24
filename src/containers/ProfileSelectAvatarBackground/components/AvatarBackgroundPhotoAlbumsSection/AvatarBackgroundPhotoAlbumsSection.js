import { useTranslation } from "react-i18next";
import "./AvatarBackgroundPhotoAlbumsSection.css";

export const AvatarBackgroundPhotoAlbumsSection = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"profile-select-avatar-background-photo-albums__section"}>
      <img
        src={props.img}
        alt="description"
        onClick={() => {
          props.toggleSelectComponent(1, props.title, props.content);
        }}
      />
      <div className={"profile-select-avatar-background-photo-albums__title"}>
        <span>{props.title}</span>
      </div>
      <div className={"profile-select-avatar-background-photo-albums__uploads"}>
        <span>
          {props.uploads}{" "}
          {t("authorized.profile.select-avatar-background.uploads")}
        </span>
      </div>
    </div>
  );
};
