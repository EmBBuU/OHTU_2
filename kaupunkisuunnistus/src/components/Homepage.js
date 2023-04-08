import React from "react";
import ScoreTable from "./ScoreTable";
import CheckpointTable from "./CheckpointTable";
import JoensuuMap from "./JoensuuMap";
import { Link } from "react-router-dom";

/**
 * 
 * Last updated - Sera Ilvan
 * Buttons, texts - Julia Juntunen
 * Tables -  (en muista kuka, lisätkää kuka muistaa)
 * 
 */

function Homepage() {
  return (
    <div className="homepageBody">

      <div className="frontpageButtons">
        <button className='btn-login'>
          <Link to="/Login" className="login">KIRJAUDU SISÄÄN</Link>
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
        <h1 className="updated">Viimeksi päivitetty: 11:11:11</h1>
      </div>
      <div>
        <h1>KARTTA</h1>
        <JoensuuMap />
      </div>
    </div>
  );
}


export default Homepage;
