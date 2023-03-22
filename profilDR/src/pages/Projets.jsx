import React from 'react';
import Footer from '../../components/Footer';

const Projets = () => {
  return (
    <>
      <section className='projetsSection section'>
        <h2>Projets</h2>
        <article className='projetCard'>
          <h4>Site Autour des jardins de Chéreng</h4>
          <p>Projet fullstack: React, NodeJS, PostgreSQL</p>
          <a
            href='https://autour-des-jardins-de-chereng.netlify.app/'
            target='_blank'
          >
            <img
              src='./src/assets/siteADJDC.png'
              alt="page d'accueil du site Autour des jardins de chéreng"
            />
          </a>
        </article>{' '}
      </section>
      <Footer />
    </>
  );
};

export default Projets;
