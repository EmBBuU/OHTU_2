import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const GivePoints = () => {
  const [teams, setTeams] = useState([]);
  const [counter, setCounter] = useState(0);

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
      <table>
        <tr>
          <th>RYHMÄN NIMI</th>
          <th>RYHMÄN PISTEET RASTILTA</th>
        </tr>
        {teams.map((team, key) => {
          return (
            <tr key={key}>
              <td>{team.name}</td>
              <td>
                <button
                  className="btnGivepoints"
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </button>
                {counter}
                <button
                  className="btnGivepoints"
                  onClick={() => setCounter(counter - 1)}
                >
                  -
                </button>
              </td>
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

/*
                <td>
                  <button className="btnGivepoints" onClick={() => setCounter(counter + 1)}>+</button>
                  {counter}
                  <button className="btnGivepoints" onClick={() => setCounter(counter - 1)}>-</button>
                </td>
*/
