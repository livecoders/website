import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const MembersPage = props => {
  let data = useStaticQuery(graphql`
    {
      allMdx {
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
      <h1>Team Members</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          margin: 10,
          gridGap: 20
        }}
      >
        {data.allMdx.nodes.map(person => {
          return (
            <div
              style={{
                border: "1px solid black"
              }}
            >
              <h1>{person.frontmatter.username}</h1>
              <Img
                fluid={person.frontmatter.profile.childImageSharp.fluid}
                style={{ maxWidth: 400 }}
              />
              <div className="tags">
                <ul>
                  {person.frontmatter.tags.map(tag => (
                    <li>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default MembersPage;
