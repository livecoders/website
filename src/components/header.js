import React from "react";
import { Link } from "gatsby";
import Nav from "../components/nav";

import LogoImg from "../img/live-coder-transparent.png";

import "../css/header.css";

export default () => {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "#2c1643",
          borderBottom: "3px solid rgb(32, 3, 62)",
          padding: "10px 0px",
          textAlign: "center",
          marginBottom: 0
        }}
      >
        Tune in to The Live Coders Conference. Coming April 9th.{" "}
        <a style={{ color: "white " }} href="https://conf.livecoders.dev/">
          Learn More
        </a>
      </div>
      <header>
        <Link to="/">
          <img src={LogoImg} alt={"Live Coders Logo"} />
        </Link>
        <Nav />
      </header>
    </React.Fragment>
  );
};
