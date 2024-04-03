import React from "react";
import Dropdown from "../dropdown/Dropdown";

const Entries = ({ filterData, handleChange }) => {
  return (
    <div className="entry-container">
      <div className="dropdown">
        <Dropdown
          labelText="Show"
          name="entries"
          value={filterData.entries}
          handleChange={handleChange}
        />
      </div>
      <span>entries</span>
    </div>
  );
};

export default Entries;
