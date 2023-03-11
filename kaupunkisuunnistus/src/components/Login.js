//lisäsin väliaikasesti tälle kirjautumissivulle napin, mistä pääsee
//katselemaan sivuja jotka tulevaisuudessa tulee näkyville sitten joskus
//kirjautuessa sisään. Nämä napit tulee siis poistumaan

import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <p>Väliaikaiset napit sivujen tarkasteluun:</p>
            <button>
                <Link to="/NewEventForm">UUDEN TAPAHTUMAN LUOMINEN</Link>
            </button>
            <button>
                <Link to="/SelectCheckpoint">RASTINPITÄJIEN ETUSIVU</Link>
            </button>
            <button>
                <Link to="/GivePoints">PISTEIDENANTO-SIVU</Link>
            </button>
        </div>
    )
}

export default Login