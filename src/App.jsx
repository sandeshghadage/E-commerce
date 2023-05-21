import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Bag from "./pages/bag/Bag";

export default function App() {
  return (
    <div>
      {/* dummy navbar */}
      <div style={{ width: "100vw", height: "10vh" }}></div>
      <Routes>
        <Route path="/bag" element={<Bag />}></Route>
      </Routes>
    </div>
  );
}
