import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SocialButtons from '../components/SocialButtons';
import ArrowLink from '../components/ArrowLink';

const IndexPage = props => {
  const heroImage = props.data.file.childImageSharp.fluid;
  return (
    <Layout>
      <div className="home-page">
        <section className="section__hero">
          <div className="section__image">
            <Img fluid={heroImage} alt="A girl sitting on clouds" />
          </div>
          <div className="section__content">
            <h1 className="section__title">Ekanshi Kiran</h1>
            <div className="section__about">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur cum numquam cumque deleniti
                recusandae quidem ullam suscipit atque quod! Voluptatibus.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nam veniam aliquid praesentium omnis
                eveniet! Repellat officiis cupiditate, adipisci, omnis harum dolorem deserunt ipsam quo debitis
                doloribus assumenda optio recusandae.
              </p>
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
  }
`;
