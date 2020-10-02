import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"

import VertLogo from "../img/logo-vert.png"
import GitHubLogo from "../img/icons/github-square-brands.svg"
import TwitterLogo from "../img/icons/twitter-square-brands.svg"
import TwitchLogo from "../img/icons/twitch-brands.svg"
import YouTubeLogo from "../img/icons/youtube-brands.svg"

import "../css/footer.css"

export default () => (
  <footer>
    <hr />
    <section className="flex">
      <div className="footerLogo">
        <img src={VertLogo} alt={"Live Coders Logo"} />
      </div>
      <div className="navigation">
        <Nav isFooter={true} />
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
          <a
            href="https://www.twitch.tv/team/livecoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitchLogo} alt={"Twitch Logo"} />
          </a>
          <a
            href="https://www.youtube.com/thelivecoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={YouTubeLogo} alt={"YouTube Logo"} />
          </a>
        </div>
        <Link
          to="/coc/"
          style={{
            textAlign: "right",
            marginRight: 20,
            marginTop: 20,
          }}
        >
          Code of Conduct
        </Link>
        <span
          style={{
            textAlign: "right",
            marginRight: 20,
            fontWeight: 400,
          }}
        >
          Icons by{" "}
          <a href="https://fontawesome.com/license/free">Font Awesome</a>
        </span>
      </div>
    </section>
  </footer>
)
