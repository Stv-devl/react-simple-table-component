import React, { useState } from "react";

const useManageFilter = (datas) => {
  const [filterData, setFilterData] = useState({
    updownselected: null,
    updown: false,
    searchbar: "",
    entries: "10",
  });

  const handleChange = (updates) => {
    setFilterData((prevFormData) => ({
      ...prevFormData,
      ...updates,
    }));
  };

  return { filterData, handleChange };
};

export default useManageFilter;
