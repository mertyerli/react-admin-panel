import React from "react";
import LanguageItem from "./LanguageItem";
import rawData_languages from "../../../../data/languages.json";
import classNames from "classnames";
import _ from "lodash";
import { Dropdown, MenuItem } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleLanguage } from "../../../../actions/index";
import LanguageToggle from "./LanguageToggle";
import "./language.css";

class LanguageDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.languages = rawData_languages;
    const defaultActiveLanguage = _.find(
      this.languages,
      s => s.isActive === true
    );

    this.state = {
      activeLanguage: defaultActiveLanguage
    };
    this.props.toggleLanguage(this.state.activeLanguage);
  }

  onLanguageSelect = language => {
    this.props.toggleLanguage(language);
    this.setState({ activeLanguage: language });
  };
  render() {
    const items = this.languages.map(item => {
      const itemClass = classNames({
        active: item.key === this.state.activeLanguage.key
      });
      return (
        <MenuItem key={item.key} className={itemClass}>
          <LanguageItem
            language={item}
            onLanguageSelect={this.onLanguageSelect}
          />
        </MenuItem>
      );
    });

    return (
      <Dropdown id="dropdown-language-menu" className="dropdown-language-menu">
        <LanguageToggle bsRole="toggle" />
        <Dropdown.Menu>{items}</Dropdown.Menu>
      </Dropdown>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleLanguage }, dispatch);
}

export default connect(null, mapDispatchToProps)(LanguageDropdown);
