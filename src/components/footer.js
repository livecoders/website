import React from "react";
import Nav from "../components/nav";

import VertLogo from "../img/logo-vert.png";
import GitHubLogo from "../img/github.svg";
import TwitterLogo from "../img/twitter.svg";

import "../css/footer.css";

export default () => (
  <footer>
    <hr />
    <section className="flex">
      <div className="footerLogo">
        <img src={VertLogo} alt={"Live Coders Logo"} />
      </div>
      <div className="navigation">
        <Nav />
        <div>
          <a href="https://github.com/livecoders">
            <img src={GitHubLogo} alt={"GitHub Logo"} />
          </a>
          <a href="https://twitter.com/thelivecoders">
            <img src={TwitterLogo} alt={"Twitter Logo"} />
          </a>
        </div>
      </div>
    </section>
  </footer>
);
