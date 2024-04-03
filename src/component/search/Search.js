import React from "react";
import Input from "../input/Input";

const Search = ({ filterData, handleChange }) => {
  return (
    <div className="search-bar-container">
      <Input
        name="search"
        labelText="Search"
        value={filterData.searchbar}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Search;
