import React, { Component } from "react";
import Header from "../components/Layout/Header";
//import SideBar from "../components/Layout/SideBar";
import Footer from "../components/Layout/Footer";
import BlankPage from "./pages/blank";
import MinifyButton from "../components/Layout/MinifyButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          {/* #NAVIGATION */}
          {/* Left panel : Navigation area */}
          {/* Note: This width of the aside area can be adjusted through LESS variables */}
          <aside id="left-panel">
            {/* User info */}
            <div className="login-info">
              <span>
                {" "}
                {/* User image size is adjusted inside CSS, it should stay as it */}
                <a href="" id="show-shortcut" data-action="toggleShortcut">
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
            {/* end user info */}
            <nav>
              {/* 
				NOTE: Notice the gaps after each icon usage <i></i>..
				Please note that these links work a bit different than
				traditional href="" links. See documentation for details.
				*/}
              <ul>
                <li>
                  <a href="" title="Dashboard">
                    <i className="fa fa-lg fa-fw fa-home" />{" "}
                    <span className="menu-item-parent">Dashboard</span>
                  </a>
                  <ul>
                    <li>
                      <a href="index.html" title="Dashboard">
                        <span className="menu-item-parent">
                          Analytics Dashboard
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-social.html" title="Dashboard">
                        <span className="menu-item-parent">Social Wall</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="top-menu-invisible">
                  <a href="">
                    <i className="fa fa-lg fa-fw fa-cube txt-color-blue" />{" "}
                    <span className="menu-item-parent">SmartAdmin Intel</span>
                  </a>
                  <ul>
                    <li>
                      <a href="layouts.html" title="Dashboard">
                        <i className="fa fa-lg fa-fw fa-gear" />{" "}
                        <span className="menu-item-parent">App Layouts</span>
                      </a>
                    </li>
                    <li>
                      <a href="skins.html" title="Dashboard">
                        <i className="fa fa-lg fa-fw fa-picture-o" />{" "}
                        <span className="menu-item-parent">Prebuilt Skins</span>
                      </a>
                    </li>
                    <li>
                      <a href="applayout.html">
                        <i className="fa fa-cube" /> App Settings
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="inbox.html">
                    <i className="fa fa-lg fa-fw fa-inbox" />{" "}
                    <span className="menu-item-parent">Outlook</span>{" "}
                    <span className="badge pull-right inbox-badge margin-right-13">
                      14
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-lg fa-fw fa-bar-chart-o" />{" "}
                    <span className="menu-item-parent">Graphs</span>
                  </a>
                  <ul>
                    <li>
                      <a href="flot.html">Flot Chart</a>
                    </li>
                    <li>
                      <a href="morris.html">Morris Charts</a>
                    </li>
                    <li>
                      <a href="sparkline-charts.html">Sparklines</a>
                    </li>
                    <li>
                      <a href="easypie-charts.html">EasyPieCharts</a>
                    </li>
                    <li>
                      <a href="dygraphs.html">Dygraphs</a>
                    </li>
                    <li>
                      <a href="chartjs.html">Chart.js</a>
                    </li>
                    <li>
                      <a href="hchartable.html">
                        HighchartTable{" "}
                        <span className="badge pull-right inbox-badge bg-color-yellow">
                          new
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-lg fa-fw fa-table" />{" "}
                    <span className="menu-item-parent">Tables</span>
                  </a>
                  <ul>
                    <li>
                      <a href="table.html">Normal Tables</a>
                    </li>
                    <li>
                      <a href="datatables.html">
                        Data Tables{" "}
                        <span className="badge inbox-badge bg-color-greenLight hidden-mobile">
                          responsive
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="jqgrid.html">Jquery Grid</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-lg fa-fw fa-pencil-square-o" />{" "}
                    <span className="menu-item-parent">Forms</span>
                  </a>
                  <ul>
                    <li>
                      <a href="form-elements.html">Smart Form Elements</a>
                    </li>
                    <li>
                      <a href="form-templates.html">Smart Form Layouts</a>
                    </li>
                    <li>
                      <a href="validation.html">Smart Form Validation</a>
                    </li>
                    <li>
                      <a href="bootstrap-forms.html">Bootstrap Form Elements</a>
                    </li>
                    <li>
                      <a href="bootstrap-validator.html">
                        Bootstrap Form Validation
                      </a>
                    </li>
                    <li>
                      <a href="plugins.html">Form Plugins</a>
                    </li>
                    <li>
                      <a href="wizard.html">Wizards</a>
                    </li>
                    <li>
                      <a href="other-editors.html">Bootstrap Editors</a>
                    </li>
                    <li>
                      <a href="dropzone.html">Dropzone</a>
                    </li>
                    <li>
                      <a href="image-editor.html">Image Cropping</a>
                    </li>
                    <li>
                      <a href="ckeditor.html">CK Editor</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-lg fa-fw fa-desktop" />{" "}
                    <span className="menu-item-parent">UI Elements</span>
                  </a>
                  <ul>
                    <li>
                      <a href="general-elements.html">General Elements</a>
                    </li>
                    <li>
                      <a href="buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="">Icons</a>
                      <ul>
                        <li>
                          <a href="fa.html">
                            <i className="fa fa-plane" /> Font Awesome
                          </a>
                        </li>
                        <li>
                          <a href="glyph.html">
                            <i className="glyphicon glyphicon-plane" /> Glyph
                            Icons
                          </a>
                        </li>
                        <li>
                          <a href="flags.html">
                            <i className="fa fa-flag" /> Flags
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="grid.html">Grid</a>
                    </li>
                    <li>
                      <a href="treeview.html">Tree View</a>
                    </li>
                    <li>
                      <a href="nestable-list.html">Nestable Lists</a>
                    </li>
                    <li>
                      <a href="jqui.html">JQuery UI</a>
                    </li>
                    <li>
                      <a href="typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="">Six Level Menu</a>
                      <ul>
                        <li>
                          <a href="">
                            <i className="fa fa-fw fa-folder-open" /> Item #2
                          </a>
                          <ul>
                            <li>
                              <a href="">
                                <i className="fa fa-fw fa-folder-open" /> Sub
                                #2.1{" "}
                              </a>
                              <ul>
                                <li>
                                  <a href="">
                                    <i className="fa fa-fw fa-file-text" /> Item
                                    #2.1.1
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    <i className="fa fa-fw fa-plus" /> Expand
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="">
                                        <i className="fa fa-fw fa-file-text" />{" "}
                                        File
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-fw fa-folder-open" /> Item #3
                          </a>
                          <ul>
                            <li>
                              <a href="">
                                <i className="fa fa-fw fa-folder-open" /> 3ed
                                Level{" "}
                              </a>
                              <ul>
                                <li>
                                  <a href="">
                                    <i className="fa fa-fw fa-file-text" /> File
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    <i className="fa fa-fw fa-file-text" /> File
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="" className="inactive">
                            <i className="fa fa-fw fa-folder-open" /> Item #4
                            (disabled)
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="widgets.html">
                    <i className="fa fa-lg fa-fw fa-list-alt" />{" "}
                    <span className="menu-item-parent">Widgets</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-lg fa-fw fa-cloud">
                      <em>3</em>
                    </i>{" "}
                    <span className="menu-item-parent">Cool Features!</span>
                  </a>
                  <ul>
                    <li>
                      <a href="calendar.html">
                        <i className="fa fa-lg fa-fw fa-calendar" />{" "}
                        <span className="menu-item-parent">Calendar</span>
                      </a>
                    </li>
                    <li>
                      <a href="gmap-xml.html">
                        <i className="fa fa-lg fa-fw fa-map-marker" />{" "}
                        <span className="menu-item-parent">GMap Skins</span>
                        <span className="badge bg-color-greenLight pull-right inbox-badge">
                          9
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-lg fa-fw fa-puzzle-piece" />{" "}
                    <span className="menu-item-parent">App Views</span>
                  </a>
                  <ul>
                    <li>
                      <a href="projects.html">
                        <i className="fa fa-file-text-o" /> Projects
                      </a>
                    </li>
                    <li>
                      <a href="blog.html">
                        <i className="fa fa-paragraph" /> Blog
                      </a>
                    </li>
                    <li>
                      <a href="gallery.html">
                        <i className="fa fa-picture-o" /> Gallery
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-comments" /> Forum Layout
                      </a>
                      <ul>
                        <li>
                          <a href="forum.html">General View</a>
                        </li>
                        <li>
                          <a href="forum-topic.html">Topic View</a>
                        </li>
                        <li>
                          <a href="forum-post.html">Post View</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="profile.html">
                        <i className="fa fa-group" /> Profile
                      </a>
                    </li>
                    <li>
                      <a href="timeline.html">
                        <i className="fa fa-clock-o" /> Timeline
                      </a>
                    </li>
                    <li>
                      <a href="search.html">
                        <i className="fa fa-search" /> Search Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-lg fa-fw fa-shopping-cart" />{" "}
                    <span className="menu-item-parent">E-Commerce</span>
                  </a>
                  <ul>
                    <li>
                      <a href="orders.html">Orders</a>
                    </li>
                    <li>
                      <a href="products-view.html">Products View</a>
                    </li>
                    <li>
                      <a href="products-detail.html">Products Detail</a>
                    </li>
                  </ul>
                </li>
                <li className="active">
                  <a href="">
                    <i className="fa fa-lg fa-fw fa-windows" />{" "}
                    <span className="menu-item-parent">Miscellaneous</span>
                  </a>
                  <ul>
                    <li>
                      <a href="../Landing_Page/" target="_blank">
                        Landing Page <i className="fa fa-external-link" />
                      </a>
                    </li>
                    <li>
                      <a href="pricing-table.html">Pricing Tables</a>
                    </li>
                    <li>
                      <a href="invoice.html">Invoice</a>
                    </li>
                    <li>
                      <a href="login.html" target="_top">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="register.html" target="_top">
                        Register
                      </a>
                    </li>
                    <li>
                      <a href="forgotpassword.html" target="_top">
                        Forgot Password
                      </a>
                    </li>
                    <li>
                      <a href="lock.html" target="_top">
                        Locked Screen
                      </a>
                    </li>
                    <li>
                      <a href="error404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="error500.html">Error 500</a>
                    </li>
                    <li className="active">
                      <a href="blank_.html">Blank Page</a>
                    </li>
                  </ul>
                </li>
                <li className="chat-users top-menu-invisible">
                  <a href="">
                    <i className="fa fa-lg fa-fw fa-comment-o">
                      <em className="bg-color-pink flash animated">!</em>
                    </i>{" "}
                    <span className="menu-item-parent">
                      Smart Chat API <sup>beta</sup>
                    </span>
                  </a>
                  <ul>
                    <li>
                      {/* DISPLAY USERS */}
                      <div className="display-users">
                        <input
                          className="form-control chat-user-filter"
                          placeholder="Filter"
                          type="text"
                        />
                        <a
                          href=""
                          className="usr"
                          data-chat-id="cha1"
                          data-chat-fname="Sadi"
                          data-chat-lname="Orlaf"
                          data-chat-status="busy"
                          data-chat-alertmsg="Sadi Orlaf is in a meeting. Please do not disturb!"
                          data-chat-alertshow="true"
                          data-rel="popover-hover"
                          data-placement="right"
                          data-html="true"
                          data-content="
											<div class='usr-card'>
												<img src='img/avatars/5.png' alt='Sadi Orlaf'>
												<div class='usr-card-content'>
													<h3>Sadi Orlaf</h3>
													<p>Marketing Executive</p>
												</div>
											</div>
										"
                        >
                          <i />Sadi Orlaf
                        </a>
                        <a
                          href=""
                          className="usr"
                          data-chat-id="cha2"
                          data-chat-fname="Jessica"
                          data-chat-lname="Dolof"
                          data-chat-status="online"
                          data-chat-alertmsg
                          data-chat-alertshow="false"
                          data-rel="popover-hover"
                          data-placement="right"
                          data-html="true"
                          data-content="
											<div class='usr-card'>
												<img src='img/avatars/1.png' alt='Jessica Dolof'>
												<div class='usr-card-content'>
													<h3>Jessica Dolof</h3>
													<p>Sales Administrator</p>
												</div>
											</div>
										"
                        >
                          <i />Jessica Dolof
                        </a>
                        <a
                          href=""
                          className="usr"
                          data-chat-id="cha3"
                          data-chat-fname="Zekarburg"
                          data-chat-lname="Almandalie"
                          data-chat-status="online"
                          data-rel="popover-hover"
                          data-placement="right"
                          data-html="true"
                          data-content="
											<div class='usr-card'>
												<img src='img/avatars/3.png' alt='Zekarburg Almandalie'>
												<div class='usr-card-content'>
													<h3>Zekarburg Almandalie</h3>
													<p>Sales Admin</p>
												</div>
											</div>
										"
                        >
                          <i />Zekarburg Almandalie
                        </a>
                        <a
                          href=""
                          className="usr"
                          data-chat-id="cha4"
                          data-chat-fname="Barley"
                          data-chat-lname="Krazurkth"
                          data-chat-status="away"
                          data-rel="popover-hover"
                          data-placement="right"
                          data-html="true"
                          data-content="
											<div class='usr-card'>
												<img src='img/avatars/4.png' alt='Barley Krazurkth'>
												<div class='usr-card-content'>
													<h3>Barley Krazurkth</h3>
													<p>Sales Director</p>
												</div>
											</div>
										"
                        >
                          <i />Barley Krazurkth
                        </a>
                        <a
                          href="#void"
                          className="usr offline"
                          data-chat-id="cha5"
                          data-chat-fname="Farhana"
                          data-chat-lname="Amrin"
                          data-chat-status="incognito"
                          data-rel="popover-hover"
                          data-placement="right"
                          data-html="true"
                          data-content="
											<div class='usr-card'>
												<img src='img/avatars/female.png' alt='Farhana Amrin'>
												<div class='usr-card-content'>
													<h3>Farhana Amrin</h3>
													<p>Support Admin <small><i class='fa fa-music'></i> Playing Beethoven Classics</small></p>
												</div>
											</div>
										"
                        >
                          <i />Farhana Amrin (offline)
                        </a>
                        <a
                          href=""
                          className="usr offline"
                          data-chat-id="cha6"
                          data-chat-fname="Lezley"
                          data-chat-lname="Jacob"
                          data-chat-status="incognito"
                          data-rel="popover-hover"
                          data-placement="right"
                          data-html="true"
                          data-content="
											<div class='usr-card'>
												<img src='img/avatars/male.png' alt='Lezley Jacob'>
												<div class='usr-card-content'>
													<h3>Lezley Jacob</h3>
													<p>Sales Director</p>
												</div>
											</div>
										"
                        >
                          <i />Lezley Jacob (offline)
                        </a>
                        <a
                          href="ajax/chat.html"
                          className="btn btn-xs btn-default btn-block sa-chat-learnmore-btn"
                        >
                          About the API
                        </a>
                      </div>
                      {/* END DISPLAY USERS */}
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
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
                    <BlankPage />
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
                    <i className="fa fa-calendar fa-4x" /> <span>Calendar</span>{" "}
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
                    <i className="fa fa-user fa-4x" /> <span>My Profile </span>{" "}
                  </span>{" "}
                </a>
              </li>
            </ul>
          </div>
          {/* END SHORTCUT AREA */}
        </div>
      </div>
    );
  }
}

export default App;
