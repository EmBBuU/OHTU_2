import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const GivePoints = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/teams").then((response) => {
      setTeams(response.data);
    });
  }, []);

  return (
    // useRef -> Minkä rastin pisteitä ollaan antamassa!!
    <div className="givepoints">
      <b>Anna ryhmille rastikohtaiset pisteet </b>
      <h1>RASTIN NIMI</h1>
      <table>
        <tr>
          <th>RYHMÄN NIMI</th>
          <th>RYHMÄN PISTEET RASTILTA</th>
        </tr>
        {teams
          // Tähän kohtaan kaipaisi .sort -metodia, että saataisiin joukkueet lajiteltua pisteiden mukaan.
          .map((team, key) => {
            return (
              <tr key={key}>
                <td>{team.name}</td>
                <td>{team.points}</td>
              </tr>
              //Tuohon team.point -muuttujaan menis ne napeilla annetut pisteet!!!
            );
          })}
      </table>
      <button className="previous">
        <a href="/SelectCheckpoint">TAKAISIN</a>
      </button>
    </div>
  );
};
export default GivePoints;
