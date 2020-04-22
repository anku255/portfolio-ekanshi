import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-modal';
import Img from 'gatsby-image';
import Slider from 'react-slick';

import Footer from '../Footer';
import {
  modalStyles,
  StyledModal,
  CloseButton,
  Title,
  Detail,
  ImageContainer,
  MoreProjects,
  ProjectCard,
} from './styledComponents';

Modal.setAppElement(`#___gatsby`);

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProjectModal = ({ isOpen, closeModal, project, openModal, allProjects }) => {
  const nextProjects = allProjects.filter(p => p.id !== (project && project.id));

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="Project Modal"
      closeTimeoutMS={500}
    >
      <StyledModal>
        <CloseButton onClick={closeModal} />
        {project ? (
          <>
            <Title>{project.title}</Title>
            <Detail>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ipsum? Beatae quasi facilis maiores
              non in, tenetur consectetur consequuntur libero.
            </Detail>
            {project.images.map(img => (
              <ImageContainer key={img.fluid.src}>
                <Img fluid={img.fluid} />
              </ImageContainer>
            ))}

            <MoreProjects>More Projects</MoreProjects>

            <Slider {...settings}>
              {nextProjects.map(p => (
                <ProjectCard
                  key={p.id}
                  onClick={() => {
                    const modal = document.querySelector('.ReactModal__Content');
                    modal.scrollTo(0, 0);
                    openModal(p);
                  }}
                >
                  <Img style={{ width: '100%', height: '100%' }} objectFit="crop" fluid={p.coverImage.fluid} />
                </ProjectCard>
              ))}
            </Slider>
            <Footer />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </StyledModal>
    </Modal>
  );
};

ProjectModal.propTypes = {
  closeModal: PropTypes.func,
  openModal: PropTypes.func,
  isOpen: PropTypes.bool,
  project: PropTypes.object,
  allProjects: PropTypes.array,
};

export default ProjectModal;
