import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";

const Entries = () => {
  const [entrieValue, setEntrieValue] = useState("10");

  return (
    <div className="entry-container">
      <div className="dropdown">
        <Dropdown
          labelText="Show"
          name="entries"
          value={entrieValue}
          setEntrieValue={setEntrieValue}
        />
      </div>
      <span>entries</span>
    </div>
  );
};

export default Entries;
