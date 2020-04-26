import React from "react"
import { Link } from "gatsby"

import "../css/nav.css"

export default ({ isFooter }) => (
  <nav>
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/members"}>Team Members</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      {!isFooter && (
        <li>
          <a
            href="https://www.twitch.tv/team/livecoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitch
          </a>
        </li>
      )}
    </ul>
  </nav>
)
