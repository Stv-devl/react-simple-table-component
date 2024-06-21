import React from "react";
import Dropdown from "../dropdown/Dropdown";

/**
 * Entries component
 * Renders a dropdown for selecting the number of entries to display in a table.
 * @param {Object} filterTools - The filter tools object containing the current number of entries.
 * @param {function} handleChange - The function to handle changes to the dropdown selection.
 * @returns {JSX.Element} - The Entries component.
 */
const Entries = ({ filterTools, handleChange }) => {
  return (
    <div className="entry-container">
      <div className="dropdown">
        <Dropdown
          labelText="Show :"
          name="entries"
          value={filterTools.entries}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Entries;
