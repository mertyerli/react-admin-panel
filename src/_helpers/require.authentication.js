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
    constructor(props) {
      super(props);
      this.PageAuthenticated = false;
    }
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
      // sayfanin Authentication Kontrolu Buradan basliyor
      // Local Storafe token kontrolu index.js'te yapiliyor.
      this.pageRedirect(this.props.session.status);
    }
    componentWillUpdate(nextProps) {
      // sayfa yenilemesinde olasi Authentication Kontrolu Buradan basliyor
      this.pageRedirect(nextProps.session.status);
    }

    notAuthorized() {
      this.context.router.history.push("/login");
      // this.props.dispatch(loginActions.logout());
    }

    Authenticated() {
      this.props.dispatch(loginActions.loginSuccess(this.props.session.data));
    }

    pageRedirect = sessionStatus => {
      //son Erisimi Tarayiciya kaydet.
      //this.setCookie("Last_Access", date);
      localStorage.setItem("LAST ACCESS", date);

      // zaten login SAYFASI ise authorization islemini iptal et
      if (LOGIN) {
        document.body.className = this.props.style.bodyLogin;
        return;
      }

      // Eger acik bir session bilgisi varsa CookieData'ya yaz.
      let cookieData = "";
      if (this.getCookie("session") !== undefined) {
        cookieData = this.getCookie("session");
      }
      // eger logout talebi gelmisse ???? niye burada yaptim bakacagim
      if (sessionStatus === SC.LOGGED_OUT) {
        this.removeCookie("session");
        localStorage.removeItem('token');
        this.notAuthorized();
        return;
      }

      // sayfa girise yetkilimi / degilmi bakalim
      // - sayfa refresh edildiginde => Cookie var ama state AUTHENTICATED degil
      if (
        this.getCookie("session") !== undefined &&
        sessionStatus !== SC.AUTHENTICATED
      ) {
        if (loginAPI.getCookieAuthorization(cookieData) === SC.LOGIN_SUCCESS) {
          this.Authenticated();
          return;
        } else {
          this.notAuthorized();
          return;
        }
      }

      // hala Authenticate olmadiysan Yuh sana. don login ekranina
      if (sessionStatus !== SC.AUTHENTICATED) {
        this.notAuthorized();
        return;
      }

      // Okdar login gecmissin. Bunlari browsera yazki 
      // hersayfada seni tanimak zorunda kalmayalim sekerim.
      if (this.props.session.token !== undefined) {
        this.setCookie("session", this.props.token);
        if (this.getCookie(SC.REMEMBER_ME) !== undefined) {
          // bubilgisayari karim bile kullanmiyor. sen beni ugrastirma taniyiver.
          localStorage.setItem("token", this.props.token);
        }
      }

      // en buyuk, en yetkili benim hurrraaaaa  
      this.PageAuthenticated = true;

      //Gorucuye cikacagiz, tipimizi azicik duzeltelim degil mi ;)
      document.body.className = this.props.style.body;
    };

    render = () => {
      if (LOGIN || this.PageAuthenticated) {
        return (
          <ComposedComponent
            setCookie={this.setCookie}
            getCookie={this.getCookie}
            removeCookie={this.removeCookie}
            {...this.props}
          />
        );
      } else {
        //this.props.history.push('/login');
        return <div> System Error </div>;
      }
    };
  }

  function mapStateToProps(state) {
    return {
      session: state.session,
      style: state.style,
      token: state.session.token
    };
  }

  return connect(mapStateToProps)(withCookies(Authentication));
};
