// import { motion } from "framer-motion";
// import React from "react";

// const experiences = [
//   {
//     role: "Full Stack Software Developer",
//     company: "Hogarth Worldwide - WPP",
//     duration: "Aug 2022 - Present",
//     description:
//       "Developed web applications using React, Node.js, and Next.js, focusing on UI/UX.",
//   },
//   {
//     role: "Trainee Software Developer",
//     company: "Xmedia SOllutions",
//     duration: "Nov 2021 - Aug 2022",
//     description: "Built scalable backend services using Python and Django.",
//   },
//   {
//     role: "Engineer - Vault Operation(Data Ops)",
//     company: "Qube Cinema Technologies",
//     duration: "Jul 2018 - Oct 2021",
//     description:
//       "Designed and implemented user-friendly websites and landing pages using HTML, CSS, and JavaScript.",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3, // Automatically adds delay between children
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeInOut" }, // Smoother easing
//   },
// };

// const WorkExperience = () => {
//   return (
//     <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
//       <div className="container mx-auto px-6">
//         {/* Section Title */}
//         <motion.h2
//           className="text-4xl font-bold text-teal-300 mb-12 text-center"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//           viewport={{ once: true }}
//         >
//           Work Experience
//         </motion.h2>

//         {/* Timeline */}
//         <motion.div
//           className="relative"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {/* Vertical Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-teal-500"></div>

//           {/* Experience Items */}
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               className={`mb-12 flex flex-col items-center ${
//                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//               }`}
//               variants={itemVariants}
//             >
//               {/* Spacer for Line Connector */}
//               <div className="hidden md:block md:w-1/2"></div>

//               {/* Content */}
//               <div className="w-full md:w-1/2 px-4">
//                 <motion.div
//                   className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <h3 className="text-2xl font-bold text-teal-300">
//                     {exp.role}
//                   </h3>
//                   <p className="text-sm text-gray-400 mb-2">
//                     {exp.company} • {exp.duration}
//                   </p>
//                   <p className="text-gray-200">{exp.description}</p>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WorkExperience;


import { motion } from "framer-motion";
import React from "react";

const experiences = [
  {
    role: "Full Stack Software Developer",
    company: "Hogarth Worldwide - WPP",
    duration: "Aug 2022 - Present",
    description:
    "Currently working as a Full Stack Developer and Python Automation Engineer, developing web applications,Desktop applications and microsoft powerapps applications."},
  {
    role: "Trainee Software Developer",
    company: "Xmedia SOllutions",
    duration: "Nov 2021 - Aug 2022",
    description: "Worked as a Trainee Developer, developing web applications with Python Django, PHP Laravel, and CodeIgniter.",
  },
  {
    role: "Engineer - Vault Operation(Data Ops)",
    company: "Qube Cinema Technologies",
    duration: "Jul 2018 - Oct 2021",
    description:
      "Worked as a Vault Engineer, managing data operations at a data center to ensure data integrity and retrieval for efficient data flow.",
  },
];
// Variants for the scrolling animation
const scrollVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const WorkExperience = () => {
  return (
    <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-teal-300 mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-teal-500"></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex flex-col items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial="hidden"
              whileInView="visible"
              variants={scrollVariants}
              viewport={{ once: false, amount: 0.5 }}
            >
              {/* Left or Right Content */}
              <div className="w-full md:w-1/2 px-4">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300">
                  <h3 className="text-2xl font-bold text-teal-300">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {exp.company} • {exp.duration}
                  </p>
                  <p className="text-gray-200">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
