import React from "react";
import $ from "jquery";

class CollapseButton extends React.Component {
  onToggle(e) {
    e.preventDefault();

    var $body = $("body"),
      $html = $("html");

    if (!$body.hasClass("menu-on-top")) {
      $html.toggleClass("hidden-menu-mobile-lock");
      $body.toggleClass("hidden-menu");
      $body.removeClass("minified");
    } else if (
      $body.hasClass("menu-on-top") &&
      $body.hasClass("mobile-view-activated")
    ) {
      $html.toggleClass("hidden-menu-mobile-lock");
      $body.toggleClass("hidden-menu");
      $body.removeClass("minified");
    }
  }

  render() {
    return (
      <div id="hide-menu" className="btn-header pull-right">
        <span>
          <a
            onClick={this.onToggle}
            data-action="toggleMenu"
            title="Collapse Menu"
          >
            <i className="fa fa-reorder" />
          </a>{" "}
        </span>
      </div>
    );
  }
}

export default CollapseButton;
