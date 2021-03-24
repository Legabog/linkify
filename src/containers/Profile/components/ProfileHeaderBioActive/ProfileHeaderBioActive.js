import PublicIcon from "@material-ui/icons/Public";
import "./ProfileHeaderBioActive.css";
import { useState } from "react";

import { ProfileBioActiveButtonSave } from "../ProfileBioActiveButtonSave";
import { useTranslation } from "react-i18next";

export const ProfileHeaderBioActive = (props) => {
  const { t } = useTranslation();
  const [textAreaSymbols, setTextAreaSymbols] = useState(
    props.user === null ? "" : props.user.Bio
  );
  const [validationForSymbols] = useState(101);

  const textAreaChangeHandler = (e) => {
    setTextAreaSymbols(e.target.value);
  };

  return (
    <div className={"profile__header__bio__active"}>
      <div className={"profile__header__bio__activeTextarea"}>
        <textarea
          value={textAreaSymbols}
          onChange={textAreaChangeHandler}
          placeholder={t(
            "authorized.profile.header.active-bio.textarea-placeholder"
          )}
        ></textarea>
      </div>
      <div className={"profile__header__bio__activeSpan"}>
        <span>
          {validationForSymbols - textAreaSymbols.length}{" "}
          {t("authorized.profile.header.active-bio.characters")}
        </span>
      </div>

      <div className={"profile__header__bio__activePanel"}>
        <PublicIcon />
        <span>{t("authorized.profile.header.active-bio.public")}</span>

        <div className={"profile__header__bio__activeButtons"}>
          <div
            className={"profile__header__bio__activeButtonCancel"}
            onClick={props.toggleClickState}
          >
            <span>
              {t("authorized.profile.header.active-bio.cancel-button")}
            </span>
          </div>

          {textAreaSymbols.trim() === "" || textAreaSymbols.length > 101 ? (
            <div className={"profile__header__bio__activeButtonSave-disabled"}>
              <span>
                {t("authorized.profile.header.active-bio.save-button")}
              </span>
            </div>
          ) : (
            <ProfileBioActiveButtonSave
              {...props}
              textAreaSymbols={textAreaSymbols}
            />
          )}
        </div>
      </div>
    </div>
  );
};
