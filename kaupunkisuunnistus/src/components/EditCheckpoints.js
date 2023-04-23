/* Main author: Jussi Kukkonen */
import React from "react"
import { useState, useEffect } from "react"
import checkpointService from "../services/checkpoints"
import { Link } from "react-router-dom";

const EditCheckpoints = () => {
  const [checkpoints, setCheckpoints] = useState([])
  const [setName, setNewName] = useState("")
  const [editId, setEditId] = useState("")

  useEffect(() => {
    checkpointService.getAll().then((initialCheckpoints) => {
      setCheckpoints(initialCheckpoints)
    })
  }, [])

  const updateName = (id) => {
    const checkpointToUpdate = checkpoints.find((c) => c._id === id)
    const updatedCheckpoint = { ...checkpointToUpdate, name: setName }
    checkpointService.update(id, updatedCheckpoint).then((response) => {
      setCheckpoints((prevCheckpoints) =>
        prevCheckpoints.map((checkpoint) =>
          checkpoint._id === id ? response : checkpoint
        )
      )
    })
    setEditId("")
  }

  const handleEditName = (name, id) => {
    setNewName(name)
    setEditId(id)
  };

  return (
    <div className="editCheckpoints">
      <table>
        <tbody>
          <tr>
            <th>RASTIN NIMI</th>
            <th>RASTIN UUSI NIMI</th>
            <th></th>
          </tr>
          {checkpoints.map((checkpoint, key) => {
            return (
              <tr key={key}>
                <td>{checkpoint.name}</td>
                <td>
                  {editId === checkpoint._id ? (
                    <input
                      className="newCheckpointName"
                      type="String"
                      value={setName}
                      onChange={(e) => {
                        setNewName(e.target.value);
                      }}
                    />
                  ) : (
                    <span>{checkpoint.name}</span>
                  )}
                </td>
                <td>
                  {editId === checkpoint._id ? (
                    <button
                      className="btnSaveCheckpoint"
                      onClick={() => updateName(checkpoint._id)}
                    >
                      OK
                    </button>
                  ) : (
                    <button
                      className="btnEditCheckpoint"
                      onClick={() =>
                        handleEditName(checkpoint.name, checkpoint._id)
                      }
                    >
                      MUOKKAA
                    </button>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button className="previous">
        <Link to="/LoggedInMenu">TAKAISIN</Link>
      </button>
    </div>
  )
}

export default EditCheckpoints;

