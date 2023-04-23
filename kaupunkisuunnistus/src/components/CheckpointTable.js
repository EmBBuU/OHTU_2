import React from "react";
import { useState, useEffect } from "react";
import checkpointService from "../services/checkpoints";
/* Main author of the page is Emilia Uurasjärvi*/

const CheckpointTable = () => {
  const [locations, setLocations] = useState([]);

  //retrieving data from checkpointService
  useEffect(() => {
    checkpointService.getAll().then((initialCheckpoints) => {
      setLocations(initialCheckpoints);
    });
  }, []);

  // Rendering the component
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
