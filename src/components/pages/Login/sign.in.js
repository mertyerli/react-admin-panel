import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { sessionConstants as SC } from "../../../_constants";
import { loginAPI } from "../../../_services/login.service";
import { loginActions } from "../../../_actions";
import { renderUsernameInput, renderPasswordInput } from "./redux.form.tools";

class signIn extends Component {
  constructor(props) {
    super(props);
    this.state = { rememberMe: "" };
  }

  componentDidMount() {
    let checkedStatus = "";
    localStorage.getItem('token')
      ? this.props.dispatch(loginActions.rememberMe(true))
      : null;
    
  }

  handleFormSubmit = ({ username, password }) => {
    loginAPI
      .getAuthorization({ email: username, password })
      .then(response => {
        this.props.dispatch(loginActions.loginSuccess(response.data.token));
        this.props.session.rememberMe
          ? localStorage.setItem("token", response.data.token)
          : localStorage.removeItem("token");
        this.props.history.push("/");
      })
      .catch(() => {
        this.props.dispatch(loginActions.loginFail());
      });
  };

  // localStorage.getItem('token')
  handleCheckBox = event => {
    let checkedStatus = "";
    if (event.target.checked) {
      checkedStatus = "YES";
      //    this.props.setCookie(SC.REMEMBER_ME, event.target.checked);
    } else {
      checkedStatus = "";
      localStorage.removeItem("token");
    }
    //  this.props.setState({ rememberMe:  });
    this.props.dispatch(loginActions.rememberMe(checkedStatus));
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
                    key="RememberMe-Login"
                    type="checkbox"
                    name="chk_RememberMe"
                    onChange={this.handleCheckBox}
                    checked={this.props.session.rememberMe}
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

export default reduxForm(
  {
    form: "signin",
    destroyOnUnmount: false,
    validate
  },
  mapStateToProps,
  null
)(signIn);
