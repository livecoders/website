import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import useLiveCoderStats from "../hooks/useLiveCoderStats";

import LiveCodersImg from "../img/livecoders-1.jpg";
import ChatBubbleIcon from "../img/icons/comments-regular.svg";
import HeartIcon from "../img/icons/heart-regular.svg";
import KeyboardIcon from "../img/icons/keyboard-regular.svg";
import EnvelopeIcon from "../img/icons/envelope-regular.svg";
import IDBadgeIcon from "../img/icons/id-badge-regular.svg";
import HandSpockIcon from "../img/icons/hand-spock-regular.svg";
import FaunaLogo from "../img/fauna-logo.png";

import "../css/index.css";

export default () => {
  const stats = useLiveCoderStats();

  return (
    <React.Fragment>
      <SEO title="The Live Coders" />
      <div id="hero">
        <Header />
        <h1>Learn to Code by Watching Us</h1>
        <p>
          Be a part of a growing community of coders, developers, and
          technologists who love to stream their passions on Twitch.
        </p>
        <a
          href="https://github.com/livecoders/Home/issues/new?assignees=csharpfritz&labels=application&template=application.md&title=Application+for+Membership"
          className="btn"
        >
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
            Coders/Developers/Technologists. We provide a positive and
            encouraging environment for team members to grow professionally and
            personally regardless of their background, education or personal
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
              The Live Coders consists of many experienced and accomplished
              members with diverse backgrounds, such as Design, Front-End,
              Back-End, Stream Technologies and more!
            </p>
          </div>
          <div className="card">
            <span className="icon">
              <img src={HeartIcon} alt="" />
            </span>
            <h3>Team support with event promotions and raids</h3>
            <p>
              The Live Coders are proud to promote each other. We utilize
              Discord and other social media to support each other and promote
              various events which benefit members.
            </p>
          </div>
          <div className="card">
            <span className="icon">
              <img src={KeyboardIcon} alt="" />
            </span>
            <h3>Access to other professionals for technial guidance</h3>
            <p>
              We are so diverse in backgrounds, that nearly any technical
              question you have will receive an answer in our very active
              Discord server. We have channels for tech-help, project feedback,
              discussions, and more!
            </p>
          </div>
          <div className="card">
            <span className="icon">
              <img src={EnvelopeIcon} alt="" />
            </span>
            <h3>Invites to beta testing of features/software</h3>
            <p>
              Our members are always working on new projects, features, games,
              and more. When they need beta testers, they prefer to start within
              the team. This enables you to beta test various products/projects
              and offer valuable feedback!
            </p>
          </div>
          <div className="card">
            <span className="icon">
              <img src={IDBadgeIcon} alt="" />
            </span>
            <h3>Updates on team events (conferences, booths, etc)</h3>
            <p>
              We love putting on events, meeting up and discussing all things
              streaming and technology related! We make sure to keep our team
              members updated with the latest developments and build a welcoming
              environment.
            </p>
          </div>
          <div className="card">
            <span className="icon">
              <img src={HandSpockIcon} alt="" />
            </span>
            <h3>Logos, swag, & branding resources</h3>
            <p>
              We love showing off our awesome team. You will have access to
              branding resources such as logos, panels, wallpapers and more!
              Furthermore, we spoil our members with various swag items, such as
              our yearly jerseys (pictured above)!
            </p>
          </div>
        </div>
      </section>
      <section id="stats">
        <h2>This week's stats</h2>
        <div className="flex" id="statsFlex">
          <div>
            <p>{stats.streamersLive}</p>
            <p>Streamers Live</p>
          </div>
          <div>
            <p>{stats.totalDays}</p>
            <p>Total Days</p>
          </div>
          <div>
            <p>{stats.totalHours}</p>
            <p>Total Hours</p>
          </div>
          <div>
            <p>{stats.totalMinutes.toLocaleString()}</p>
            <p>Total Minutes</p>
          </div>
        </div>
        <p>
          These stats were collected from the{" "}
          <a
            href="https://livecoders-heatmap.netlify.com"
            style={{ color: "white" }}
          >
            Live Coders Heatmap
          </a>
        </p>
      </section>
      <section id="sponsors">
        <h2>Our Sponsors</h2>
        <div id="sponsorsGrid">
          <div>
            <a href="https://fauna.com/">
              <img src={FaunaLogo} alt="" style={{ width: 200 }} />
            </a>
            <hr style={{ marginTop: 0 }} />
            <p>
              FaunaDB: The database built for serverless, featuring native
              GraphQL
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};
