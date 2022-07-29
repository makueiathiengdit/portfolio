import React from "react";

function StackTable({ data = [] }) {
  let testData = [
    { frontend: "HTML", backend: "PHP", general: "C" },
    { frontend: "CSS", backend: "MySQL", general: "C++" },
    { frontend: "JS", backend: "", general: "Python" },
    { frontend: "ReactJS", backend: "", general: "" },
  ];
  return (
    <>
      <table className="ui unstackable selectable celled table">
        <thead>
          <tr>
            <th>SNO</th>
            <th>Frontend</th>
            <th>Backend</th>
            <th>General Programming</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((row, i) => (
            <tr key={i}>
              <td data-label="index">{i + 1}</td>
              <td data-label="frontedn">{row.frontend}</td>
              <td data-label="backend">{row.backend}</td>
              <td data-label="general">{row.general}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default StackTable;
