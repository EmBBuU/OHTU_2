import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

const CheckpointTableLinks = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/locations").then((response) => {
      setLocations(response.data);
    });
  }, []);

  const pointsLink = "/GivePoints";
  return (
    <div className="CheckpointTableLinks">
      <table>
        <tr>
          <th>RASTI NRO</th>
          <th>RASTIN NIMI</th>
        </tr>
        {locations.map((location, key) => {
          return (
            <tr key={key}>
              <td>
                <Link to={pointsLink}>{key + 1}</Link>
              </td>
              <td>
                <Link to={pointsLink}>{location.name}</Link>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

/*
<button>
    <Link to="/GivePoints">Rasti {key + 1}</Link>
</button>
*/

export default CheckpointTableLinks;
