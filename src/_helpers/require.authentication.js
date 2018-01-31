import React, { Component } from "react";
import { object } from "prop-types";
import { connect } from "react-redux";
import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";
import { loginActions } from "./../_actions";
import { loginAPI } from "../_services/login.service";
import { sessionConstants as SC } from "../_constants";

const today = new Date(),
  date =
    today.getDate() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getFullYear() +
    "..." +
    today.getHours() +
    ".." +
    today.getMinutes() +
    ".." +
    today.getSeconds();

export default (ComposedComponent, LOGIN) => {
  class Authentication extends Component {
    static contextTypes = {
      router: object
    };

    static propTypes = {
      cookies: instanceOf(Cookies).isRequired
    };

    setCookie = (name, data) => {
      const { cookies } = this.props;
      cookies.set(name, data, { path: "/" });
    };

    removeCookie = name => {
      const { cookies } = this.props;
      cookies.remove(name, { path: "/" });
    };

    getCookie = name => {
      const { cookies } = this.props;
      return cookies.get(name, { path: "/" });
    };

    componentWillMount() {
      this.pageRedirect(this.props.session.status);
    }
    componentWillUpdate(nextProps) {
      this.pageRedirect(nextProps.session.status);
    }

    notAuthorized() {
      document.body.className = this.props.style.bodyLogin;
      this.context.router.history.push("/login");
      this.props.dispatch(loginActions.logout());
    }

    Authenticated() {
      this.props.dispatch(loginActions.loginSuccess(this.props.session.data));
    }


    pageRedirect = sessionStatus => {
      if (LOGIN) {
      document.body.className = this.props.style.bodyLogin;
        
        return;
      }
      this.setCookie("Last_Access", date);

      let cookieData = {};
      if (this.getCookie("session") !== undefined) {
        cookieData = this.getCookie("session").data;
      }

      if (sessionStatus === SC.LOGGED_OUT) {
        this.removeCookie("session");
        this.notAuthorized();
        return;
      }

      if (
        this.getCookie("session") !== undefined &&
        sessionStatus !== SC.AUTHENTICATED
      ) {
        // bir ceraz varsa
        let CookieState = loginAPI.getCookieAuthorization(
          cookieData.username,
          cookieData.token
        );
        if (CookieState === SC.LOGIN_SUCCESS) {
          // ceraz guncelmi diye bak
          this.Authenticated();
          return;
        } else {
          this.notAuthorized();
          return;
        }
      }

      if (sessionStatus !== SC.AUTHENTICATED) {
        this.notAuthorized();
        return;
      }

      if (this.props.session.data.token !== undefined)  {
        this.setCookie("session", this.props.session);
        if (this.getCookie(SC.REMEMBER_ME) !== undefined) {
          // buraya sessioni diske yazacak kodu yaz.
        }
      }
      document.body.className = this.props.style.body;
      
    };

    render = () => {
      const setCookie = this.setCookie;
      const getCookie = this.getCookie;
      const removeCookie = this.removeCookie;

      return (
        <ComposedComponent
          setCookie={setCookie}
          getCookie={getCookie}
          removeCookie={removeCookie}
          {...this.props}
        />
      );
    };
  }

  function mapStateToProps(state) {
    return {
      session: state.session,
      style: state.style
    };
  }

  return connect(mapStateToProps)(withCookies(Authentication));
};
