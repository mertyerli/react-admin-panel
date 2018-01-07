import React from "react";
import { connect } from "react-redux";
import { Localizer } from "../../i18n/Msg";

class SearchField extends React.Component {
  render() {
    let i18n = Localizer.get("SearchField", this.props.activeLanguage.key);
    console.log(i18n);
    // "Find reports and more"
    return (
      <form action="search.html" className="header-search pull-right">
        <input
          id="search-fld"
          type="text"
          name="param"
          placeholder={i18n.search_fld.placeholder}
        />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
        <a href="" id="cancel-search-js" title="Cancel Search">
          <i className="fa fa-times" />
        </a>
      </form>
    );
  }
}

function mapStateToProps({ activeLanguage }) {
  return { activeLanguage };
}
export default connect(mapStateToProps, null)(SearchField);
