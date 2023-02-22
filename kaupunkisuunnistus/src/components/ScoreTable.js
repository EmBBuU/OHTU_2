import React from "react";

// Example of a data array that you might receive from an API
const data = [
  { rank: 1, team_name: "Me", team_score: 45 },
  { rank: 2, team_name: "Paras ryhmä", team_score: 43 },
  { rank: 3, team_name: "Oonafani_69", team_score: 20 },
  { rank: 4, team_name: "Kuopio", team_score: 1 },
];

const ScoreTable = () => {
  return (
    <div className="ScoreTable">
      <table>
        <tr>
          <th>RYHMÄN SIJOITUS</th>
          <th>RYHMÄN NIMI</th>
          <th>RYHMÄN PISTETILANNE</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.rank}</td>
              <td>{val.team_name}</td>
              <td>{val.team_score}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ScoreTable;
