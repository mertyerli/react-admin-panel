import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class SignOut extends Component {
  render = () => {
    return (
      <div id="content">
        <h3> SignOut PAGE </h3>
            sorry for leaving
        <br/>
        <br/>
        <Link to="/signin">
        Login Again.
        </Link>
      </div>
    );
  };
}
