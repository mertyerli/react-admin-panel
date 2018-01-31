import React from "react";
import { connect } from "react-redux";
import ProjectDropdown from "../ProjectDropdown/index";
import ActivitiesDropdown from "./ActivitiesDropdown/index";
import { loginAPI } from "../../_services/login.service";
import { loginActions } from "../../_actions";
import {
  CollapseButton,
  LogoutButton,
  SearchMobileButton,
  SearchField,
  FullscreenButton,
  // VoiceCommand,
  LanguageDropdown
} from "./HeaderComponents/index";

//import logo from "./logo.svg";

//const Header = () => {

class Header extends React.Component {
  Logout = () => {
    loginAPI.userLogout();
    this.props.dispatch(loginActions.logout());
  };


  render() {
    return (
      <header id="header">
        <div id="logo-group">
          {/* PLACE YOUR LOGO HERE */}
          <span id="logo">
            &nbsp;
            <img src="assets/img/logo-blue.png" alt="SmartAdmin" />{" "}
          </span>
          {/* END LOGO PLACEHOLDER */}
          <ActivitiesDropdown />
        </div>
        <ProjectDropdown />
        {/* #TOGGLE LAYOUT BUTTONS */}
        {/* pulled right: nav area */}
        <div className="pull-right">
          <CollapseButton />
          <LogoutButton action={this.Logout}/>
          <SearchMobileButton />
          <SearchField />
          <FullscreenButton />
          {/* <VoiceCommand /> */}
          <LanguageDropdown />
        </div>
        {/* end pulled right: nav area */}
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    session: state.session
  };
}

export default connect(mapStateToProps, null)(Header);
