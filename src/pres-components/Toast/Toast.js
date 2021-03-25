import { useEffect } from "react";
import { toastRef } from "utils/toastRef/toastRef";
import "./Toast.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";

export const Toast = (props) => {
  useEffect(() => {
    props.effectAfterAddToast(toastRef);
  });

  return (
    <div id={props.className} className={props.className} ref={toastRef}>
      {<props.Icon /> ?? null}
      {<span>{props.description}</span> ?? null}
      {(
        <div
          className={"toast_offline__button"}
          onClick={props.closeAndDeleteHandler}
        >
          <span>{props.button}</span>
        </div>
      ) ?? null}
      <IconButton onClick={props.closeAndDeleteHandler}>
        <CloseOutlinedIcon />
      </IconButton>
    </div>
  );
};
