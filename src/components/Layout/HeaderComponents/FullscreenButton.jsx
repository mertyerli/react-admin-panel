import React from "react";
import $ from "jquery";

class FullscreenButton extends React.Component {
  onToggle = e => {
    var $body = $("body");
    if (!$body.hasClass("full-screen")) {
      $body.addClass("full-screen");
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      $body.removeClass("full-screen");
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
    e.preventDefault();
  };

  render() {
    return (
      <div id="fullscreen" className="btn-header transparent pull-right">
        <span>
          <a
            href=""
            data-action="launchFullscreen"
            title="Full Screen"
            onClick={this.onToggle}
          >
            <i className="fa fa-arrows-alt" />
          </a>
        </span>
      </div>
    );
  }
}

export default FullscreenButton;
