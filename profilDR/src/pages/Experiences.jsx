import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Mousewheel, Pagination } from 'swiper';
import Footer from '../../components/Footer';
const Experiences = () => {
  return (
    <>
      <section className='section expSection'>
        <h2>expériences</h2>
        <Swiper
          loop={'true'}
          direction='vertical'
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          controller={Mousewheel}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Mousewheel]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='expCard'>
              <h4 className='expTitle'>
                Depuis le 11/04/2018 : agent d'exploitation dans un parc de
                stationnement de la société Indigo
              </h4>
              <ul>
                <li>Accueil des clients.</li>
                <li>Petite maintenance.</li>
                <li>Sécurité incendie et assistance aux personnes</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='expCard'>
              <h4 className='expTitle'>
                De décembre 2015 à avril 2018 : assistant de recherche pour le
                CNRS (J-Pal Europe)
              </h4>
              <ul>
                <li>
                  Intermédiaire entre le chef de projet et la structure enquêtée
                </li>
                <li>Administration de questionnaires</li>
                <li>Extraction et traitement de données via Stata</li>
                <li>Observation des pratiques professionnelles</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='expCard'>
              <h4 className='expTitle'>
                De septembre 2016 à avril 2017: tuteur pédagogique au sein de
                l'université Lille3
              </h4>
              <ul>
                {' '}
                <li>
                  Enseignement de matières relevant de la linguistique auprès
                  d'étudiants en première année de licence
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='expCard'>
              <h4 className='expTitle'>
                De 2011 à avril 2018: intérimaire pour Kelly-Services et Crit
              </h4>
              <ul>
                <li>Manutention (Castorama, BTR services)</li>
                <li>Agent d'exploitation (Vinci Park, Indigo, Autocité)</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='expCard'>
              <h4 className='expTitle'>
                De septembre 2012 à juin 2013: enseignant de français (FLE) à
                Antananarivo au sein du centre de perfectionnement des officiers
                (CPO) et de l'école d'état major (EEM)
              </h4>
              <ul>
                <li>
                  Enseignement de la langue française à des adultes militaires
                </li>
                <li>
                  Préparation aux examens du cours de français et de l'alliance
                  française (DELF/ DALF)
                </li>
                <li>Élaboration de cours et d'évaluations</li>
                <li>Correction d'évaluations</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='expCard'>
              <h4 className='expTitle'>
                Périodes estivales de 2010, 2011, 2012 et 2013: animateur
                linguistique (taal-trainer animator) à Courtrai pour l'organisme
                BLCC Kids, au sein de l'université de la Kulak
              </h4>
              <ul>
                <li>Enseignement de la langue française à des enfants</li>
                <li>Élaboration d'activités ludo-éducatives</li>
                <li>
                  Animation et élaboration de jeux intérieurs et extérieurs
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='expCard'>
              <h4 className='expTitle'>
                D'octobre 2010 à juillet 2011: enseignant de français (FLE) à
                Bucarest au sein de l'académie militaire Carol I et du ministère
                de la défense
              </h4>
              <ul>
                <li>Enseignement de la langue française</li>
                <li>conception pédagogique</li>
                <li>organisation des épreuves</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='expCard'>
              <h4 className='expTitle'>
                Du 16/12/2005 au 15/08/2010: équipier polyvalent en restauration
                rapide (Quick et KFC)
              </h4>
              <ul>
                <li>Préparation et anticipation des commandes</li>
                <li>Délégation de tâches aux équipiers</li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <Footer />
    </>
  );
};

export default Experiences;
