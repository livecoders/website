import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Olive from "../img/olive_transparent.png"
import Cody from "../img/cody_transparent.png"
import OliveCody from "../img/olive_and_cody_transparent.png"

import "../css/olivecody.css"

export default () => (
  <React.Fragment>
    <SEO title="Olive and Cody" />
    <div className="head">
      <Header />
      <div>
        <h1>Olive and Cody</h1>  
      </div>
    </div>
    <section id="whoAreWe">
      <div>
        <h2>Who Are We?</h2>
        <h3>
         Hey all, thanks for dropping by.  We are Olive and Cody, brother and sister
         and we enjoy programming together.
        </h3>
        <h3>We want you to come and join us, so we can all learn together.</h3>
      </div>
      </section>

      <section id="mascots">
        <div class="row">
          <div class="column">
          <img src={Olive} alt="" className="mascotSingle" />
            <h2>Hello World!, my name is Olive..</h2>
            <h3>..or Liv to my friends. I love to game and to code my own games.</h3>
          </div>
          
          <div class="column">
          <img src={Cody} alt="" className="mascotSingle" />
            <h2>Hey, I'm Cody..</h2>
            <h3>I love to build apps.</h3>
          </div>
          <div class="column">
          <img src={OliveCody} alt="" className="mascotSingle" />
            <h2>Sometimes, we even program together.</h2>
            <h3>We find it's really good to help each other out, so we pair program as well.</h3>
          </div>
        </div>
      </section>

    <Footer />
  </React.Fragment>
)