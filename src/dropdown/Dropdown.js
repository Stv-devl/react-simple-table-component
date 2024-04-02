import React from "react";

const Dropdown = ({ labelText, name, value, setEntrieValue }) => {
  const optionChoice = ["10", "25", "50", "100"];

  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{labelText}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => setEntrieValue(e.target.value)}
      >
        {optionChoice.map((option, index) => (
          <option key={`${option}${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
