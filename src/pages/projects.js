import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Masonry from 'react-masonry-component';
import Layout from '../components/Layout';
import ArrowLink from '../components/ArrowLink';
import Footer from '../components/Footer';

const getItemWidth = columns => {
  switch (columns) {
    case 2:
      return '66.666%';
    case 3:
      return '100%';
    default:
      return '33.333%';
  }
};

class Projects extends Component {
  render() {
    const categories = this.props.data.categories.edges;

    return (
      <Layout>
        <Helmet>
          <title>Projects</title>
        </Helmet>
        <div className="projects-container">
          <h1 className="heading-primary">Projects</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem similique nemo et maxime sequi voluptas
            dolores incidunt maiores eligendi?
          </p>
          {categories.map(({ node: category }) => (
            <Masonry className="showcase">
              {category.projects &&
                category.projects.map(project => (
                  <div key={project.id} className="showcase__item" style={{ width: getItemWidth(project.columns) }}>
                    <Link to={`/image/${project.slug}`}>
                      <Img fluid={project.coverImage.fluid} />
                      <div
                        className="showcase__title__wrap"
                        onMouseEnter={e => {
                          e.target.style.background = category.backgroundColor;
                        }}
                        style={{
                          color: category.titleColor ? category.titleColor : '#252836',
                        }}
                      >
                        <div className="showcase__title">{project.title}</div>
                      </div>
                    </Link>
                  </div>
                ))}
            </Masonry>
          ))}
          <ArrowLink position="left" to="/" label="Home" />
          <ArrowLink position="right" to="about" label="About" />
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default Projects;

export const pageQuery = graphql`
  query {
    categories: allContentfulCategory(sort: { fields: [createdAt], order: ASC }) {
      totalCount
      edges {
        node {
          id
          name
          backgroundColor
          titleColor
          projects {
            id
            slug
            title
            columns
            coverImage {
              fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`;
