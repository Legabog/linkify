import "./TerminalHeaderPanel.css";

import { TerminalHeaderPanelItem } from "containers/Terminal/components/TerminalHeaderPanelItem";
import { useTranslation } from "react-i18next";

export const TerminalHeaderPanel = (props) => {
  const { t } = useTranslation();

  return (
    <div className={"terminal-header-panel"}>
      <TerminalHeaderPanelItem
        link={"/"}
        color={"red"}
        helpTitle={t("authorized.terminal.help-message-1")}
        helpMarginTop={"65px"}
        helpMarginLeft={"-5px"}
      />
      <TerminalHeaderPanelItem
        color={"orange"}
        helpTitle={t("authorized.terminal.help-message-2")}
        helpMarginTop={"65px"}
        helpMarginLeft={"10px"}
        clickHandler={props.minimizeTerminal}
      />
      <TerminalHeaderPanelItem
        color={"green"}
        helpTitle={t("authorized.terminal.help-message-3")}
        helpMarginTop={"65px"}
        helpMarginLeft={"50px"}
        clickHandler={props.expandTerminal}
      />
    </div>
  );
};
