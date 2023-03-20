import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const GivePoints = () => {
  const [teams, setTeams] = useState([]);
  const [counter, setCounter]=useState(0);

  useEffect(() => {
    axios.get("http://localhost:3002/api/teams").then((response) => {
      setTeams(response.data);
    });
  }, []);

  return (
    // useRef -> Minkä rastin pisteitä ollaan antamassa!! väliaikaisesti näkyvissä conterina, mutta alempana määritetty ns "oikea tapa"
    <div className="givepoints">
      <b>Anna ryhmille rastikohtaiset pisteet </b>
      <h1>RASTIN NIMI</h1>
      <div>{counter}</div>
      <table>
        <tr>
          <th>RYHMÄN NIMI</th>
          <th>RYHMÄN PISTEET RASTILTA</th>
          <th><button onClick={() => setCounter(counter + 1)}>
                   +
                </button>
                <button onClick={() => setCounter(counter - 1)}>
                   -
                </button></th>
        </tr>
        {teams
          // Tähän kohtaan kaipaisi .sort -metodia, että saataisiin joukkueet lajiteltua pisteiden mukaan.
          .map((team, key) => {
            return (
              <tr key={key}>
                <td>{team.name}</td>
                <td>{team.points}</td>
                <td><button onClick={() => setTeams(team.points + 1)}>
                   +
                   </button></td>
                <td><button onClick={() => setTeams(team.points- 1)}>
                   -
                </button></td>
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
