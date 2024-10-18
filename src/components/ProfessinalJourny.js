import React from 'react';
import { useInView } from 'react-intersection-observer';

import company1_logo from '../image/qubelogo.png';
import company2_logo from '../image/xmedialogo.jpeg';
import company3_logo from '../image/hogarthlogo.png';

const ProfessionalJourney = () => {
  const { ref: journeyRef, inView: isInView } = useInView({
    triggerOnce: false,   // Trigger animation every time the component is in view
    threshold: 0.1,       // Percentage of the element in view before triggering animation
  });

  return (
    <section
      ref={journeyRef}
      className="py-5"
    >
      <h2 className={`text-center text-sky-700 text-3xl font-bold mb-10 transition-transform duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        Professional Journey
      </h2>

      {/* Scrollable Section for Logos */}
      <div className="overflow-hidden relative">
        <div className={`flex justify-center space-x-8 transition-transform duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="min-w-[120px] sm:min-w-[200px]">
            <img src={company1_logo} alt="Company 1" className="h-16 sm:h-20 mx-auto" />
          </div>
          <div className="min-w-[120px] sm:min-w-[200px]">
            <img src={company2_logo} alt="Company 2" className="h-16 sm:h-20 mx-auto" />
          </div>
          <div className="min-w-[120px] sm:min-w-[200px]">
            <img src={company3_logo} alt="Company 3" className="h-16 sm:h-20 mx-auto" />
          </div>
        </div>
      </div>

      <p className={`text-center mt-8 text-lg sm:text-xl transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
        A journey of 5+ years, across leading companies.
      </p>
    </section>
  );
};

export default ProfessionalJourney;
