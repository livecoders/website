import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"

import VertLogo from "../img/logo-vert.png"
import GitHubLogo from "../img/icons/github-square-brands.svg"
import TwitterLogo from "../img/icons/twitter-square-brands.svg"

import "../css/footer.css"

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
          <a
            href="https://github.com/livecoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubLogo} alt={"GitHub Logo"} />
          </a>
          <a
            href="https://twitter.com/thelivecoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitterLogo} alt={"Twitter Logo"} />
          </a>
        </div>
        <Link
          to="/coc/"
          style={{
            textAlign: "right",
            marginRight: 20,
            color: "#e4e4e4",
            textDecoration: "none",
            marginTop: 20,
            fontWeight: 400,
          }}
        >
          Code of Conduct
        </Link>
      </div>
    </section>
  </footer>
)
