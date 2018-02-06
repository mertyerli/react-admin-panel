import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Tables1 extends Component {
  render = () => {
    return (
      <div id="content">
        <h3> Tables1 PAGE </h3>
        Tables Page 1
        <br/>
        <br/>
        <Link to="/">
        Home
        </Link>
      </div>
    );
  };
}
