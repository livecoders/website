import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

import LiveCodersImg from "../img/livecoders-2.jpg"
import ChatBubbleIcon from "../img/icons/comments-regular.svg"
import HeartIcon from "../img/icons/heart-regular.svg"
import KeyboardIcon from "../img/icons/keyboard-regular.svg"
import UserIcon from "../img/icons/user-regular.svg"
import TwitchIcon from "../img/icons/twitch-brands.svg"

import "../css/applications.css"

export default () => (
  <React.Fragment>
    <SEO title="Applications | The Live Coders" />
    <div className="head">
      <Header />
      <div>
        <h1>Apply to be part of the team</h1>
      </div>
    </div>
    <section id="criteria">
      <div>
        <h2>Qualifications</h2>
        <p>We want to ensure that broadcasters on the team are makers who have made a commitment 
          to broadcast on the Twitch platform with a positive and welcoming atmosphere. 
          Members and prospective members:</p>
          <ul>
            <li>Are at least 18 years of age.</li>
            <li>Twitch Affiliate or Partner status.</li>
            <li>Minimum of 5 average viewers over the last 30 days.</li>
            <li>During broadcasts, politely answer questions from viewers.</li>
            <li>Promote a positive, inclusive, and welcoming chat room (we discourage excessive Blue Comedy/Ribaldry).</li>
            <li>Regularly write code or make hardware with technology. Other content is cool.</li>
            <li>Are a person, not a brand or company account.</li>
          </ul>
      </div>
    </section>
    <section id="process">
      <div>
        <h2>The Process</h2>
        <p>Live coder team members will review and ensure that prospective channels meet these requirements 
          before admitting new members to the team. Reviews are conducted at the end of each month. 
          Please don't be discouraged if it takes some time for feedback.</p>
      </div>
    </section>
    <section id="why">
      <div>
        <h2>Why this page exists</h2>
        <p>
          After a year and a half The Live Coders has grown from the initial intake to 190+ members. That's 
          almost 10 new members per month. With that, we want to be more open about the application process
          and make what we do more transparent to all. This makes sure you get correct and timely feedback 
          on your application. 
          We are improving the process continuously and this page is a step in that direction.  
        </p>
      </div>
    </section>
    <section id="faq">
      <div>
        <h2>Frequent Questions</h2>
        <p>
          We want to ensure that broadcasters on the team are makers who have made
          a commitment to broadcast on the Twitch platform with a positive and
          welcoming atmosphere. Members and prospective members:
        </p>
      </div>
    </section>
    <Footer />
  </React.Fragment>
)
