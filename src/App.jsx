import React, { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Bag from "./pages/bag/Bag";
import NewAppBar from "./components/header/AppBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";


export default function App() {
  return (
    <Fragment>
      <NewAppBar />
      <Routes>
        <Route path="/categories" element={<h1>shop</h1>} />
        <Route path="/about-us" element={<h1>about-us</h1>} />
        <Route
          path="/terms-and-conditions"
          element={<h1>terms-condition</h1>}
        />
        <Route path="/privacy-policy" element={<h1>privacy-policy</h1>} />
        <Route path="/support" element={<h1>Support</h1>} />
        <Route path="/change-language" element={<h1>change language</h1>} />
        <Route path='/' element={<Home />}/>
        <Route path="/bag" element={<Bag />}></Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}
