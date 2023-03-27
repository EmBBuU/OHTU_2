import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// THIS PAGE IS ONLY VISIBLE TO USERS WHO HAVE LOGGED IN!

const CheckpointTableLinks = () => {
  const [locations, setLocations] = useState([]);

  //The link the user clicks is sent to console.log() as message (checkpoint id or name).
  const linkClickHandler = (event, message) => {
    console.log("Klikattu linkki: ", message);
    setClicked(message);
  };

  useEffect(() => {
    axios.get("http://localhost:3002/api/locations").then((response) => {
      setLocations(response.data);
    });
  }, []);

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
                  <Link
                    onClick={(event) => linkClickHandler(event, key + 1)}
                    to={"/GivePoints"}
                  >
                    {key + 1}
                  </Link>
                </td>
                <td>
                  <Link
                    onClick={(event) => linkClickHandler(event, location.name)}
                    to={"/GivePoints"}
                  >
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

/*
<Link to={"/GivePoints"}>{key + 1}</Link>
<Link to={"/GivePoints"}>{location.name}</Link>
*/

export default CheckpointTableLinks;
