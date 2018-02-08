import React from "react";
import _ from "lodash";
import classnames from "classnames";
//import $ from "jquery";
import WidgetHeader from "./WidgetHeader";
import WidgetContent from "./WidgetContent";

class Widget extends React.Component {
  /* available colors
        magenta
        pink
        pinkDark
        yellow
        orange
        orangeDark
        darken 
        purple
        teal
        blueDark
        blue 
        blueLight 
        red 
        redLight 
        white 
        greenDark 
        green
        greenLight
  */

  static defaultProps = {
    colorbutton: true,
    editbutton: true,
    togglebutton: true,
    deletebutton: true,
    fullscreenbutton: true,
    custombutton: false,
    collapsed: false,
    sortable: true,
    hidden: false,
    color: false,
    load: false,
    refresh: false
  };

  componentDidMount() {
    // $(this.refs[this.widgetId])
    //   .find(".widget-body")
    //   .prepend(
    //     '<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>'
    //   );
    // $(this.refs[this.widgetId])
    //   .find("[rel='tooltip']")
    //   .tooltip();
  }

  renderHeader() {
    let { children } = { ...this.props };

    if (!_.isArray(children)) {
      children = [children];
    }

    let tag = _.find(children, ["type", "header"]);
    if (tag !== undefined) {
      return <WidgetHeader {...tag.props}>{tag.props.children}</WidgetHeader>;
    } else {
      return null;
    }
  }

  renderContent() {
    let { children } = { ...this.props };

    if (!_.isArray(children)) {
      children = [children];
    }

    let tag = _.find(children, ["type", "content"]);
    if (tag !== undefined) {
      return <WidgetContent {...tag.props}>{tag.props.children}</WidgetContent>;
    } else {
      return null;
    }
  }
  render() {
    var colorClass = this.props.color
      ? "jarviswidget-color-" + this.props.color
      : "";
    var classes = classnames("jarviswidget", colorClass, {
      "jarviswidget-sortable": this.props.sortable === true
    });

    var widgetProps = {};

    this.widgetId = _.uniqueId("jarviswidget-");

    [
      "colorbutton",
      "editbutton",
      "togglebutton",
      "deletebutton",
      "fullscreenbutton",
      "custombutton",
      "sortable"
    ].forEach(
      function(option) {
        if (!this.props[option]) widgetProps["data-widget-" + option] = false;
      }.bind(this)
    );

    ["hidden", "collapsed"].forEach(
      function(option) {
        if (this.props[option]) widgetProps["data-widget-" + option] = true;
      }.bind(this)
    );

    ["refresh", "load"].forEach(
      function(option) {
        if (this.props[option])
          widgetProps["data-widget-" + option] = this.props[option];
      }.bind(this)
    );

    return (
      <div
        className={classes}
        id={this.widgetId}
        ref={this.widgetId}
        {...widgetProps}
      >
        {this.renderHeader()}
        {this.renderContent()}
      </div>
    );
  }
}

export default Widget;
