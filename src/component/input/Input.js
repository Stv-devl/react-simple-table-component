import React from "react";
import styles from "../../styles/index.module.scss";

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
