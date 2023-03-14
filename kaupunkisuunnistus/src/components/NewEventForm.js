import React from "react";

function NewEventForm() {
    return (
        <div className="eventform">
            <h2>LUO UUSI TAPAHTUMA</h2>
            <label for="eventName">Tapahtuman nimi: </label>
            <input id="eventName" className="eventName" />

            <label for="eventPlaces">Tapahtuman rastien määrä (anna numeroina): </label>
            <input id="eventPlaces" className="eventPlaces" />

            <label for="eventTeams">Tapahtuman tiimien määrä (anna numeroina): </label>
            <input id="eventTeams" className="eventTeams" />

            <label for="mapsLink">Tapahtuman maps-linkki:</label>
            <input id="mapsLink" className="mapsLink" />

            <label for="eventInfoText">Tapahtuman ohjeet ohjesivulle: </label>
            <textarea id="eventInfoText" className="eventInfoText" />

            <button className="savebutton">TALLENNA</button>
            <p>Huom! Kun painat nappia, uusi tapahtuma tulee automaattisesti aktiiviseksi. </p>
        </div>
    )
}

export default NewEventForm