import styled from 'styled-components';

export const modalStyles = {
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
    borderRadius: 0,
  },
};

export const StyledModal = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  padding: 4rem 14rem;
  background: ${props => props.theme.clrs.cFontDark};
  color: ${props => props.theme.clrs.cWhite};
  font-family: Lato sans-serif;

  @media ${props => props.theme.device.mobileSmall} {
    padding: 4rem 3.2rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1.2rem;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 130%;
  color: ${props => props.theme.clrs.cWhite};

  @media ${props => props.theme.device.mobileSmall} {
    margin-bottom: 1.6rem;
  }
`;
export const Detail = styled.p`
  margin-bottom: 2rem;
  font-size: 1.6rem;
  line-height: 22px;

  @media ${props => props.theme.device.mobileSmall} {
    margin-bottom: 2.4rem;
  }
`;

export const CloseButton = styled.button`
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

export const ImageContainer = styled.div`
  margin-bottom: 5.6rem;
`;

export const MoreProjects = styled.div`
  margin-top: 14rem;
  margin-bottom: 4rem;
  font-family: Lato;
  font-size: 3.6rem;
  line-height: 22px;
`;

export const ProjectCard = styled.div`
  width: 34.8rem;
  height: 34.8rem;
  padding-right: 2rem;
  cursor: pointer;
`;
