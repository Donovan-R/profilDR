import React from 'react';
import Marquee from 'react-fast-marquee';
import Footer from '../../components/Footer';
import CloudItem from '../../components/CloudItem';

const Formation = () => {
  return (
    <>
      <section className='section formationSection'>
        <h2>Formation</h2>
        <div className='marqueeDiv'>
          <Marquee
            pauseOnHover={true}
            gradientColor={[19, 219, 255]}
            gradientWidth={50}
            speed={70}
          >
            <div className='marqueeCard'>
              <img
                src='https://www.2itechacademy.com/wp-content/uploads/2020/02/icone-web-2itech-v3.png'
                alt='logo'
              />
              <h4>Septembre 2023</h4>
              <p>alternance concepteur développeur d'application</p>
            </div>
            <div className='marqueeCard'>
              <img
                src='https://www.foreach-academy.fr/wp-content/uploads/2022/07/ForEach_horizontal_shadow_bl-e1656923523378-1920x633.png'
                alt='logo'
              />
              <h4>de septembre 2022 à avril 2023</h4>
              <p>développeur web/ web mobile</p>
            </div>

            <div className='marqueeCard'>
              <img
                src='data:image/png;base64,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'
                alt='logo'
              />
              <h4>juin 2013</h4>

              <p>Master didactique des langues et des cultures, FLE</p>
            </div>
          </Marquee>
        </div>
        <h2>compétences</h2>
        <div>
          <CloudItem />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Formation;
