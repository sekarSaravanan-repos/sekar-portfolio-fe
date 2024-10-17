import { motion } from "framer-motion";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProfessionalSummary = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animation triggers again when scrolling
    });
  }, []);

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-sky-700  mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Professional Summary
        </motion.h2>

        {/* Content */}
        <motion.div
          className="relative max-w-2xl mx-auto text-lg leading-relaxed text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <p className="mb-6" data-aos="fade-up">
            Experienced Full Stack Software Developer with 5 years in the
            industry, including over 3 years specializing in software
            development and 2.5 years in data operations at a data center.
          </p>
          <p className="mb-6" data-aos="fade-up" data-aos-delay="200">
            Skilled in building reliable web applications, desktop
            applications, Microsoft Power Apps, web automations, and Google
            Chrome extensions.
          </p>
          <p data-aos="fade-up" data-aos-delay="400">
            Proficient in both front-end and back-end development, with a focus
            on clean, efficient code. Dedicated to delivering high-quality
            software and committed to continuous learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
