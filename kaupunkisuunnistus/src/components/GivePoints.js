import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
//import teamService from "./services/teams";
/* Main author of the page Emilia Uurasjärvi, Jussi Kukkonen made the HTTP GET request */

const GivePoints = () => {
  const [teams, setTeams] = useState([]);
  const [teamPoints, setTeamPoints] = useState([]);
  const [totalScore, setTotalScore] = useState([]);

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
      setTotalScore(response.data);
    });
  }, []);

  console.log(teams, "ORIGIN");
  console.log(totalScore, "KOPIO");

  const handlePointsPlus = (teamName, value, id) => {
    const newValue = parseInt(value);
    setTeamPoints({
      ...teamPoints,
      [teamName]: newValue,
    });
    console.log(teamPoints, "asdf");
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
    const myScore = myTeam.score;
    axios
      .put(`http://localhost:3002/api/teams/${id}`, { score: myScore })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePointsMinus = (teamName, value, id) => {
    const newValue = parseInt(value);
    setTeamPoints((prevState) => ({
      ...prevState,
      [teamName]: prevState[teamName] + newValue,
    }));
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
    //PUT
    const myTeam = totalScore.find((obj) => obj.name === teamName);
    const myScore = myTeam.score;
    axios
      .put(`http://localhost:3002/api/teams/${id}`, { score: myScore })
      .then((response) => {
        console.log(response.data);
        setTeamPoints(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                      handlePointsMinus(
                        team.name,
                        (teamPoints[team._id] -= 1),
                        team._id
                      )
                    }
                  >
                    -
                  </button>
                  {teamPoints[team._id]}
                  <button
                    className="btnGivepoints"
                    onClick={() =>
                      handlePointsPlus(
                        team.name,
                        (teamPoints[team._id] += 1),
                        team._id
                      )
                    }
                  >
                    +
                  </button>
                </td>
                <td>{totalScore.find((t) => t.name === team.name)?.score}</td>
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
      */
