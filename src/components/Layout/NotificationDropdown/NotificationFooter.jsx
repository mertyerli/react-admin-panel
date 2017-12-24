import React from "react";

const NotificationFooter = () => {
  return (
    <span>
      {" "}
      Last updated on: 12/12/2013 9:43AM
      <button
        type="button"
        data-loading-text="<i class='fa fa-refresh fa-spin'></i> Loading..."
        className="btn btn-xs btn-default pull-right"
      >
        <i className="fa fa-refresh" />
      </button>{" "}
    </span>
  );
};

export default NotificationFooter;
