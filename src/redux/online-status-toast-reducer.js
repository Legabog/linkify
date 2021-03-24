import { toastRef } from "utils/toastRef/toastRef";

import WifiIcon from "@material-ui/icons/Wifi";
import WifiOffIcon from "@material-ui/icons/WifiOff";

const ADD_TO_TOAST_CONTAINER = "ADD_TO_TOAST_CONTAINER";
const CLEAR_TOAST_CONTAINER = "CLEAR_TOAST_CONTAINER";

let initialState = {
  toasts: [
    {
      id: 1,
      className: "toast_online",
      Icon: WifiIcon,
      description: "Your internet connection was restored.",
    },
    {
      id: 2,
      className: "toast_offline",
      Icon: WifiOffIcon,
      description: "You are currently offline.",
      button: "Refresh",
    },
  ],
  list: null,
};

const onlineStatusToastReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_TOAST_CONTAINER:
      return {
        ...state,
        list: action.toast,
      };
    case CLEAR_TOAST_CONTAINER:
      return {
        ...state,
        list: null,
      };
    default:
      return state;
  }
};

export const addToToastContainer = (toast) => {
  return {
    type: ADD_TO_TOAST_CONTAINER,
    toast,
  };
};

export const clearToastContainer = () => {
  return {
    type: CLEAR_TOAST_CONTAINER,
  };
};

export const addAndDeleteToastAsync = (index) => {
  return (dispatch, getState) => {
    const updatedState = getState().onlineStatusToastReducer;
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    if (
      updatedState.list !== null &&
      toastRef.current.className === "toast_online open"
    ) {
      delay(100).then(
        () => (toastRef.current.className = "toast_online close")
      );
      delay(300).then(() => {
        if (updatedState.list !== null) {
          dispatch(clearToastContainer());
          delay(1500).then(() => {
            dispatch(addToToastContainer(updatedState.toasts[index]));
          });
        }
      });
    } else if (
      updatedState.list !== null &&
      toastRef.current.className === "toast_offline open"
    ) {
      delay(100).then(
        () => (toastRef.current.className = "toast_offline close")
      );
      delay(300).then(() => {
        if (updatedState.list !== null) {
          dispatch(clearToastContainer());
          delay(1500).then(() => {
            dispatch(addToToastContainer(updatedState.toasts[index]));
          });
        }
      });
    } else {
      dispatch(addToToastContainer(updatedState.toasts[index]));
    }
  };
};

export const effectAfterAddToast = () => {
  return (dispatch, getState) => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const updatedState = getState().onlineStatusToastReducer;
    if (toastRef.current.className === "toast_online") {
      delay(100).then(() => (toastRef.current.className = "toast_online open"));
      delay(5000).then(() => {
        if (
          toastRef.current !== null &&
          toastRef.current.className === "toast_online open"
        ) {
          delay(100).then(
            () => (toastRef.current.className = "toast_online close")
          );

          delay(300).then(() => {
            if (
              updatedState.list !== null &&
              toastRef.current.className === "toast_online close"
            ) {
              dispatch(clearToastContainer());
            }
          });
        }
      });
    } else {
      toastRef.current.className += " open";
    }
  };
};

export const closeAndDeleteHandler = () => {
  return (dispatch, getState) => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const updatedState = getState().onlineStatusToastReducer;
    if (toastRef.current.className === "toast_online open") {
      delay(100).then(
        () => (toastRef.current.className = "toast_online close")
      );
      delay(300).then(() => {
        if (
          updatedState.list !== null &&
          toastRef.current.className === "toast_online close"
        ) {
          dispatch(clearToastContainer());
        }
      });
    } else {
      delay(100).then(
        () => (toastRef.current.className = "toast_offline close")
      );
      delay(300).then(() => {
        if (updatedState.list !== null) {
          dispatch(clearToastContainer());
        }
      });
    }
  };
};

export default onlineStatusToastReducer;
