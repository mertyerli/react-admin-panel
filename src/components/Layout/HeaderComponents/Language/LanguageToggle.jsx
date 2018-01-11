import React from "react";
import classNames from "classnames";
//import { connect } from "react-redux";

class LanguageToggle extends React.Component {
  onToggle = e => {
    e.preventDefault();
    this.props.onClick(e);
  };

  render() {
    const { activeLanguage } = this.props;
    return (
      <ul className="header-dropdown-list hidden-xs">
        <li>
          <a
            href=""
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={this.onToggle}
          >
            <img
              src="assets/img/blank.gif"
              className={classNames(["flag", "flag-" + activeLanguage.key])}
              alt={activeLanguage.alt}
            />&nbsp;
            <span>&nbsp;{activeLanguage.title}&nbsp;</span>{" "}
            <i className="fa fa-angle-down" />
          </a>
        </li>
      </ul>
    );
  }
}

// function mapStateToProps({ activeLanguage }) {
//   return { activeLanguage };
// }

// export default connect()(LanguageToggle);
export default LanguageToggle;
