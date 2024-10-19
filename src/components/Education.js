import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Degree from '../image/degreehat.jpg';

const EducationDetails = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulates a loading time of 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        {/* Removed spinner, content will show after 2 seconds */}
        <h2>Loading Education Details...</h2>
      </div>
    );
  }

  return (
    <div className="education-section">
      <h2 className="education-heading text-3xl text-center mb-10  font-bold text-sky-700">Learning Journey</h2>
  
      <div className="education-container">
        <motion.div
          className="icon-container"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={Degree} alt="Degree Icon" className="education-icon" />
        </motion.div>
        
        <motion.div
          className="details-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>Degree in  Bachelore of Science</h3>
          <p>Information Technology</p>
          {/* <p>Graduation Year: 2021</p> */}
        </motion.div>
      </div>
    </div>
  );
};


export default EducationDetails;
