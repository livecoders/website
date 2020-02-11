import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import "../css/index.css";

export default () => (
  <div>
    <Header />
    <div
      id="hero"
      style={{ textAlign: "center", paddingTop: 100, paddingBottom: 100 }}
    >
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
      <div>
        <h2>Mission Statement</h2>
        <p>
          Our purpose is to support streamers who are also
          Coders/Developers/Technologists. We provide a positive and encouraging
          environment for team members to grow professionally and personally
          regardless of their background, education or personal
          identification/sexual orientation.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </section>
    <section>
      <h2>Why join the Live Coders?</h2>
      <div className="twoByThreeGrid">
        <div className="card">
          <span className="icon"></span>
          <h3>Collaborate with other thought leaders in your industry</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            porro ratione reprehenderit sapiente ducimus facilis libero
            praesentium et ipsum, dolore mollitia vitae eaque id aperiam dolores
            debitis eligendi iure quae?
          </p>
        </div>
        <div className="card">
          <span className="icon"></span>
          <h3>Team support with event promotions and raids</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            porro ratione reprehenderit sapiente ducimus facilis libero
            praesentium et ipsum, dolore mollitia vitae eaque id aperiam dolores
            debitis eligendi iure quae?
          </p>
        </div>
        <div className="card">
          <span className="icon"></span>
          <h3>Access to other professionals for technial guidance</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            porro ratione reprehenderit sapiente ducimus facilis libero
            praesentium et ipsum, dolore mollitia vitae eaque id aperiam dolores
            debitis eligendi iure quae?
          </p>
        </div>
        <div className="card">
          <span className="icon"></span>
          <h3>Invites to beta testing of features/software</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            porro ratione reprehenderit sapiente ducimus facilis libero
            praesentium et ipsum, dolore mollitia vitae eaque id aperiam dolores
            debitis eligendi iure quae?
          </p>
        </div>
        <div className="card">
          <span className="icon"></span>
          <h3>Updates on team events (conferences, booths, etc)</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            porro ratione reprehenderit sapiente ducimus facilis libero
            praesentium et ipsum, dolore mollitia vitae eaque id aperiam dolores
            debitis eligendi iure quae?
          </p>
        </div>
        <div className="card">
          <span className="icon"></span>
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
    <section>
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
    <section>
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
  </div>
);
