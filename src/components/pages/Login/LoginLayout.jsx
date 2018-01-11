import React from "react";
import SideLeft from "./SideLeft";
import "./login.css";
import Layout from "../../../_helpers/Layout";

class LoginLayout extends React.Component {
  render() {
    return (
      <Layout>
        <div id="extr-page">
          <header id="header" className="animated fadeInDown">
            <div id="logo-group">
              <span id="logo">
                <img src="assets/img/logo-white.png" alt="SmartAdmin" />
              </span>
            </div>

            <span id="extr-page-header-space">
              <span className="hidden-mobile hiddex-xs">Need an account?</span>
              <a href="register.html" className="btn btn-danger">
                Create account
              </a>
            </span>
          </header>

          <div id="main" role="main">
            <div id="content" className="container">
              <div className="row">
                <SideLeft />
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                  <div className="well no-padding">{this.props.children}</div>

                  <h5 className="text-center"> - Or sign in using -</h5>
                  <ul className="list-inline text-center">
                    <li>
                      <a href="" className="btn btn-primary btn-circle">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="" className="btn btn-info btn-circle">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="" className="btn btn-warning btn-circle">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default LoginLayout;
