import React from "react";
import $ from "jquery";

class MinifyButton extends React.Component {
  onToggle = () => {
    var $body = $("body");

    if (!$body.hasClass("menu-on-top")) {
      $body.toggleClass("minified");
      $body.removeClass("hidden-menu");
      $("html").removeClass("hidden-menu-mobile-lock");
    }
  };

  render() {
    return (
      <span
        className="minifyme"
        data-action="minifyMenu"
        onClick={this.onToggle}
      >
        <i className="fa fa-arrow-circle-left hit" />
      </span>
    );
  }
}

export default MinifyButton;
