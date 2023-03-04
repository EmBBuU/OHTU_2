import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'

/*
// Example of a data array that you might receive from an API
const data = [
  { rank: 1, team_name: "Me", team_score: 45 },
  { rank: 2, team_name: "Paras ryhmä", team_score: 43 },
  { rank: 3, team_name: "Oonafani_69", team_score: 20 },
  { rank: 4, team_name: "Kuopio", team_score: 1 },
];
*/

const ScoreTable = () => {

  const [teams, setTeams] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3002/api/teams')
      .then(response => {
        setTeams(response.data)
      })
  }, [])

  return (
    <div className="ScoreTable">
      <table>
        <tr>
          <th>RYHMÄN SIJOITUS</th>
          <th>RYHMÄN NIMI</th>
          <th>RYHMÄN PISTETILANNE</th>
        </tr>
        {teams
          // Tähän kohtaan kaipaisi .sort -metodia, että saataisiin joukkueet lajiteltua pisteiden mukaan.
          .map((team, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{team.name}</td>
                <td>{team.score}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default ScoreTable;