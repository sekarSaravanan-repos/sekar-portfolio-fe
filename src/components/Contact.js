import React from "react";
import { motion } from "framer-motion";

// Example icons (replace with actual paths or icons)
import LinkedInIcon from '../image/linkedin.png';
import GitHubIcon from '../image/github.png';
import EmailIcon from '../image/googlelogo.png';
import PhoneIcon from '../image/phonecall.png';

const ContactFooter = () => {
  return (
    <motion.div
      className="bg-gray-900 text-white py-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-teal-300 mb-12 text-center">For Contact</h2>

      {/* Contact Details */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
        <div className="flex items-center gap-2">
          <img src={EmailIcon} alt="Email" className="w-6 h-6" />
          <p className="text-lg">sekarsaravanaxxxxxxx</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={PhoneIcon} alt="Phone" className="w-6 h-6" />
          <p className="text-lg">8xxxx9xxxx</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-10">
        <div className="flex flex-col items-center">
          <img src={LinkedInIcon} alt="LinkedIn" className="w-12 h-12 rounded-full bg-teal-500 p-2" />
          <p className="mt-2 text-sm">LinkedIn</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={GitHubIcon} alt="GitHub" className="w-12 h-12 rounded-full bg-teal-500 p-2" />
          <p className="mt-2 text-sm">GitHub</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactFooter;
