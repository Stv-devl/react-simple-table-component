import React from "react";
import styles from "../../styles/index.module.scss";

/**
 * Input component
 * Renders an input field with a label and handles changes to the input value.
 * @param {string} name - The name of the input.
 * @param {string} labelText - The label text for the input.
 * @param {string} value - The current value of the input.
 * @param {function} handleChange - The function to handle changes to the input value.
 * @param {string} placeholder - The placeholder text for the input.
 * @returns {JSX.Element} - The Input component.
 */

const Input = ({ name, labelText, value, handleChange, placeholder }) => {
  return (
    <div className={styles.inputwrapper}>
      <label htmlFor={name}>{labelText}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={(e) => handleChange({ searchbar: e.target.value })}
        placeholder={placeholder}
        className={styles.forminput}
      />
    </div>
  );
};

export default Input;
