// import React from 'react';

// const Timeline = () => {
//   return (
//     <div className="w-full bg-gray-900">
//     <div className="bg-gray-900 relative max-w-4xl  mx-auto p-8">
//       <div className="timeline-line absolute left-1/2 h-full border-l-4 border-gray-300 transform -translate-x-1/2"></div>

//       {/* Item 1 */}
//       <div className="timeline-item mb-8 flex justify-between items-center w-full left-timeline">
//         <div className="order-1 w-5/12"></div>
//         <div className="z-20 flex items-center order-1 bg-teal-500 shadow-xl w-12 h-12 rounded-full">
//           <h1 className="mx-auto font-semibold text-lg text-white">2019</h1>
//         </div>
//         <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
//           <h3 className="mb-3 font-bold text-teal-300 text-xl">Web Development</h3>
//           <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males.
//           </p>
//         </div>
//       </div>

//       {/* Item 2 */}
//       <div className="timeline-item mb-8 flex justify-between items-center w-full right-timeline">
//         <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
//           <h3 className="mb-3 font-bold  text-teal-300 text-xl">Web Designing</h3>
//           <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males.
//           </p>
//         </div>
//         <div className="z-20 flex items-center order-1 bg-pink-500 shadow-xl w-12 h-12 rounded-full">
//           <h1 className="mx-auto font-semibold text-lg text-white">2018</h1>
//         </div>
//         <div className="order-1 w-5/12"></div>
//       </div>

//       {/* Item 3 */}
//       <div className="timeline-item mb-8 flex justify-between items-center w-full left-timeline">
//         <div className="order-1 w-5/12"></div>
//         <div className="z-20 flex items-center order-1 bg-orange-500 shadow-xl w-12 h-12 rounded-full">
//           <h1 className="mx-auto font-semibold text-lg text-white">2017</h1>
//         </div>
//         <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
//           <h3 className="mb-3 font-bold  text-teal-300 text-xl">JavaScript Development</h3>
//           <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males.
//           </p>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Timeline;



// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// const Timeline = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       easing: 'ease-in-out', // Animation easing
//     });
//   }, []);

//   return (
//     <div className="w-full bg-gray-900">
//       <div className="bg-gray-900 relative max-w-4xl mx-auto p-8">
//         <div className="timeline-line absolute left-1/2 h-full border-l-4 border-gray-300 transform -translate-x-1/2"></div>

//         {/* Item 1 */}
//         <div
//           className="timeline-item mb-8 flex justify-between items-center w-full left-timeline"
//           data-aos="fade-right"
//         >
//           <div className="order-1 w-5/12"></div>
//           <div className="z-20 flex items-center order-1 bg-teal-500 shadow-xl w-12 h-12 rounded-full">
//             <h1 className="mx-auto font-semibold text-lg text-white">2019</h1>
//           </div>
//           <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
//             <h3 className="mb-3 font-bold text-teal-300 text-xl">Web Development</h3>
//             <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males.
//             </p>
//           </div>
//         </div>

//         {/* Item 2 */}
//         <div
//           className="timeline-item mb-8 flex justify-between items-center w-full right-timeline"
//           data-aos="fade-left"
//         >
//           <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
//             <h3 className="mb-3 font-bold text-teal-300 text-xl">Web Designing</h3>
//             <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males.
//             </p>
//           </div>
//           <div className="z-20 flex items-center order-1 bg-pink-500 shadow-xl w-12 h-12 rounded-full">
//             <h1 className="mx-auto font-semibold text-lg text-white">2018</h1>
//           </div>
//           <div className="order-1 w-5/12"></div>
//         </div>

//         {/* Item 3 */}
//         <div
//           className="timeline-item mb-8 flex justify-between items-center w-full left-timeline"
//           data-aos="fade-right"
//         >
//           <div className="order-1 w-5/12"></div>
//           <div className="z-20 flex items-center order-1 bg-orange-500 shadow-xl w-12 h-12 rounded-full">
//             <h1 className="mx-auto font-semibold text-lg text-white">2017</h1>
//           </div>
//           <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
//             <h3 className="mb-3 font-bold text-teal-300 text-xl">JavaScript Development</h3>
//             <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// import { motion } from "framer-motion";

