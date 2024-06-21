import React, { useCallback, useState } from "react";
import Entries from "./component/entries/Entries";
import List from "./component/list/List";
import Paging from "./component/paging/Paging";
import Search from "./component/search/Search";
import ShowEntries from "./component/showentries/ShowEntries";
import useManageFilter from "./hook/useManageFilter";
import styles from "./styles/index.module.scss";

/**
 * Table component
 * Renders a table with pagination, search, and filter functionalities.
 * @param {Object[]} datas - The data to be displayed in the table.
 * @param {Object} legend - The legend for the table columns.
 * @returns {JSX.Element} - The Table component.
 */

const Table = ({
  datas,
  legend,
  theadColor,
  firstFieldColor,
  secondFieldColor,
  pagingColor,
  checkedBtn,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { filterTools, filteredData, pageNumber, handleChange } =
    useManageFilter({
      datas,
      currentPage,
      setCurrentPage,
    });

  //set pagination number of button
  let maxButtons = 5;
  let middleButtons = 3;

  /**
   * Changes the current page and updates the state.
   * @param {number} newPage - The new page number to set.
   */
  const changePage = useCallback((newpage) => {
    setCurrentPage(newpage);
  }, []);

  return (
    <div className={styles.tableContainer}>
      <p className={styles.tableTitle}>Current Employees :</p>
      <div className={styles.tableHeader}>
        <Entries filterTools={filterTools} handleChange={handleChange} />
        <Search filterTools={filterTools} handleChange={handleChange} />
      </div>
      <List
        datas={filteredData}
        legend={legend}
        filterTools={filterTools}
        handleChange={handleChange}
        theadColor={theadColor}
        firstFieldColor={firstFieldColor}
        secondFieldColor={secondFieldColor}
      />
      <div className={styles.tableFooter}>
        <ShowEntries
          totalEntries={datas.length}
          pageNumber={currentPage}
          entriesPerPage={filterTools.entries}
        />
        <Paging
          pageNumber={pageNumber}
          currentPage={currentPage}
          changePage={changePage}
          maxButtons={maxButtons}
          middleButtons={middleButtons}
          pagingColor={pagingColor}
          checkedBtn={checkedBtn}
        />
      </div>
    </div>
  );
};

export default Table;
