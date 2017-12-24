import React from "react";
import classNames from "classnames";

const LanguageItem = ({ language }) => {
  return (
    <span>
      <img
        src="assets/img/blank.gif"
        className={classNames(["flag", "flag-" + language.key])}
        alt={language.alt}
      />
      &nbsp;
      {language.title}
    </span>
  );
};

export default LanguageItem;
