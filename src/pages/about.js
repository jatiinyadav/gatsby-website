import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const About = () => {
  return (
    <Layout pageTitle="About">
      <h1>About Page</h1>
      <StaticImage src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" alt="Imageee"/>
    </Layout>
  );
};

export const Head = () => <Seo title="About"></Seo>;

export default About;
