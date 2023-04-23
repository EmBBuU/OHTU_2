import React from "react";
import { useState, useEffect } from "react";
import teamService from "../services/teams";
/* Main author of the page Emilia Uurasjärvi, Jussi Kukkonen made the get request */

const ScoreTable = () => {
  const [teams, setTeams] = useState([]);

  //retrieving data from teamService
  useEffect(() => {
    teamService.getAll().then((initialTeams) => {
      setTeams(initialTeams);
    });
  }, []);

  // Rendering the component
  return (
    <div className="ScoreTable">
      <table>
        <tbody>
          <tr>
            <th>RYHMÄN SIJOITUS</th>
            <th>RYHMÄN NIMI</th>
            <th>RYHMÄN PISTETILANNE</th>
          </tr>
          {teams
            .sort((a, b) => b.score - a.score)
            .map((team, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{team.name}</td>
                  <td>{team.score}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTable;
