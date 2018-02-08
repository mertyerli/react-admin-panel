import React from "react";

class WidgetContent extends React.Component {
  render() {
    return (
      <div id="content">
        <div className="jarviswidget-editbox" />
        <div className="widget-body">{this.props.children}</div>
      </div>
    );
  }
}

export default WidgetContent;
