import React, { useState } from "react";
import AddressForm from "./components/form/AddressForm";

export default function App() {
  const [isDialog, setIsDialog] = useState(false);
  return (
    <div>
      <button onClick={() => setIsDialog(true)}>open Dialog</button>
      <AddressForm isDialog={isDialog} />
    </div>
  );
}
