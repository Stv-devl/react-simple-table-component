import React from "react";
import styles from "../../styles/index.module.scss";

const Dropdown = ({ labelText, name, value, handleChange }) => {
  const optionChoice = [10, 25, 50, 100];

  return (
    <div className={styles.tableinputwrapper}>
      <label className="table-label" htmlFor={name}>
        {labelText}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => handleChange({ entries: e.target.value })}
        className={styles.dropdown}
      >
        {optionChoice.map((option, index) => (
          <option key={`${option}${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span>entries</span>
    </div>
  );
};

export default Dropdown;
