import './HeaderLogo.css';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';

export const HeaderLogo = (props) => {
  return (
    <div className={props.isFocus ? 'header__logo_active' : 'header__logo'}>
      {props.isFocus ? (
        <IconButton onClick={props.onClick}>
          <ArrowBackIcon />
        </IconButton>
      ) : (
        <NavLink to={'/'}>
          <GitHubIcon />
        </NavLink>
      )}
    </div>
  );
};
