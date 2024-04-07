import React, { useMemo, useState } from "react";

const useManageFilter = ({ datas, currentPage }) => {
  const [filterTools, setFilterTools] = useState({
    updownselected: null,
    updown: null,
    legend: null,
    searchbar: "",
    entries: 10,
  });

  const filteredData = useMemo(() => {
    let filtered;
    filtered = datas
      .filter((el) =>
        Object.values(el).some((value) =>
          value.toLowerCase().includes(filterTools.searchbar.toLowerCase())
        )
      )
      .slice(
        currentPage * filterTools.entries - filterTools.entries,
        currentPage * filterTools.entries
      );
    if (filterTools.legend) {
      const { legend, updown } = filterTools;
      const direction = updown ? 1 : -1;
      filtered = filtered.sort((a, b) => {
        return a[legend].localeCompare(b[legend]) * direction;
      });
    }
    return filtered;
  }, [datas, filterTools, currentPage]);

  const handleChange = (updates) => {
    setFilterTools((prev) => ({ ...prev, ...updates }));
  };

  console.log(filteredData);

  return { filterTools, filteredData, handleChange };
};

export default useManageFilter;
