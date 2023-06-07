import React, { useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import FilterPopUp from "../cards/FilterPopUp.jsx";

function Filter() {
  const [open, setOpen] = useState(true);

  function handleOrderPopUp() {
    setOpen(false);
    alert("clicked");
  }

  return (
    <div>
      <div>
        {open ? (
          <button onClick={handleOrderPopUp}>
            {" "}
            <SortIcon />
            Filter
          </button>
        ) : (
          <FilterPopUp />
        )}
      </div>
    </div>
  );
}

export default Filter;
