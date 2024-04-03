import React from "react";
import Entries from "./component/entries/Entries";
import List from "./component/list/List";
import Paging from "./component/paging/Paging";
import Search from "./component/search/Search";
import ShowEntries from "./component/showentries/ShowEntries";
import useManageFilter from "./hook/useManageFilter";

const Table = ({ datas, legend }) => {
  const { filterData, handleChange } = useManageFilter(datas);

  return (
    <div className="table-container">
      <h1>Current Employees</h1>
      <div className="table-header">
        <Entries filterData={filterData} handleChange={handleChange} />
        <Search filterData={filterData} handleChange={handleChange} />
      </div>
      <List
        datas={datas}
        legend={legend}
        filterData={filterData}
        handleChange={handleChange}
      />
      <div className="table-footer">
        <ShowEntries />
        <Paging />
      </div>
    </div>
  );
};

export default Table;
