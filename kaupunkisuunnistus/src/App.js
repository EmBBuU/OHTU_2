/**
 * Luokan työstäminen:
 * Routet - Julia (JA JOKU MUU MYÖS, KIRJATKAA KETKÄ)
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import InfoPage from "./components/InfoPage";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import "./Style.css";
import NewEventForm from "./components/NewEventForm";
import SelectCheckpoint from "./components/SelectCheckpoint";
import GivePoints from "./components/GivePoints";
import Login2 from "./components/Login2";

const App = () => (
  <div>
    <Navbar />

    <div className="routeContainer">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/InfoPage" element={<InfoPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/NewEventForm" element={<NewEventForm />} />
        <Route path="/SelectCheckpoint" element={<SelectCheckpoint />} />
        <Route path="/GivePoints" element={<GivePoints />} />
        <Route path="/Login2" element={<Login2 />} />
      </Routes>
    </div>
  </div>
);

export default App;
