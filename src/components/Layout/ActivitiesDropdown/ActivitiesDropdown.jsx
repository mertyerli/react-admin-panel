import React from "react";
import _ from "lodash";
import $ from "jquery";
import axios from "axios";
import Moment from "moment";
import classNames from "classnames";

import Message from "./Message";
import Notification from "./Notification";
import Task from "./Task";

let Components = {
  Message: Message,
  Notification: Notification,
  Task: Task
};

class ActivitiesDropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      activity: {
        items: []
      },
      activities: [],
      lastUpdate: new Date()
    };
  }

  componentDidMount() {
    this._fetch();

    /* https://github.com/axios/axios/issues/853#issuecomment-304775768 */
    /* https://github.com/axios/axios */
    // axios.defaults.baseURL = "https://api.example.com";
    // axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    // axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    // axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  }

  _fetch = () => {
    //console.log("fetching..", this);
    let _this = this;
    return new Promise((resolve, reject) => {
      axios
        .get("/data/notification-messages.json")
        .then(response => {
          //console.log("then", response, "obj", this);
          _this.setState({
            activities: response.data,
            activity: response.data[0],
            lastUpdate: new Date()
          });
          resolve();
        })
        .catch(error => {
          console.log("catch", error);
          reject();
        });
    });
  };

  onRefreshData = () => {
    let _this = this;

    $(_this.refs.loadingText).html("Loading...");
    $(_this.refs.loadingSpin).addClass("fa-spin");

    _this._fetch().then(
      () => {
        $(_this.refs.loadingText).html("");
        $(_this.refs.loadingSpin).removeClass("fa-spin");
      } //.bind(_this)
    );
  };

  _setActivity = _activity => {
    this.setState({
      activity: _activity
    });
  };

  onToggle = e => {
    e.preventDefault();
    let $dropdown = $(this.refs.dropdown);
    let $dropdownToggle = $(this.refs.dropdownToggle);

    if (this._active) {
      $dropdown.fadeOut(150);
    } else {
      $dropdown.fadeIn(150);
    }

    this._active = !this._active;
    $dropdownToggle.toggleClass("active", this._active);

    if (this._active) {
      $(document)
        .not($dropdown)
        .on("click", e => {
          if ($dropdown.find(e.target).length === 0) {
            this.onToggle(e);
          }
        });
    } else {
      $(document)
        .not($dropdown)
        .off("click");
    }
  };

  render() {
    let activities = this.state.activities;
    let activity = this.state.activity;
    let lastUpdate = Moment(this.state.lastUpdate).format(
      "DD-MM-YYYY kk:mm:ss"
    );
    let totalNotifications = _.sumBy(activities, "length");

    return (
      <div>
        <span
          id="activity"
          ref="dropdownToggle"
          className="activity-dropdown"
          onClick={this.onToggle}
        >
          &nbsp;
          <i className="fa fa-user" />
          <b className="badge"> {totalNotifications} </b>
        </span>
        {/* AJAX-DROPDOWN : control this dropdown height, look and feel from the LESS variable file */}
        <div className="ajax-dropdown" ref="dropdown">
          {/* the ID links are fetched via AJAX to the ajax container "ajax-notifications" */}
          <div className="btn-group btn-group-justified" data-toggle="buttons">
            {activities.map(
              function(_activity, idx) {
                return (
                  <label
                    className={classNames([
                      "btn",
                      "btn-default",
                      {
                        active: _activity.name === activity.name
                      }
                    ])}
                    key={idx}
                    onClick={this._setActivity.bind(this, _activity)}
                  >
                    <input type="radio" name="activity" />
                    {_activity.title}&nbsp;({_activity.length})
                  </label>
                );
              }.bind(this)
            )}

            {/* <NotificationTab
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
            /> */}
          </div>
          {/* notification content */}
          <div className="ajax-notifications custom-scroll">
            <ul className="notification-body">
              {activity.items.map(
                function(item, idx) {
                  let component = Components[item.type];
                  return (
                    <li key={idx}>
                      {React.createElement(component, {
                        item: item,
                        lastUpdated: this.state.lastUpdated
                      })}
                    </li>
                  );
                }.bind(this)
              )}
            </ul>
          </div>
          {/* end notification content */}
          {/* footer */}
          <span>
            Last updated on:&nbsp;
            {Moment(lastUpdate, "DD-MM-YYYY kk:mm:ss").fromNow()}
            <button
              type="button"
              data-loading-text="<i class='fa fa-refresh fa-spin'></i> Loading..."
              className="btn btn-xs btn-default pull-right"
              onClick={this.onRefreshData}
            >
              <i ref="loadingSpin" className="fa fa-refresh" />
              <span ref="loadingText" />
            </button>
          </span>
          {/* end of footer */}
        </div>
        {/* END AJAX-DROPDOWN */}
      </div>
    );
  }
}

export default ActivitiesDropdown;
