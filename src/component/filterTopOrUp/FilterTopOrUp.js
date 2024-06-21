import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/index.module.scss";

/**
 * FilterTopOrUp component
 * Renders icons for sorting, indicating the current sort direction and selection status.
 * @param {boolean} isSelected - Indicates if the current column is selected for sorting.
 * @param {boolean} upDownValue - Indicates the current sort direction (true for ascending, false for descending).
 * @param {function} onSelect - The function to handle selection of the column for sorting.
 * @param {number} index - The index of the column being rendered.
 * @returns {JSX.Element} - The FilterTopOrUp component.
 */

const FilterTopOrUp = ({ isSelected, upDownValue, onSelect, index }) => {
  const handleClick = () => {
    onSelect(index);
  };

  return (
    <div className={styles.iconefilter} onClick={handleClick}>
      {isSelected ? (
        upDownValue ? (
          <FontAwesomeIcon icon={faSortUp} />
        ) : (
          <FontAwesomeIcon icon={faSortDown} />
        )
      ) : (
        <>
          <FontAwesomeIcon icon={faSortUp} className={styles.iconup} />
          <FontAwesomeIcon icon={faSortDown} className={styles.icondown} />
        </>
      )}
    </div>
  );
};

export default FilterTopOrUp;
