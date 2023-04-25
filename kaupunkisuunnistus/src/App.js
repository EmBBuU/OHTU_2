/**
 * Routes - Julia Juntunen
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import InfoPage from "./components/InfoPage";
import Homepage from "./components/Homepage";
import LoggedInMenu from "./components/LoggedInMenu";
import NewEventForm from "./components/NewEventForm";
import SelectCheckpoint from "./components/SelectCheckpoint";
import GivePoints from "./components/GivePoints";
import LoginForm from "./components/LoginForm";
import EditTeams from "./components/EditTeams";
import EditCheckpoints from "./components/EditCheckpoints";
import "./Style.css";

const App = () => (
  <div>
    <Navbar />

    <div className="routeContainer">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/InfoPage" element={<InfoPage />} />
        <Route path="/LoggedInMenu" element={<LoggedInMenu />} />
        <Route path="/NewEventForm" element={<NewEventForm />} />
        <Route path="/SelectCheckpoint" element={<SelectCheckpoint />} />
        <Route path="/GivePoints/:data" element={<GivePoints />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/EditTeams" element={<EditTeams />} />
        <Route path="/EditCheckpoints" element={<EditCheckpoints />} />
      </Routes>
    </div>
  </div>
);

export default App;
