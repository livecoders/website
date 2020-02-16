import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import Footer from "../components/footer";

import "../css/members.css";

import TwitchLogo from "../img/icons/twitch-brands.svg";
import GitHubLogo from "../img/icons/github-square-brands.svg";
import TwitterLogo from "../img/icons/twitter-square-brands.svg";

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
      <div id="membersHeader">
        <Header />
        <h1>Team Members</h1>
        <p>
          Placeholder Text to explain about members and the variety of them.
          They da bomb.
        </p>
        <Link to="/about" className="btn">
          Learn about Membership
        </Link>
      </div>
      <div id="membersGrid">
        {data.allMdx.nodes.map(person => {
          return (
            <div
              className="member"
              key={`person-${person.frontmatter.username}`}
            >
              <Link
                to={`/members/${person.frontmatter.username}`}
                className="memberName"
              >
                <h2>{person.frontmatter.username}</h2>
              </Link>
              <Img
                fluid={person.frontmatter.profile.childImageSharp.fluid}
                style={{ maxWidth: 400 }}
              />
              <div className="tags">
                <ul>
                  {person.frontmatter.tags.map(tag => (
                    <li key={`tag-${tag}`}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="socials">
                <a href={`https://twitch.tv/${person.frontmatter.username}`}>
                  <img src={TwitchLogo} alt="" />
                </a>
                <a href={`https://github.com/${person.frontmatter.github}`}>
                  <img src={GitHubLogo} alt="" />
                </a>
                <a href={`https://twitter.com/${person.frontmatter.twitter}`}>
                  <img src={TwitterLogo} alt="" />
                </a>
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
