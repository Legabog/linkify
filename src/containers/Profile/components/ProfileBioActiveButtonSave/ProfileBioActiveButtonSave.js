import { useTranslation } from "react-i18next";
import "./ProfileBioActiveButtonSave.css";

export const ProfileBioActiveButtonSave = (props) => {
  const { t } = useTranslation();
  return (
    <div
      className={"profile__header__bio__activeButtonSave"}
      onClick={(e) => {
        e.preventDefault();
        props.changeBioHandler(
          props.textAreaSymbols,
          props.activeAccountEmail,
          props.toggleClickState
        );
      }}
    >
      <span>{t("authorized.profile.header.active-bio.save-button")}</span>
    </div>
  );
};
