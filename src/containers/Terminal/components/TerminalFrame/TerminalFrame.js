import { useState } from "react";
import "./TerminalFrame.css"

import { TerminalBody, TerminalHeader } from "containers/Terminal/components";
import { useTranslation } from "react-i18next";
import { useInput } from "hooks/useInput";
import { colorValidation } from "utils/validation/colorValidation";

export const TerminalFrame = (props) => {

  const { t } = useTranslation();
  const [num, setNum] = useState(1);
  const [printedCommands, setPrintedCommands] = useState([]);
  const [value, ref, changeHandler, , focusHandler, , setValue] = useInput("");
  const [terminalOutputContainer, setTerminalOutputContainer] = useState([
    t("authorized.terminal.welcome-message"),
  ]);

  const terminalEnterInputHandler = (e) => {
    switch (e.key) {
      case "Enter":
        let invalidCommand = 0;
        setTerminalOutputContainer((prev) => [
          ...prev,
          `${props.userTerminalVersion === "Bash" ? "$" : ">"} ${value}`,
        ]);
        setPrintedCommands((prev) => [...prev, value]);

        if (value.toLowerCase().trim() === "help") {
          setTerminalOutputContainer((prev) => [
            ...prev,
            t("authorized.terminal.list-of-commands"),
          ]);
          props.cmdCommands.map((e, index) =>
            setTerminalOutputContainer((prev) => [
              ...prev,
              `${t(`authorized.terminal.commands.${index}.command`)} - ${t(
                `authorized.terminal.commands.${index}.action`
              )}`,
            ])
          );
        }

        if (value.toLowerCase().trim() === "cls") {
          setTerminalOutputContainer([]);
        }

        if (value.toLowerCase().trim().slice(0, 6) === "color ") {
          if (colorValidation(value.toLowerCase().trim().slice(6)) !== "") {
            setTerminalOutputContainer((prev) => [
              ...prev,
              colorValidation(value.toLowerCase().trim().slice(6)),
            ]);
          }
          props.changeTextColorTerminal(value.toLowerCase().trim().slice(6));
          invalidCommand++;
        }

        if (value.toLowerCase().trim().slice(0, 17) === "background-color ") {
          if (colorValidation(value.toLowerCase().trim().slice(17)) !== "") {
            setTerminalOutputContainer((prev) => [
              ...prev,
              colorValidation(value.toLowerCase().trim().slice(17)),
            ]);
          }
          props.changeBackgroundColorTerminal(
            value.toLowerCase().trim().slice(17)
          );
          invalidCommand++;
        }

        if (value.toLowerCase().trim() === "default-color") {
          props.setDefaultColorTerminal();
        }

        if (value.toLowerCase().trim() === "date") {
          const date = new Date();
          setTerminalOutputContainer((prev) => [
            ...prev,
            `${t("authorized.terminal.current-date")}${
              date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
            }.${
              date.getMonth() + 1 < 10
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1
            }.${date.getFullYear()}`,
          ]);
        }

        if (value.toLowerCase().trim().slice(0, 5) === "echo ") {
          setTerminalOutputContainer((prev) => [
            ...prev,
            `${value.trim().slice(4)}`,
          ]);
          invalidCommand++;
        }

        if (value.toLowerCase().trim() === "doc") {
          window.open(
            "https://github.com/Legabog/social-network-v2.0.0_legabog/blob/master/README.md"
          );
        }

        if (value.toLowerCase().trim() === "github") {
          window.open("https://github.com/Legabog/");
        }

        if (value.toLowerCase().trim() === "pause") {
          setTerminalOutputContainer((prev) => [
            ...prev,
            t("authorized.terminal.press-any-key"),
          ]);
        }

        if (value.toLowerCase().trim() === "exit") {
          props.history.push("/");
        }

        // Invalid command
        props.cmdCommands.map((e) => {
          if (value.toLowerCase().trim() === e.command) {
            invalidCommand++;
            return null;
          }
          return null;
        });

        if (value.toLowerCase().trim().slice(0, 4) === "echo") {
          invalidCommand++;
        }

        if (invalidCommand === 0) {
          if (value.toLowerCase().trim() === "") {
            setTerminalOutputContainer((prev) => [
              ...prev,
              value.toLowerCase().trim(),
            ]);
          } else {
            setTerminalOutputContainer((prev) => [
              ...prev,
              `"${value.toLowerCase().trim()}" ${t(
                "authorized.terminal.invalid-command"
              )}`,
            ]);
          }
        }
        //

        setValue("");
        break;

      case "ArrowUp":
        if (printedCommands.length !== 0 && printedCommands.length - num >= 0) {
          setValue(printedCommands[printedCommands.length - num]);

          if (printedCommands.length - num > 0) {
            setNum((prev) => prev + 1);
          }
        }
        break;

      case "ArrowDown":
        if (printedCommands.length !== 0 && printedCommands.length - num >= 0) {
          setValue(printedCommands[printedCommands.length - num]);

          if (printedCommands.length - num >= 0 && num > 1) {
            setNum((prev) => prev - 1);
          }
        }
        break;

      default:
        return null;
    }
  };

  return (
    <div
        className={"terminal"}
        style={{
          width: `${props.terminalWidth}`,
          maxWidth: `${props.terminalMaxWidth}`,
          height: `${props.terminalHeight}`,
          maxHeight: `${props.terminalMaxHeight}`,
          marginTop: `${props.terminalMarginTop}`,
        }}
      >
        <TerminalHeader {...props} />
        {!props.minimizeState ? (
          <TerminalBody
            value={value}
            inputRef={ref}
            changeHandler={changeHandler}
            focusHandler={focusHandler}
            terminalEnterInputHandler={terminalEnterInputHandler}
            terminalOutputContainer={terminalOutputContainer}
            {...props}
          />
        ) : null}
      </div>
  )
}