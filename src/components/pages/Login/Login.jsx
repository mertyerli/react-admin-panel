import React from "react";
import LoginLayout from "./LoginLayout";

class Login extends React.Component {
  render() {
    return (
      <LoginLayout>
        <form
          action="index.html"
          id="login-form"
          className="smart-form client-form"
        >
          <header>Sign In</header>

          <fieldset>
            <section>
              <label className="label">E-mail</label>
              <label className="input">
                <i className="icon-append fa fa-user" />
                <input type="email" name="email" />
                <b className="tooltip tooltip-top-right">
                  <i className="fa fa-user txt-color-teal" /> Please enter email
                  address/username
                </b>
              </label>
            </section>

            <section>
              <label className="label">Password</label>
              <label className="input">
                <i className="icon-append fa fa-lock" />
                <input type="password" name="password" />
                <b className="tooltip tooltip-top-right">
                  <i className="fa fa-lock txt-color-teal" /> Enter your
                  password
                </b>
              </label>
              <div className="note">
                <a href="forgotpassword.html">Forgot password?</a>
              </div>
            </section>

            <section>
              <label className="checkbox">
                <input type="checkbox" name="remember" checked="" />
                <i />Stay signed in
              </label>
            </section>
          </fieldset>
          <footer>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </footer>
        </form>
      </LoginLayout>
    );
  }
}
export default Login;
