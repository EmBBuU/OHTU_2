import React, { useEffect, useState } from "react";
import ScoreTable from "./ScoreTable";
import CheckpointTable from "./CheckpointTable";
import JoensuuMap from "./JoensuuMap";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from 'moment';

/**
 * 
 * Last updated - Sera Ilvan
 * Buttons, texts - Julia Juntunen
 * Tables -  (en muista kuka, lisätkää kuka muistaa)
 * 
 */

function Homepage() {

// Tällä haetaan milloin sivusto on viimeksi refreshattu, ei liity pisteisiin tai tiimeihin lainkaan
  const lastUpdate = new Date(document.lastModified);
  
  /*
  * Tähän jätetty Viimeksi päivitetty- tiedon koodi, jolla mahdollisesti olisi haettu tiimien pistetietojen
  * päivitys
  *
  const [teams, setTeams] = useState([]);
  const [lastUpdated, setLastUpdated] = useState('');

useEffect(() => {
  axios.get('http://localhost:3002/api/teams')
  .then(res => {
    setTeams(res.data);
    setLastUpdated(moment(res.data[0].lastUpdated).format('hh:mm:ss a'));
  })
  .catch(err => {
    console.log(err)
  })
}) */

  return (
    <div className="homepageBody">

      <div className="frontpageButtons">
        <button className='btn-login'>
          <Link to="/Login2" className="login">KIRJAUDU SISÄÄN</Link>
        </button>

        <button className='btn-info'>
          <Link to="/InfoPage" className="infoPage">OHJEET</Link>
        </button>
      </div>

      <div>
        <h1>RASTIT</h1>
        <CheckpointTable />
      </div>
      <div>
        <h1>PISTETILANNE</h1>
        <ScoreTable />
        <h1 className="updated">Viimeksi päivitetty: {lastUpdate.toLocaleString()}</h1>
      </div>
      <div>
        <h1>KARTTA</h1>
        <JoensuuMap />
      </div>
    </div>
  );
}


export default Homepage;
