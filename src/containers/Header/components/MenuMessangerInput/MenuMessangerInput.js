import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import "./MenuMessangerInput.css";
import { useTranslation } from "react-i18next";

export const MenuMessangerInput = (props) => {
  const { t } = useTranslation();
  return (
    <div className="button-messanger-menu__input-wrapper">
      {props.isFocus ? (
        <IconButton onClick={props.blurHandler}>
          <ArrowBackIcon />
        </IconButton>
      ) : null}
      <div
        className={
          props.isFocus
            ? "button-messanger-menu__input_active"
            : "button-messanger-menu__input"
        }
        onClick={props.focusHandler}
      >
        {props.isFocus ? null : <SearchIcon onClick={props.focusHandler} />}
        <input
          type="text"
          value={props.value}
          onChange={props.changeHandler}
          ref={props.inputRef}
          id="button-messanger-menu-input"
          placeholder={t(
            "authorized.header.header-right.button-messenger.menu.input.placeholder"
          )}
          onClick={props.focusHandler}
          onFocus={props.focusHandler}
          onBlur={props.blurHandler}
        />
      </div>
    </div>
  );
};
