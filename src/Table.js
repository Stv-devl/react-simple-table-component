import React, { useCallback, useEffect, useState } from "react";
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
 * @param {Object} arrayHeader - The header for the table columns.
 * @returns {JSX.Element} - The Table component.
 */

const Table = ({
  datas,
  arrayHeader,
  entriesArray,
  fontUrl,
  fontSetting,
  fontSizeText,
  fontWeightText,
  fontColorText,
  fontSizeThead,
  fontWeightThead,
  fontColorThead,
  fontSizePaging,
  fontWeightPaging,
  fontColorPaging,
  theadBackgroundColor,
  firstFieldColor,
  secondFieldColor,
  pagingColor,
  checkedBtn,
  arrayWidth,
  tdPadding,
  entriesInput,
  searchInput,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { filterTools, filteredData, pageNumber, handleChange } =
    useManageFilter({
      datas,
      currentPage,
      setCurrentPage,
    });

  // Get font link from user
  useEffect(() => {
    if (typeof document !== "undefined" && fontUrl) {
      const link = document.createElement("link");
      link.href = fontUrl;
      link.rel = "stylesheet";
      document.head.appendChild(link);
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [fontUrl]);

  // Set pagination number of button
  let maxButtons = 5;
  let middleButtons = 3;

  const style = {
    "--arrayWidth": arrayWidth,
    "--fontSetting": fontSetting,
    "--fontSizeText": fontSizeText,
    "--fontWeightText": fontWeightText,
    "--fontColorText": fontColorText,
    "--theadcolor": theadBackgroundColor,
    "--firstfieldcolor": firstFieldColor,
    "--secondfieldcolor": secondFieldColor,
    "--tdPadding": tdPadding,
  };

  /**
   * Changes the current page and updates the state.
   * @param {number} newPage - The new page number to set.
   */
  const changePage = useCallback((newPage) => {
    setCurrentPage(newPage);
  }, []);

  return (
    <div style={style} className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <Entries
          filterTools={filterTools}
          entriesArray={entriesArray}
          handleChange={handleChange}
          entriesInput={entriesInput}
        />
        <Search
          filterTools={filterTools}
          handleChange={handleChange}
          searchInput={searchInput}
        />
      </div>
      <List
        datas={filteredData}
        arrayHeader={arrayHeader}
        filterTools={filterTools}
        handleChange={handleChange}
        theadBackgroundColor={theadBackgroundColor}
        fontSizeThead={fontSizeThead}
        fontWeightThead={fontWeightThead}
        fontColorThead={fontColorThead}
        firstFieldColor={firstFieldColor}
        secondFieldColor={secondFieldColor}
        tdPadding={tdPadding}
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
          fontSizePaging={fontSizePaging}
          fontColorPaging={fontColorPaging}
          fontWeightPaging={fontWeightPaging}
        />
      </div>
    </div>
  );
};

export default Table;
