import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
/* Main author of the page Emilia Uurasjärvi*/

const EditTeams = () => {
  const [teams, setTeams] = useState([]);
  const [editedName, setEditedName] = useState("");
  const [editedId, setEditedId] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3002/api/teams").then((response) => {
      setTeams(response.data);
    });
  }, []);

  const updateName = (id) => {
    try {
      alert("Nimi on tallennettu!");

      axios
        .put(`http://localhost:3002/api/teams/${id}`, { name: editedName })
        .then((response) => {
          console.log(response.data);
          setTeams((prevTeams) =>
            prevTeams.map((team) =>
              team._id === id ? { ...team, name: editedName } : team
            )
          );
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditName = (name, id) => {
    setEditedName(name);
    setEditedId(id);
  };

  /*
  const handleNameChange = (teamId, newName) => {
    setTeams((prevState) =>
      prevState.map((team) =>
        team._id === teamId ? { ...team, name: newName } : team
      )
    );
  };
  */

  return (
    <div className="editteams">
      <table>
        <tbody>
          <tr>
            <th>RYHMÄN NIMI</th>
            <th>RYHMÄN UUSI NIMI</th>
            <th></th>
          </tr>
          {teams.map((team, key) => {
            return (
              <tr key={key}>
                <td>{team.name}</td>
                <td>
                  {editedId === team._id ? (
                    <input
                      className="newTeamName"
                      type="String"
                      value={editedName}
                      onChange={(e) => {
                        setEditedName(e.target.value);
                      }}
                    />
                  ) : (
                    <span>{team.name}</span>
                  )}
                </td>
                <td>
                  {editedId === team._id ? (
                    <button
                      className="btnSaveTeam"
                      onClick={() => updateName(team._id)}
                    >
                      OK
                    </button>
                  ) : (
                    <button
                      className="btnEditTeam"
                      onClick={() => handleEditName(team.name, team._id)}
                    >
                      MUOKKAA
                    </button>
                  )}
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
/*
  const handleSave = (newName, teamName) => {
    console.log("OK button clicked!");
    axios
      .put(`http://localhost:3002/api/teams/${teamName}`, newName)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  */
