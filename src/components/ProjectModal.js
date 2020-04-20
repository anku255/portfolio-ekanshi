import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Img from 'gatsby-image';

Modal.setAppElement(`#___gatsby`);

const modalStyles = {
  overlay: {
    zIndex: 1,
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    minWidth: '100vw',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    border: 0,
  },
};

const StyledModal = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  padding: 4rem 14rem;
  background: ${props => props.theme.clrs.cFontDark};
  color: ${props => props.theme.clrs.cWhite};
  font-family: Lato sans-serif;
`;

const Title = styled.h1`
  margin-bottom: 1.2rem;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 130%;
  color: ${props => props.theme.clrs.cWhite};
`;
const Detail = styled.p`
  margin-bottom: 2rem;
  font-size: 1.4rem;
  line-height: 130%;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 4rem;
  top: 1.5rem;
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  background: none;
  border: none;
  opacity: 1;
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
  }

  &:before,
  &:after {
    left: 15px;
    position: absolute;
    content: ' ';
    height: 4rem;
    width: 2px;
    background: ${props => props.theme.clrs.cWhite};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 5.6rem;
`;

const ProjectModal = ({ isOpen, closeModal, modalCloseTimeout, project }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    style={modalStyles}
    contentLabel="Project Modal"
    // closeTimeoutMS={modalCloseTimeout}
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
  modalCloseTimeout: PropTypes.number,
  project: PropTypes.object,
};

export default ProjectModal;
