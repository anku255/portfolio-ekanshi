import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const ArrowLink = ({ to, label, position }) => (
  <div className={`arrow-link ${position==='left' ?  'arrow-link--left' : 'arrow-link--right'} `}>
    <AniLink cover direction={position} duration={0.5} to={to} bg="#B3E5E1">
      {position === 'left' ? <FaChevronLeft /> : <FaChevronRight />}
    </AniLink>
  </div>
);

ArrowLink.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  position: PropTypes.string,
};

export default ArrowLink;
