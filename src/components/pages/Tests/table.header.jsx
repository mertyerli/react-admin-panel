import React, { Component } from "react";

export default class TableHeader extends Component {
  render = () => {
    return (
        <header role="heading" className="ui-sortable-handle">
          <div className="jarviswidget-ctrls" role="menu">
            {" "}
            <a
              
              className="button-icon jarviswidget-toggle-btn"
              rel="tooltip"
              title=""
              data-placement="bottom"
              data-original-title="Collapse"
            >
              <i className="fa fa-minus " />
            </a>{" "}
            <a
              
              className="button-icon jarviswidget-fullscreen-btn"
              rel="tooltip"
              title=""
              data-placement="bottom"
              data-original-title="Fullscreen"
            >
              <i className="fa fa-expand " />
            </a>{" "}
            <a
              
              className="button-icon jarviswidget-delete-btn"
              rel="tooltip"
              title=""
              data-placement="bottom"
              data-original-title="Delete"
            >
              <i className="fa fa-times" />
            </a>
          </div>
          <div className="widget-toolbar" role="menu">
            <a
              data-toggle="dropdown"
              className="dropdown-toggle color-box selector"
              
            > </a>
            <ul className="dropdown-menu arrow-box-up-right color-select pull-right">
              <li>
                <span
                  className="bg-color-green"
                  data-widget-setstyle="jarviswidget-color-green"
                  rel="tooltip"
                  data-placement="left"
                  data-original-title="Green Grass"
                />
              </li>
              <li>
                <span
                  className="bg-color-greenDark"
                  data-widget-setstyle="jarviswidget-color-greenDark"
                  rel="tooltip"
                  data-placement="top"
                  data-original-title="Dark Green"
                />
              </li>
              <li>
                <span
                  className="bg-color-greenLight"
                  data-widget-setstyle="jarviswidget-color-greenLight"
                  rel="tooltip"
                  data-placement="top"
                  data-original-title="Light Green"
                />
              </li>
              <li>
                <span
                  className="bg-color-purple"
                  data-widget-setstyle="jarviswidget-color-purple"
                  rel="tooltip"
                  data-placement="top"
                  data-original-title="Purple"
                />
              </li>
              <li>
                <span
                  className="bg-color-magenta"
                  data-widget-setstyle="jarviswidget-color-magenta"
                  rel="tooltip"
                  data-placement="top"
                  data-original-title="Magenta"
                />
              </li>
              <li>
                <span
                  className="bg-color-pink"
                  data-widget-setstyle="jarviswidget-color-pink"
                  rel="tooltip"
                  data-placement="right"
                  data-original-title="Pink"
                />
              </li>
              <li>
                <span
                  className="bg-color-pinkDark"
                  data-widget-setstyle="jarviswidget-color-pinkDark"
                  rel="tooltip"
                  data-placement="left"
                  data-original-title="Fade Pink"
                />
              </li>
              <li>
                <span
                  className="bg-color-blueLight"
                  data-widget-setstyle="jarviswidget-color-blueLight"
                  rel="tooltip"
                  data-placement="top"
                  data-original-title="Light Blue"
                />
              </li>
              <li>
                <span
                  className="bg-color-teal"
                  data-widget-setstyle="jarviswidget-color-teal"
                  rel="tooltip"
                  data-placement="top"
                  data-original-title="Teal"
                />
              </li>
              <li>
                <span
                  className="bg-color-blue"
                  data-widget-setstyle="jarviswidget-color-blue"
                  rel="tooltip"
                  data-placement="top"
                  data-original-title="Ocean Blue"
                />
              </li>
              <li>
                <span
                  className="bg-color-blueDark"
                  data-widget-setstyle="jarviswidget-color-blueDark"
                  rel="tooltip"
                  data-placement="top"
                  data-original-title="Night Sky"
                />
              </li>
              <li>
                <span
                  className="bg-color-darken"
                  data-widget-setstyle="jarviswidget-color-darken"
                  rel="tooltip"
                  data-placement="right"
                  data-original-title="Night"
                />
              </li>
              <li>
                <span
                  className="bg-color-yellow"
                  data-widget-setstyle="jarviswidget-color-yellow"
                  rel="tooltip"
                  data-placement="left"
                  data-original-title="Day Light"
                />
              </li>
              <li>
                <span
                  className="bg-color-orange"
                  data-widget-setstyle="jarviswidget-color-orange"
                  rel="tooltip"
                  data-placement="bottom"
                  data-original-title="Orange"
                />
              </li>
              <li>
                <span
                  className="bg-color-orangeDark"
                  data-widget-setstyle="jarviswidget-color-orangeDark"
                  rel="tooltip"
                  data-placement="bottom"
                  data-original-title="Dark Orange"
                />
              </li>
              <li>
                <span
                  className="bg-color-red"
                  data-widget-setstyle="jarviswidget-color-red"
                  rel="tooltip"
                  data-placement="bottom"
                  data-original-title="Red Rose"
                />
              </li>
              <li>
                <span
                  className="bg-color-redLight"
                  data-widget-setstyle="jarviswidget-color-redLight"
                  rel="tooltip"
                  data-placement="bottom"
                  data-original-title="Light Red"
                />
              </li>
              <li>
                <span
                  className="bg-color-white"
                  data-widget-setstyle="jarviswidget-color-white"
                  rel="tooltip"
                  data-placement="right"
                  data-original-title="Purity"
                />
              </li>
              <li>
                <a
                  
                  className="jarviswidget-remove-colors"
                  data-widget-setstyle=""
                  rel="tooltip"
                  data-placement="bottom"
                  data-original-title="Reset widget color to default"
                >
                  Remove
                </a>
              </li>
            </ul>
          </div>
          <span className="widget-icon">
            {" "}
            <i className="fa fa-table" />{" "}
          </span>
          <h2>Normal Table</h2>

          <span className="jarviswidget-loader">
            <i className="fa fa-refresh fa-spin" />
          </span>
        </header>
    );
  };
}
