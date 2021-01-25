import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

import "../css/index.css"

export default () => (
  <React.Fragment>
    <SEO title="LCC3 | The Live Coders" />
    <Header />
    <div>
      <h2>International Womens Day (placeholder)</h2>
      <p>Put the neat stuff here!</p>
    </div>
    <Footer />
  </React.Fragment>
)
