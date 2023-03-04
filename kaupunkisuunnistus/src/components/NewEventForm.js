import React from "react";

function NewEventForm() {
    return (
        <div className="eventform">
            <h2>Luo uusi tapahtuma</h2>
            <div>
                <label for="eventName">Tapahtuman nimi: </label>
                <input id="eventName" />
            </div>
            <div>
                <label for="eventTeams">Tapahtuman tiimien määrä: </label>
                <input id="eventTeams" />
            </div>
            <div>
                <label for="eventPlaces">Tapahtuman rastien määrä: </label>
                <input id="eventPlaces" />
            </div>
            <div>
                <label for="eventInfoText">Tapahtuman ohjeet ohjesivulle: </label>
                <input id="eventInfotext" />
            </div>
            <button>Luo uusi tapahtuma</button>
            <p>Huom! Kun painat nappia, uusi tapahtuma tulee automaattisesti aktiiviseksi. </p>
        </div>
    )
}

export default NewEventForm