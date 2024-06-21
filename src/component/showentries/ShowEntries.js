import React from "react";

/**
 * ShowEntries component
 * Displays the range of entries currently being shown in the table.
 * @param {number} totalEntries - The total number of entries available.
 * @param {number} pageNumber - The current active page number.
 * @param {number} entriesPerPage - The number of entries displayed per page.
 * @returns {JSX.Element} - The ShowEntries component.
 */

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
