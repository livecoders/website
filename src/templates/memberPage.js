import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"

import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"

import "../css/memberPage.css"

import TwitchLogo from "../img/icons/twitch-brands.svg"
import GitHubLogo from "../img/icons/github-square-brands.svg"
import BitbucketLogo from "../img/icons/bitbucket-brands.svg"
import TwitterLogo from "../img/icons/twitter-square-brands.svg"
import DevtoLogo from "../img/icons/dev-brands.svg"
import InstagramLogo from "../img/icons/instagram-brands.svg"
import YouTubeLogo from "../img/icons/youtube-brands.svg"
import LinkedInLogo from "../img/icons/linkedin-in-brands.svg"
import StackOverflowLogo from "../img/icons/stack-overflow-brands.svg"

const MemberPageTemplate = (props) => {
  let { frontmatter } = props.data.mdx
  const body = (props.data.mdx.body || "").trim();

  return (
    <div>
      <Seo
        title={`${frontmatter.username} | The Live Coders`}
        ogImage={`${frontmatter.username.toLowerCase()}.jpg`}
      />
      <div id="memberHeader">
        <Header />
        <div>
          <h1>{frontmatter.username}</h1>
          <ul id="memberSocials">
            <li key="twitch">
              <a
                href={`https://twitch.tv/${frontmatter.username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TwitchLogo} alt="" />
              </a>
            </li>
            {frontmatter.twitter && (
              <li key="twitter">
                <a
                  href={`https://twitter.com/${frontmatter.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={TwitterLogo} alt="" />
                </a>
              </li>
            )}
            {frontmatter.github && (
              <li key="github">
                <a
                  href={`https://github.com/${frontmatter.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHubLogo} alt="" />
                </a>
              </li>
            )}
            {frontmatter.bitbucket && (
              <li key="bitbucket">
                <a
                  href={`https://bitbucket.com/${frontmatter.bitbucket}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={BitbucketLogo} alt="" />
                </a>
              </li>
            )}
            {frontmatter.devto && (
              <li key="devto">
                <a
                  href={`https://dev.to/${frontmatter.devto}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={DevtoLogo} alt="" />
                </a>
              </li>
            )}
            {frontmatter.instagram && (
              <li key="instagram">
                <a
                  href={`https://instagram.com/${frontmatter.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={InstagramLogo} alt="" />
                </a>
              </li>
            )}
            {frontmatter.youtube && (
              <li key="youtube">
                <a
                  href={frontmatter.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={YouTubeLogo} alt="" />
                </a>
              </li>
            )}
            {frontmatter.linkedin && (
              <li key="linkedin">
                <a
                  href={`https://linkedin.com/in/${frontmatter.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedInLogo} alt="LinkedIn Account" />
                </a>
              </li>
            )}
            {frontmatter.stackoverflow && (
              <li key="stackoverflow">
                <a
                  href={`https://stackoverflow.com/users/${frontmatter.stackoverflow}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={StackOverflowLogo} alt="StackOverflow Account" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <section id="memberIntro">
        <div className="shadowWrapper">
          <GatsbyImage image={props.data.mdx.frontmatter.profile.childImageSharp.gatsbyImageData} alt={frontmatter.username} />
        </div>
        <div id="memberIntroContent">
          { body ?
            <MDXProvider>
              {props.children}
            </MDXProvider>
          :<React.Fragment>
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
          }
        </div>
      </section>
      {(frontmatter.tags || frontmatter.schedule || frontmatter.sites) && (
        <section id="memberMetadata">
          {frontmatter.tags && (
            <div className="tags">
              <h3>Tags</h3>
              <hr />
              <ul>
                {frontmatter.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          )}

          {frontmatter.schedule && (
            <div id="memberSchedule">
              <h3>Schedule</h3>
              <hr />
              <ul>
                {frontmatter.schedule.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
          )}

          {frontmatter.sites && (
            <div id="memberWebsites">
              <h3>Websites</h3>
              <hr />
              <ul>
                {frontmatter.sites.map((site) => (
                  <li key={site}>
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
  )
}

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
        bitbucket
        devto
        youtube
        instagram
        linkedin
        stackoverflow
        tags
        schedule
        sites
        profile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
