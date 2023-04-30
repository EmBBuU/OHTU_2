import { useState, useEffect } from "react";
import teamService from "../services/teams";
import checkpointService from "../services/checkpoints";
import { Link } from "react-router-dom";
/* Main author of the page Emilia Uurasjärvi, Jussi Kukkonen made the HTTP GET request and Atte Tanskanen brings chekpointName */

const GivePoints = () => {
  const [teams, setTeams] = useState([]);
  const [teamPoints, setTeamPoints] = useState([]);
  const [totalScore, setTotalScore] = useState([]);
  const [locations, setLocations] = useState([]);
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split("/");
  const checkpointId = urlParts[urlParts.length - 1];
  const [checkpoints, setChekpoints] = useState([]);

  //retrieving data from checkpointService
  useEffect(() => {
    checkpointService.getAll().then((initialCheckpoints) => {
      setLocations(initialCheckpoints);
      setChekpoints(initialCheckpoints);
    });
  }, []);

  //retrieving data from teamService
  useEffect(() => {
    teamService.getAll().then((initialData) => {
      setTeams(initialData);
      setTotalScore(initialData);
      setTeamPoints(Array(initialData.length).fill(0));
    });
  }, []);

  //what checkpoint is being scored
  const chosenCheckpoint = locations.find(
    (location) => location._id === checkpointId
  );
  const chosenCheckpointName = chosenCheckpoint
    ? chosenCheckpoint.name
    : undefined;

  /*initialize the checkpoint-specific scores
  const numberOfTeams = teams.length;
  const numberOfCheckpoints = checkpoints.length;

  const checkpointScores = new Array(numberOfTeams).fill(0);
  const scores = checkpoints.map((checkpoint) => ({
    name: checkpoint.name,
    scores: [...checkpointScores],
  }));
  console.log(scores);
  */

  //the functionality of the plus and minus button
  const handlePoints = (teamName, id, index, value) => {
    const newTeamPoints = [...teamPoints];
    newTeamPoints[index] += value;
    setTeamPoints(newTeamPoints);

    setTotalScore(
      totalScore.map((team) => {
        if (team.name === teamName) {
          return {
            ...team,
            score: team.score + value,
          };
        } else {
          return team;
        }
      })
    );
    const myTeam = totalScore.find((obj) => obj.name === teamName);
    const myScore = myTeam.score + value;

    teamService
      .update(id, { score: myScore })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  /*
        axios
          .put(`http://localhost:3002/api/teams/${id}`, { score: myScore })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
    */

  // Rendering the table of teams and points, allowing for editing the points
  return (
    <div className="givepoints">
      <b>Anna ryhmille rastikohtaiset pisteet </b>
      <h1 className="checkpointAtGivepoints">{chosenCheckpointName}</h1>
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
                    onClick={() => handlePoints(team.name, team._id, key, -1)}
                  >
                    -
                  </button>
                  {teamPoints[key]}
                  <button
                    className="btnGivepoints"
                    onClick={() => handlePoints(team.name, team._id, key, +1)}
                  >
                    +
                  </button>
                </td>
                <td>{totalScore.find((t) => t.name === team.name)?.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="previous">
        <Link to="/LoggedInMenu">TAKAISIN</Link>
      </button>
    </div>
  );
};
export default GivePoints;
