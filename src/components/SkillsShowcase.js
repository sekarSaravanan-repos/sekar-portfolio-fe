// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import nodejsIcon from '../Assets/svgs/node-js-svgrepo-com.svg'; // Import the Node.js SVG file
// import ReactIcon from '../Assets/svgs/react-1-logo-svgrepo-com.svg'; // Import the Node.js SVG file
// import nextjsIcon from '../Assets/svgs/next-js-svgrepo-com.svg'; // Import the Node.js SVG file
// import jsIcon from '../Assets/svgs/javascript-1.svg'; // Import the Node.js SVG file
// import jqueryIcon from '../Assets/svgs/jquery-svgrepo-com.svg';
// import tailwindIcon from '../Assets/svgs/tailwind-css-2.svg'; // Import the Node.js SVG file
//  // Import the Node.js SVG file
// import pythonIcon from '../Assets/svgs/python-svgrepo-com.svg'; // Import the Node.js SVG file
// import djangoIcon from '../Assets/svgs/django-svgrepo-com.svg'; // Import the Node.js SVG file
// import flaskIcon from '../Assets/svgs/flask-svgrepo-com.svg'; // Import the Node.js SVG file
// import phpIcon from '../Assets/svgs/php2-svgrepo-com.svg'; // Import the Node.js SVG file
// import laravelIcon from '../Assets/svgs/laravel-svgrepo-com.svg'; // Import the Node.js SVG file
// import codeigniterlIcon from '../Assets/svgs/codeigniter-svgrepo-com.svg'; // Import the Node.js SVG file
// import mysqlIcon from '../Assets/svgs/mysql-logo-svgrepo-com.svg'; // Import the Node.js SVG file
// import dockerIcon from '../Assets/svgs/docker-svgrepo-com (1).svg'; // Import the Node.js SVG file
// import jenkinsIcon from '../Assets/svgs/jenkins-svgrepo-com.svg'; // Import the Node.js SVG file
// import githubIcon from '../Assets/svgs/github-color-svgrepo-com.svg'; // Import the Node.js SVG file
// import ubuntuIcon from '../Assets/svgs/ubuntu-svgrepo-com.svg'; // Import the Node.js SVG file
// import intelligenceIcon from '../Assets/svgs/chip-intelligence-processor-svgrepo-com.svg'; // Import the Node.js SVG file
// import microsoftIcon from '../Assets/svgs/icons8-microsoft-power-apps.svg'; // Import the Node.js SVG file
// import azureIcon from '../Assets/svgs/azure-v2-svgrepo-com.svg'; // Import the Node.js SVG file
// import powerbiIcon from '../Assets/svgs/power-bi-icon.svg'; // Import the Node.js SVG file
// import chatgptIcon from '../Assets/svgs/chatgpt-icon.svg'; // Import the Node.js SVG file
// import figmaIcon from '../Assets/svgs/figma-svgrepo-com.svg'; // Import the Node.js SVG file
// import scrumIcon from '../Assets/svgs/agile-software.svg'; // Import the Node.js SVG file
// import apiIcon from '../Assets/svgs/aws-api-gateway.svg'; // Import the Node.js SVG file
// import excelIcon from '../Assets/svgs/icons8-microsoft-excel.svg'; // Import the Node.js SVG file
// import googleIcon from '../Assets/svgs/google-g-2015.svg'; // Import the Node.js SVG file

// const skills = [
//   { name: 'React', imgSrc: ReactIcon },
//   { name: 'Next.js', imgSrc: nextjsIcon },
//   { name: 'Node.js', imgSrc: nodejsIcon}, // Updated Node.js URL
//   { name: 'JavaScript', imgSrc: jsIcon },
//   { name: 'jQuery', imgSrc: jqueryIcon},
//   { name: 'Tailwind CSS', imgSrc: tailwindIcon},
  
//   { name: 'Python', imgSrc: pythonIcon },
//   { name: 'Django', imgSrc: djangoIcon },
//   { name: 'Flask', imgSrc: flaskIcon },
//   { name: 'PHP', imgSrc: phpIcon },
//   { name: 'Laravel', imgSrc: laravelIcon},
//   { name: 'CodeIgniter', imgSrc: codeigniterlIcon},
//   { name: 'MySQL', imgSrc: mysqlIcon },
//   { name: 'Docker', imgSrc: dockerIcon},
//   { name: 'Jenkins', imgSrc: jenkinsIcon },
//   { name: 'GitHub', imgSrc: githubIcon },
//   { name: 'Ubuntu', imgSrc: ubuntuIcon },
//   { name: 'Machine Learning', imgSrc: intelligenceIcon },
//   { name: 'Microsoft Power Apps', imgSrc: microsoftIcon},
//   { name: 'Azure', imgSrc: azureIcon },
//   { name: 'Power BI', imgSrc: powerbiIcon },
//   { name: 'ChatGPT', imgSrc:chatgptIcon },
//   { name: 'Figma', imgSrc: figmaIcon },
//   { name: 'Agile SDLC', imgSrc: scrumIcon},
//   { name: 'REST API', imgSrc: apiIcon },
//   { name: 'VBA Macro', imgSrc: excelIcon },
//   { name: 'Chrome Extension', imgSrc: googleIcon }
// ];

