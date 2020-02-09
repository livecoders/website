import React from "react";
import LogoImg from "../img/logo.png";
import Nav from "../components/nav";

export default () => {
  return (
    <header>
      <img src={LogoImg} alt={"Live Coders Logo"} />
      <Nav />
    </header>
  );
};
