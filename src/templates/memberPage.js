import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Header from "../components/header";
import Footer from "../components/footer";

const MemberPageTemplate = props => {
  let { frontmatter, body } = props.data.mdx;

  return (
    <div>
      <Header />
      <Link to={"/members/"}>Back To Members Listing</Link>
      <h1>{frontmatter.username}</h1>
      <Img
        fluid={props.data.mdx.frontmatter.profile.childImageSharp.fluid}
        style={{ maxWidth: 400 }}
      />
      <h2>Links</h2>
      <ul>
        <li>
          <a href={`https://twitch.tv/${frontmatter.username}`}>Twitch</a>
        </li>
        {frontmatter.twitter && (
          <li>
            <a href={`https://twitter.com/${frontmatter.twitter}`}>Twitter</a>
          </li>
        )}
        {frontmatter.github && (
          <li>
            <a href={`https://github.com/${frontmatter.github}`}>GitHub</a>
          </li>
        )}
      </ul>
      <h2>Tags</h2>
      {frontmatter.tags && (
        <ul>
          {frontmatter.tags.map(tag => (
            <li>{tag}</li>
          ))}
        </ul>
      )}
      <MDXRenderer>{body}</MDXRenderer>
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
