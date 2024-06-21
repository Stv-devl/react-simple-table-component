import React from "react";
import Input from "../input/Input";

const Search = ({ filterTools, handleChange }) => {
  return (
    <div className="search-bar-container">
      <Input
        name="search"
        labelText="Search :"
        value={filterTools.searchbar}
        handleChange={handleChange}
        placeholder="Type your search"
      />
    </div>
  );
};

export default Search;
