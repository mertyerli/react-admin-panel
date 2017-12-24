import React from "react";
import NotificationContent from "./NotificationContent";
import NotificationFooter from "./NotificationFooter";
import NotificationTab from "./NotificationTab";
import rawData_notifications from "../../../data/notification-messages.json";
import _ from "lodash";

const NotificationDropdown = () => {
  const totalNotifications = _.sumBy(rawData_notifications, "length");

  return (
    <div>
      {/* Note: The activity badge color changes when clicked and resets the number to 0
          Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications */}
      <span id="activity" className="activity-dropdown">
        &nbsp;
        <i className="fa fa-user" />
        <b className="badge"> {totalNotifications} </b>
      </span>
      {/* AJAX-DROPDOWN : control this dropdown height, look and feel from the LESS variable file */}
      <div className="ajax-dropdown">
        {/* the ID links are fetched via AJAX to the ajax container "ajax-notifications" */}
        <div className="btn-group btn-group-justified" data-toggle="buttons">
          <NotificationTab
            caption={rawData_notifications[0].title}
            count={rawData_notifications[0].length}
            fetchFrom="ajax/notify/mail.html"
          />
          <NotificationTab
            caption={rawData_notifications[1].title}
            count={rawData_notifications[1].length}
            fetchFrom="ajax/notify/notifications.html"
          />
          <NotificationTab
            caption={rawData_notifications[2].title}
            count={rawData_notifications[2].length}
            fetchFrom="ajax/notify/tasks.html"
          />
        </div>
        <NotificationContent />
        <NotificationFooter />
      </div>
      {/* END AJAX-DROPDOWN */}
    </div>
  );
};

export default NotificationDropdown;
