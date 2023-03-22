import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'présentation',
  },
  {
    id: 2,
    url: '/projets',
    text: 'projets',
  },
  {
    id: 3,
    url: '/formation',
    text: 'formation',
  },
  {
    id: 4,
    url: '/experiences',
    text: 'expériences',
  },

  // {
  //   id: 5,
  //   url: '/contact',
  //   text: 'contact',
  // },
];

export const social = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/donovan-rivi%C3%A8re-81664311b/',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://github.com/Donovan-R',
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: './src/assets/CV_Donovan_rivière.pdf',
    icon: <FaFilePdf />,
  },
];
