import React from "react";
import CheckpointTableLinks from "./CheckpointTableLinks";
import { Link } from "react-router-dom";
/* Main author of the page Emilia Uurasjärvi - CheckpointTableLinks main author of the page Atte Tanskanen */

function SelectCheckpoint() {
  return (
    <div className="selectcheckpoint">
      <div>
        <b>Valitse rasti, jota haluat pisteyttää</b>
        <h1>RASTIT</h1>
        <CheckpointTableLinks />
      </div>
      <button className="previous">
        <Link to="/LoggedInMenu">TAKAISIN</Link>
      </button>
    </div>
  );
}

export default SelectCheckpoint;
