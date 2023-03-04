//lisäsin väliaikasesti tälle kirjautumissivulle napin, mistä pääsee
//katselemaan sivuja jotka tulevaisuudessa tulee näkyville sitten joskus
//kirjautuessa sisään. Nämä napit tulee siis poistumaan

import React from "react";
import { Link } from "react-router-dom";

function Login () {
    return(
        <div>
            <p>Väliaikaiset napit sivujen tarkasteluun:</p>
            <button>
                <Link to="/NewEventForm">Uuden tapahtuman luominen</Link>
            </button>
        </div>
    )
}

export default Login