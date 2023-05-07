import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"

import "../css/olivecody.css"

const renderPage = () => (
  <React.Fragment>
    <Seo title="404 - Page not found" />
    <Header />

    <div className="head">
      <div>
        <h1>404 - Page not found</h1>
      </div>
    </div>

    <Footer />
  </React.Fragment>
);
export default renderPage;
