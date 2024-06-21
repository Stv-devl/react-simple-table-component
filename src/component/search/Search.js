import React from "react";
import Input from "../input/Input";

/**
 * Search component
 * Renders a search bar for filtering table data.
 * @param {Object} filterTools - The filter tools object containing the search bar value.
 * @param {function} handleChange - The function to handle changes to the search input.
 * @returns {JSX.Element} - The Search component.
 */

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
