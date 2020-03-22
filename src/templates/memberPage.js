import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";

import "../css/memberPage.css";

import TwitchLogo from "../img/icons/twitch-brands.svg";
import GitHubLogo from "../img/icons/github-square-brands.svg";
import TwitterLogo from "../img/icons/twitter-square-brands.svg";
import DevtoLogo from "../img/icons/dev-brands.svg";
import InstagramLogo from "../img/icons/instagram-brands.svg";
import YouTubeLogo from "../img/icons/youtube-brands.svg";

const MemberPageTemplate = props => {
  let { frontmatter, body, wordCount } = props.data.mdx;

  return (
    <div>
      <SEO title={`${frontmatter.username} | The Live Coders`} />
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
            {frontmatter.devto && (
              <li>
                <a href={`https://dev.to/${frontmatter.devto}`}>
                  <img src={DevtoLogo} alt="" />
                </a>
              </li>
            )}
            {frontmatter.instagram && (
              <li>
                <a href={`https://instagram.com/${frontmatter.instagram}`}>
                  <img src={InstagramLogo} alt="" />
                </a>
              </li>
            )}
            {frontmatter.youtube && (
              <li>
                <a href={frontmatter.youtube}>
                  <img src={YouTubeLogo} alt="" />
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
          {wordCount.words ? (
            <MDXRenderer>{body}</MDXRenderer>
          ) : (
            <React.Fragment>
              <p>
                Hi There! The team member you are interested in has not (yet)
                provided their full profile information. Don't cry though! You
                can simply click on the Twitch logo below their name (look above
                their photo) and it will take you straight to the Twitch
                profile!
              </p>
              <p>
                If you come across one of these, feel free to remind the team
                member to fill out their page here. They may have just
                forgotten!
              </p>
            </React.Fragment>
          )}
        </div>
      </section>
      {(frontmatter.tags || frontmatter.schedule || frontmatter.sites) && (
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
      )}
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
      wordCount {
        words
      }
      frontmatter {
        username
        twitter
        github
        devto
        youtube
        instagram
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
