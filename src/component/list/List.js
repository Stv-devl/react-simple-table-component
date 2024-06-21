import React, { useState } from "react";
import FilterTopOrUp from "../filterTopOrUp/FilterTopOrUp";
import styles from "../../styles/index.module.scss";

const List = ({ legend, datas, filterTools, handleChange }) => {
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(null);

  const handleSelectFilter = (index) => {
    if (selectedFilterIndex === index) {
      handleChange({ updown: !filterTools.updown });
    } else {
      setSelectedFilterIndex(index);
      handleChange({
        updownselected: true,
        updown: true,
        legend: legend.map((legend) => legend.name)[index],
      });
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {legend.map((item, index) => (
            <th className={styles.legend} key={index}>
              <div className={styles.thwrapper}>
                <p>{item.label}</p>
                <FilterTopOrUp
                  isSelected={selectedFilterIndex === index}
                  upDownValue={filterTools.updown}
                  onSelect={handleSelectFilter}
                  index={index}
                />
              </div>
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
