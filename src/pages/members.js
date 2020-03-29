import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";

import "../css/members.css";

import TwitchLogo from "../img/icons/twitch-brands.svg";
import GitHubLogo from "../img/icons/github-square-brands.svg";
import BitbucketLogo from "../img/icons/bitbucket-brands.svg";
import TwitterLogo from "../img/icons/twitter-square-brands.svg";
import DevtoLogo from "../img/icons/dev-brands.svg";
import InstagramLogo from "../img/icons/instagram-brands.svg";
import YouTubeLogo from "../img/icons/youtube-brands.svg";
import LinkedInLogo from "../img/icons/linkedin-in-brands.svg";

const MembersPage = props => {
  const [filter, setFilter] = useState("");

  const handleChange = evt => {
    setFilter(evt.target.value);
  };

  let data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          frontmatter {
            username
            twitter
            github
            tags
            devto
            instagram
            youtube
            linkedin
            bitbucket
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

  let members = data.allMdx.nodes;

  members = members.sort((a, b) => {
    return (
      a.frontmatter.username.toLowerCase() >
      b.frontmatter.username.toLowerCase()
    );
  });

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
          <h3>Filter</h3>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search for members"
            className="filterInput"
          />
        </div>
      </div>
      <div id="membersGrid">
        {members
          .filter(person => {
            if (filter === "") return true;

            return person.frontmatter.username
              .toLowerCase()
              .includes(filter.toLowerCase());
          })
          .map(person => {
            const {
              username,
              profile,
              tags,
              github,
              twitter,
              devto,
              instagram,
              youtube,
              linkedin,
              bitbucket
            } = person.frontmatter;

            return (
              <div className="member" key={`person-${username}`}>
                <Link
                  to={`/members/${username.toLowerCase()}`}
                  className="memberName"
                >
                  <h2>{person.frontmatter.username}</h2>
                </Link>
                <Link to={`/members/${username.toLowerCase()}`}>
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
                  {bitbucket && (
                    <a
                      href={`https://bitbucket.com/${bitbucket}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={BitbucketLogo} alt="" />
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
                  {linkedin && (
                    <a
                      href={`https://linkedin.com/in/${linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={LinkedInLogo} alt="LinkedIn Account" />
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
