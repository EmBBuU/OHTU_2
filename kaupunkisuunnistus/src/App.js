import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import InfoPage from "./components/InfoPage";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import "./Style.css";
import NewEventForm from "./components/NewEventForm";


const App = () => (
  <div>
    <Navbar />

    <div className="routeContainer">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/InfoPage" element={<InfoPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/NewEventForm" element={<NewEventForm/>} />
      </Routes>
    </div>
    
  </div>
);

export default App;
