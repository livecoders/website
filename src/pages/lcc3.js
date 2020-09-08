import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

export default () => (
  <React.Fragment>
    <SEO title="LCC3 | The Live Coders" />
    <div className="head">
      <Header />
      <div>
        <h1>Live Coders Conference 3, 2020</h1>
        <p>Version COVID - What is time?</p>
      </div>
    </div>

    <Footer />
  </React.Fragment>
)
