import React, { useCallback, useEffect, useMemo, useState } from 'react';

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
    upselected: null,
    headername: null,
    searchbar: '',
    entries: 10,
  });

  //filter table with searchbar, sort with up and down,
  const filteredData = useMemo(() => {
    let filtered = datas;
    if (filterTools.searchbar) {
      filtered = filtered.filter((el) =>
        Object.values(el).some((value) =>
          String(value)
            .toLowerCase()
            .includes(filterTools.searchbar.toLowerCase())
        )
      );
    }
    if (filterTools.headername) {
      const { headername, upselected } = filterTools;
      const direction = upselected ? 1 : -1;
      filtered = [...filtered].sort((a, b) => {
        return (
          String(a[headername]).localeCompare(String(b[headername])) * direction
        );
      });
    }
    return filtered;
  }, [datas, filterTools]);

  //calculate the number of pages
  const pageNumber = useMemo(() => {
    return Math.ceil(filteredData.length / filterTools.entries);
  }, [filteredData.length, filterTools.entries]);

  //update current page and pagination on filter changes (go back to page 1)
  useEffect(() => {
    setCurrentPage(1);
  }, [filterTools.searchbar, filterTools.entries, setCurrentPage]);

  //data display on page
  const displayData = useMemo(() => {
    const startIndex = (currentPage - 1) * filterTools.entries;
    const endIndex = currentPage * filterTools.entries;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, filterTools.entries, currentPage]);

  //change filtertools states
  const handleChange = useCallback((updates) => {
    setFilterTools((prev) => ({ ...prev, ...updates }));
  }, []);

  return { filterTools, filteredData: displayData, pageNumber, handleChange };
};

export default useManageFilter;
