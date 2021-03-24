import { ButtonCreateWrapper } from "../ButtonCreateWrapper";
import { ButtonCreateMenuWrapper } from "../ButtonCreateMenuWrapper";
import { useHelpMessage } from "hooks/useHelpMessage";
import { ButtonHelp } from "containers/Header/components/ButtonHelp";
import { useTranslation } from "react-i18next";

export const ButtonCreate = (props) => {
  const { t } = useTranslation()
  const [
    helpMessageOpacity,
    helpMessageVisibility,
    showHelpMessage,
    hideHelpMessage,
  ] = useHelpMessage();

  return (
    <>
      <ButtonCreateWrapper
        {...props}
        showHelpMessage={showHelpMessage}
        hideHelpMessage={hideHelpMessage}
      />
      
      <ButtonHelp
        title={t("authorized.header.header-right.button-create.help")}
        marginLeft={"325px"}
        marginTop={"63px"}
        helpOpacity={helpMessageOpacity}
        helpCreateVisibility={helpMessageVisibility}
      />

      <ButtonCreateMenuWrapper {...props} />
    </>
  );
};
