import React from "react";
import LanguageItem from "./LanguageItem";
import rawData_languages from "../../../data/languages.json";
import classNames from "classnames";
import _ from "lodash";
import { Dropdown, MenuItem } from "react-bootstrap";

class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    const { activeLanguage } = this.props;
    return (
      <ul className="header-dropdown-list hidden-xs">
        <li>
          <a
            href=""
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={this.handleClick}
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

class LanguageDropdown extends React.Component {
  render() {
    const languages = rawData_languages;

    const languageItems = languages.map(language => {
      const itemClass = classNames({ active: language.isActive });
      return (
        <MenuItem key={language.key} className={itemClass}>
          <LanguageItem language={language} />
        </MenuItem>
      );
    });

    const activeLanguage = _.find(languages, s => s.isActive === true);

    return (
      <Dropdown id="dropdown-language-menu">
        <CustomToggle bsRole="toggle" activeLanguage={activeLanguage} />
        <Dropdown.Menu className="super-colors">{languageItems}</Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default LanguageDropdown;
