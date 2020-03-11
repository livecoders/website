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
        <div>
          <h1>Team Members</h1>
          <p>
            Placeholder Text to explain about members and the variety of them.
            They da bomb.
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
            twitter
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
