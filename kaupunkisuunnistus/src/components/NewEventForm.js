import React, { useState } from "react";
import { Link } from "react-router-dom";
import checkpointService from "../services/checkpoints";
import teamService from "../services/teams";
import eventService from "../services/events";
/**
 * Main author - Julia Juntunen
 * Imported axios methods from services components - Jussi Kukkonen
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
      
      //creating lists for new teams and locations
      let teamNameList = []
      let locationNameList = []

      //filling the list with new teams
      for (let i = 0; i < eventTeams; i++) {
        teamNameList.push({ name: i, score: 0 })
      }
      console.log(teamNameList)

      //filling the list with new event locations
      for (let i = 0; i < eventPlaces; i++) {
        locationNameList.push({ name: i })
      }
      console.log(locationNameList)

      //deletion of all previous teams and locations
      await teamService.removeAll({})
      await checkpointService.removeAll({})

      //posting all new teams to backend
      teamNameList.forEach((item) => {
        teamService.create(item)
      });

      //posting all new locations to backend
      locationNameList.forEach((item) => {
        checkpointService.create(item)
      });

      //deleting previous event and creating a new one
      await eventService.removeAll({})
      await eventService.create(
        { eventName, eventPlaces, eventTeams, mapsLink, eventInfoText }
      )

      alert("Tapahtuma on tallennettu!")

    } catch (e) {
      console.log(e)
    }

  }

  /*
  async function submit(e) {
    e.preventDefault();

    try {
      alert("Tapahtuma on tallennettu!")

      //creating lists for new teams and locations
      let teamNameList = []
      let locationNameList = []

      //filling the list with new teams
      for (let i = 0; i < eventTeams; i++) {
        teamNameList.push({ name: i, score: 0 })
      }
      console.log(teamNameList)

      //filling the list with new event locations
      for (let i = 0; i < eventPlaces; i++) {
        locationNameList.push({ name: i })
      }
      console.log(locationNameList)

      //deletion of all previous teams and locations
      axios.delete("http://localhost:3002/api/teams", {})
        .then(await axios.delete("http://localhost:3002/api/locations", {}))

      //posting all new teams to backend
      teamNameList.forEach((item) => {
        axios.post("http://localhost:3002/api/teams", item)
      });

      //posting all new locations to backend
      locationNameList.forEach((item) => {
        axios.post("http://localhost:3002/api/locations", item)
      });

      //deleting previous event
      axios.delete("http://localhost:3002/api/events", {})
        .then(
          //posting new event to backend
          axios.post("http://localhost:3002/api/events", {
            eventName, eventPlaces, eventTeams, mapsLink, eventInfoText
          })
        )
    } catch (e) {
      console.log(e)
    }

  }
  */

  return (
    <div className="eventformDiv">
      <form className="eventformForm" action="POST">

        <h2>LUO UUSI TAPAHTUMA</h2>
        <p>Pakolliset kentät ovat merkittynä merkillä *</p>
        <br />

        <label htmlFor="eventName">*Tapahtuman nimi: </label>
        <input id="eventName" className="eventName" type="String" onChange={(e) => { setEventName(e.target.value) }} />

        <label htmlFor="eventPlaces">
          *Tapahtuman rastien määrä:{" "}
        </label>
        <input id="eventPlaces" className="eventPlaces" type="number" onChange={(e) => { setEventPlaces(e.target.value) }} />

        <label htmlFor="eventTeams">
          *Tapahtuman tiimien määrä:{" "}
        </label>
        <input id="eventTeams" className="eventTeams" type="number" onChange={(e) => { setEventTeams(e.target.value) }} />

        <label htmlFor="mapsLink">Tapahtuman maps-linkki (Käytä "embed"-muotoista linkkiä):</label>
        <input id="mapsLink" className="mapsLink" type="String" onChange={(e) => { setMapsLink(e.target.value) }} />

        <label htmlFor="eventInfoText">*Tapahtuman ohjeet ohjesivulle: </label>
        <textarea id="eventInfoText" className="eventInfoText" type="String" onChange={(e) => { setEventInfoText(e.target.value) }} />

        <button className="savebutton" id="savebutton" type="submit" onClick={submit}>
          <Link to="/LoggedInMenu">TALLENNA</Link>
        </button>
        <label htmlFor="savebutton">
          Huom! Kun painat "TALLENNA"-nappia, uusi tapahtuma tulee automaattisesti
          aktiiviseksi.
        </label>


        <button className="previouslogin">
          <Link to="/LoggedInMenu">TAKAISIN</Link>
        </button>

      </form>
    </div>
  );
}

export default NewEventForm;
