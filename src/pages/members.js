import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import Footer from "../components/footer";

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
      <Header />
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
              <Link to={`/members/${person.frontmatter.username}`}>
                <h1>{person.frontmatter.username}</h1>
              </Link>
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
      <Footer />
    </React.Fragment>
  );
};

export default MembersPage;
