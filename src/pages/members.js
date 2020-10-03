import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

import "../css/members.css"

import TwitchLogo from "../img/icons/twitch-brands.svg"
import GitHubLogo from "../img/icons/github-square-brands.svg"
import BitbucketLogo from "../img/icons/bitbucket-brands.svg"
import TwitterLogo from "../img/icons/twitter-square-brands.svg"
import DevtoLogo from "../img/icons/dev-brands.svg"
import InstagramLogo from "../img/icons/instagram-brands.svg"
import YouTubeLogo from "../img/icons/youtube-brands.svg"
import LinkedInLogo from "../img/icons/linkedin-in-brands.svg"

const MembersPage = (props) => {
  const [filter, setFilter] = useState("")
  const [filterTag,setFilterTag] = useState("")
  const handleChange = (evt) => {
    setFilter(evt.target.value)
  }
  const tagClick = (evt) => {
    setFilterTag( filterTag !== evt.target.innerText ? evt.target.innerText : "")
  }

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
  `)

  let members = data.allMdx.nodes

  members = members.sort((a, b) => {
    return (
      a.frontmatter.username.toLowerCase() >
      b.frontmatter.username.toLowerCase()
    )
  })


  let filterableTags = []
  
  //Grab all tags from members
  members.forEach(element => {
    if(element.frontmatter.tags)
      filterableTags = [].concat(filterableTags,element.frontmatter.tags.map(tag => tag.toLowerCase()))
  })

  filterableTags = filterableTags
    .filter((item, index) => filterableTags.indexOf(item) === index) //filter duplicates
    .filter((item, index) => filterableTags.reduce((tag,i) => tag + (i.toLowerCase() === item.toLowerCase()),0) > 3) //only thoses with 3 or more members
    
  
  filterableTags = filterableTags.sort((a, b) => {
    return (a.toLowerCase() > b.toLowerCase())
  })

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

        <div className="search-tags">
              {filterableTags &&
                filterableTags.map((tag) => <button key={`all-tag-${tag}`} className={filterTag === tag.toUpperCase() ? 'tag-selected' : ``} onClick={tagClick}>{tag}</button>)}
          </div>
        </div>
      </div>
      <div id="membersGrid">
        {members
          .filter((person) => {
            if (filter === "" && filterTag === "")  return true
            
            //Match on input text
            let usernameMatch =  person.frontmatter.username.toLowerCase().includes(filter.toLowerCase())
            let tagMatch = person.frontmatter.tags !== null && person.frontmatter.tags !== undefined && person.frontmatter.tags.filter((tag) => { return tag.toLowerCase().includes(filter.toLowerCase())}).length > 0
            //Match on tag clicked
            let tagSelected = person.frontmatter.tags !== null && person.frontmatter.tags !== undefined && person.frontmatter.tags.filter((tag) => { return tag.toUpperCase() === filterTag}).length > 0
            return (usernameMatch || tagMatch || filter === "") && (tagSelected || filterTag === "")
          })
          .map((person) => {
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
              bitbucket,
            } = person.frontmatter

            return (
              <div className="member" key={`person-${username}`}>
                <Link
                  to={`/members/${username.toLowerCase()}`}
                  className="memberName"
                >
                  <h2>{person.frontmatter.username}</h2>
                </Link>
                <Link
                  className="member-image"
                  to={`/members/${username.toLowerCase()}`}
                >
                  <Img fluid={profile.childImageSharp.fluid} />
                  <div className="inner-glow"></div>
                  <div className="inner-glow-top"></div>
                </Link>
                <div className="tags">
                    {tags &&
                      tags.filter((item, index) => tags.indexOf(item) === index).map((tag) => <button className={filterTag === tag.toUpperCase() ? 'tag-selected' : ``} key={`tag-${tag}`} onClick={tagClick}>{tag}</button>)}
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
            )
          })}
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default MembersPage
