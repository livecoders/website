import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

import Schedule from "../components/conference/schedule"
import Speakers from "../components/conference/speakers"

import "../css/index.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default () => (
  <React.Fragment>
    <SEO title="LCC3 | The Live Coders" />
    <Header />
    <div className="head">
      <section>
        <a name="schedule" id="schedule" />
        <h1>The Live Coders Conference 3</h1>
        <h2>November 19th, 2020</h2>
      </section>
      <section>
        <h2>Schedule</h2>
        <Schedule />
      </section>
      <section id="sponsors">
        <h2>Sponsors</h2>
        <p>Coming soon...</p>
      </section>
      <section>
        <h2>Speakers</h2>
        <Speakers />
      </section>
    </div>
    <Footer />
  </React.Fragment>
)
