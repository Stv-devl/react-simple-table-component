import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

const FilterTopOrUp = ({ isSelected, upDownValue, onSelect, index }) => {
  const handleClick = () => {
    onSelect(index);
  };

  return (
    <div className="icone-filter" onClick={handleClick}>
      {isSelected ? (
        upDownValue ? (
          <FontAwesomeIcon icon={faSortUp} />
        ) : (
          <FontAwesomeIcon icon={faSortDown} />
        )
      ) : (
        <>
          <FontAwesomeIcon icon={faSortUp} />
          <FontAwesomeIcon icon={faSortDown} />
        </>
      )}
    </div>
  );
};

export default FilterTopOrUp;
