import React, { useState } from "react";
import AddressForm from "./components/form/AddressForm";
import AddressCard from "./components/cards/AddressCard";
import "./App.css";

export default function App() {
  const [isDialog, setIsDialog] = useState(false);
  return (
    <div className="app">
      <button onClick={() => setIsDialog(true)}>open Dialog</button>
      <AddressForm isDialog={isDialog} />
      <AddressCard />
    </div>
  );
}
