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
              {/* MAIN CONTENT */}
              <div id="content">
                {/* row */}
                <div className="row">
                  {/* col */}
                  <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
                    <h1 className="page-title txt-color-blueDark">
                      {/* PAGE HEADER */}
                      <i className="fa-fw fa fa-home" />
                      Page Header
                      <span>&gt; Subtitle</span>
                    </h1>
                  </div>
                  {/* end col */}
                  {/* right side of the page with the sparkline graphs */}
                  {/* col */}
                  <div className="col-xs-12 col-sm-5 col-md-5 col-lg-8">
                    {/* sparks */}
                    <ul id="sparks">
                      <li className="sparks-info">
                        <h5>
                          {" "}
                          My Income{" "}
                          <span className="txt-color-blue">$47,171</span>
                        </h5>
                        <div className="sparkline txt-color-blue hidden-mobile hidden-md hidden-sm">
                          1300, 1877, 2500, 2577, 2000, 2100, 3000, 2700, 3631,
                          2471, 2700, 3631, 2471
                        </div>
                      </li>
                      <li className="sparks-info">
                        <h5>
                          {" "}
                          Site Traffic{" "}
                          <span className="txt-color-purple">
                            <i
                              className="fa fa-arrow-circle-up"
                              data-rel="bootstrap-tooltip"
                              title="Increased"
                            />&nbsp;45%
                          </span>
                        </h5>
                        <div className="sparkline txt-color-purple hidden-mobile hidden-md hidden-sm">
                          110,150,300,130,400,240,220,310,220,300, 270, 210
                        </div>
                      </li>
                      <li className="sparks-info">
                        <h5>
                          {" "}
                          Site Orders{" "}
                          <span className="txt-color-greenDark">
                            <i className="fa fa-shopping-cart" />&nbsp;2447
                          </span>
                        </h5>
                        <div className="sparkline txt-color-greenDark hidden-mobile hidden-md hidden-sm">
                          110,150,300,130,400,240,220,310,220,300, 270, 210
                        </div>
                      </li>
                    </ul>
                    {/* end sparks */}
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
                {/*
					The ID "widget-grid" will start to initialize all widgets below 
					You do not need to use widgets if you dont want to. Simply remove 
					the <section></section> and you can use wells or panels instead 
					*/}
                {/* widget grid */}
                <section id="widget-grid">
                  {/* row */}
                  <div className="row">
                    {/* NEW WIDGET START */}
                    <article className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      {/* Widget ID (each widget will need unique ID)*/}
                      <div className="jarviswidget" id="wid-id-0">
                        {/* widget options:
									usage: <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false">
									
									data-widget-colorbutton="false"	
									data-widget-editbutton="false"
									data-widget-togglebutton="false"
									data-widget-deletebutton="false"
									data-widget-fullscreenbutton="false"
									data-widget-custombutton="false"
									data-widget-collapsed="true" 
									data-widget-sortable="false"
									
								*/}
                        <header>
                          <span className="widget-icon">
                            {" "}
                            <i className="fa fa-comments" />{" "}
                          </span>
                          <h2>Widget Title </h2>
                        </header>
                        {/* widget div*/}
                        <div>
                          {/* widget edit box */}
                          <div className="jarviswidget-editbox">
                            {/* This area used as dropdown edit box */}
                            <input className="form-control" type="text" />
                          </div>
                          {/* end widget edit box */}
                          {/* widget content */}
                          <div className="widget-body">
                            {/* this is what the user will see */}
                          </div>
                          {/* end widget content */}
                        </div>
                        {/* end widget div */}
                      </div>
                      {/* end widget */}
                    </article>
                    {/* WIDGET END */}
                  </div>
                  {/* end row */}
                  {/* row */}
                  <div className="row">
                    {/* a blank row to get started */}
                    <div className="col-sm-12">
                      {/* your contents here */}your contents here
                      {this.props.children}
                    </div>
                  </div>
                  {/* end row */}
                </section>
                {/* end widget grid */}
              </div>
              {/* END MAIN CONTENT */}
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
