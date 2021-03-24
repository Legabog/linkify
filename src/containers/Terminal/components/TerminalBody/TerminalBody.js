import { useEffect } from "react";
import "./TerminalBody.css";

import _ from "lodash/core";

export const TerminalBody = (props) => {
  useEffect(() => {
    props.focusHandler();
  });

  return (
    <div
      className={"terminal-body"}
      style={{
        maxHeight: !props.expandState ? "600px" : "89vh",
        color: props.terminalTextColor,
        backgroundColor: props.terminalBackgroundColor,
      }}
    >
      <div className={"terminal-body-output-container"}>
        {props.terminalOutputContainer.map((e) => (
          <pre key={_.uniqueId(e)}>{e}</pre>
        ))}
      </div>

      <div className={"terminal-body-input"}>
        <span>{props.userTerminalVersion === "Bash" ? "$" : ">"}&nbsp;</span>
        <input
          style={{
            color: props.terminalTextColor,
            backgroundColor: props.terminalBackgroundColor,
          }}
          value={props.value}
          ref={props.inputRef}
          onChange={props.changeHandler}
          onKeyDown={props.terminalEnterInputHandler}
          onFocus={props.focusHandler}
          onBlur={props.focusHandler}
        />
      </div>
    </div>
  );
};
