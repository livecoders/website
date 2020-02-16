import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";

import LiveCodersImg from "../img/livecoders-1.jpg";
import ChatBubbleIcon from "../img/icons/comments-regular.svg";
import HeartIcon from "../img/icons/heart-regular.svg";
import KeyboardIcon from "../img/icons/keyboard-regular.svg";
import EnvelopeIcon from "../img/icons/envelope-regular.svg";
import IDBadgeIcon from "../img/icons/id-badge-regular.svg";
import HandSpockIcon from "../img/icons/hand-spock-regular.svg";

import "../css/index.css";

export default () => (
  <React.Fragment>
    <div id="hero">
      <Header />
      <h1>Learn to Code by Watching Us</h1>
      <p>
        Be a part of a growing community of coders, developers, and
        technologists who love to stream their passions on Twitch.
      </p>
      <a href="#" className="btn">
        Join Us
      </a>
    </div>
    <section id="missionStatement">
      <img
        src={LiveCodersImg}
        alt="Some of the Live Coders from TwitchCon NA 2019"
      />
      <div>
        <h2>Mission Statement</h2>
        <p>
          Our purpose is to support streamers who are also
          Coders/Developers/Technologists. We provide a positive and encouraging
          environment for team members to grow professionally and personally
          regardless of their background, education or personal
          identification/sexual orientation.
        </p>
        <Link to="/about" className="btn">
          Read More
        </Link>
      </div>
    </section>
    <section id="whyJoin">
      <h2>Why join the Live Coders?</h2>
      <div className="twoByThreeGrid">
        <div className="card">
          <span className="icon">
            <img src={ChatBubbleIcon} alt="" />
          </span>
          <h3>Collaborate with other thought leaders in your industry</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            porro ratione reprehenderit sapiente ducimus facilis libero
            praesentium et ipsum, dolore mollitia vitae eaque id aperiam dolores
            debitis eligendi iure quae?
          </p>
        </div>
        <div className="card">
          <span className="icon">
            <img src={HeartIcon} alt="" />
          </span>
          <h3>Team support with event promotions and raids</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            porro ratione reprehenderit sapiente ducimus facilis libero
            praesentium et ipsum, dolore mollitia vitae eaque id aperiam dolores
            debitis eligendi iure quae?
          </p>
        </div>
        <div className="card">
          <span className="icon">
            <img src={KeyboardIcon} alt="" />
          </span>
          <h3>Access to other professionals for technial guidance</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            porro ratione reprehenderit sapiente ducimus facilis libero
            praesentium et ipsum, dolore mollitia vitae eaque id aperiam dolores
            debitis eligendi iure quae?
          </p>
        </div>
        <div className="card">
          <span className="icon">
            <img src={EnvelopeIcon} alt="" />
          </span>
          <h3>Invites to beta testing of features/software</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            porro ratione reprehenderit sapiente ducimus facilis libero
            praesentium et ipsum, dolore mollitia vitae eaque id aperiam dolores
            debitis eligendi iure quae?
          </p>
        </div>
        <div className="card">
          <span className="icon">
            <img src={IDBadgeIcon} alt="" />
          </span>
          <h3>Updates on team events (conferences, booths, etc)</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            porro ratione reprehenderit sapiente ducimus facilis libero
            praesentium et ipsum, dolore mollitia vitae eaque id aperiam dolores
            debitis eligendi iure quae?
          </p>
        </div>
        <div className="card">
          <span className="icon">
            <img src={HandSpockIcon} alt="" />
          </span>
          <h3>Logos, swag, & branding resources</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            porro ratione reprehenderit sapiente ducimus facilis libero
            praesentium et ipsum, dolore mollitia vitae eaque id aperiam dolores
            debitis eligendi iure quae?
          </p>
        </div>
      </div>
    </section>
    <section id="stats">
      <h2>This week's stats</h2>
      <div className="flex" id="statsFlex">
        <div>
          <p>46</p>
          <p>Streamers Live</p>
        </div>
        <div>
          <p>10</p>
          <p>Total Days</p>
        </div>
        <div>
          <p>250</p>
          <p>Total Hours</p>
        </div>
        <div>
          <p>15,037</p>
          <p>Total Minutes</p>
        </div>
      </div>
    </section>
    <section id="sponsors">
      <h2>Our Sponsors</h2>
      <div id="sponsorsGrid">
        <div>
          <p>Sponsor</p>
          <hr />
          <p>
            Thanks to Sponsor for supporting us. Check their countent out for X
          </p>
        </div>
        <div>
          <p>Sponsor</p>
          <hr />
          <p>
            Thanks to Sponsor for supporting us. Check their countent out for X
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </React.Fragment>
);
