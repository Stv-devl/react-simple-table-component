import React from "react";

const ShowEntries = ({ totalEntries, pageNumber, entriesPerPage }) => {
  const startEntry = (pageNumber - 1) * entriesPerPage + 1;
  let endEntry = pageNumber * entriesPerPage;
  endEntry = endEntry > totalEntries ? totalEntries : endEntry;

  return (
    <div className="showing-entries">
      Showing {startEntry} to <span className="entries-number">{endEntry}</span>{" "}
      of <span className="total-entries">{totalEntries}</span> entries
    </div>
  );
};

export default ShowEntries;
