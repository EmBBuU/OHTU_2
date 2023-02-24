import React from "react";

// Example of a data array that you might receive from an API
const data = [
  { number: 1, place: "Tiedepuiston kenttä" },
  { number: 2, place: "Kirkkopuisto" },
  { number: 3, place: "Suvantosilta" },
  { number: 4, place: "Torisusi" },
  { number: 5, place: "Tori" },
  { number: 6, place: "jne jne..." },
];

const CheckpointTable = () => {
  return (
    <div className="CheckpointTable">
      <table>
        <tr>
          <th>RASTI NRO</th>
          <th>RASTIN NIMI</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.number}</td>
              <td>{val.place}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default CheckpointTable;
