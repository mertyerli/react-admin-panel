import React, { Component } from "react";


export default class ShortCuts extends Component {
  render = () => {
    return (
        <div id="shortcut">
              <ul>
                <li>
                  <a
                    href="inbox.html"
                    className="jarvismetro-tile big-cubes bg-color-blue"
                  >
                    {" "}
                    <span className="iconbox">
                      {" "}
                      <i className="fa fa-envelope fa-4x" />{" "}
                      <span>
                        Mail{" "}
                        <span className="label pull-right bg-color-darken">
                          14
                        </span>
                      </span>{" "}
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="calendar.html"
                    className="jarvismetro-tile big-cubes bg-color-orangeDark"
                  >
                    {" "}
                    <span className="iconbox">
                      {" "}
                      <i className="fa fa-calendar fa-4x" />{" "}
                      <span>Calendar</span>{" "}
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="gmap-xml.html"
                    className="jarvismetro-tile big-cubes bg-color-purple"
                  >
                    {" "}
                    <span className="iconbox">
                      {" "}
                      <i className="fa fa-map-marker fa-4x" /> <span>Maps</span>{" "}
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="invoice.html"
                    className="jarvismetro-tile big-cubes bg-color-blueDark"
                  >
                    {" "}
                    <span className="iconbox">
                      {" "}
                      <i className="fa fa-book fa-4x" />{" "}
                      <span>
                        Invoice{" "}
                        <span className="label pull-right bg-color-darken">
                          99
                        </span>
                      </span>{" "}
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="gallery.html"
                    className="jarvismetro-tile big-cubes bg-color-greenLight"
                  >
                    {" "}
                    <span className="iconbox">
                      {" "}
                      <i className="fa fa-picture-o fa-4x" />{" "}
                      <span>Gallery </span>{" "}
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="profile.html"
                    className="jarvismetro-tile big-cubes selected bg-color-pinkDark"
                  >
                    {" "}
                    <span className="iconbox">
                      {" "}
                      <i className="fa fa-user fa-4x" />{" "}
                      <span>My Profile </span>{" "}
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </div>
    );
  };
}
