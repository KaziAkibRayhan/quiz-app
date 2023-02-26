import React from "react";

const ResultTable = () => {
  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          <tr className="table-body">
            <td>Write Code</td>
            <td>03</td>
            <td>20</td>
            <td>passed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
