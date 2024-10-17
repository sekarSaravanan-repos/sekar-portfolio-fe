import React from 'react';
import '../../src/styls.css'; // Import your custom CSS for styling
import { motion } from "framer-motion";
import certificatefi from '../image/certificate_1.png';
import certificatese from '../image/certificate_2.png';
import certificateth from '../image/certificate_3.png';
import certificatefo from '../image/certificate_5.png';

const certificates = [
  { img: certificatefi, name: 'React Js' },
  { img: certificatese, name: 'Agile SDLC' },
  { img: certificateth, name: 'Deep Learning' },
  { img: certificatefo, name: 'ChatGPT' }
];

const Certificates = () => {
  return (
    <div className="bg-gray-900 text-teal-300 certificates-container">
      {/* Animated Heading */}
      <motion.h2 
        className="text-4xl font-bold text-teal-300 mb-12 text-center"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} // Animation duration

      >
        Certifications
      </motion.h2>

      {/* Certificate Cards */}
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <motion.div 
            key={index} 
            className="certificate-card"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
            viewport={{ once: false }} // Allows re-triggering the animation on scroll
          >
            <img src={cert.img} alt={cert.name} className="certificate-image" />
            <h3 className="certificate-name">{cert.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
