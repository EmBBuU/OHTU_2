import React from "react";
import { useState, useEffect } from "react";
import teamService from "../services/teams";
import { Link } from "react-router-dom";
/* This is the EditTeams component which is responsible for rendering a table of teams that can be edited.
 Main author of the page is Emilia Uurasjärvi*/

const EditTeams = () => {
  // Declaring states for teams, editedName, and editedId
  const [teams, setTeams] = useState([]);
  const [editedName, setEditedName] = useState("");
  const [editedId, setEditedId] = useState("");

  // Fetching initial teams data from the server using the useEffect hook
  useEffect(() => {
    teamService.getAll().then((initialTeams) => {
      setTeams(initialTeams);
    });
  }, []);

  // Function to update the name of a team
  const updateName = (id) => {
    const teamToUpdate = teams.find((t) => t._id === id);
    const updatedTeam = { ...teamToUpdate, name: editedName };

    // Sending updated team data to the server using the teamService module and updating the state of the teams array with the response data
    teamService.update(id, updatedTeam).then((response) => {
      setTeams((prevTeams) =>
        prevTeams.map((team) => (team._id === id ? response : team))
      );
    });
    setEditedId("");
  };

  // Function to handle the editing of a team's name
  const handleEditName = (name, id) => {
    setEditedName(name);
    setEditedId(id);
  };

  /*
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
  */

  /*
  const handleNameChange = (teamId, newName) => {
    setTeams((prevState) =>
      prevState.map((team) =>
        team._id === teamId ? { ...team, name: newName } : team
      )
    );
  };
  */

  // Rendering the table of teams and allowing for editing
  return (
    <div className="editTeams">
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
        <Link to="/LoggedInMenu">TAKAISIN</Link>
      </button>
    </div>
  );
};

export default EditTeams;
