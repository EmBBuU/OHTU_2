import { useState, useEffect } from "react";
import teamService from "../services/teams";
import checkpointService from "../services/checkpoints";
/* Main author of the page Emilia Uurasjärvi, Jussi Kukkonen made the HTTP GET request and Atte Tanskanen brings chekpointName */

const GivePoints = () => {
  const [teams, setTeams] = useState([]);
  const [teamPoints, setTeamPoints] = useState([]);
  const [totalScore, setTotalScore] = useState([]);
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split("/");
  const checkpointName = urlParts[urlParts.length - 1];

  useEffect(() => {
    teamService.getAll().then((initialData) => {
      setTeams(initialData);
      setTotalScore(initialData);
      setTeamPoints(Array(initialData.length).fill(0));
    });
  }, []);

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

    teamService
      .update(id, { score: myScore })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="givepoints">
      <b>Anna ryhmille rastikohtaiset pisteet </b>
      <h1 className="checkpointAtGivepoints">{checkpointName}</h1>
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
        <a href="/SelectCheckpoint">TAKAISIN</a>
      </button>
    </div>
  );
};
export default GivePoints;
