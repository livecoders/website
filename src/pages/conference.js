import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import Footer from "../components/footer"

import IwdImg from "../img/iwd-header.jpg"
import OgImage from "../img/og-iwd-image-gmt.jpg"
import ProgressSponsorImg from "../img/progress-sponsor.jpg"
import AranaSponsorImg from "../img/arana-sponsor.jpg"
import AssemblyAISponsorImg from "../img/assemblyai-sponsor.jpg"

import "../css/index.css"

const title = `Conference | The Live Coders`
const description = `The Live Coders presents International Women's Day Challenge`

console.log(process.env.NODE_ENV)

const siteUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://livecoders.dev"

export default () => (
  <React.Fragment>
    <Header />
    <Helmet
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        { property: `og:title`, content: title },
        { property: `og:description`, content: description },
        { property: `og:type`, content: `website` },
        { property: `twitter:card`, content: `summary_large_image` },
        { property: `twitter:creator`, content: `The Live Coders` },
        { property: `twitter:title`, content: title },
        { property: `twitter:description`, content: description },
        {
          property: `twitter:image`,
          content: `${siteUrl}${OgImage}`,
        },
      ]}
    />
    <div className="head">
      <section>
        <div name="schedule" id="schedule" />
        <h1>International Women's Day Challenge</h1>
        <h2>March 8th, 2021</h2>
      </section>
      <section>
        <img
          src={IwdImg}
          alt="Confernce graphic featuring The Live Coders mascots collaborating over a Laptop"
        />
      </section>
      <section style={{ padding: "0 32px" }}>
        <p>
          The Live Coders presents "International Women's Day Challenge 2021"
        </p>
        <p>
          <a
            href="https://www.internationalwomensday.com/2021Theme"
            style={{ color: "white" }}
          >
            Visit the official website for International Women's Day
          </a>
        </p>
        <p>
          Women face many challenges in the community and in the workplace. On
          March 8th, 2021 from 5:00 am EST - 3:00 pm EST The Live Coders will be
          presenting 10 female speakers who have overcome a challenge
          (self-imposed or otherwise) in tech. We’re allocating 10 sessions for
          the tech community to present free educational sessions to the public
          to raise awareness about the challenges women in tech face.
        </p>
        <p>
          We will offer a full day, 10 hours of free content, and you won’t need
          to wake in the middle of the night to participate.
        </p>
        <p>
          We’re looking for female-identifying presenters to deliver a session
          about when they have challenged themselves in some way. We are hosting
          live-streamed presentations around human skills and/or using
          technologies.
        </p>
        <p>
          The call for content is now OPEN and we will be taking your
          submissions for content up until February 15th, 2021.
        </p>
        <p>
          Please submit your proposals for sessions on &nbsp;
          <a
            href="https://sessionize.com/womensday2021"
            style={{ color: "white" }}
          >
            the Sessionize website here.
          </a>
        </p>
        <p>We look forward to seeing you online in March!</p>
      </section>
      <section>
        Sessions:<br />
        <iframe title="Sessions" src="https://sessionize.com/api/v2/hg8851h8/view/Sessions" width="100%" height="500px" frameBorder="0" />
      </section>
      <section>
        <img
          src={ProgressSponsorImg}
          alt="Silver Sponsor - Progress"
          style={{marginTop: "3vh"}}
        />
        <section>
          <img
            src={AranaSponsorImg}
            alt="In-Kind Sponsor - Arana"
            style={{marginTop: "3vh"}}
          />
        </section>
        <section>
          <img
            src={AssemblyAISponsorImg}
            alt="In-Kind Sponsor - AssemblyAI"
            style={{marginTop: "3vh"}}
          />
        </section>
      </section>
    </div>
    <Footer />
  </React.Fragment >
)