// // Project Data
// const projects = [
//   {
//     year: '2024',
//     title: 'Qassist',
//     description: 'QA Automation Tool (Web Application) focused on integrating Okta SSO for security and streamlined access.',
//     techStack: 'Next.js, Nest.js, Tailwind CSS, MySQL',
//   },
//   {
//     year: '2022',
//     title: 'IROCK',
//     description: 'Invoice Generation System developed with Python Django and JavaScript for a responsive UI.',
//     techStack: 'Python Django, JavaScript, jQuery, Bootstrap CSS, MySQL',
//   },
//   {
//     year: '2024',
//     title: 'IssueLog',
//     description: 'A Power Apps application for collecting client feedback on products, utilizing Power Automate for workflows.',
//     techStack: 'Microsoft Power Apps, Power Automate, Microsoft SharePoint List',
//   },
//   {
//     year: '2022',
//     title: 'CDMS',
//     description: 'A comprehensive online education portal designed for learners and mentors, managing both backend and frontend development.',
//     techStack: 'PHP CodeIgniter, JavaScript, jQuery, Bootstrap CSS, MySQL',
//   },
//   {
//     year: '2024',
//     title: 'Self Portal',
//     description: 'Marketing automation tool designed to market automation tools globally.',
//     techStack: 'Python Flask, JavaScript, Bootstrap CSS, MySQL',
//   },
//   {
//     year: '2024',
//     title: 'MN - Generation',
//     description: 'A Chrome Extension for automating web forms, enhancing user efficiency.',
//     techStack: 'Vanilla JavaScript, jQuery, MySQL',
//   },
//   {
//     year: '2024',
//     title: 'URL Scraper 3.0',
//     description: 'Desktop application for web scraping and data comparison.',
//     techStack: 'Python 3.0, PyQt5, Samba Server',
//   },
// ];

// const Timeline = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       easing: 'ease-in-out', // Animation easing
//     });
//   }, []);

//   return (
//     <div className="w-full bg-gray-900">
//           <motion.h2
//           className="text-4xl font-bold text-teal-300 mb-12 text-center"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//           viewport={{ once: true }}
//         >
//         Project Details
//         </motion.h2>

//       <div className="bg-gray-900 relative max-w-4xl mx-auto p-8">
//         <div className="timeline-line absolute left-1/2 h-full border-l-4 border-gray-300 transform -translate-x-1/2"></div>

