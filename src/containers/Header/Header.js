import { connect } from "react-redux";
import { compose } from "redux";
import "./Header.css";

import { logoutButton } from "redux/auth-reducer";

import { HeaderLeft } from "./components/HeaderLeft";
import { HeaderCenter } from "./components/HeaderCenter";
import { HeaderRight } from "./components/HeaderRight";

const Header_ = (props) => {
  return (
    <div className="header">
      <HeaderLeft />
      <HeaderCenter {...props} />
      <HeaderRight {...props} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export const Header = compose(
  connect(mapStateToProps, {
    logoutButton,
  })
)(Header_)
