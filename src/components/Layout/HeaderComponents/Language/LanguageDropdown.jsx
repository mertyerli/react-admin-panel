import React from "react";
import LanguageItem from "./LanguageItem";
import classNames from "classnames";
import { Dropdown, MenuItem } from "react-bootstrap";
//import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LanguageToggle from "./LanguageToggle";
import { languageActions } from "../../../../_actions";
import { languageService } from "../../../../_services";

import "./language.css";

class LanguageDropdown extends React.Component {
  onLanguageSelect = language => {
    this.props.dispatch(languageActions.toggle(language));
    languageService.fetchTranslations(language.key).then(response => {
      this.props.dispatch(languageActions.setTranslations(response.data));
    });
  };

  render() {
    console.log("props", this.props);
    console.log("state", this.state);

    const items = this.props.languages.map(item => {
      const itemClass = classNames({
        active: item.key === this.props.activeLanguage.key
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
        <LanguageToggle
          bsRole="toggle"
          activeLanguage={this.props.activeLanguage}
        />
        <Dropdown.Menu>{items}</Dropdown.Menu>
      </Dropdown>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeLanguage: state.language.activeLanguage,
    languages: state.language.items
  };
}

/*
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleLanguage }, dispatch);
}
*/
export default connect(mapStateToProps, null)(LanguageDropdown);
