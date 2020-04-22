import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import HomeIcon from '../images/svg/home.svg';
import ResumeIcon from '../images/svg/resume.svg';
import ContactIcon from '../images/svg/mail.svg';
import ProjectsIcon from '../images/svg/graphic_tool.svg';

const ListItem = ({ custom, children, to }) => (
  <li className="navigation-sm__item">
    {custom ? (
      <a className="navigation-sm__link" href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link className="navigation-sm__link" activeClassName="active" to={to}>
        {children}
      </Link>
    )}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.any,
  custom: PropTypes.bool,
  to: PropTypes.string,
};

const Header = ({ resumeUrl }) => (
  <div className="navigation-sm">
    <input type="checkbox" className="navigation-sm__checkbox" id="navi-toggle" />
    <label htmlFor="navi-toggle" className="navigation-sm__button">
      <span className="navigation-sm__icon">&nbsp;</span>
    </label>

    <div className="navigation-sm__background">&nbsp;</div>

    <nav className="navigation-sm__nav">
      <ul className="navigation-sm__list">
        <ListItem to="/">
          <span>
            <HomeIcon />
          </span>
          Home
        </ListItem>
        <ListItem to="/projects/">
          <span>
            <ProjectsIcon />
          </span>
          Projects
        </ListItem>
        <ListItem to="/contact/">
          <span>
            <ContactIcon style={{ transform: 'translateY(4px)' }} />
          </span>
          Contact
        </ListItem>
        <ListItem custom to={resumeUrl}>
          <span>
            <ResumeIcon />
          </span>
          Resume
        </ListItem>
      </ul>
    </nav>
  </div>
);

Header.propTypes = {
  resumeUrl: PropTypes.string,
};

export default Header;
