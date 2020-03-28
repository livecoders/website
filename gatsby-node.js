const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type MdxFrontmatter {
      # Required fields
      username: String!
      profile: File! # Relative Path to profile image

      # Social Links (Your username for each platform)
      twitter: String
      github: String
      instagram: String
      devto: String
      youtube: String # This is the full URL as not all channels have a vanity URL
      linkedin: String
      bitbucket: String

      # Misc fields
      sites: [String]
      tags: [String]
      schedule: [String]
    }
  `;

  createTypes(typeDefs);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: "slug",
      value: value
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const queryResult = await graphql(`
    {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  if (queryResult.errors) {
    reporter.panicOnBuild('Error with Loading "createPages" query');
  }

  const memberPages = queryResult.data.allMdx.nodes;

  memberPages.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/memberPage.js"),
      context: { id: node.id }
    });
  });
};
