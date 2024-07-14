import React, { useCallback, useState } from 'react';
import FilterTopOrUp from '../filterTopOrUp/FilterTopOrUp';
import styles from '../../styles/index.module.scss';

/**
 * List component
 * Renders a table with sortable columns based on the provided legend and data.
 * @param {Object[]} legend - The legend defining the columns of the table.
 * @param {Object[]} datas - The data to be displayed in the table.
 * @param {Object} filterTools - The filter tools object containing the value of updown (if we filter up or down).
 * @param {function} handleChange - The function to handle changes to the filter settings.
 * @returns {JSX.Element} - The List component.
 */

const List = ({
  arrayHeader,
  datas,
  filterTools,
  handleChange,
  theadBackgroundColor,
  fontSizeThead,
  fontWeightThead,
  fontColorThead,
  firstFieldColor,
  secondFieldColor,
  tdPadding,
}) => {
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(null);

  const style = {
    '--theadcolor': theadBackgroundColor,
    '--firstfieldcolor': firstFieldColor,
    '--secondfieldcolor': secondFieldColor,
    '--fontSizeThead': fontSizeThead,
    '--fontWeightThead': fontWeightThead,
    '--fontColorThead': fontColorThead,
    '--tdPadding': tdPadding ? `${tdPadding.vh}px ${tdPadding.h}px` : '6px 8px',
  };

  /**
   * Handles selection of a column for sorting.
   * @param {number} index - The index of the selected column.
   */
  const handleSelectFilter = useCallback(
    (index) => {
      if (selectedFilterIndex === index) {
        handleChange({ upselected: !filterTools.upselected });
      } else {
        setSelectedFilterIndex(index);
        handleChange({
          updownselected: true,
          upselected: true,
          headername: arrayHeader.map((header) => header.name)[index],
        });
      }
    },
    [selectedFilterIndex, filterTools, handleChange, arrayHeader]
  );

  return (
    <table>
      <thead style={style}>
        <tr>
          {arrayHeader.map((item, index) => (
            <th className={styles.header} key={index}>
              <div className={styles.thwrapper}>
                <p>{item.label}</p>
                <FilterTopOrUp
                  isSelected={selectedFilterIndex === index}
                  upselected={filterTools.upselected}
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
          <tr style={style} key={index}>
            {arrayHeader.map((item, idx) => (
              <td key={idx}>{worker[item.name]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
