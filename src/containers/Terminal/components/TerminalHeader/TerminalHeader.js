import "./TerminalHeader.css";

import { TerminalHeaderPanel } from "containers/Terminal/components/TerminalHeaderPanel";
import { useTranslation } from "react-i18next";

export const TerminalHeader = (props) => {

  const { t } = useTranslation()

  return (
    <div className={"terminal-header"}>
      <TerminalHeaderPanel {...props} />
      <div className={"terminal-header__title"}>
        <span>{t("authorized.terminal.title")} •{props.userTerminalVersion}•</span>
      </div>
    </div>
  );
};
