import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='portfolioFooter'>
      <span>
        <a href='mailto:donoriviere@gmail.com'>
          <AiOutlineMail /> donoriviere@gmail.com
        </a>
      </span>
      <span>
        <FaPhone /> 06.98.59.65.20
      </span>
    </footer>
  );
};

export default Footer;
