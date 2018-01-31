import React, { Component } from "react";


export default class PageRibbon extends Component {
  render = () => {
    return (
        <div id="ribbon">
        <span className="ribbon-button-alignment">
          <span
            id="refresh"
            className="btn btn-ribbon"
            data-action="resetWidgets"
            data-title="refresh"
            rel="tooltip"
            data-placement="bottom"
            data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings."
            data-html="true"
          >
            <i className="fa fa-refresh" />
          </span>
        </span>
        {/* breadcrumb */}
        <ol className="breadcrumb">
          <li>Home</li>
          <li>Miscellaneous</li>
          <li>Blank Page</li>
        </ol>
        {/* end breadcrumb */}

      </div>
    );
  };
}
