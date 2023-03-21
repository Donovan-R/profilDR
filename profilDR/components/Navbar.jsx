import React, { useState, useEffect, useRef } from 'react';
import { social, links } from '../src/data';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (isOpen) {
      contRef.current.style.height = linksHeight + 'px';
    } else {
      contRef.current.style.height = '0px';
    }
  }, [isOpen]);

  return (
    <>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <img
              className='logo'
              src='../src/assets/toon_riviere.jpeg'
              alt='photoDonovanRivière'
            />
            <button className='nav-toggle' onClick={() => setIsOpen(!isOpen)}>
              <FaBars />
            </button>
          </div>
          <div className='links-container' ref={contRef}>
            <ul className='links' ref={linksRef}>
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <NavLink to={url} onClick={() => setIsOpen(false)}>
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className='social-icons'>
            {social.map((soc) => {
              const { id, url, icon } = soc;
              return (
                <li key={id}>
                  <NavLink to={url} target='blank'>
                    {icon}
                  </NavLink>{' '}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
