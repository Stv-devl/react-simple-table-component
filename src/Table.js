import React, { useCallback, useState } from "react";
import Entries from "./component/entries/Entries";
import List from "./component/list/List";
import Paging from "./component/paging/Paging";
import Search from "./component/search/Search";
import ShowEntries from "./component/showentries/ShowEntries";
import useManageFilter from "./hook/useManageFilter";

const Table = ({ datas, legend, maxButtons, middleButtons }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { filterTools, filteredData, handleChange } = useManageFilter({
    datas,
    currentPage,
  });

  //send current page to filter hook
  const pageNumber = Math.ceil(datas.length / filterTools.entries); //number of page
  const changePage = useCallback((newpage) => {
    setCurrentPage(newpage);
  }, []);

  return (
    <div className="table-container">
      <h1>Current Employees</h1>
      <div className="table-header">
        <Entries filterTools={filterTools} handleChange={handleChange} />
        <Search filterTools={filterTools} handleChange={handleChange} />
      </div>
      <List
        datas={filteredData}
        legend={legend}
        filterTools={filterTools}
        handleChange={handleChange}
      />
      <div className="table-footer">
        <ShowEntries datas={datas} filterTools={filterTools} />
        <Paging
          pageNumber={pageNumber}
          currentPage={currentPage}
          changePage={changePage}
          maxButtons={maxButtons}
          middleButtons={middleButtons}
        />
      </div>
    </div>
  );
};

export default Table;
