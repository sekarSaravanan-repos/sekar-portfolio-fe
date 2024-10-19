

// import React, { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import AOS from 'aos';  // Import AOS

// import image1 from '../image/workexpirencenew.png';
// import image2 from '../image/fullstacknewone.png';
// import image3 from '../image/frameworksnewone.png';
// import image4 from '../image/programfit.png';
// import image5 from '../image/meeting.png';
// import image6 from '../image/automation.png';

// const ProfessionalOverview = () => {
//   const { ref: sectionRef, inView: isInView } = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     AOS.refresh();  // Refresh AOS on component mount
//   }, []);

//   const cards = [
//     { id: 1, image: image1, text: '5+ Years of Experience' },
//     { id: 2, image: image2, text: 'Full Stack Developer' },
//     { id: 3, image: image6, text: 'Python Automation Enginner' },
//     { id: 4, image: image5, text: 'Worked on 10+ Projects' },
//     { id: 5, image: image4, text: 'Worked with 6+ Programming Languages' },
//     { id: 6, image: image3, text: 'Worked with 8+ Software Frameworks' },

//   ];

//   return (
//     <section ref={sectionRef} className="bg-white py-10">
//       <h2 className={`text-center text-sky-700 text-3xl font-bold mb-10 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
//         Professional Overview
//       </h2>
//       <div className="flex justify-center space-x-4 overflow-x-auto flex-nowrap">
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             className={`bg-white p-4 rounded-lg transform transition duration-500 w-40 sm:w-48 lg:w-56 ${isInView ? 'animate-fadeInUp' : 'opacity-0'}`}
//             data-aos="fade-up"  // Apply AOS animation
//             data-aos-delay={`${index * 200}`}  // Delay animation for each card
//           >
//             <img
//               src={card.image}
//               alt={`Card ${card.id}`}
//               className="w-full h-28 object-cover mb-3 rounded-lg"
//             />
//             <p className="text-center text-gray-700 text-sm sm:text-base font-bold">{card.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProfessionalOverview;



import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';  // Import AOS

import image1 from '../image/workexpirencenew.png';
import image2 from '../image/fullstacknewone.png';
import image3 from '../image/frameworksnewone.png';
import image4 from '../image/programfit.png';
import image5 from '../image/meeting.png';
import image6 from '../image/automation.png';

const ProfessionalOverview = () => {
  const { ref: sectionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    AOS.refresh();  // Refresh AOS on component mount
  }, []);

  const cards = [
    { id: 1, image: image1, text: '5+ Years of Experience' },
    { id: 2, image: image2, text: 'Full Stack Developer' },
    { id: 3, image: image6, text: 'Python Automation Engineer' },
    { id: 4, image: image5, text: 'Worked on 10+ Projects' },
    { id: 5, image: image4, text: 'Worked with 6+ Programming Languages' },
    { id: 6, image: image3, text: 'Worked with 8+ Software Frameworks' },
  ];

  return (
    <section ref={sectionRef} className="bg-white py-10">
      <h2 className={`text-center text-sky-700 text-3xl font-bold mb-10 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
        Professional Overview
      </h2>

      {/* Grid layout for cards: 3 columns and auto-adjust for responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 md:px-20">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`bg-white p-4 rounded-lg transform transition duration-500 hover:scale-105 ${isInView ? 'animate-fadeInUp' : 'opacity-0'}`}
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              className="w-full h-29 object-cover mb-3 rounded-lg"
            />
            <p className="text-center text-gray-700 text-sm sm:text-base font-bold">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalOverview;
