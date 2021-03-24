import { useTranslation } from "react-i18next";
import "./ProfileHeaderBio.css";

export const ProfileHeaderBio = (props) => {
  const { t } = useTranslation()
  return (
    <div className={"profile__header__bio"}>
      {props.user === null || props.user.Bio === "" ? (
        <div className={"profile__header__bioUnfilledSpan"}>
          <span onClick={props.toggleClickState}>{t("authorized.profile.header.bio.header.state-1-span")}</span>
        </div>
      ) : (
        <>
          <div className={"profile__header__bioFilledSpan"}>
            <span>{props.user.Bio}</span>
          </div>
          <div className={"profile__header__bioUnfilledSpan"}>
            <span onClick={props.toggleClickState}>{t("authorized.profile.header.bio.header.state-2-span")}</span>
          </div>
        </>
      )}
    </div>
  );
};

