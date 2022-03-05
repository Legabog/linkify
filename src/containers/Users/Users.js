import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "./Users.css";

import { firebaseSetUsers } from "redux/users-reducer"

import { UsersBody, UsersFooter, UsersHeader } from "containers/Users/components";

const Users_ = (props) => {
  
  useEffect(() => { 
    if (props.users.length === 0) {
      props.firebaseSetUsers()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className={"users-wrapper"}>
      <div className={"users"}>
        <UsersHeader />
        <UsersBody {...props} />
        <UsersFooter /> 
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.usersReducer.users 
})

export const Users = compose(
  connect(mapStateToProps, {
    firebaseSetUsers
  })
)(Users_);