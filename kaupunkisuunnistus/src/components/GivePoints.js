import React from "react";
<<<<<<< HEAD
import Button from "./Button";
import ScoreTable from "./ScoreTable";


const GivePoints = () =>{
  const [ counter, setCounter ] = React.useState(0)

  return (
    <div>
    <div>{counter}</div>
    <div>
      <button onClick={() => setCounter(counter + 1)}>
      +
      </button>
      <button onClick={() => setCounter(counter-1)}> 
      -
      </button>
      </div>
      <div>
        <h1>RASTI NRO X</h1>
      </div>
      <div>
        <ScoreTable />
      </div>
    </div>
  );
}


=======
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
        <a href="/SelectCheckpoint">EDELLINEN</a>
      </button>
    </div>
  );
};
>>>>>>> 8439f2378a76fdb4a91307f8fc481a69c5e346bb
export default GivePoints;
