import "./RegistrationBlockHeader.css";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export const RegistrationBlockHeader = (props) => {
  const { t } = useTranslation();
  const clickHandler = () => {
    props.setDefaultInputsValues();
    props.history.push("/");
  };

  return (
    <div className="registration-block__header">
      <div className="registration-block__header__logo">
        <div className="registration-block__header__logo_1">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.1434 5.85907C31.3464 3.06171 27.7828 1.15657 23.9031 0.38457C20.0234 -0.38743 16.0019 0.00842588 12.3471 1.52207C8.69243 3.03571 5.56864 5.59921 3.37086 8.88821C1.17307 12.1773 0 16.0442 0 20C0 23.9558 1.17307 27.8227 3.37086 31.1118C5.56864 34.4008 8.69243 36.9643 12.3471 38.4779C16.0019 39.9916 20.0234 40.3874 23.9031 39.6154C27.7828 38.8434 31.3464 36.9383 34.1434 34.1409C37.8934 30.3903 40 25.3037 40 20C40 14.6963 37.8934 9.60971 34.1434 5.85907ZM5.21607 13.2318C6.22386 10.9965 7.71714 9.01386 9.58743 7.42814C11.4576 5.84243 13.6578 4.69343 16.0278 4.06478C18.3979 3.43614 20.8782 3.34364 23.2885 3.794C25.6988 4.24436 27.9784 5.22621 29.9616 6.66821C25.0524 6.20457 18.907 8.71364 13.9252 13.6864C12.045 15.5635 10.4521 17.7079 9.19793 20.05C7.49214 18.0206 6.1455 15.7146 5.21607 13.2318ZM16.2434 36.4318C12.4474 35.4147 9.13836 33.0776 6.91064 29.8401C4.68293 26.6026 3.68243 22.677 4.08886 18.7681C6.15243 23.25 11.3616 27.3227 18.1979 29.1409C20.7501 29.8332 23.3914 30.1396 26.0343 30.05C25.1361 32.5346 23.8236 34.8491 22.1524 36.8954C20.1699 37.096 18.1673 36.9327 16.2434 36.4136V36.4318ZM28.6889 17.4227C28.0149 14.8591 26.9674 12.4086 25.5797 10.15C28.179 9.68729 30.8379 9.66886 33.4434 10.0954C34.6096 11.7099 35.4693 13.5249 35.9797 15.45C36.9985 19.2466 36.63 23.282 34.9404 26.8312C33.2507 30.3804 30.3508 33.2107 26.7616 34.8136C29.5979 30.8046 30.507 24.2318 28.6889 17.4227Z"
              fill="#2E81F4"
            />
          </svg>
          <span>Linkify</span>
        </div>
        <div className="registration-block__header__logo_2">
          <IconButton onClick={clickHandler}>
            <CloseOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="registration-block__header__description">
        <h2>{t("unauthorized.registration-block.header.description-1")}</h2>
      </div>
      <div className="registration-block__header__sub-description">
        <span>{t("unauthorized.registration-block.header.description-2")}</span>
      </div>
    </div>
  );
};
