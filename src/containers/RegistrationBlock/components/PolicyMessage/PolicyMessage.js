import { useTranslation } from "react-i18next";
import "./PolicyMessage.css";

export const PolicyMessage = (props) => {
  const { t } = useTranslation();
  return (
    <div className="policy-message">
      <p>{t("unauthorized.registration-block.body.policy-message.p")}</p>
    </div>
  );
};
