import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Header from "../components/header";
import Footer from "../components/footer";

import "../css/memberPage.css";

import TwitchLogo from "../img/icons/twitch-brands.svg";
import GitHubLogo from "../img/icons/github-square-brands.svg";
import TwitterLogo from "../img/icons/twitter-square-brands.svg";

const MemberPageTemplate = props => {
  let { frontmatter, body } = props.data.mdx;

  return (
    <div>
      <div id="memberHeader">
        <Header />
        <div>
          <h1>{frontmatter.username}</h1>
          <ul id="memberSocials">
            <li>
              <a href={`https://twitch.tv/${frontmatter.username}`}>
                <img src={TwitchLogo} alt="" />
              </a>
            </li>
            {frontmatter.twitter && (
              <li>
                <a href={`https://twitter.com/${frontmatter.twitter}`}>
                  <img src={TwitterLogo} alt="" />
                </a>
              </li>
            )}
            {frontmatter.github && (
              <li>
                <a href={`https://github.com/${frontmatter.github}`}>
                  <img src={GitHubLogo} alt="" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <section id="memberIntro">
        <div className="shadowWrapper">
          <Img
            fluid={props.data.mdx.frontmatter.profile.childImageSharp.fluid}
          />
        </div>
        <div id="memberIntroContent">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
      <section id="memberMetadata">
        {frontmatter.tags && (
          <div>
            <h3>Tags</h3>
            <hr />
            <ul>
              {frontmatter.tags.map(tag => (
                <li>{tag}</li>
              ))}
            </ul>
          </div>
        )}

        {frontmatter.schedule && (
          <div>
            <h3>Schedule</h3>
            <hr />
            <ul>
              {frontmatter.schedule.map(entry => (
                <li>{entry}</li>
              ))}
            </ul>
          </div>
        )}

        {frontmatter.sites && (
          <div>
            <h3>Websites</h3>
            <hr />
            <ul>
              {frontmatter.sites.map(site => (
                <li>
                  <a href={site}>{site}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default MemberPageTemplate;

export const query = graphql`
  query MemberPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        username
        twitter
        github
        tags
        schedule
        sites
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
`;
