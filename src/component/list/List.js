import React, { useState } from "react";
import FilterTopOrUp from "../filterTopOrUp/FilterTopOrUp";

const List = ({ legend, datas, filterData, handleChange }) => {
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(null);

  const handleSelectFilter = (index) => {
    if (selectedFilterIndex === index) {
      handleChange({ updown: !filterData.updown });
    } else {
      setSelectedFilterIndex(index);
      handleChange({ updownselected: true, updown: true });
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {legend.map((item, index) => (
            <th key={index}>
              {item.label}
              <FilterTopOrUp
                isSelected={selectedFilterIndex === index}
                upDownValue={filterData.updown}
                onSelect={handleSelectFilter}
                index={index}
              />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datas.map((worker, index) => (
          <tr key={index}>
            {legend.map((item, idx) => (
              <td key={idx}>{worker[item.name]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
