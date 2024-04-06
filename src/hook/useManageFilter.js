import React, { useMemo, useState } from "react";

const useManageFilter = (datas, currentPage) => {
  const [filterTools, setFilterTools] = useState({
    updownselected: null,
    updown: null,
    legend: null,
    searchbar: "",
    entries: 10,
    currentpage: 1,
  });

  const filteredData = useMemo(() => {
    let filtered = datas.slice(0, filterTools.entries);

    filtered = datas
      .filter((el) =>
        Object.values(el).some((value) =>
          value.toLowerCase().includes(filterTools.searchbar.toLowerCase())
        )
      )
      .slice(0, filterTools.entries);
    if (filterTools.legend) {
      const { legend, updown } = filterTools;
      const direction = updown ? 1 : -1;
      filtered = filtered.sort((a, b) => {
        return a[legend].localeCompare(b[legend]) * direction;
      });
    }
    return filtered;
  }, [datas, filterTools]);

  const handleChange = (updates) => {
    setFilterTools((prev) => ({ ...prev, ...updates }));
  };

  return { filterTools, filteredData, handleChange };
};

export default useManageFilter;