import PropTypes from 'prop-types';
import React, { useState, useCallback, useEffect } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';

import Masonry from 'react-masonry-component';
import Layout from '../components/Layout';
import ArrowLink from '../components/ArrowLink';
import Footer from '../components/Footer';
import ProjectModal from '../components/ProjectModal';

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

const ProjectCardTitle = styled.div`
  transition: opacity 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  color: ${props => props.titleColor || props.theme.clrs.cFontDark};

  div {
    font-family: Merriweather;
    font-size: 2.2rem;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;

    @media ${props => props.theme.device.tablet} {
      font-size: 1.6rem;
      line-height: 16px;
    }

    @media ${props => props.theme.device.mobile} {
      font-size: 1.4rem;
      line-height: 14px;
    }
  }
`;

const ProjectCard = styled.div`
  width: ${props => getItemWidth(props.columns)};
  padding-left: 1.5rem;
  padding-bottom: 2rem;
  transition: all 0.25s;

  ${props =>
    props.shouldHover &&
    css`
      cursor: pointer;

      &:hover {
        transform: scale(0.95) translateY(-0.5rem);
        filter: brightness(0.8);

        ${ProjectCardTitle} {
          opacity: 1;
          background: ${props.backgroundColor};
        }
      }
    `}


  @media ${props => props.theme.device.tablet} {
    width: 50% !important;
    padding-left: 1rem;
  }

  @media ${props => props.theme.device.mobileSmall} {
    width: 100% !important;
    padding: 0;
    margin: 0;
    padding-bottom: 2.4rem;
  }
`;

const Projects = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [project, setProject] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    const updatedCategories = props.data.categories.edges.map(({ node: category }) => {
      const titleProject = category.projects.find(p => !p.images);
      // filter out the title project and insert it at the begining on small screen
      const updatedProjects =
        vw <= 450 ? [titleProject, ...category.projects.filter(p => p.images)] : category.projects;
      return {
        ...category,
        projects: updatedProjects,
      };
    });
    setCategories(updatedCategories);
  }, [props.data]);

  const openModal = useCallback(currentProject => {
    setProject(currentProject);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const resumeUrl = `https:${props.data.contentfulResume.file.file.url}`;

  const allProjects = props.data.categories.edges
    .reduce((acc, curr) => [...acc, ...(curr.node.projects || [])], [])
    .filter(p => p.images);

  return (
    <Layout resumeUrl={resumeUrl}>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <div className="projects-container">
        <h1 className="heading-primary">Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem similique nemo et maxime sequi voluptas
          dolores incidunt maiores eligendi?
        </p>
        {categories.map(category => (
          <Masonry key={category.id} className="showcase">
            {category.projects &&
              category.projects.map(project => (
                <ProjectCard
                  key={project.id}
                  columns={project.columns}
                  backgroundColor={category.backgroundColor}
                  shouldHover={!!project.images}
                >
                  <div role="button" onClick={project.images ? () => openModal(project) : null}>
                    <Img fluid={project.coverImage.fluid} />
                    <ProjectCardTitle titleColor={category.titleColor}>
                      <div>{project.title}</div>
                    </ProjectCardTitle>
                  </div>
                </ProjectCard>
              ))}
          </Masonry>
        ))}
        <ArrowLink position="left" to="/" label="Home" />
        <ArrowLink position="right" to="contact" label="Contact" />
        <Footer />
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        openModal={openModal}
        project={project}
        allProjects={allProjects}
      />
    </Layout>
  );
};

Projects.propTypes = {
  data: PropTypes.shape({
    categories: PropTypes.shape({
      edges: PropTypes.array,
    }),
    contentfulResume: PropTypes.shape({
      file: PropTypes.shape({
        file: PropTypes.shape({
          url: PropTypes.any,
        }),
      }),
    }),
  }),
};

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
            images {
              fluid(maxWidth: 1200) {
                ...GatsbyContentfulFluid
              }
            }
          }
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
