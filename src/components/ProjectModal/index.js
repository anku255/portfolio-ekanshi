import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-modal';
import Img from 'gatsby-image';

import { modalStyles, StyledModal, CloseButton, Title, Detail, ImageContainer } from './styledComponents';

Modal.setAppElement(`#___gatsby`);

const ProjectModal = ({ isOpen, closeModal, project }) => (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ipsum? Beatae quasi facilis maiores non
            in, tenetur consectetur consequuntur libero.
          </Detail>
          {project.images.map(img => (
            <ImageContainer key={img.fluid.src}>
              <Img fluid={img.fluid} />
            </ImageContainer>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </StyledModal>
  </Modal>
);

ProjectModal.propTypes = {
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
  project: PropTypes.object,
};

export default ProjectModal;
