// const Hero = () => {
//     return (
//       <section className="bg-gray-900 text-white h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-5xl font-bold">Hello, I'm Sekar!</h1>
//           <p className="mt-4 text-lg">A Full Stack Developer passionate about building amazing web experiences.</p>
//           <a href="#projects" className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-400">
//             View My Projects
//           </a>
//         </div>
//       </section>
//     );
//   };
  
//   export default Hero;


import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="bg-gray-900 h-screen flex items-center justify-center text-center" id="home">
      <div className="container mx-auto px-4">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
  Hi, I'm <span className="text-teal-300">Sekar Saravanan</span>
</h1>

        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
          <Typewriter
            words={[
              'Full Stack Software Developer 💻',
              'Software Engineer 🧑‍💻',
           
              'Automation Engineer 🤖',
              'Front End Developer 🖥️',
              'Backend Developer 🛠️',
              'Python Developer 🐍',
              'Microsoft PowerApps Developer 🚀', 
              'Full Stack Web Developer 🌐',
            ]}
            loop={4}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={950}
          />
        </h2>
        <p className="mt-16 text-base sm:text-lg md:text-xl text-slate-100">
          "Experienced Full Stack Software Developer with over 5 years in the IT industry."
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-teal-500 font-bold text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
