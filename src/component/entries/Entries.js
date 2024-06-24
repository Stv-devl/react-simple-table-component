import React from "react";
import Dropdown from "../dropdown/Dropdown";

/**
 * Entries component
 * Renders a dropdown for selecting the number of entries to display in a table.
 * @param {Object} filterTools - The filter tools object containing the current number of entries.
 * @param {function} handleChange - The function to handle changes to the dropdown selection.
 * @returns {JSX.Element} - The Entries component.
 */
const Entries = ({ filterTools, entriesArray, handleChange, entriesInput }) => {
  return (
    <div className="entry-container">
      <div className="dropdown">
        <Dropdown
          labelText="Show :"
          name="entries"
          entriesArray={entriesArray}
          value={filterTools.entries}
          handleChange={handleChange}
          entriesInput={entriesInput}
        />
      </div>
    </div>
  );
};

export default Entries;