//         {/* Timeline Items */}
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className={`timeline-item mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}
//             data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
//           >
//             {/* Project Details and Circle on Left or Right */}
//             {index % 2 === 0 ? (
//               // Left Aligned (Circle and Project both on the left)
//               <>
//                 <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
//                   <h3 className="mb-3 font-bold text-teal-300 text-xl">{project.title}</h3>
//                   <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
//                     {project.description}
//                   </p>
//                   <p className="text-xs text-gray-400">Tech Stack: {project.techStack}</p>
//                 </div>
//                 <div className="z-20 flex items-center order-1 bg-teal-500 shadow-xl w-12 h-12 rounded-full">
//                   <h1 className="mx-auto font-semibold text-lg text-white">{project.year}</h1>
//                 </div>
//                 <div className="order-1 w-5/12"></div>
//               </>
//             ) : (
//               // Right Aligned (Circle and Project both on the right)
//               <>
//                 <div className="order-1 w-5/12"></div>
//                 <div className="z-20 flex items-center order-1 bg-pink-500 shadow-xl w-12 h-12 rounded-full">
//                   <h1 className="mx-auto font-semibold text-lg text-white">{project.year}</h1>
//                 </div>
//                 <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
//                   <h3 className="mb-3 font-bold text-teal-300 text-xl">{project.title}</h3>
//                   <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
//                     {project.description}
//                   </p>
//                   <p className="text-xs text-gray-400">Tech Stack: {project.techStack}</p>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;



import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { motion } from "framer-motion";

// Project Data
const projects = [
  {
    year: '2021',
    title: 'CDMS',
    shortdescription:'Online Education Portal',
    applicationType:'Web Application',
    description: 'A comprehensive online education portal designed for learners and mentors, managing both backend and frontend development.',
    role: 'Full Stack Developer',
    techStack: 'PHP CodeIgniter, JavaScript, jQuery, Bootstrap CSS, MySQL',
    siteLink: 'https://ibyteslms.mo.vc/cdms/', // Example link
  },
  {
    year: '2022',
    title: 'IROCK',
    shortdescription:'Invoice Generation System',
    applicationType:'Web Application',
    description: 'Invoice Generation System developed with Python Django and JavaScript for a responsive UI.',
    role: 'Backend Developer',
    techStack: 'Python Django, JavaScript, jQuery, Bootstrap CSS, MySQL',
    siteLink: 'https://irock.mo.vc/', // Example link
  },
  {
    year: '2023',
    title: 'Self Portal',
    shortdescription:'Web Automation Tools Marketting Portal',
    applicationType:'Web Application',
    description: 'Marketing automation tool designed to market automation tools globally.',
    role: 'Full Stack Developer',
    techStack: 'Python Flask, JavaScript, Bootstrap CSS, MySQL',
    siteLink: 'N/A', // Example link
  },
  {
    year: '2023',
    title: 'URL Scraper 3.0',
    shortdescription:'Web Scraping and Data Extracting',
    applicationType:'Web Application',
    description: 'Desktop application for web scraping and data comparison.',
    role: 'Python Automation Engineer',
    techStack: 'Python 3.0, PyQt5, Samba Server',
    siteLink: 'N/A', // Example link
  },
  {
    year: '2024',
    title: 'Qassist',
    shortdescription:'Contents Qality Analsysis Automation Tool',
    applicationType:'Web Application',
    description: 'QA Automation Tool (Web Application) focused on integrating Okta SSO for security and streamlined access.',
    role: 'Full Stack Developer',
    techStack: 'Next.js, Nest.js, Tailwind CSS, MySQL',
    siteLink: 'N/A', // Example link
  },
 
  {
    year: '2024',
    title: 'IssueLog Feedbacks',
    shortdescription:'Collecting Client Feedback on Products',
    applicationType:'Microsoft POwerApps Application',
    description: 'A Power Apps application for collecting client feedback on products, utilizing Power Automate for workflows.',
    role: 'Power Apps Developer',
    techStack: 'Microsoft Power Apps, Power Automate, Microsoft SharePoint List',
    siteLink: 'N/A', // Example link
  },
  

  {
    year: '2024',
    title: 'MN - Generation',
    shortdescription:'Automating web Forms',
    applicationType:'Google Chrome Extension',
    description: 'A Chrome Extension for automating web forms, enhancing user efficiency.',
    role: 'Chrome Extension Developer',
    techStack: 'Vanilla JavaScript, jQuery, MySQL',
    siteLink: 'N/A', // Example link
  },
  

 

];

const Timeline = () => {
  const [isModalOpen, setModalOpen] = useState(false); // Modal visibility state
  const [selectedProject, setSelectedProject] = useState(null); // Currently selected project

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full bg-gray-900">
      <div className="bg-gray-900 relative max-w-4xl mx-auto p-8">
      <motion.h2
          className="text-4xl font-bold text-teal-300 mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Projects Overview
        </motion.h2>
        <div className="timeline-line absolute left-1/2 h-5/6	height: 83.333333%; border-l-4 border-gray-300 transform -translate-x-1/2"></div>
        {/* Timeline Items */}
        {projects.map((project, index) => (
          <div
            key={index}
            className={`timeline-item mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            {index % 2 === 0 ? (
              <>
                <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-teal-300 text-xl">{project.title.toUpperCase()}</h3>
                  <p className="text-sm leading-snug mb-4 tracking-wide text-white text-opacity-100">
                    {project.shortdescription}
                  </p>
                  {/* <p className="text-xs text-gray-400 mb-4">Tech Stack: {project.techStack}</p> */}
                  <button
                    onClick={() => openModal(project)}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg"
                  >
                    View
                  </button>
                </div>
                <div className="z-20 flex items-center order-1 bg-teal-500 shadow-xl w-12 h-12 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">{project.year}</h1>
                </div>
                <div className="order-1 w-5/12"></div>
              </>
            ) : (
              <>
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-pink-500 shadow-xl w-12 h-12 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">{project.year}</h1>
                </div>
                <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-teal-300 text-xl">{project.title.toUpperCase()}</h3>
                  <p className="text-sm leading-snug mb-4 tracking-wide text-white text-opacity-100">
                    {project.shortdescription}
                  </p>
                  {/* <p className="text-xs text-gray-400 mb-4">Tech Stack: {project.techStack}</p> */}
                  <button
                    onClick={() => openModal(project)}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg"
                  >
                    View
                  </button>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 rounded-lg p-8 w-11/12 md:w-1/2">
              <h2 className="text-2xl font-bold text-teal-300 mb-4">{selectedProject.title}</h2>

              <p className="text-white mb-4"><strong>Application Type:</strong> {selectedProject.applicationType}</p>

              <p className="text-white mb-4">
                <span className="font-bold">Description: </span>{selectedProject.description}
              </p>
              <p className="text-white mb-4">
                <span className="font-bold">My Role: </span>{selectedProject.role}
              </p>
              <p className="text-white mb-4">
                <span className="font-bold">Tech Stack: </span>{selectedProject.techStack}
              </p>
              <p className="text-white mb-4">
                  <strong>Project Site:</strong> <a href={selectedProject.siteLink} target="_blank" rel="noopener noreferrer" className="underline">{selectedProject.siteLink}</a>
                </p>
              <button
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;

