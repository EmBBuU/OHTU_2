import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import InfoPage from "./components/InfoPage";
import Homepage from "./components/Homepage";
import "./Style.css";


const App = () => (
  <div>
    <Navbar />

    <div className="routeContainer">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/InfoPage" element={<InfoPage />} />
      </Routes>
    </div>
    
  </div>
);

export default App;
