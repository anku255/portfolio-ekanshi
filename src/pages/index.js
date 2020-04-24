import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import Layout from '../components/Layout';
import SocialButtons from '../components/SocialButtons';
import ArrowLink from '../components/ArrowLink';

const IndexPage = props => {
  const heroImage = props.data.file.childImageSharp.fluid;

  const resumeUrl = `https:${props.data.contentfulResume.file.file.url}`;

  return (
    <Layout resumeUrl={resumeUrl}>
      <div className="home-page">
        <section className="section__hero">
          <div className="section__image">
            <Img fluid={heroImage} alt="A girl sitting on clouds" />
          </div>
          <div className="section__content">
            <h1 className="section__title">Ekanshi Kiran</h1>
            <div className="section__about">
              <p>
                Hello there! Thanks for stopping by. I am Ekanshi Kiran, and I am a designer in the making. I have a
                passion for web designing and love to create for web and mobile devices. I have been exploring areas
                like graphic designing, product designing and 3D modelling. I have completed my B.Des from National
                institute of Fashion Technology, Gandhinagar.
              </p>
              <p>
                I believe in simplicity and minimalism and my work displays the same. My goals are to focus on
                wireframing, layouting and conveying the right message to my clients. I have also been experimenting
                with 3D illustration and new technology like virtual reality, as things can be made better and creative
                with them.
              </p>
            </div>
            <div className="section__projects">
              <Link to="/projects">Projects</Link>
            </div>
          </div>
        </section>
        <SocialButtons vertical />
        <ArrowLink position="right" to="projects" label="Projects" />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "illustration.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    contentfulResume(name: { eq: "Resume" }) {
      file {
        file {
          url
        }
      }
    }
  }
`;
