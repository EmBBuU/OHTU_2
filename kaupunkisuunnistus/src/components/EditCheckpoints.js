import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

const EditTeams = () => {
  const [locations, setLocations] = useState([])
  const [setName, setNewName] = useState("")
  const [editId, setEditId] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3002/api/locations").then((response) => {
      setLocations(response.data);
    });
  }, []);

  const updateName = (id) => {

    axios
      .put(`http://localhost:3002/api/locations/${id}`, { name: setName })
      .then((response) => {
        console.log(response.data)
        setLocations((prevLocations) =>
          prevLocations.map((location) =>
            location._id === id ? { ...location, name: setName } : location
          )
        )
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const handleEditName = (name, id) => {
    setNewName(name)
    setEditId(id)
  };

  return (
    <div className="editLocations">
      <table>
        <tbody>
          <tr>
            <th>RASTIN NIMI</th>
            <th>RASTIN UUSI NIMI</th>
            <th></th>
          </tr>
          {locations.map((location, key) => {
            return (
              <tr key={key}>
                <td>{location.name}</td>
                <td>
                  {editId === location._id ? (
                    <input
                      className="newLocationName"
                      type="String"
                      value={setName}
                      onChange={(e) => {
                        setNewName(e.target.value);
                      }}
                    />
                  ) : (
                    <span>{location.name}</span>
                  )}
                </td>
                <td>
                  {editId === location._id ? (
                    <button
                      className="btnSaveLocation"
                      onClick={() => updateName(location._id)}
                    >
                      OK
                    </button>
                  ) : (
                    <button
                      className="btnEditLocation"
                      onClick={() => handleEditName(location.name, location._id)}
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
  )
}

export default EditTeams;