// const SkillsShowcase = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//     });
//   }, []);

//   return (
//     <div className="container mx-auto py-12">
//       <h2 className="text-4xl font-bold text-center mb-10">Skills & Technologies</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             data-aos="fade-up"
//             className="flex flex-col items-center justify-center"
//           >
//             <img
//               src={skill.imgSrc}
//               onError={(e) => { e.target.src = 'https://www.svgrepo.com/show/345123/default-icon.svg'; }} // Fallback icon
//               alt={skill.name}
//               className="w-24 h-24 object-cover mb-4 rounded-full"
//             />
//             <p className="text-lg font-semibold">{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillsShowcase;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import nodejsIcon from '../Assets/svgs/node-js-svgrepo-com.svg';
import ReactIcon from '../Assets/svgs/react-1-logo-svgrepo-com.svg';
import nextjsIcon from '../Assets/svgs/next-js-svgrepo-com.svg';
import jsIcon from '../Assets/svgs/javascript-1.svg';
import jqueryIcon from '../Assets/svgs/jquery-svgrepo-com.svg';
import tailwindIcon from '../Assets/svgs/tailwind-css-2.svg';
import pythonIcon from '../Assets/svgs/python-svgrepo-com.svg';
import djangoIcon from '../Assets/svgs/django-svgrepo-com.svg';
import flaskIcon from '../Assets/svgs/flask-svgrepo-com.svg';
import phpIcon from '../Assets/svgs/php2-svgrepo-com.svg';
import laravelIcon from '../Assets/svgs/laravel-svgrepo-com.svg';
import codeigniterlIcon from '../Assets/svgs/codeigniter-svgrepo-com.svg';
import mysqlIcon from '../Assets/svgs/mysql-logo-svgrepo-com.svg';
import dockerIcon from '../Assets/svgs/docker-svgrepo-com (1).svg';
import jenkinsIcon from '../Assets/svgs/jenkins-svgrepo-com.svg';
import githubIcon from '../Assets/svgs/github-color-svgrepo-com.svg';
import ubuntuIcon from '../Assets/svgs/ubuntu-svgrepo-com.svg';
import intelligenceIcon from '../Assets/svgs/chip-intelligence-processor-svgrepo-com.svg';
import microsoftIcon from '../Assets/svgs/icons8-microsoft-power-apps.svg';
import azureIcon from '../Assets/svgs/azure-v2-svgrepo-com.svg';
import powerbiIcon from '../Assets/svgs/power-bi-icon.svg';
import chatgptIcon from '../Assets/svgs/chatgpt-icon.svg';
import figmaIcon from '../Assets/svgs/figma-svgrepo-com.svg';
import scrumIcon from '../Assets/svgs/agile-software.svg';
import apiIcon from '../Assets/svgs/aws-api-gateway.svg';
import excelIcon from '../Assets/svgs/icons8-microsoft-excel.svg';
import googleIcon from '../Assets/svgs/google-g-2015.svg';

const skills = [
  { name: 'React', imgSrc: ReactIcon },
  { name: 'Next.js', imgSrc: nextjsIcon },
  { name: 'Node.js', imgSrc: nodejsIcon},
  { name: 'JavaScript', imgSrc: jsIcon },
  { name: 'jQuery', imgSrc: jqueryIcon},
  { name: 'Tailwind CSS', imgSrc: tailwindIcon},
  { name: 'Python', imgSrc: pythonIcon },
  { name: 'Django', imgSrc: djangoIcon },
  { name: 'Flask', imgSrc: flaskIcon },
  { name: 'PHP', imgSrc: phpIcon },
  { name: 'Laravel', imgSrc: laravelIcon},
  { name: 'CodeIgniter', imgSrc: codeigniterlIcon},
  { name: 'MySQL', imgSrc: mysqlIcon },
  { name: 'Docker', imgSrc: dockerIcon},
  { name: 'Jenkins', imgSrc: jenkinsIcon },
  { name: 'GitHub', imgSrc: githubIcon },
  { name: 'Ubuntu', imgSrc: ubuntuIcon },
  { name: 'Machine Learning', imgSrc: intelligenceIcon },
  { name: 'Microsoft Power Apps', imgSrc: microsoftIcon},
  { name: 'Azure', imgSrc: azureIcon },
  { name: 'Power BI', imgSrc: powerbiIcon },
  { name: 'ChatGPT', imgSrc: chatgptIcon },
  { name: 'Figma', imgSrc: figmaIcon },
  { name: 'Agile SDLC', imgSrc: scrumIcon},
  { name: 'REST API', imgSrc: apiIcon },
  { name: 'VBA Macro', imgSrc: excelIcon },
  { name: 'Chrome Extension', imgSrc: googleIcon }
];

const SkillsShowcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-sky-700  text-center mb-6">Technologies I've Worked With</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex flex-col items-center justify-center"
          >
            <img
              src={skill.imgSrc}
              onError={(e) => { e.target.src = 'https://www.svgrepo.com/show/345123/default-icon.svg'; }}
              alt={skill.name}
              className="w-20 h-20 object-cover mb-2 rounded-full"
            />
            <p className="text-base font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsShowcase;

