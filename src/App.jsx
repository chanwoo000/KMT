import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./pages/Logo/Logo";
import AddStore from "./pages/AddStore/AddStore";
import Map from "./pages/Map/Map";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/AddStore" element={<AddStore />} />
        <Route path="/Map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
