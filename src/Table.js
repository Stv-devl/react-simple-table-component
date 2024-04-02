import React from "react";
import Entries from "./entries/Entries";
import List from "./list/List";
import Paging from "./paging/Paging";
import Search from "./search/Search";
import ShowEntries from "./showentries/ShowEntries";

const Table = ({ datas, legend }) => {
  return (
    <div className="table-container">
      <h1>Current Employees</h1>
      <div className="table-header">
        <Entries />
        <Search />
      </div>
      <List datas={datas} legend={legend} />
      <div className="table-footer">
        <ShowEntries />
        <Paging />
      </div>
    </div>
  );
};

export default Table;
