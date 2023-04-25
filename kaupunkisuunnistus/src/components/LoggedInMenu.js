import React from "react";
import { Link } from "react-router-dom";

function LoggedInMenu() {
  return (
    <div className="loginmenu">
      <button>
        <Link to="/SelectCheckpoint">ANNA PISTEITÄ</Link>
      </button>
      <button>
        <Link to="/EditCheckpoints">MUOKKAA RASTEJA</Link>
      </button>
      <button>
        <Link to="/EditTeams">MUOKKAA TIIMEJÄ</Link>
      </button>
      <button>
        <Link to="/NewEventForm">LUO UUSI TAPAHTUMA</Link>
      </button>
      <button>
        <Link to="/">KIRJAUDU ULOS</Link>
      </button>
    </div>
  );
}

export default LoggedInMenu;
