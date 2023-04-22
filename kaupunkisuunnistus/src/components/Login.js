//lisäsin väliaikasesti tälle kirjautumissivulle napin, mistä pääsee
//katselemaan sivuja jotka tulevaisuudessa tulee näkyville sitten joskus
//kirjautuessa sisään. Nämä napit tulee siis poistumaan

import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <button>
        <Link to="/NewEventForm">LUO UUSI TAPAHTUMA</Link>
      </button>
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
        <Link to="/">KIRJAUDU ULOS</Link>
      </button>
    </div>
  );
}

export default Login;
