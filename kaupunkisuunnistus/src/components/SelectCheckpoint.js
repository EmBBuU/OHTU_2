import React from "react";
import CheckpointTableLinks from "./CheckpointTableLinks";

function SelectCheckpoint() {
  return (
    <div className="selectcheckpoint">
      <div>
        <b>Valitse rasti, jota haluat pisteyttää</b>
        <h1>RASTIT</h1>
        <CheckpointTableLinks />
      </div>
    </div>
  );
}

export default SelectCheckpoint;
