import React from "react";
import classNames from "classnames";

class LanguageItem extends React.Component {
  onLanguageSelect = () => {
    this.props.onLanguageSelect(this.props.language);
  };
  render() {
    const { language } = this.props;
    return (
      <span onClick={this.onLanguageSelect}>
        <img
          src="assets/img/blank.gif"
          className={classNames(["flag", "flag-" + language.key])}
          alt={language.alt}
        />
        &nbsp;
        {language.title}
      </span>
    );
  }
}

export default LanguageItem;
