import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import MinifyButton from "./MinifyButton";
import LoginInfo from "./SideBar/LoginInfo";
import SideBarMenu from "./SideBar/SideBarMenu";
import AsideChat from "./SideBar/AsideChat";
import Layout from "../../_helpers/Layout";
import SelectContent from './ContentComponents/select.content';

import ShortCuts from "./ContentComponents/shortcuts";

class PageLayout extends Component {

  render() {

    return (
      <Layout>
        <div className="App">
          <div>
            <Header />
            {/* #NAVIGATION */}
            {/* Left panel : Navigation area */}
            {/* Note: This width of the aside area can be adjusted through LESS variables */}
            <aside id="left-panel">
              <LoginInfo />
              <SideBarMenu>
                <AsideChat />
              </SideBarMenu>
              <MinifyButton />
            </aside>
            {/* END NAVIGATION */}
            {/* MAIN PANEL */}
            <SelectContent path={this.props.session.path} />
            {/* END MAIN PANEL */}
            {/* PAGE FOOTER */}
            <Footer />
            {/* END PAGE FOOTER */}
            {/* SHORTCUT AREA : With large tiles (activated via clicking user name tag)
		Note: These tiles are completely responsive,
		you can add as many as you like
		*/}
            <ShortCuts />
            {/* END SHORTCUT AREA */}
          </div>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    session: state.session,
  };
}

export default connect(mapStateToProps, null)(PageLayout);
