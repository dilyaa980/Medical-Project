import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Company from "./pages/Company";
import Treatment from "./pages/Treatment";
import Beauty from "./pages/Beauty";
import CheckUp from "./pages/CheckUp";
import Medicine from "./pages/Medicine";
import Actives from "./pages/Actives";
import Contacts from "./pages/Contacts";
import Navbar from "./components/Navbar/Navbar";
import "./bootstrap-grid.css";
import Sinchon from "./components/Sinchon/Sinchon";
import Hospital from "./components/Hospital/Hospital";
import Request from "./components/Request/Request";
import List from "./components/List/List";

import Home from "./Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Contacts" element={<Contacts />} />
        <Route exact path="/Treatment" element={<Treatment />} />
        <Route exact path="/Beauty" element={<Beauty />} />
        <Route exact path="/CheckUp " element={<CheckUp />} />
        <Route exact path="/Medicine" element={<Medicine />} />
        <Route exact path="/Actives" element={<Actives />} />
        <Route exact path="/Contacts" element={<Contacts />} />
        <Route exact path="/Sinchon" element={<Sinchon />} />
        <Route exact path="/Hospital" element={<Hospital />} />
        <Route exact path="/Request" element={<Request />} />
        <Route exact path="/List" element={<List />} />
      </Routes>
    </div>
  );
};

export default App;
