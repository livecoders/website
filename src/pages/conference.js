// Most code was duplicated from lcc3.js

import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components" 

import Header from "../components/header"
import Footer from "../components/footer"

import IwdImg from "../img/iwd-header.jpg"
import OgImage from "../img/og-iwd-image-gmt.jpg"

import Schedule from "../components/conference/schedule"
import Speakers from "../components/conference/speakers"
import Sponsors from "../components/conference/sponsors"

import "../css/index.css"

const title = `Conference | The Live Coders` // Imported from original LCC4 conference page
const description = `The Live Coders presents International Women's Day Challenge`

console.log(process.env.NODE_ENV)

const siteUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://livecoders.dev"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const MainSection = styled.div`
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,8,56,1) 40%, rgba(60,9,121,1) 70%, rgba(88,0,129,1) 100%);
  
  text-align: center;
  padding-bottom: 2vh;

  .center {
    display: flex;
    justify-content: center;
    padding: 3vh 0;
  }

  div {
    padding: 32px;
  }

  h1 {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 600px) {
    #sponsors {
      margin: 0;
      padding: 0;
    }
  }
`

// Helmet replaces the old SEO component, added new image banner and updated appropriate info.
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
    <MainSection>
      <section className="center">
        <img
          src={IwdImg}
          alt="Confernce graphic featuring The Live Coders mascots collaborating over a Laptop"
        />
      </section>

      <section>
        <div name="schedule" id="schedule" />
        <h1>International Women's Day Challenge</h1>
        <h2>March 8th, 2021</h2>
      </section>

      <section>
        <h2>Schedule</h2>
        <Schedule />
      </section>
      <section>
        <h2>Speakers</h2>
        <Speakers />
      </section>
      <section id="sponsors">
        <h2>Sponsors</h2>
        <Sponsors />
      </section>
    </MainSection>
    <Footer />
    <div id="modal"></div>
  </React.Fragment>
)
