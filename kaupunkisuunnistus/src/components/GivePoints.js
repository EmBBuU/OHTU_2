import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const GivePoints = () => {
  const [teams, setTeams] = useState([]);
  const [teamPoints, setTeamPoints] = useState([]);

  //This useEffect sets up an effect that will be called every time the value of teams changes.
  //It sets teamPoints to an object with the keys being the names of each team and the values being 0.
  useEffect(() => {
    setTeamPoints(
      teams.reduce((acc, team) => ({ ...acc, [team.name]: 0 }), {})
    );
  }, [teams]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/teams").then((response) => {
      setTeams(response.data);
    });
  }, []);

  const addPoints = (event) => {
    const pointObject = {
      score: teamPoints,
    };

    axios
      .post("http://localhost:3002/api/teams", pointObject)
      .then((response) => {
        setTeamPoints(response.data);
        console.log(response);
      });
  };

  const handlePointsChange = (teamName, value) => {
    const newValue = parseInt(value);
    console.log(teamName);
    console.log(value);
    setTeamPoints({
      ...teamPoints,
      [teamName]: newValue,
    });
  };
  console.log(teamPoints);

  return (
    // useRef -> Minkä rastin pisteitä ollaan antamassa!!
    <div className="givepoints">
      <b>Anna ryhmille rastikohtaiset pisteet </b>
      <h1>RASTIN NIMI</h1>
      <table>
        <tbody>
          <tr>
            <th>RYHMÄN NIMI</th>
            <th>PISTEET RASTILTA</th>
            <th>PISTEET YHTEENSÄ</th>
          </tr>
          {teams.map((team, key) => {
            return (
              <tr key={key}>
                <td>{team.name}</td>
                <td>
                  <button
                    className="btnGivepoints"
                    onClick={() =>
                      handlePointsChange(
                        team.name,
                        (teamPoints[team.name] += 1)
                      )
                    }
                  >
                    +
                  </button>
                  {teamPoints[team.name]}
                  <button
                    className="btnGivepoints"
                    onClick={() =>
                      handlePointsChange(
                        team.name,
                        (teamPoints[team.name] -= 1)
                      )
                    }
                  >
                    -
                  </button>
                </td>
                <td>{team.score + teamPoints[team.name]}</td>
                {
                  // Virhe ilmo tulee kaiketi tuosta yläpuolen rivistä
                }
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="previous">
        <a href="/SelectCheckpoint">TAKAISIN</a>
      </button>
    </div>
  );
};
export default GivePoints;

//<td>{teamPoints[team.name] + team.score}</td>
// const [counter, setCounter] = useState(0);

/*
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
                */
/*
    const { name, value } = event.target;
    console.log(key);
    setTeamPoints({ ...teamPoints, [key]: value });
  };
*/
/*
  const handlePointsChange = (teamName, event) => {
    const copy = [...teamPoints];
    copy[teamName] = event;
    setTeamPoints(copy);
    console.log(event);
  };
  const handlePointsChange = (teamName, value) => {
    setTeamPoints({
      ...teamPoints,
      [teamName]: value,
    });
  };
  const handlePointsChange = (event) => {
    setTeamPoints(event.target.value);
  };
    const { name, value } = event.target;
    console.log(key);
    setTeamPoints({ ...teamPoints, [key]: value });
  };


  <button
                    onClick={() =>
                      addPoints(team.score + teamPoints[team.name])
                    }
                  >
                    OK
                  </button>
  */
