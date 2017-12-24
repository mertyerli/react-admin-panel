import React from "react";
import ProjectDropdown from "../ProjectDropdown/index";
import NotificationDropdown from "./NotificationDropdown/index";
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

const Header = () => {
  return (
    <header id="header">
      <div id="logo-group">
        {/* PLACE YOUR LOGO HERE */}
        <span id="logo">
          &nbsp;
          <img src="assets/img/logo-blue.png" alt="SmartAdmin" />{" "}
        </span>
        {/* END LOGO PLACEHOLDER */}
        <NotificationDropdown />
      </div>
      <ProjectDropdown />
      {/* #TOGGLE LAYOUT BUTTONS */}
      {/* pulled right: nav area */}
      <div className="pull-right">
        <CollapseButton />
        <LogoutButton />
        <SearchMobileButton />
        <SearchField />
        <FullscreenButton />
        {/* <VoiceCommand /> */}
        <LanguageDropdown />
      </div>
      {/* end pulled right: nav area */}
    </header>
  );
};

export default Header;
