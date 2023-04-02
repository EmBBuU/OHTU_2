import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
/* Main author of the page Emilia Uurasjärvi*/

const EditTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/teams").then((response) => {
      setTeams(response.data);
    });
  }, []);

  return (
    <div className="ScoreTable">
      <table>
        <tbody>
          <tr>
            <th>RYHMÄN NUMERO</th>
            <th>RYHMÄN NIMI</th>
          </tr>
          {teams
            .sort((a, b) => b.score - a.score)
            .map((team, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{team.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EditTeams;
