import { useHelpMessage } from "hooks/useHelpMessage";
import { ButtonNotificationsMenuWrapper } from "../ButtonNotificationsMenuWrapper";
import { ButtonNotificationsWrapper } from "../ButtonNotificationsWrapper";
import { ButtonHelp } from "containers/Header/components/ButtonHelp";
import { useTranslation } from "react-i18next";

export const ButtonNotifications = (props) => {
  const { t } = useTranslation()
  const [
    helpMessageOpacity,
    helpMessageVisibility,
    showHelpMessage,
    hideHelpMessage,
  ] = useHelpMessage();

  return (
    <>
      <ButtonNotificationsWrapper
        {...props}
        showHelpMessage={showHelpMessage}
        hideHelpMessage={hideHelpMessage}
      />

      <ButtonHelp
        title={t("authorized.header.header-right.button-notifications.help")}
        marginLeft={"395px"}
        marginTop={"63px"}
        helpOpacity={helpMessageOpacity}
        helpCreateVisibility={helpMessageVisibility}
      />

      <ButtonNotificationsMenuWrapper {...props} />
    </>
  );
};
