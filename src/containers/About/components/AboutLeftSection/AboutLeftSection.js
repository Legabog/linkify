import "./AboutLeftSection.css";
import { AboutLeftSectionNavBar } from "../AboutLeftSectionNavBar";
import { useTranslation } from "react-i18next";

export const AboutLeftSection = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"AboutLeftSection"}>
      <div className={"AboutLeftSection__header"}>
        <span>{t("authorized.about.left-section.span")}</span>
      </div>
      <AboutLeftSectionNavBar {...props} />
    </div>
  );
};
