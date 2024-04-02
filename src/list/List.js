import React from "react";

const List = ({ legend, datas }) => {
  return (
    <table>
      <thead>
        <tr>
          {legend.map((item, index) => (
            <th key={index}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datas.map((worker, index) => (
          <tr key={index}>
            {legend.map((item, idx) => (
              <td key={idx}>{worker[item.name]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
