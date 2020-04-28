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

import "../css/about.css"

export default () => (
  <React.Fragment>
    <SEO title="About | The Live Coders" />
    <div className="head">
      <Header />
      <div>
        <h1>About the Live Coders</h1>
        <p>
          We're a stream team of Live Coders who broadcast development-based
          edutainment on Twitch
        </p>
      </div>
    </div>
    <section id="whoAreWe">
      <div>
        <h2>Who Are We?</h2>
        <p>
          We are a group of technologists who are also broadcasters. We write
          code and make things while teaching viewers on Twitch. We believe that
          live video is an amazing opportunity to teach, and want to share our
          expertise
        </p>
        <p>
          You can find the team's page on Twitch at:
          https://twitch.tv/team/livecoders
        </p>
        <a href="https://twitch.tv/team/livecoders" className="btn">
          View Twitch Team Home Hub
        </a>
      </div>
      <img src={LiveCodersImg} alt="some of the Live Coders" />
    </section>
    <section id="qualifications">
      <h2>Qualifications to be a member</h2>
      <p>
        We want to ensure that broadcasters on the team are makers who have made
        a commitment to broadcast on the Twitch platform with a positive and
        welcoming atmosphere. Members and prospective members:
      </p>
      <div className="twoByThreeGrid">
        <div className="card">
          <span className="icon">
            <img src={TwitchIcon} alt="" />
          </span>
          <h3>Be a Twitch Affiliate or Partner</h3>
          <p>
            While Affiliate may seem daunting, we believe in you and are looking
            forward to welcoming you to the team soon!
          </p>
        </div>
        <div className="card">
          <span className="icon">
            <img src={ChatBubbleIcon} alt="" />
          </span>
          <h3>During broadcasts, politely answer questions from viewers</h3>
          <p>
            We value education and continuous learning/improvement. We love
            members who answer questions their viewers have, explain their
            projects and even help their community members succeed.
          </p>
        </div>
        <div className="card">
          <span className="icon">
            <img src={HeartIcon} alt="" />
          </span>
          <h3>Promote a positive, inclusive, and welcoming chat room</h3>
          <p>
            Viewer interaction and community building is one of our core drives
            for doing what we do. With that, we make sure that any potential
            members put their community first! If you provide a welcoming,
            educational and even fun environment for your viewers, you are sure
            to be a great fit!
          </p>
        </div>
        <div className="card">
          <span className="icon">
            <img src={UserIcon} alt="" />
          </span>
          <h3>Are a person, not a brand or company account</h3>
          <p>
            We are a team of individuals, and while some of us work for big
            companies and brands, we still represent ourselves. We value the
            same for new members.
          </p>
        </div>
        <div className="card">
          <span className="icon">
            <img src={KeyboardIcon} alt="" />
          </span>
          <h3>Regularly write code or make things with technology</h3>
          <p>
            While we love content such as gaming, just chatting and others, our
            primary focus is development. With that, we value members who
            regularly develop projects (games, websites, apps) or combine
            hardware with technology.
          </p>
        </div>
      </div>
      <p>
        Once you have submitted your application, The Live Coders team members
        will thoroughly review your application. Including your Twitch channel
        and other social media, before deciding whether to approve the
        application. Good luck!
      </p>
      <div className="flex">
        <a
          href="https://github.com/livecoders/Home/issues/new?assignees=csharpfritz&labels=application&template=application.md&title=Application+for+Membership"
          className="btn"
        >
          Apply Today
        </a>
      </div>
    </section>
    <Footer />
  </React.Fragment>
)
