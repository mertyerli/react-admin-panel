import React, { Component } from "react";

class NotificationTab extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <label className="btn btn-default">
        <input type="radio" name="activity" id={this.props.fetchFrom} />
        {this.props.caption}&nbsp;({this.props.count})
      </label>
    );
  }
}

export default NotificationTab;
