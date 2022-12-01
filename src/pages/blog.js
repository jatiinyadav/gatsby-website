import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(sort: { frontmatter: { date: ASC } }) {
        nodes {
          frontmatter {
            date(formatString: "YYYY MMMM DD")
            title
            slug
          }
          id
          excerpt
        }
      }
    }
  `);

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <li key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted At: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </li>
        ))}
      </ul>

      {/* <p>My cool posts will go in here</p> */}
    </Layout>
  );
};

export const Head = () => <Seo title="Blog" />;

export default BlogPage;
