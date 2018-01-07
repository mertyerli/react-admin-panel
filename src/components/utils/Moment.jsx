import React from "react";
import moment from "moment";

class Moment extends React.Component {
  render() {
    return (
      <span>{moment(this.props.date).format(this.props.format || "llll")}</span>
    );
  }
}

export default Moment;
