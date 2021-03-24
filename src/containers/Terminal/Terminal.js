import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./Terminal.css";

import {
  minimizeTerminal,
  expandTerminal,
  changeTextColorTerminal,
  changeBackgroundColorTerminal,
  setDefaultColorTerminal,
} from "redux/terminal-reducer";


import { TerminalFrame } from "containers/Terminal/components";
import { TerminalMatrix } from "containers/Terminal/components";

const Terminal_ = (props) => {
  return (
    <div className={"terminal-wrapper"}>
      <TerminalFrame {...props}/>
      <TerminalMatrix {...props}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userTerminalVersion: state.terminalReducer.userTerminalVersion,
  minimizeState: state.terminalReducer.minimizeState,
  expandState: state.terminalReducer.expandState,
  terminalWidth: state.terminalReducer.terminalWidth,
  terminalMaxWidth: state.terminalReducer.terminalMaxWidth,
  terminalHeight: state.terminalReducer.terminalHeight,
  terminalMaxHeight: state.terminalReducer.terminalMaxHeight,
  terminalMarginTop: state.terminalReducer.terminalMarginTop,
  terminalTextColor: state.terminalReducer.terminalTextColor,
  terminalBackgroundColor: state.terminalReducer.terminalBackgroundColor,
  cmdCommands: state.terminalReducer.cmdCommands,
});

export const Terminal = compose(
  withRouter,
  connect(mapStateToProps, {
    minimizeTerminal,
    expandTerminal,
    changeTextColorTerminal,
    changeBackgroundColorTerminal,
    setDefaultColorTerminal,
  })
)(Terminal_);
