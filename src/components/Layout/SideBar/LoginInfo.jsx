import React from "react";

class LoginInfo extends React.Component {
  onToggle = e => {
    e.preventDefault();
    console.log(this, e);
  };
  render() {
    return (
      <div className="login-info">
        <span>
          {/* User image size is adjusted inside CSS, it should stay as it */}
          <a
            href=""
            id="show-shortcut"
            data-action="toggleShortcut"
            onClick={this.onToggle}
          >
            <img
              src="assets/img/avatars/sunny.png"
              alt="me"
              className="online"
            />
            <span>john.doe</span>
            <i className="fa fa-angle-down" />
          </a>
        </span>
      </div>
    );
  }
}
export default LoginInfo;
