import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"

import LogoImg from "../img/live-coder-transparent.png"

import EventBanner from "./event-banner"

import "../css/header.css"

export default () => {
  return (
    <React.Fragment>
      <EventBanner
        link={"conference"}
        date={"March 8th, 2021"}
        title={"International Womens' Day Event"}
      />
      <header>
        <Link to="/">
          <img src={LogoImg} alt={"Live Coders Logo"} />
        </Link>
        <Nav />
      </header>
    </React.Fragment>
  )
}
