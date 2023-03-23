import React from 'react';
import Typewriter from 'typewriter-effect';
import Footer from '../../components/Footer';

const Presentation = () => {
  return (
    <>
      <section className='homeSection section'>
        <div>
          <h1>
            Bonjour, je suis{' '}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Donovan Rivière!')
                  .pauseFor(2500)
                  .start();
              }}
            />
            développeur web/ web mobile
          </h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Presentation;
