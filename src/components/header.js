import React from "react";
import LogoImg from "../img/live-coder-transparent.png";
import Nav from "../components/nav";

import "../css/header.css";

export default () => {
  return (
    <header>
      <img src={LogoImg} alt={"Live Coders Logo"} />
      <Nav />
    </header>
  );
};
