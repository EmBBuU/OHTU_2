import React, { useEffect, useState } from "react";
import ScoreTable from "./ScoreTable";
import CheckpointTable from "./CheckpointTable";
import JoensuuMap from "./JoensuuMap";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

/**
 *
 * Last updated - Sera Ilvan
 * Buttons, texts - Julia Juntunen
 * Tables - Emilia Uurasjärvi
 *
 */

function Homepage() {
  // Displays the time when the website has been refreshed or opened.
  const lastUpdate = new Date(document.lastModified);

  return (
    <div className="homepageBody">
      <div className="frontpageButtons">
        <button className="btn-login">
          <Link to="/LoginForm" className="login">
            KIRJAUDU SISÄÄN
          </Link>
        </button>

        <button className="btn-info">
          <Link to="/InfoPage" className="infoPage">
            OHJEET
          </Link>
        </button>
      </div>

      <div>
        <h1>RASTIT</h1>
        <CheckpointTable />
      </div>
      <div>
        <h1>PISTETILANNE</h1>
        <ScoreTable />
        <h1 className="updated">
          Viimeksi päivitetty: {lastUpdate.toLocaleString()}
        </h1>
      </div>
      <div>
        <h1>KARTTA</h1>
        <JoensuuMap />
      </div>
    </div>
  );
}

export default Homepage;
