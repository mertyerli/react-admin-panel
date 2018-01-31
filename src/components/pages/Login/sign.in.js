import React, { Component } from "react";
import { connect } from "react-redux";
import { loginParams, sessionConstants as SC } from "../../../_constants";
import { loginAPI } from "../../../_services/login.service";
import { loginActions } from "../../../_actions";

class signIn extends Component {
  constructor(props) {
    super(props);
    this.state = { loginParams, rememberMe: "", username: "", password: "" };
    this.session = {};
  }

  componentDidMount() {
    let checkedStatus = "";
    this.props.getCookie(SC.REMEMBER_ME) !== undefined
      ? (checkedStatus = "YES")
      : (checkedStatus = "");
    this.setState({ rememberMe: checkedStatus });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.session = loginAPI.getAuthorization(username, password);
    if (this.session.status === SC.LOGIN_SUCCESS) {
      this.props.dispatch(loginActions.loginSuccess(this.session));
    } else {
      this.props.dispatch(loginActions.loginFail(this.session));
    }
    this.props.history.push("/");
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckBox = event => {
    let checkedStatus = "";
    if (event.target.checked) {
      checkedStatus = "YES";
      this.props.setCookie(SC.REMEMBER_ME, event.target.checked);
    } else {
      checkedStatus = "";
      this.props.removeCookie(SC.REMEMBER_ME);
    }
    this.setState({ rememberMe: checkedStatus });
  };

  render() {
    return (
      <div >
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4" style={{ margin: "10%"}}>
          <form
            name="form"
            onSubmit={this.handleSubmit}
            className="smart-form client-form"
          >
            <header>
              <h3> Sign in </h3>
            </header>
            <fieldset>
              <section>
                <label className="label">Username</label>
                <label className="input">
                  {" "}
                  <i className="icon-append fa fa-user" />
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <b className="tooltip tooltip-top-right">
                    <i className="fa fa-user txt-color-teal" /> Please enter
                    email address/username
                  </b>
                </label>
              </section>

              <section>
                <label className="label">Password</label>
                <label className="input">
                  {" "}
                  <i className="icon-append fa fa-lock" />
                  <input type="password" name="password" />
                  <b className="tooltip tooltip-top-right">
                    <i className="fa fa-lock txt-color-teal" /> Enter your
                    password
                  </b>
                </label>
                <div
                  className="note"
                  value={this.state.password}
                  onChange={this.handleChange}
                >
                  <a href="forgotpassword.html">Forgot password?</a>
                </div>
              </section>

              <section>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="chk_RememberMe"
                    onChange={this.handleCheckBox}
                    checked={this.state.rememberMe}
                  />
                  <i />Stay signed in
                </label>
              </section>
            </fieldset>
            <footer>
              <button className="btn btn-info" type="submit">
                Sign in
              </button>
            </footer>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    session: state.session
  };
}

export default connect(mapStateToProps, null)(signIn);
