import React from "react";

const NavBar = () => {
  return (
    <div className="navbar-inverse navbar navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="current navbar-brand" href="../index.html">
            <img
              alt="Spin Logo Inverted"
              className="h-20"
              src="../assets/images/spin-logo-inverted-@2X.png"
            />
          </a>
          <button
            className="action-right-sidebar-toggle navbar-toggle collapsed"
            data-target="#navdbar"
            data-toggle="collapse"
            type="button"
          >
            <i className="fa fa-fw fa-align-right text-white" />
          </button>
          <button
            className="navbar-toggle collapsed"
            data-target="#navbar"
            data-toggle="collapse"
            type="button"
          >
            <i className="fa fa-fw fa-user text-white" />
          </button>
          <button
            className="action-sidebar-open navbar-toggle collapsed"
            type="button"
          >
            <i className="fa fa-fw fa-bars text-white" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbar">
          {/* START Search Mobile */}
          <div className="form-group hidden-lg hidden-md hidden-sm">
            <div className="input-group hidden-lg hidden-md">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
              />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button">
                  <i className="fa fa-fw fa-search" />
                </button>
              </span>
            </div>
          </div>
          {/* END Search Mobile */}
          {/* START Left Side Navbar */}
          <ul className="nav navbar-nav navbar-left clearfix yamm">
            {/* START Switch Sidebar ON/OFF */}
            <li id="sidebar-switch" className="hidden-xs">
              <a
                className="action-toggle-sidebar-slim"
                data-placement="bottom"
                data-toggle="tooltip"
                href="javascript;"
                title="Slim sidebar on/off"
              >
                <i className="fa fa-lg fa-bars fa-fw" />
              </a>
            </li>
            {/* END Switch Sidebar ON/OFF */}
            {/* START Menu Only Visible on Navbar */}
            <li id="top-menu-switch" className="dropdown">
              <a
                href="javascript;"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Menu
                <i className="fa fa-fw fa-caret-down" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="yamm-content">
                    <div className="row">
                      {/* START Start, Widgets Navbar Menu */}
                      <ul className="col-sm-2 list-unstyled">
                        <li>
                          <p className="text-muted small text-uppercase">
                            <strong> Start</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            href="../start/overview.html"
                            className="text-gray-lighter"
                          >
                            <span className="nav-label">Overview</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            href="../start/projects.html"
                            className="text-gray-lighter"
                          >
                            <span className="nav-label">Projects</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            href="../start/analytics.html"
                            className="text-gray-lighter"
                          >
                            <span className="nav-label">Analytics</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            href="../start/activity-team.html"
                            className="text-gray-lighter"
                          >
                            <span className="nav-label">Activity Team</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            href="../start/e-commerce.html"
                            className="text-gray-lighter"
                          >
                            <span className="nav-label">E-Commerce</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            href="../start/financial.html"
                            className="text-gray-lighter"
                          >
                            <span className="nav-label">Financial</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            href="../start/stock.html"
                            className="text-gray-lighter"
                          >
                            <span className="nav-label">Stock</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            href="../start/performance.html"
                            className="text-gray-lighter"
                          >
                            <span className="nav-label">Performance</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            href="../start/exchange&trading.html"
                            className="text-gray-lighter"
                          >
                            <span className="nav-label">
                              Exchange &amp; Trading
                            </span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            href="../start/system.html"
                            className="text-gray-lighter"
                          >
                            <span className="nav-label">System</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            href="../start/monitor.html"
                            className="text-gray-lighter"
                          >
                            <span className="nav-label">Monitor</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2">
                            <strong>Widgets</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            href="../widgets/widgets.html"
                            className="text-gray-lighter"
                          >
                            <span className="nav-label">Widgets</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            href="../graphs-widgets/widgets.html"
                            className="text-gray-lighter"
                          >
                            <span className="nav-label">Graphs Widgets</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2">
                            <strong>Tables</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../tables/pricing-tables.html"
                          >
                            <span className="nav-label">Pricing Tables</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../tables/tables.html"
                          >
                            <span className="nav-label">Tables</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../tables/datatables.html"
                          >
                            <span className="nav-label">Datatables</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2">
                            <strong> Grid</strong>
                          </p>
                          <ul>
                            <li className="m-l-1">
                              <a
                                className="text-gray-lighter"
                                href="../grids/grids.html"
                              >
                                <span className="nav-label">Grids</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      {/* END Start, Widgets Navbar Menu */}
                      {/* START Layouts, Sidebars Navbar Menu */}
                      <ul className="col-sm-2 list-unstyled">
                        <li>
                          <p className="text-muted small text-uppercase">
                            <strong>Layouts</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../layouts/default-fullwidth.html"
                          >
                            <span className="nav-label">Default FullWidth</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../layouts/default-fixed.html"
                          >
                            <span className="nav-label">Default Fixed</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../layouts/default-w-navbar.html"
                          >
                            <span className="nav-label">Default w/ Navbar</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../layouts/default-w-footer.html"
                          >
                            <span className="nav-label">Default w/ Footer</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../layouts/default-footer-fixed.html"
                          >
                            <span className="nav-label">
                              Default Footer Fixed
                            </span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../layouts/navbar.html"
                          >
                            <span className="nav-label">Navbar</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../layouts/navbar-container.html"
                          >
                            <span className="nav-label">Navbar Container</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../layouts/empty-page.html"
                          >
                            <span className="nav-label">Empty Page</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2">
                            <strong>Sidebars</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../sidebars/sidebar-default.html"
                          >
                            <span className="nav-label">Sidebar Default</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../sidebars/sidebar-w-progress.html"
                          >
                            <span className="nav-label">
                              Sidebar w/ Progress
                            </span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../sidebars/sidebar-w-menu.html"
                          >
                            <span className="nav-label">Sidebar w/ Menu</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../sidebars/sidebar-w-bars.html"
                          >
                            <span className="nav-label">Sidebar w/ Bars</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../sidebars/sidebar-avatar-&-bars.html"
                          >
                            <span className="nav-label">
                              Sidebar Avatar &amp; Bars
                            </span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../sidebars/sidebar-aside.html"
                          >
                            <span className="nav-label">Sidebar ASide</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../sidebars/sidebar-avatar-numbers.html"
                          >
                            <span className="nav-label">
                              With Avatar &amp; Numbers
                            </span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../sidebars/sidebar-avatar-stats.html"
                          >
                            <span className="nav-label">
                              With Avatar &amp; Stats
                            </span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../sidebars/sidebar-slim.html"
                          >
                            <span className="nav-label">Sidebar Slim</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../sidebars/sidebar-big-icons.html"
                          >
                            <span className="nav-label">Sidebar Big Icons</span>
                          </a>
                        </li>
                      </ul>
                      {/* END Layouts, Sidebars Navbar Menu */}
                      {/* START Layouts, Sidebars Navbar Menu */}
                      <ul className="col-sm-2 list-unstyled">
                        <li>
                          <p className="text-muted small text-uppercase">
                            <strong> Interface</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/colors.html"
                          >
                            <span className="nav-label">Colors</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/typography.html"
                          >
                            <span className="nav-label">Typography</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/buttons.html"
                          >
                            <span className="nav-label">Buttons</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/paginations&pager.html"
                          >
                            <span className="nav-label">
                              Paginations &amp; Pager
                            </span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/images&thumbs.html"
                          >
                            <span className="nav-label">
                              Images &amp; Thumbs
                            </span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/avatars.html"
                          >
                            <span className="nav-label">Avatars</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/navbars.html"
                          >
                            <span className="nav-label">Navbars</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/alerts.html"
                          >
                            <span className="nav-label">Alerts</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/toastr.html"
                          >
                            <span className="nav-label">Toastr</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/modals.html"
                          >
                            <span className="nav-label">Modals</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/progress-bars.html"
                          >
                            <span className="nav-label">Progress Bars</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/badges&labels.html"
                          >
                            <span className="nav-label">
                              Badges &amp; Labels
                            </span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/breadcrumps.html"
                          >
                            <span className="nav-label">Breadcrumbs</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/tabs&pills.html"
                          >
                            <span className="nav-label">Tabs &amp; Pills</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/tooltips&popovers.html"
                          >
                            <span className="nav-label">
                              Tooltips &amp; Popovers
                            </span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../interface/list-groups.html"
                          >
                            <span className="nav-label">List Groups</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2">
                            <strong>Graphs</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../graphs/highcharts.html"
                          >
                            <span className="nav-label">Highcharts</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../graphs/highstock.html"
                          >
                            <span className="nav-label">Highstock</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../graphs/peity.html"
                          >
                            <span className="nav-label">Peity</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../graphs/sparklines.html"
                          >
                            <span className="nav-label">Sparklines</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../graphs/chartist.html"
                          >
                            <span className="nav-label">Chartist</span>
                          </a>
                        </li>
                      </ul>
                      {/* END Layouts, Sidebars Navbar Menu */}
                      {/* START Pages Navbar Menu */}
                      <ul className="col-sm-2 list-unstyled">
                        <li>
                          <p className="text-muted small text-uppercase">
                            <strong> Pages</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../pages/register.html"
                          >
                            <span className="nav-label">Register</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../pages/login.html"
                          >
                            <span className="nav-label">Login</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../pages/forgot-password.html"
                          >
                            <span className="nav-label">Forgot Password</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../pages/lock-screen.html"
                          >
                            <span className="nav-label">Lock Screen</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../pages/error-404.html"
                          >
                            <span className="nav-label">Error 404</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../pages/invoice.html"
                          >
                            <span className="nav-label">Invoice</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../pages/timeline.html"
                          >
                            <span className="nav-label">Timeline</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2">
                            <strong>Projects</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/projects-list.html"
                          >
                            <span className="nav-label">Projects List</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/projects-grid.html"
                          >
                            <span className="nav-label">Projects Grid</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2">
                            <strong> Tasks</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/tasks-list.html"
                          >
                            <span className="nav-label">Tasks List</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/tasks-grid.html"
                          >
                            <span className="nav-label">Tasks Grid</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/tasks-details.html"
                          >
                            <span className="nav-label">Tasks Details</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2">
                            <strong>Files Manager</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/files-list.html"
                          >
                            <span className="nav-label">Files List</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/files-grid.html"
                          >
                            <span className="nav-label">Files Grid</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2">
                            <strong> Search Results</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/search-results.html"
                          >
                            <span className="nav-label">Search Results</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/images-results.html"
                          >
                            <span className="nav-label">Images Results</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/videos-results.html"
                          >
                            <span className="nav-label">Videos Results</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/users-results.html"
                          >
                            <span className="nav-label">Users Results</span>
                          </a>
                        </li>
                      </ul>
                      {/* END Pages Navbar Menu */}
                      {/* START Pages Navbar Menu */}
                      <ul className="col-sm-2 list-unstyled">
                        <li>
                          <p className="text-muted small text-uppercase">
                            <strong> Users</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/users-list.html"
                          >
                            <span className="nav-label">Users List</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/users-grid.html"
                          >
                            <span className="nav-label">Users Grid</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2">
                            <strong>Mailbox</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/inbox.html"
                          >
                            <span className="nav-label">Inbox</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/email-details.html"
                          >
                            <span className="nav-label">Email Details</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/new-email.html"
                          >
                            <span className="nav-label">New Email</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2">
                            <strong> Profile User</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/profile-details.html"
                          >
                            <span className="nav-label">Profile Details</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/profile-edit.html"
                          >
                            <span className="nav-label">Profile Edit</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/account-edit.html"
                          >
                            <span className="nav-label">Account Edit</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/billing-edit.html"
                          >
                            <span className="nav-label">Billing Edit</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/settings-edit.html"
                          >
                            <span className="nav-label">Settings Edit</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../apps/sessions-edit.html"
                          >
                            <span className="nav-label">Sessions Edit</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2">
                            <strong> Icons</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../icon/fonts-awesome.html"
                          >
                            <span className="nav-label">Fonts Awesome</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../icon/glyphicons.html"
                          >
                            <span className="nav-label">Glyphicons</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2">
                            <strong>Versions</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../versions/jquery.html"
                          >
                            <span className="nav-label">JQuery</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../versions/react.html"
                          >
                            <span className="nav-label">React</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../versions/react.html"
                          >
                            <span className="nav-label">Photoshop .PSD</span>
                          </a>
                        </li>
                      </ul>
                      {/* END Pages Navbar Menu */}
                      {/* START Pages Navbar Menu */}
                      <ul className="col-sm-2 list-unstyled">
                        <li>
                          <p className="text-muted small text-uppercase">
                            <strong>Forms</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../forms/forms.html"
                          >
                            <span className="nav-label">Forms</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../forms/forms-layouts.html"
                          >
                            <span className="nav-label">Forms Layouts</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../forms/date-range-picker.html"
                          >
                            <span className="nav-label">Date Range Picker</span>
                          </a>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../forms/forms-extended.html"
                          >
                            <span className="nav-label">Forms Extended</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2">
                            <strong>Panels</strong>
                          </p>
                        </li>
                        <li className="m-l-1">
                          <a
                            className="text-gray-lighter"
                            href="../panels/panels.html"
                          >
                            <span className="nav-label">Panels</span>
                          </a>
                        </li>
                      </ul>
                      {/* END Pages Navbar Menu */}
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            {/* END Menu Only Visible on Navbar */}
            <li className="spin-search-box clearfix hidden-xs">
              <a href="javascript;" className="pull-left">
                <i className="fa fa-search fa-lg icon-inactive" />
                <i className="fa fa-close fa-lg icon-active" />
              </a>
              <div className="input-group input-group-sm pull-left p-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </li>
          </ul>
          {/* START Left Side Navbar */}
          {/* START Right Side Navbar */}
          <ul className="nav navbar-nav navbar-right">
            <li
              role="separator"
              className="divider hidden-lg hidden-md hidden-sm"
            />
            <li className="dropdown-header hidden-lg hidden-md hidden-sm text-gray-lighter text-uppercase">
              <strong>Your Profile</strong>
            </li>
            {/* START Notification */}
            <li className="dropdown">
              {/* START Icon Notification with Badge (10)*/}
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                href="javascript;"
                role="button"
              >
                <i className="fa fa-lg fa-fw fa-bell hidden-xs" />
                <span className="hidden-sm hidden-md hidden-lg">
                  Notifications
                  <span className="badge badge-primary m-l-1">10</span>
                </span>
                <span className="label label-primary label-pill label-with-icon hidden-xs">
                  10
                </span>
                <span className="fa fa-fw fa-angle-down hidden-lg hidden-md hidden-sm" />
              </a>
              {/* END Icon Notification with Badge (10)*/}
              {/* START Notification Dropdown Menu */}
              <ul className="dropdown-menu dropdown-menu-right p-t-0 b-t-0 p-b-0 b-b-0 b-a-0">
                <li>
                  <div className="yamm-content p-t-0 p-r-0 p-l-0 p-b-0">
                    <ul className="list-group m-b-0 b-b-0">
                      <li className="list-group-item b-r-0 b-l-0 b-r-0 b-t-r-0 b-t-l-0 b-b-2 w-350">
                        <small className="text-uppercase">
                          <strong>Notifications</strong>
                        </small>
                        <a
                          role="button"
                          href="../apps/settings-edit.html"
                          className="btn m-t-0 btn-xs btn-default pull-right"
                        >
                          <i className="fa fa-fw fa-gear" />
                        </a>
                      </li>
                      {/* START Scroll Inside Panel */}
                      <li className="list-group-item b-a-0 p-x-0 p-y-0 b-t-0">
                        <div className="scroll-300 custom-scrollbar">
                          <a
                            href="../pages/timeline.html"
                            className="list-group-item b-r-0 b-t-0 b-l-0"
                          >
                            <div className="media">
                              <div className="media-left">
                                <span className="fa-stack fa-lg">
                                  <i className="fa fa-circle-thin fa-stack-2x text-danger" />
                                  <i className="fa fa-close fa-stack-1x fa-fw text-danger" />
                                </span>
                              </div>
                              <div className="media-body">
                                <h5 className="m-t-0">
                                  <span>
                                    You can't connect the alarm without hacking
                                    the bluetooth USB feed!
                                  </span>
                                </h5>
                                <p className="text-nowrap small m-b-0">
                                  <span>18-Jun-2015, 06:24</span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="../pages/timeline.html"
                            className="list-group-item b-r-0 b-l-0"
                          >
                            <div className="media">
                              <div className="media-left">
                                <span className="fa-stack fa-lg">
                                  <i className="fa fa-circle-thin fa-stack-2x text-primary" />
                                  <i className="fa fa-info fa-stack-1x text-primary" />
                                </span>
                              </div>
                              <div className="media-body">
                                <h5 className="m-t-0">
                                  <span>
                                    Try to quantify the RAM transmitter, maybe
                                    it will connect the multi-byte bandwidth!
                                  </span>
                                </h5>
                                <p className="text-nowrap small m-b-0">
                                  <span>31-Sep-2013, 05:40</span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="../pages/timeline.html"
                            className="list-group-item b-r-0 b-l-0"
                          >
                            <div className="media">
                              <div className="media-left">
                                <span className="fa-stack fa-lg">
                                  <i className="fa fa-circle-thin fa-stack-2x text-success" />
                                  <i className="fa fa-check fa-stack-1x text-success" />
                                </span>
                              </div>
                              <div className="media-body">
                                <h5 className="m-t-0">
                                  <span>
                                    The FTP protocol is down, back up the solid
                                    state interface so we can reboot the PNG
                                    monitor!
                                  </span>
                                </h5>
                                <p className="text-nowrap small m-b-0">
                                  <span>10-Dec-2012, 02:56</span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="../pages/timeline.html"
                            className="list-group-item b-r-0 b-l-0"
                          >
                            <div className="media">
                              <div className="media-left">
                                <span className="fa-stack fa-lg">
                                  <i className="fa fa-circle-thin fa-stack-2x text-warning" />
                                  <i className="fa fa-exclamation fa-stack-1x fa-fw text-warning" />
                                </span>
                              </div>
                              <div className="media-body">
                                <h5 className="m-t-0">
                                  <span>
                                    The SCSI protocol is down, hack the solid
                                    state alarm so we can override the JSON
                                    application!
                                  </span>
                                </h5>
                                <p className="text-nowrap small m-b-0">
                                  <span>09-Apr-2016, 10:07</span>
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      {/* END Scroll Inside Panel */}
                      <li className="list-group-item b-a-0 p-x-0 p-y-0 r-a-0 b-b-0">
                        <a
                          className="list-group-item text-center b-r-0 b-b-0 b-l-0 b-r-b-r-0 b-r-b-l-0"
                          href="../pages/timeline.html"
                        >
                          See All Notifications
                          <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              {/* END Notification Dropdown Menu */}
            </li>
            {/* END Notification */}
            <li className="dropdown">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                href="javascript;"
                role="button"
              >
                <i className="fa fa-lg fa-fw fa-envelope hidden-xs" />
                <span className="hidden-sm hidden-md hidden-lg">
                  Messages
                  <span className="badge badge-info m-l-1">3</span>
                </span>
                <span className="label label-info label-pill label-with-icon hidden-xs">
                  3
                </span>
                <span className="fa fa-fw fa-angle-down hidden-lg hidden-md hidden-sm" />
              </a>
              {/* START Messages Dropdown Menu */}
              <ul className="dropdown-menu dropdown-menu-right p-t-0 b-t-0 p-b-0 b-b-0 b-a-0">
                <li>
                  <div className="yamm-content p-t-0 p-r-0 p-l-0 p-b-0">
                    <ul className="list-group m-b-0">
                      <li className="list-group-item b-r-0 b-l-0 b-r-0 b-t-r-0 b-t-l-0 b-b-2 w-350">
                        <small className="text-uppercase">
                          <strong>Messages</strong>
                        </small>
                        <a
                          role="button"
                          href="../apps/new-email.html"
                          className="btn m-t-0 btn-xs btn-default pull-right"
                        >
                          <i className="fa fa-pencil" />
                        </a>
                      </li>
                      {/* START Scroll Inside Panel */}
                      <li className="list-group-item b-a-0 p-x-0 p-y-0 b-t-0">
                        <div className="scroll-200 custom-scrollbar">
                          <a
                            href="../apps/email-details.html"
                            className="list-group-item b-r-0 b-t-0 b-l-0"
                          >
                            <div className="media">
                              <div className="media-left media-middle">
                                <div className="avatar">
                                  <img
                                    className="media-object img-circle"
                                    src="https://s3.amazonaws.com/uifaces/faces/twitter/alecarpentier/128.jpg"
                                    alt="Avatar"
                                  />
                                  <i className="avatar-status avatar-status-bottom bg-danger b-gray-darker" />
                                </div>
                              </div>
                              <div className="media-body media-auto">
                                <h5 className="m-b-0 m-t-0">
                                  <span>Laury Bayer</span>
                                  <small>
                                    <span>02:38</span>
                                  </small>
                                </h5>
                                <p className="m-t-0 m-b-0">
                                  <span>Animi nihil inventore eos sunt.</span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="../apps/email-details.html"
                            className="list-group-item b-r-0 b-l-0"
                          >
                            <div className="media">
                              <div className="media-left media-middle">
                                <div className="avatar">
                                  <img
                                    className="media-object img-circle"
                                    src="https://s3.amazonaws.com/uifaces/faces/twitter/eugeneeweb/128.jpg"
                                    alt="Avatar"
                                  />
                                  <i className="avatar-status avatar-status-bottom bg-warning b-gray-darker" />
                                </div>
                              </div>
                              <div className="media-body media-auto">
                                <h5 className="m-b-0 m-t-0">
                                  <span>Arthur Purdy</span>
                                  <small>
                                    <span>09:37</span>
                                  </small>
                                </h5>
                                <p className="m-t-0 m-b-0">
                                  <span>
                                    Libero nisi occaecati molestias inventore
                                    voluptas modi et.
                                  </span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="../apps/email-details.html"
                            className="list-group-item b-r-0 b-l-0"
                          >
                            <div className="media">
                              <div className="media-left media-middle">
                                <div className="avatar">
                                  <img
                                    className="media-object img-circle"
                                    src="https://s3.amazonaws.com/uifaces/faces/twitter/lewisainslie/128.jpg"
                                    alt="Avatar"
                                  />
                                  <i className="avatar-status avatar-status-bottom bg-success b-gray-darker" />
                                </div>
                              </div>
                              <div className="media-body media-auto">
                                <h5 className="m-b-0 m-t-0">
                                  <span>Mustafa Howell</span>
                                  <small>
                                    <span>01:18</span>
                                  </small>
                                </h5>
                                <p className="m-t-0 m-b-0">
                                  <span>
                                    Facere modi libero quaerat voluptate eos.
                                  </span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="../apps/email-details.html"
                            className="list-group-item b-r-0 b-l-0"
                          >
                            <div className="media">
                              <div className="media-left media-middle">
                                <div className="avatar">
                                  <img
                                    className="media-object img-circle"
                                    src="https://s3.amazonaws.com/uifaces/faces/twitter/dpmachado/128.jpg"
                                    alt="Avatar"
                                  />
                                  <i className="avatar-status avatar-status-bottom bg-danger b-gray-darker" />
                                </div>
                              </div>
                              <div className="media-body media-auto">
                                <h5 className="m-b-0 m-t-0">
                                  <span>Gregg Wilkinson</span>
                                  <small>
                                    <span>10:35</span>
                                  </small>
                                </h5>
                                <p className="m-t-0 m-b-0">
                                  <span>
                                    Veritatis omnis amet modi explicabo aliquam.
                                  </span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="../apps/email-details.html"
                            className="list-group-item b-r-0 b-l-0"
                          >
                            <div className="media">
                              <div className="media-left media-middle">
                                <div className="avatar">
                                  <img
                                    className="media-object img-circle"
                                    src="https://s3.amazonaws.com/uifaces/faces/twitter/safrankov/128.jpg"
                                    alt="Avatar"
                                  />
                                  <i className="avatar-status avatar-status-bottom bg-warning b-gray-darker" />
                                </div>
                              </div>
                              <div className="media-body media-auto">
                                <h5 className="m-b-0 m-t-0">
                                  <span>Brian Marks</span>
                                  <small>
                                    <span>11:15</span>
                                  </small>
                                </h5>
                                <p className="m-t-0 m-b-0">
                                  <span>
                                    Molestiae dignissimos repellat voluptates
                                    excepturi veritatis.
                                  </span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="../apps/email-details.html"
                            className="list-group-item b-r-0 b-l-0"
                          >
                            <div className="media">
                              <div className="media-left media-middle">
                                <div className="avatar">
                                  <img
                                    className="media-object img-circle"
                                    src="https://s3.amazonaws.com/uifaces/faces/twitter/paulfarino/128.jpg"
                                    alt="Avatar"
                                  />
                                  <i className="avatar-status avatar-status-bottom bg-success b-gray-darker" />
                                </div>
                              </div>
                              <div className="media-body media-auto">
                                <h5 className="m-b-0 m-t-0">
                                  <span>Reta Schmidt</span>
                                  <small>
                                    <span>12:49</span>
                                  </small>
                                </h5>
                                <p className="m-t-0 m-b-0">
                                  <span>In recusandae nulla esse culpa.</span>
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      {/* END Scroll Inside Panel */}
                      <li className="list-group-item b-a-0 p-x-0 b-b-0 p-y-0 r-a-0">
                        <a
                          className="list-group-item text-center b-b-0 b-r-0 b-l-0 b-r-b-r-0 b-r-b-l-0"
                          href="../apps/inbox.html"
                        >
                          See All Messages
                          <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              {/* END Messages Dropdown Menu */}
            </li>
            <li className="dropdown">
              <a
                className="dropdown-toggle user-dropdown"
                data-toggle="dropdown"
                href="javascript;"
                role="button"
              >
                <span className="m-r-1">Princess Bradtke</span>
                <div className="avatar avatar-image avatar-sm avatar-inline">
                  <img
                    alt="User"
                    src="https://s3.amazonaws.com/uifaces/faces/twitter/thaodang17/128.jpg"
                  />
                </div>
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-header text-gray-lighter">
                  <strong className="text-uppercase">Account</strong>
                </li>
                <li role="separator" className="divider" />
                <li>
                  <a href="../apps/profile-details.html">Your Profile</a>
                </li>
                <li>
                  <a href="../apps/profile-edit.html">Settings</a>
                </li>
                <li>
                  <a href="../apps/faq.html">Faq</a>
                </li>
                <li role="separator" className="divider" />
                <li>
                  <a href="../pages/login.html">Sign Out</a>
                </li>
              </ul>
            </li>
            <li className="hidden-xs">
              <a
                className="action-right-sidebar-toggle"
                title="Right sidebar on/off"
              >
                <i className="fa fa-lg fa-align-right" />
              </a>
            </li>
          </ul>
          {/* END Right Side Navbar */}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
