import React, { useState } from "react";
import axios from "axios";

/**
 * Main author - Julia Juntunen
 */

function NewEventForm() {

  const [eventName, setEventName] = useState('')
  const [eventPlaces, setEventPlaces] = useState('')
  const [eventTeams, setEventTeams] = useState('')
  const [mapsLink, setMapsLink] = useState('')
  const [eventInfoText, setEventInfoText] = useState('')

  async function submit(e) {
    e.preventDefault();

    try {
      alert("Tapahtuma on tallennettu!")

      await axios.delete("http://localhost:3002/api/events", {})
        .then(
          await axios.post("http://localhost:3002/api/events", {
            eventName, eventPlaces, eventTeams, mapsLink, eventInfoText
          })
        )
    } catch (e) {
      console.log(e)
    }

  }

  return (
    <div className="eventformDiv">
      <form className="eventformForm" action="POST">

        <h2>LUO UUSI TAPAHTUMA</h2>

        <label htmlFor="eventName">Tapahtuman nimi: </label>
        <input id="eventName" className="eventName" type="String" onChange={(e) => { setEventName(e.target.value) }} />

        <label htmlFor="eventPlaces">
          Tapahtuman rastien määrä (anna numeroina):{" "}
        </label>
        <input id="eventPlaces" className="eventPlaces" type="number" onChange={(e) => { setEventPlaces(e.target.value) }} />

        <label htmlFor="eventTeams">
          Tapahtuman tiimien määrä (anna numeroina):{" "}
        </label>
        <input id="eventTeams" className="eventTeams" type="number" onChange={(e) => { setEventTeams(e.target.value) }} />

        <label htmlFor="mapsLink">Tapahtuman maps-linkki:</label>
        <input id="mapsLink" className="mapsLink" type="String" onChange={(e) => { setMapsLink(e.target.value) }} />

        <label htmlFor="eventInfoText">Tapahtuman ohjeet ohjesivulle: </label>
        <textarea id="eventInfoText" className="eventInfoText" type="String" onChange={(e) => { setEventInfoText(e.target.value) }} />

        <button className="savebutton" id="savebutton" type="submit" onClick={submit}>
          <a href="/login">TALLENNA</a>
        </button>
        <label htmlFor="savebutton">
          Huom! Kun painat "TALLENNA"-nappia, uusi tapahtuma tulee automaattisesti
          aktiiviseksi.
        </label>


        <button className="previouslogin">
          <a href="/login">PERUUTA</a>
        </button>

      </form>
    </div>
  );
}

export default NewEventForm;
