import React from "react";

//const LogoutButton = () => {
class LogoutButton extends React.Component {
  render = () => {
    return (
      <div id="logout" className="btn-header transparent pull-right">
        <span onClick={this.props.action}>
          {" "}
          <a
            title="Sign Out"
            data-action="userLogout"
            data-logout-msg="You can improve your security further after logging out by closing this opened browser"
          >
            <i className="fa fa-sign-out" />
          </a>{" "}
        </span>
      </div>
    );
  };
}

export default LogoutButton;
