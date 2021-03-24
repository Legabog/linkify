const TERMINAL_MINIMIZE = "TERMINAL_MINIMIZE";
const TERMINAL_EXPAND = "TERMINAL_EXPAND";
const TERMINAL_CHANGE_TEXT_COLOR = "TERMINAL_CHANGE_TEXT_COLOR";
const TERMINAL_CHANGE_BACKGROUND_COLOR = "TERMINAL_CHANGE_BACKGROUND_COLOR";
const TERMINAL_SET_DEFAULT_COLOR = "TERMINAL_SET_DEFAULT_COLOR";

let initialState = {
  //
  userTerminalVersion: navigator.userAgent.indexOf("Windows")
    ? "Command line (CMD)"
    : "Bash",
  minimizeState: false,
  expandState: false,
  terminalWidth: "100%",
  terminalMaxWidth: "600px",
  terminalHeight: "630px",
  terminalMaxHeight: "95vh",
  terminalMarginTop: "20px",
  terminalTextColor: "rgb(3, 177, 3)",
  terminalBackgroundColor: "black",
  //
  cmdCommands: [
    {
      command: "help",
      action: "Show a list of all commands.",
    },
    {
      command: "cls",
      action: "Clear the command line.",
    },
    {
      command: "color",
      action: "Change the text color. Example: 'color red'.",
    },
    {
      command: "background-color",
      action: "Change background color. Example: 'background-color red'",
    },
    {
      command: "default-color",
      action: "Set default color to text and background.",
    },
    {
      command: "date",
      action: "Show current date.",
    },
    {
      command: "echo",
      action: "Output messages.",
    },
    {
      command: "doc",
      action: "Go to project documentation.",
    },
    {
      command: "github",
      action: "Go to project owner's github.",
    },
    {
      command: "pause",
      action: "Pause the command line.",
    },
    {
      command: "exit",
      action: "Exit the command line.",
    },
  ],
};

const terminalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TERMINAL_MINIMIZE:
      return {
        ...state,
        minimizeState: !state.minimizeState ? true : false,
        terminalHeight:
          state.terminalHeight !== "5vh"
            ? "5vh"
            : !state.expandState
            ? "630px"
            : "95vh",
      };

    case TERMINAL_EXPAND:
      return {
        ...state,
        expandState: !state.expandState ? true : false,
        terminalMaxWidth: state.terminalMaxWidth !== "100%" ? "100%" : "600px",
        terminalHeight:
          state.terminalHeight === "5vh"
            ? "5vh"
            : state.terminalHeight === "630px"
            ? "95vh"
            : "630px",
        terminalMarginTop: state.terminalMarginTop === "20px" ? "0px" : "20px",
      };

    case TERMINAL_CHANGE_TEXT_COLOR:
      return {
        ...state,
        terminalTextColor: action.color,
      };

    case TERMINAL_CHANGE_BACKGROUND_COLOR:
      return {
        ...state,
        terminalBackgroundColor: action.color,
      };

    case TERMINAL_SET_DEFAULT_COLOR:
      return {
        ...state,
        terminalTextColor: "rgb(3, 177, 3)",
        terminalBackgroundColor: "black",
      };
    default:
      return state;
  }
};

export const changeTextColorTerminal = (color) => {
  return {
    type: TERMINAL_CHANGE_TEXT_COLOR,
    color
  }
}

export const changeBackgroundColorTerminal = (color) => {
  return {
    type: TERMINAL_CHANGE_BACKGROUND_COLOR,
    color
  }
}

export const setDefaultColorTerminal = () => {
  return {
    type: TERMINAL_SET_DEFAULT_COLOR
  }
}

export const minimizeTerminal = () => {
  return {
    type: TERMINAL_MINIMIZE,
  };
};

export const expandTerminal = () => {
  return {
    type: TERMINAL_EXPAND,
  };
};

export default terminalReducer;
