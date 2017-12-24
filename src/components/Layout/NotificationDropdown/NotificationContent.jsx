import React from "react";

const NotificationContent = () => {
  return (
    <div className="ajax-notifications custom-scroll">
      <div className="alert alert-transparent">
        <h4>Click a button to show messages here</h4>
        This blank page message helps protect your privacy, or you can show the
        first message here automatically.
      </div>
      <i className="fa fa-lock fa-4x fa-border" />
    </div>
  );
};

export default NotificationContent;
