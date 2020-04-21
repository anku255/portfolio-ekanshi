import React from 'react';
import Link from 'gatsby-link';
import { FaHome, FaPencilAlt, FaUser } from 'react-icons/fa';

const ListItem = props => (
  <li className="navigation-sm__item">
    {props.custom ? (
      <a className="navigation-sm__link" href={props.to} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    ) : (
      <Link className="navigation-sm__link" activeClassName="active" to={props.to}>
        {props.children}
      </Link>
    )}
  </li>
);

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
            <FaHome />
          </span>
          Home
        </ListItem>
        <ListItem to="/projects/">
          <span>
            <FaPencilAlt />
          </span>
          Projects
        </ListItem>
        <ListItem to="/contact/">
          <span>
            <FaUser />
          </span>
          Contact
        </ListItem>
        <ListItem custom to={resumeUrl}>
          <span>
            <FaUser />
          </span>
          Resume
        </ListItem>
      </ul>
    </nav>
  </div>
);

export default Header;
