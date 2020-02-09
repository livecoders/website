import React from "react";
import Nav from "../components/nav";

import VertLogo from "../img/logo-vert.png";

export default () => (
  <footer>
    <hr />
    <img src={VertLogo} style={{ width: 100 }} alt={"Live Coders Logo"} />
    <Nav />
  </footer>
);
