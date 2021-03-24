import { NavLink } from "react-router-dom";
import { useHelpMessage } from "hooks/useHelpMessage";
import "./TerminalHeaderPanelItem.css";

import { TerminalHeaderPanelHelpMessage } from "containers/Terminal/components/TerminalHeaderPanelHelpMessage";

export const TerminalHeaderPanelItem = (props) => {
  const [
    helpMessageOpacity,
    helpMessageVisibility,
    showHelpMessage,
    hideHelpMessage,
  ] = useHelpMessage();

  return (
    <>
      {props.link ? (
        <NavLink to={props.link}>
          <div
            className={`terminal-header-panel__item ${props.color}`}
            onMouseEnter={showHelpMessage}
            onMouseLeave={hideHelpMessage}
          ></div>
        </NavLink>
      ) : (
        <div
          className={`terminal-header-panel__item ${props.color}`}
          onClick={props.clickHandler}
          onMouseEnter={showHelpMessage}
          onMouseLeave={hideHelpMessage}
        ></div>
      )}
      <TerminalHeaderPanelHelpMessage
        title={props.helpTitle}
        marginLeft={props.helpMarginLeft}
        marginTop={props.helpMarginTop}
        helpOpacity={helpMessageOpacity}
        helpCreateVisibility={helpMessageVisibility}
      />
    </>
  );
};
