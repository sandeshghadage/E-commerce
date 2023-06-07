import React from "react";
import style from "./Account.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Container} from "@mui/material";

function Account() {
  return (
    <div className={style.account}>
      <Container maxWidth="100vw">
        <Sidebar />
      </Container>
    </div>
  );
}

export default Account;
