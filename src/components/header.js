import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"

import LogoImg from "../img/live-coder-transparent.png"

import "../css/header.css"

export default () => {
  return (
    <React.Fragment>
      <header>
        <Link to="/">
          <img src={LogoImg} alt={"Live Coders Logo"} />
        </Link>
        <Nav />
      </header>
    </React.Fragment>
  )
}
