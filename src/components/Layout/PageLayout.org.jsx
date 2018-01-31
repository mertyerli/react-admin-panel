import React, { Component } from "react";
import Header from "./Header";
//import SideBar from "../components/Layout/SideBar";
import Footer from "./Footer";
import MinifyButton from "./MinifyButton";
import LoginInfo from "./SideBar/LoginInfo";
import SideBarMenu from "./SideBar/SideBarMenu";
import AsideChat from "./SideBar/AsideChat";
import Layout from "../../_helpers/Layout";

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
            <div id="main" role="main">
              {/* RIBBON */}
              <div id="ribbon">
                <span className="ribbon-button-alignment">
                  <span
                    id="refresh"
                    className="btn btn-ribbon"
                    data-action="resetWidgets"
                    data-title="refresh"
                    rel="tooltip"
                    data-placement="bottom"
                    data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings."
                    data-html="true"
                  >
                    <i className="fa fa-refresh" />
                  </span>
                </span>
                {/* breadcrumb */}
                <ol className="breadcrumb">
                  <li>Home</li>
                  <li>Miscellaneous</li>
                  <li>Blank Page</li>
                </ol>
                {/* end breadcrumb */}
                {/* You can also add more buttons to the
				ribbon for further usability

				Example below:

				<span class="ribbon-button-alignment pull-right">
				<span id="search" class="btn btn-ribbon hidden-xs" data-title="search"><i class="fa-grid"></i> Change Grid</span>
				<span id="add" class="btn btn-ribbon hidden-xs" data-title="add"><i class="fa-plus"></i> Add</span>
				<span id="search" class="btn btn-ribbon" data-title="search"><i class="fa-search"></i> <span class="hidden-mobile">Search</span></span>
				</span> */}
              </div>
              {/* END RIBBON */}

            </div>
            {/* END MAIN PANEL */}
            {/* PAGE FOOTER */}
            <Footer />
            {/* END PAGE FOOTER */}
            {/* SHORTCUT AREA : With large tiles (activated via clicking user name tag)
		Note: These tiles are completely responsive,
		you can add as many as you like
		*/}
            <div id="shortcut">
              <ul>
                <li>
                  <a
                    href="inbox.html"
                    className="jarvismetro-tile big-cubes bg-color-blue"
                  >
                    {" "}
                    <span className="iconbox">
                      {" "}
                      <i className="fa fa-envelope fa-4x" />{" "}
                      <span>
                        Mail{" "}
                        <span className="label pull-right bg-color-darken">
                          14
                        </span>
                      </span>{" "}
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="calendar.html"
                    className="jarvismetro-tile big-cubes bg-color-orangeDark"
                  >
                    {" "}
                    <span className="iconbox">
                      {" "}
                      <i className="fa fa-calendar fa-4x" />{" "}
                      <span>Calendar</span>{" "}
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="gmap-xml.html"
                    className="jarvismetro-tile big-cubes bg-color-purple"
                  >
                    {" "}
                    <span className="iconbox">
                      {" "}
                      <i className="fa fa-map-marker fa-4x" /> <span>Maps</span>{" "}
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="invoice.html"
                    className="jarvismetro-tile big-cubes bg-color-blueDark"
                  >
                    {" "}
                    <span className="iconbox">
                      {" "}
                      <i className="fa fa-book fa-4x" />{" "}
                      <span>
                        Invoice{" "}
                        <span className="label pull-right bg-color-darken">
                          99
                        </span>
                      </span>{" "}
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="gallery.html"
                    className="jarvismetro-tile big-cubes bg-color-greenLight"
                  >
                    {" "}
                    <span className="iconbox">
                      {" "}
                      <i className="fa fa-picture-o fa-4x" />{" "}
                      <span>Gallery </span>{" "}
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="profile.html"
                    className="jarvismetro-tile big-cubes selected bg-color-pinkDark"
                  >
                    {" "}
                    <span className="iconbox">
                      {" "}
                      <i className="fa fa-user fa-4x" />{" "}
                      <span>My Profile </span>{" "}
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </div>
            {/* END SHORTCUT AREA */}
          </div>
        </div>
      </Layout>
    );
  }
}

export default PageLayout;
