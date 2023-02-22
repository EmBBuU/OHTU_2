import React from "react";
import Button from "./components/Button";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import InfoPage from "./components/InfoPage";
import Homepage from "./components/Homepage";
import ScoreTable from "./components/ScoreTable";
import CheckpointTable from "./components/CheckpointTable";
import "./Style.css";

//Julian Kommentti: tällähetkellä homepage-linkki toimii, eli ylhäällä olevaa otsikkoa klikatessa routataan homepage-komponenttiin
//en vielä ole varma miten ton buttonin voi yhdistää infopage komponenttiin, mut kattelen sitä myöhemmin/joku muu voi katella
//mut ne linkit ainaki on valmiina, ja yhdistys tapahtuu luultavasti button komponentin kautta.

const App = () => (
  <div>
    <Navbar />
    <div className="routeContainer">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/InfoPage" element={<InfoPage />} />
      </Routes>
    </div>
    <div>
      <h1>RASTIT</h1>
      <CheckpointTable />
    </div>
    <div>
      <h1>PISTETILANNE</h1>
      <ScoreTable />
      <hi1 className="updated">Viimeksi päivitetty: 11:11:11</hi1>
    </div>
  </div>
);

export default App;
