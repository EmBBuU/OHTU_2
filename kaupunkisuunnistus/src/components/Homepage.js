import React from 'react'
import ScoreTable from "./ScoreTable"
import CheckpointTable from "./CheckpointTable"

function Homepage() {
  return (
    <div>

      <div>
        <h1>RASTIT</h1>
        <CheckpointTable />
      </div>
      <div>
        <h1>PISTETILANNE</h1>
        <ScoreTable />
        <h1 className="updated">Viimeksi päivitetty: 11:11:11</h1>
      </div>
    </div>
  )
}

export default Homepage