import React, { useState } from "react";
import axios from "axios";
// note to self (Julialle, itselle), lisää vielä onChange kohtiin esim onChange={(e)=>{setEventName(e.target.value)}}

// ja muille jos tätä sivua testailette: atm tallenna-nappia painaessa tulee punasta konsoliin,
// korjaan kyllä, ja johtuu siitä et oon alotellu yhteyden muodostamista backendiin mut jättäny kesken,
// tää on vielä työn alla

function NewEventForm() {

  const [eventName, setEventName] = useState('')
  const [eventPlaces, setEventPlaces] = useState('')
  const [eventTeams, setEventTeams] = useState('')
  const [mapsLink, setMapsLink] = useState('')
  const [eventInfoText, setEventInfoText] = useState('') //en tiiä tarviiko tätä jos infoteksti ei mene tietokantaan

  async function submit(e) {
    e.preventDefault();

    try {
      alert("(tähän tulee ilmotus siitä että tapahtuma on tallennettu...)")

      await axios.post(""/*toho joku osote, en vielä älynny mikä... varmaan tän kyseisen sivun*/, {
        eventName, eventPlaces, eventTeams, mapsLink, eventInfoText //tai infotext pois tästä jos se ei mene tietokantaan
      })

    } catch (e) {
      console.log(e)
    }

  }

  return (
    <div className="eventformDiv">
      <form className="eventformForm" action="POST">

        <h2>LUO UUSI TAPAHTUMA</h2>

        <label for="eventName">Tapahtuman nimi: </label>
        <input id="eventName" className="eventName" type="text" onChange={(e) => (e.target.value)} />

        <label for="eventPlaces">
          Tapahtuman rastien määrä (anna numeroina):{" "}
        </label>
        <input id="eventPlaces" className="eventPlaces" type="number" />

        <label for="eventTeams">
          Tapahtuman tiimien määrä (anna numeroina):{" "}
        </label>
        <input id="eventTeams" className="eventTeams" type="number" />

        <label for="mapsLink">Tapahtuman maps-linkki:</label>
        <input id="mapsLink" className="mapsLink" type="text" />

        <label for="eventInfoText">Tapahtuman ohjeet ohjesivulle: </label>
        <textarea id="eventInfoText" className="eventInfoText" type="text" />

        <button className="savebutton" id="savebutton" type="submit" onClick={submit}>
          <a href="/login">TALLENNA</a>
        </button>
        <label for="savebutton">
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
