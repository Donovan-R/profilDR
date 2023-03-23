import React from 'react';
import Footer from '../../components/Footer';

const Projets = () => {
  return (
    <>
      <section className='section'>
        <h2>Projets</h2>
        <div className='projetsSection'>
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
          <article className='projetCard'>
            <h4>changement de profil</h4>
            <p>Projet front utilisant l'API randomUser</p>
            <a href='https://persons-profiles.netlify.app/' target='_blank'>
              <img src='./src/assets/profiles.png' alt='profils de personnes' />
            </a>
            <a href='https://persons-profiles.netlify.app/' target='_blank'>
              <img src='./src/assets/profil2.png' alt='profils de personnes' />
            </a>
          </article>{' '}
          <article className='projetCard'>
            <h4>liste de courses</h4>
            <p>Exercice front type todo</p>
            <a href='https://liste-courses.netlify.app/' target='_blank'>
              <img src='./src/assets/listeCourses.png' alt='liste de courses' />
            </a>
            <a href='https://liste-courses.netlify.app/' target='_blank'>
              <img src='./src/assets/liste2.png' alt='liste de courses' />
            </a>
          </article>{' '}
          <article className='projetCard'>
            <h4>liste de courses</h4>
            <p>
              Exercice front pour afficher un menu filtrable. Page responsive.{' '}
            </p>
            <a href='https://menu-diner.netlify.app/' target='_blank'>
              <img src='./src/assets/menu.png' alt='menu' />
            </a>
          </article>{' '}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projets;
