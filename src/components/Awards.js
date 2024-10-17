import React, { useEffect, useState } from 'react';

// Importing images
import Firstaward from '../image/myawardf.png';
import Secondaward from '../image/myawardfi.png';

const Awards = () => {
  // State to manage animation on scroll
  const [isVisible, setIsVisible] = useState(false);

  // Scroll listener to add the 'animate' class
  useEffect(() => {
    const handleScroll = () => {
      const awardsSection = document.getElementById('awards-section');
      if (awardsSection) {
        const rect = awardsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="awards-section" className="bg-white p-8 rounded-lg  max-w-4xl mx-auto my-10">
      {/* Heading */}
      <h2 className={`text-3xl font-bold text-sky-700 text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
         Awards
      </h2>

      <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Award 1 - Full Div with Image */}
        <div className={`w-full flex justify-center items-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <img
            src={Firstaward} 
            alt="Award Logo 1"
            className="w-full h-auto object-contain max-w-md md:max-w-lg lg:max-w-full" // Full width, responsive, maintaining aspect ratio
          />
        </div>

        {/* Divider for larger screens */}
        <div className="hidden md:block h-20 border-l-2 border-gray-300"></div>

        {/* Award 2 - Full Div with Image */}
        <div className={`w-full flex justify-center items-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <img
            src={Secondaward}
            alt="Award Logo 2"
            className="w-full h-auto object-contain max-w-md md:max-w-lg lg:max-w-full" // Full width, responsive, maintaining aspect ratio
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
