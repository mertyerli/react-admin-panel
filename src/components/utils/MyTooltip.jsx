import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class MyTooltip extends React.Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        {this.props.children.props["data-original-title"]}
      </Tooltip>
    );

    return (
      <OverlayTrigger placement={this.props.placement} overlay={tooltip}>
        {this.props.children}
      </OverlayTrigger>
    );
  }
}
export default MyTooltip;
