import React, { useEffect, useMemo, useState } from "react";

/**
 * Custom hook for managing table filters, search, and pagination.
 * @param {Object[]}datas - The data to be filtered and paginated.
 * @param {number}currentPage - The current active page number.
 * @param {function} setCurrentPage - The function to update the current page number.
 * @returns {Object} - The filter tools, filtered data, page number, and a function to handle changes to the filters.
 */

const useManageFilter = ({ datas, currentPage, setCurrentPage }) => {
  const [filterTools, setFilterTools] = useState({
    updownselected: null,
    updown: null,
    header: null,
    searchbar: "",
    entries: 10,
  });
  //set the number of pages
  const [pageNumber, setPageNumber] = useState(
    Math.ceil(datas.length / filterTools.entries)
  );

  //set current page at 1 when whe use searchbar or change entries
  useEffect(() => {
    setCurrentPage(1);
  }, [filterTools.searchbar, filterTools.entries, setCurrentPage]);

  const filteredData = useMemo(() => {
    let filtered = datas.filter((el) =>
      Object.values(el).some((value) =>
        value.toLowerCase().includes(filterTools.searchbar.toLowerCase())
      )
    );
    //change the number of page when we use search bar
    setPageNumber(Math.ceil(filtered.length / filterTools.entries));

    if (filterTools.header) {
      const { header, updown } = filterTools;
      const direction = updown ? 1 : -1;
      filtered = filtered.sort((a, b) => {
        return a[header].localeCompare(b[header]) * direction;
      });
    }
    const startIndex = (currentPage - 1) * filterTools.entries;
    const endIndex = currentPage * filterTools.entries;
    filtered = filtered.slice(startIndex, endIndex);

    return filtered;
  }, [datas, filterTools, currentPage]);

  const handleChange = (updates) => {
    setFilterTools((prev) => ({ ...prev, ...updates }));
  };

  return { filterTools, filteredData, pageNumber, handleChange };
};

export default useManageFilter;
