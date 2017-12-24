import React from "react";

const SearchField = () => {
  return (
    <form action="search.html" className="header-search pull-right">
      <input
        id="search-fld"
        type="text"
        name="param"
        placeholder="Find reports and more"
      />
      <button type="submit">
        <i className="fa fa-search" />
      </button>
      <a href="" id="cancel-search-js" title="Cancel Search">
        <i className="fa fa-times" />
      </a>
    </form>
  );
};

export default SearchField;
