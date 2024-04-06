import React from "react";

const ShowEntries = ({ datas, filterTools }) => {
  return (
    <div className="showing-entries">
      showing 1 to <span className="entries-number">{filterTools.entries}</span>{" "}
      of <span className="total-entries">{datas.length}</span> entries
    </div>
  );
};

export default ShowEntries;
