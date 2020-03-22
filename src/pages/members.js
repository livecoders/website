import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";

import "../css/members.css";

import TwitchLogo from "../img/icons/twitch-brands.svg";
import GitHubLogo from "../img/icons/github-square-brands.svg";
import TwitterLogo from "../img/icons/twitter-square-brands.svg";
import DevtoLogo from "../img/icons/dev-brands.svg";
import InstagramLogo from "../img/icons/instagram-brands.svg";
import YouTubeLogo from "../img/icons/youtube-brands.svg";

const MembersPage = props => {
  let data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___username, order: ASC }) {
        nodes {
          frontmatter {
            username
            twitter
            github
            tags
            devto
            instagram
            youtube
            profile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <SEO title="Team Members | The Live Coders" />
      <div id="membersHeader">
        <Header />
        <div>
          <h1>Team Members</h1>
          <p>
            Our team members are incredibly varied in skills and background. We
            probably have at least a couple of members who work in languages or
            with tools you like!
          </p>
          <Link to="/about" className="btn">
            Learn about Membership
          </Link>
        </div>
      </div>
      <div id="membersGrid">
        {data.allMdx.nodes.map(person => {
          const {
            username,
            profile,
            tags,
            github,
            twitter,
            devto,
            instagram,
            youtube
          } = person.frontmatter;

          return (
            <div className="member" key={`person-${username}`}>
              <Link to={`/members/${username}`} className="memberName">
                <h2>{person.frontmatter.username}</h2>
              </Link>
              <Link to={`/members/${username}`}>
                <Img fluid={profile.childImageSharp.fluid} />
              </Link>
              <div className="tags">
                <ul>
                  {tags && tags.map(tag => <li key={`tag-${tag}`}>{tag}</li>)}
                </ul>
              </div>
              <div className="socials">
                <a href={`https://twitch.tv/${username}`}>
                  <img src={TwitchLogo} alt="" />
                </a>
                {github && (
                  <a href={`https://github.com/${github}`}>
                    <img src={GitHubLogo} alt="" />
                  </a>
                )}
                {twitter && (
                  <a href={`https://twitter.com/${twitter}`}>
                    <img src={TwitterLogo} alt="" />
                  </a>
                )}
                {devto && (
                  <a href={`https://dev.to/${devto}`}>
                    <img src={DevtoLogo} alt="" />
                  </a>
                )}
                {instagram && (
                  <a href={`https://instagram.com/${instagram}`}>
                    <img src={InstagramLogo} alt="" />
                  </a>
                )}
                {youtube && (
                  <a href={youtube}>
                    <img src={YouTubeLogo} alt="" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default MembersPage;
