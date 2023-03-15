import React from "react";
import CheckpointTableLinks from "./CheckpointTableLinks";

function SelectCheckpoint() {
  return (
    <div className="selectchekpoint">
      <div>
        <b>Valitse rasti, jota haluat pisteyttää</b>
        <h1>RASTIT</h1>
        <CheckpointTableLinks />
      </div>
    </div>
  );
}

export default SelectCheckpoint;
