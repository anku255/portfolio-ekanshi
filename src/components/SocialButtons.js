import React from 'react';
import {  FaBehance, FaLinkedinIn, FaEnvelope, FaInstagram, FaDribbble } from 'react-icons/fa'

const SocialButtons = ({ horizontal, vertical }) => {
  const behance = 'https://www.behance.net/ekanshikiran';
  const linkedin = 'https://www.linkedin.com/in/ekanshikiran/';
  const dribble = 'https://dribbble.com/ekanshi';
  const instagram = 'https://www.instagram.com/ekanshi_kiran/';
  const mailto = 'mailto:ekanshi.design@gmail.com';

  return (
    <div className={`social-buttons ${horizontal ?  'social-buttons--horizontal' : 'social-buttons--vertical'} `}>
      <ul>
        <li>
          <a href={behance} target="_blank" rel="noopener noreferrer">
            <FaBehance />
          </a>
        </li>
        <li>
          <a href={dribble} target="_blank" rel="noopener noreferrer">
            <FaDribbble />
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href={mailto}>
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialButtons;
