import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// THIS PAGE IS ONLY VISIBLE TO USERS WHO HAVE LOGGED IN!

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
        <tbody>
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
        </tbody>
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
