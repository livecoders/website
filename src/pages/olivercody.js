import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

// import LiveCodersImg from "../img/livecoders-2.jpg"
// import ChatBubbleIcon from "../img/icons/comments-regular.svg"
// import HeartIcon from "../img/icons/heart-regular.svg"
// import KeyboardIcon from "../img/icons/keyboard-regular.svg"
// import UserIcon from "../img/icons/user-regular.svg"
// import TwitchIcon from "../img/icons/twitch-brands.svg"

import Oliver from "../img/olive_transparent.png"
import Cody from "../img/cody_transparent.png"
import OliverCody from "../img/olive_and_cody_transparent.png"

import "../css/olivercody.css"

export default () => (
  <React.Fragment>
    <SEO title="Oliver and Cody" />
    <div className="head">
      <Header />
      <div>
        <h1>Oliver and Cody</h1>
        
      </div>
    </div>
    <section id="whoAreWe">
      <div>
        <h2>Who Are We?</h2>
        <p>
         Hey all, thanks for dropping by.  We are Oliver and Cody we are brother and sister
         and we enjoy programming together.
        </p>
        <p>We want you to come and join us, so we can all learn together.</p>
    </div>
    <img src={OliverCody} alt="some of the Live Coders" />
    </section>
    <Footer />
  </React.Fragment>
)
