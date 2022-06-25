import React from "react";
import Error from "./Error";
function Table({ data }) {
  return (
    <div>
      {!data ||
        (data.length === 0 && (
          <Error message="Failed to load" item="Education Information" />
        ))}
      {data.length >= 1 && (
        <table className="ui unstackable selectable celled table">
          <thead>
            <tr>
              <th>SNO</th>
              <th>Year</th>
              <th>Institution</th>
              <th>Award</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {/* <a className="ui right corner label">Inprogress</a> */}
                <td data-label="id">{index + 1}</td>
                <td data-label="Year">{row.year}</td>
                <td dat-label="school">{row.school}</td>
                <td dat-label="award">{row.award}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
