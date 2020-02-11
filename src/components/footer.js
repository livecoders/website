import React from "react";
import Nav from "../components/nav";

import VertLogo from "../img/logo-vert.png";
import GitHubLogo from "../img/github.svg";
import TwitterLogo from "../img/twitter.svg";

export default () => (
  <footer>
    <hr />
    <div className={"flex"}>
      <div style={{ flex: 1 }}>
        <img src={VertLogo} style={{ width: 100 }} alt={"Live Coders Logo"} />
      </div>
      <div>
        <Nav />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: 20
          }}
        >
          <a href="https://github.com/livecoders">
            <img
              src={GitHubLogo}
              style={{ width: 32, marginRight: 20 }}
              alt={"GitHub Logo"}
            />
          </a>
          <a href="https://twitter.com/thelivecoders">
            <img src={TwitterLogo} style={{ width: 32 }} alt={"Twitter Logo"} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
