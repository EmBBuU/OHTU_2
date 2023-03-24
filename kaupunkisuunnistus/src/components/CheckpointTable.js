import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

/*
// Example of a data array that you might receive from an API
const data = [
  { number: 1, place: "Tiedepuiston kenttä" },
  { number: 2, place: "Kirkkopuisto" },
  { number: 3, place: "Suvantosilta" },
  { number: 4, place: "Torisusi" },
  { number: 5, place: "Tori" },
  { number: 6, place: "jne jne..." },
];
*/

const CheckpointTable = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/locations").then((response) => {
      setLocations(response.data);
    });
  }, []);

  return (
    <div className="CheckpointTable">
      <table>
        <tbody>
          <tr>
            <th>RASTI NRO</th>
            <th>RASTIN NIMI</th>
          </tr>
          {locations.map((location, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{location.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CheckpointTable;
