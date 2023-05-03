import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Nav from "../components/nav"
import { GatsbyImage } from "gatsby-plugin-image"

import GitHubLogo from "../img/icons/github-square-brands.svg"
import TwitterLogo from "../img/icons/twitter-square-brands.svg"
import TwitchLogo from "../img/icons/twitch-brands.svg"
import YouTubeLogo from "../img/icons/youtube-brands.svg"

import "../css/footer.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    logo: file(relativePath: { eq: "img/logo-vert.png" }) {
      childImageSharp {
        gatsbyImageData(width: 100, layout: FIXED)
      }
    }
  }
  `);

  return (
  <footer>
    <hr />
    <section className="flex">
      <div className="footerLogo">
        <GatsbyImage
          image={data.logo.childImageSharp.gatsbyImageData}
          alt={"Live Coders Logo"}
        />
      </div>
      <div className="navigation">
        <Nav isFooter={true} />
        <div>
          <a
            href="https://github.com/livecoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubLogo} alt={"GitHub Logo"} />
          </a>
          <a
            href="https://twitter.com/thelivecoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitterLogo} alt={"Twitter Logo"} />
          </a>
          <a
            href="https://www.twitch.tv/team/livecoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitchLogo} alt={"Twitch Logo"} />
          </a>
          <a
            href="https://www.youtube.com/thelivecoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={YouTubeLogo} alt={"YouTube Logo"} />
          </a>
        </div>
        <Link to="/coc/" className="foot-coc">
          Code of Conduct (Report Violation)
        </Link>

        <span className="f-awesome-attribute">
          Icons by{" "}
          <a href="https://fontawesome.com/license/free">Font Awesome</a>
        </span>
      </div>
    </section>
  </footer>
  );
};
export default Footer;