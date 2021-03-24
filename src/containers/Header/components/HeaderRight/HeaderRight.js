import { useState } from "react";
import "./HeaderRight.css";

import { ButtonFindFriends } from "../ButtonFindFriends";
import { ButtonCreate } from "../ButtonCreate";
import { ButtonMessanger } from "../ButtonMessanger";
import { ButtonNotifications } from "../ButtonNotifications";
import { ButtonAccount } from "../ButtonAccount";
import { LanguageSwitcher } from "containers/Header/components/LanguageSwitcher";

export const HeaderRight = (props) => {
  const [activeButton, setActiveButton] = useState();

  const toggleActiveButton = (num) => {
    setActiveButton(num);
  };

  return (
    <div className="header__right">
      <LanguageSwitcher />
      
      <ButtonFindFriends {...props} />

      <ButtonCreate
        activeButton={activeButton}
        toggleActiveButton={toggleActiveButton}
      />

      <ButtonMessanger
        activeButton={activeButton}
        toggleActiveButton={toggleActiveButton}
      />

      <ButtonNotifications
        activeButton={activeButton}
        toggleActiveButton={toggleActiveButton}
      />

      <ButtonAccount
        {...props}
        activeButton={activeButton}
        toggleActiveButton={toggleActiveButton}
      />
    </div>
  );
};

