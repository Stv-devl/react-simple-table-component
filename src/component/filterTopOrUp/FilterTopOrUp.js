import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/index.module.scss";

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
