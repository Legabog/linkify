import { ButtonMessangerWrapper } from "../ButtonMessangerWrapper";
import { ButtonMessangerMenuWrapper } from "../ButtonMessangerMenuWrapper";
import { useHelpMessage } from "hooks/useHelpMessage";
import { ButtonHelp } from "containers/Header/components/ButtonHelp";
import { useTranslation } from "react-i18next";

export const ButtonMessanger = (props) => {
  const { t } = useTranslation()
  const [
    helpMessageOpacity,
    helpMessageVisibility,
    showHelpMessage,
    hideHelpMessage,
  ] = useHelpMessage();

  return (
    <>
      <ButtonMessangerWrapper
        {...props}
        showHelpMessage={showHelpMessage}
        hideHelpMessage={hideHelpMessage}
      />

      <ButtonHelp
        title={t("authorized.header.header-right.button-messenger.help")}
        marginLeft={"360px"}
        marginTop={"63px"}
        helpOpacity={helpMessageOpacity}
        helpCreateVisibility={helpMessageVisibility}
      />

      <ButtonMessangerMenuWrapper {...props} />
    </>
  );
};
