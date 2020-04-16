import React from 'react';
import Link from 'gatsby-link';
import { FaHome, FaPencilAlt, FaUser } from 'react-icons/fa';

const ListItemLg = props => (
  <li className="navigation-sm__item">
    <Link className="navigation-sm__link" activeClassName="active" to={props.to}>
      {props.children}
    </Link>
  </li>
);

const NavigationSmall = () => (
  <div className="navigation-sm">
    <input type="checkbox" className="navigation-sm__checkbox" id="navi-toggle" />
    <label htmlFor="navi-toggle" className="navigation-sm__button">
      <span className="navigation-sm__icon">&nbsp;</span>
    </label>

    <div className="navigation-sm__background">&nbsp;</div>

    <nav className="navigation-sm__nav">
      <ul className="navigation-sm__list">
        <ListItemLg to="/">
          <span>
            <FaHome />
          </span>
          Home
        </ListItemLg>
        <ListItemLg to="/projects/">
          <span>
            <FaPencilAlt />
          </span>
          Projects
        </ListItemLg>
        <ListItemLg to="/contact/">
          <span>
            <FaUser />
          </span>
          Contact
        </ListItemLg>
      </ul>
    </nav>
  </div>
);

const Header = () => <NavigationSmall />;

export default Header;
