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

  const handleSave = () => {
    console.log("OK button clicked!");
    //PUT
    /*
    axios
      .put(`http://localhost:3002/api/teams/${id}`, totalScore)
      .then((response) => {
        console.log(response.data);
        setTeamPoints(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
      */
  };

  return (
    <div className="editteams">
      <table>
        <tbody>
          <tr>
            <th>RYHMÄN NUMERO</th>
            <th>RYHMÄN NIMI</th>
            <th>RYHMÄN UUSI NIMI</th>
          </tr>
          {teams
            .sort((a, b) => b.score - a.score)
            .map((team, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{team.name}</td>
                  <td>
                    <input
                      className="newTeamName"
                      type="String"
                      onChange={(e) => {
                        handleSave(e.target.value);
                      }}
                    />
                    <button className="btnSaveTeam" onClick={handleSave}>
                      OK
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button className="previous">
        <a href="/login">TAKAISIN</a>
      </button>
    </div>
  );
};

export default EditTeams;
