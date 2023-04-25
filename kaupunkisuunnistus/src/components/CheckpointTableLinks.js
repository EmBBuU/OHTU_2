/* Main author: Atte Tanskanen */
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import checkpointService from "../services/checkpoints";

// THIS PAGE IS ONLY VISIBLE TO USERS WHO HAVE LOGGED IN!

const CheckpointTableLinks = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    checkpointService.getAll().then((initialCheckpoints) => {
      setLocations(initialCheckpoints);
    });
  }, []);

  /*
  useEffect(() => {
    axios.get("http://localhost:3002/api/locations").then((response) => {
      setLocations(response.data);
    });
  }, []);
  */

  return (
    <div className="CheckpointTableLinks">
      <table>
        <tbody>
          <tr>
            <th>RASTI NRO</th>
            <th>RASTIN NIMI</th>
          </tr>
          {locations.map((location, key) => {
            return (
              <tr key={key}>
                <td>
                  <Link to={`/GivePoints/${location._id}`}>{key + 1}</Link>
                </td>
                <td>
                  <Link to={`/GivePoints/${location._id}`}>
                    {location.name}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CheckpointTableLinks;
