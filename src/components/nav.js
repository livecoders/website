import React from "react"
import { Link } from "gatsby"

import "../css/nav.css"

const Nav = ({ isFooter }) => (
  <nav aria-label={isFooter ? "Footer" : "Main"}>
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/conference"}>Conference</Link>
      </li>
      <li>
        <Link to={"/members"}>Team Members</Link>
      </li>
      <li>
        <Link to={"/applications"}>Join Us</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/olivecody"}>Olive and Cody</Link>
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
);
export default Nav;
