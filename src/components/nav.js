import React from "react";
import { Link } from "gatsby";

import "../css/nav.css";

export default () => (
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
    </ul>
  </nav>
);
