import { useState, useEffect } from "react";
import teamService from "../services/teams"
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
      setTeams(initialData)
      setTotalScore(initialData);
      setTeamPoints(Array(initialData.length).fill(0));
    })
  }, [])

  /*
  useEffect(() => {
    axios.get("http://localhost:3002/api/teams").then((response) => {
      setTeams(response.data);
      setTotalScore(response.data);
      setTeamPoints(Array(response.data.length).fill(0));
    });
  }, []);
  */

  const handlePointsPlus = (teamName, id, index) => {
    const newTeamPoints = [...teamPoints];
    newTeamPoints[index] += 1;
    setTeamPoints(newTeamPoints);

    setTotalScore(
      totalScore.map((team) => {
        if (team.name === teamName) {
          return {
            ...team,
            score: team.score + 1,
          };
        } else {
          return team;
        }
      })
    );
    const myTeam = totalScore.find((obj) => obj.name === teamName);
    const myScore = myTeam.score + 1;
    console.log(myScore, "myScore");

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

          teamService.update(id, { score: myScore })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      };

  const handlePointsMinus = (teamName, id, index) => {
    const newTeamPoints = [...teamPoints];
    newTeamPoints[index] -= 1;
    setTeamPoints(newTeamPoints);

    setTotalScore(
      totalScore.map((team) => {
        if (team.name === teamName) {
          return {
            ...team,
            score: team.score - 1,
          };
        } else {
          return team;
        }
      })
    );
    const myTeam = totalScore.find((obj) => obj.name === teamName);
    const myScore = myTeam.score - 1;

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

    teamService.update(id, { score: myScore })
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
      <h1>{checkpointName}</h1>
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
                    onClick={() => handlePointsMinus(team.name, team._id, key)}
                  >
                    -
                  </button>
                  {teamPoints[key]}
                  <button
                    className="btnGivepoints"
                    onClick={() => handlePointsPlus(team.name, team._id, key)}
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

// PUT
/*
    async function submit(e) {
      e.preventDefault();

      try {
        // Make a PUT request for each team in the totalScore object
        await Promise.all(
          Object.entries(totalScore).map(([teamId, score]) =>
            axios.put(`http://localhost:3002/api/teams/${teamId}`, { score })
          )
        );

        alert("Tapahtuma on tallennettu!");
      } catch (error) {
        console.error(error);
      }
    }
    /*
    fetch("http://localhost:3002/api/teams", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        score: totalScore[teamName],
      }),
    })
      .then((response) => {
        // Käsittely onnistuneelle vastaukselle
        console.log("jeee");
      })
      .catch((error) => {
        // Käsittely virheelle
        console.log(error);
      });




        //This useEffect sets up an effect that will be called every time the value of teams changes.
  //It sets teamPoints to an object with the keys being the names of each team and the values being 0.
  /* useEffect(() => {
    setTeamPoints(
      teams.reduce((acc, team) => ({ ...acc, [team.name]: 0 }), {})
    );
  }, [teams]);
  */
