import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Test2 extends Component {
  render = () => {
    return (
      <div>
        <h3> TEST PAGE </h3>
        Test Page 2
        <br/>
        <br/>
        <Link to="/">
        Home
        </Link>
      </div>
    );
  };
}
