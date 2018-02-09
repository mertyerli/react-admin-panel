import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { loginParams, sessionConstants as SC } from "../../../_constants";
import { loginAPI } from "../../../_services/login.service";
import { loginActions } from "../../../_actions";
import {
  renderUsernameInput,
  renderPasswordInput
} from "../../utils/redux.form.tools";

class signIn extends Component {
  constructor(props) {
    super(props);
    this.state = { loginParams, rememberMe: ""};
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

  handleFormSubmit = ({ username, password }) => {
    this.session = loginAPI.getAuthorization(username, password);
    if (this.session.status === SC.LOGIN_SUCCESS) {
      this.props.dispatch(loginActions.loginSuccess(this.session));
    } else {
      this.props.dispatch(loginActions.loginFail(this.session));
    }
    this.props.history.push("/");
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
    const { handleSubmit } = this.props;
    return (
      <div>
        <div
          className="col-xs-12 col-sm-12 col-md-5 col-lg-4"
          style={{ margin: "10%" }}
        >
          <form
            onSubmit={handleSubmit(this.handleFormSubmit)}
            className="smart-form client-form"
          >
            <header>
              <h3> Sign in </h3>
            </header>
            <fieldset>
              <Field
                name="username"
                label="Username"
                component={renderUsernameInput}
                type="text"
              />{" "}
              <Field
                name="password"
                label="Password"
                component={renderPasswordInput}
                type="password"
              />
              <section>
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

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = " Please enter email address/username ";
  }

  if (!values.password) {
 //   errors.password = "Please enter your password";
  }

  return errors;
};

function mapStateToProps(state) {
  return {
    session: state.session
  };
}

export default connect(mapStateToProps, null)(
  reduxForm({
    form: "signin",
    destroyOnUnmount: false,
    validate
  })(signIn)
);
