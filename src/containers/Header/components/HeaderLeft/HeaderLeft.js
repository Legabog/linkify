import { useInput } from "hooks/useInput";
import "./HeaderLeft.css";

import { HeaderInput } from "pres-components/HeaderInput/";
import { HeaderLogo } from "pres-components/HeaderLogo/";
import { SearchesBlock } from "../SearchesBlock";

export const HeaderLeft = (props) => {
  const [
    value,
    inputref,
    changeHandler,
    isFocus,
    focusHandler,
    blurHandler,
  ] = useInput("");

  const toggleActiveInput = () => {
    isFocus ? blurHandler() : focusHandler();
    setTimeout(() => {
      isFocus ? blurHandler() : focusHandler();
    }, 10);
  };

  return isFocus ? (
    <div className="header__left_active">
      <div className="header__left_active__head">
        <HeaderLogo isFocus={isFocus} onClick={toggleActiveInput} />
        <HeaderInput
          value={value}
          inputref={inputref}
          changeHandler={changeHandler}
          isFocus={isFocus}
          toggleActiveInput={toggleActiveInput}
        />
      </div>
      <div className="header__left_active__body">
        <SearchesBlock />
      </div>
    </div>
  ) : (
    <div className="header__left">
      <HeaderLogo isFocus={isFocus} />
      <HeaderInput
        value={value}
        inputref={inputref}
        changeHandler={changeHandler}
        isFocus={isFocus}
        toggleActiveInput={toggleActiveInput}
      />
    </div>
  );
};
