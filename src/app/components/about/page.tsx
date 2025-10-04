"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AboutItem {
  name: string;
  description: string;
  link?: string; // Optional link property for items that need a URL
}

const About = () => {
  const skills: AboutItem[] = [
    {
      name: 'Software development',
      description: 'JavaScript, React.js, Next.js, Express.js',
    },
    {
      name: 'Machine Learning',
      description: 'Supervised and Unsupervised learning',
    },
    {
      name: 'Network installation',
      description: 'LAN/WAN setup, router configuration, firewall management, network troubleshooting',
    },
  ];

  const experience: AboutItem[] = [
    {
      name: 'MiNT internship program as software developer',
      description:
        'Planning and monitoring website development for Ministry of Innovation and Technology (MiNT) using MERN stack.',
    },
    {
      name: 'Commercial Bank of Ethiopia IT Support Intern',
      description:
        'Resolved IT hardware/software issues (Branch support), configured server installations with seniors, and troubleshot network issues.',
    },
  ];

  const education: AboutItem[] = [
    {
      name: 'Addis Ababa University',
      description: "Electrical and Computer Engineering Bachelor's Degree",
    },
    {
      name: '5G technologies and services for business and entrepreneurs Trainee',
      description: '5G-Facilitated Business & Entrepreneurship in Emerging markets Trainee',
    },
    {
      name: 'Machine learning Coursera',
      description: 'Supervised Machine Learning: Regression and Classification at Coursera',
      link: 'https://coursera.org/share/dc6a6bbf26b26fdab0b6d4c3f1c44044',
    },
  ];

  const [abouts, setAbouts] = useState<AboutItem[]>(skills);
  const [activeButton, setActiveButton] = useState<string>('skills');

  const buttonHandler = (variable: AboutItem[], buttonName: string) => {
    setAbouts(variable);
    setActiveButton(buttonName);
  };

  const buttonClass = (buttonName: string) =>
    `px-3 sm:px-4 py-2 text-sm sm:text-base md:text-lg rounded-lg transition-all duration-300 ${
      activeButton === buttonName
        ? 'bg-red-500 text-white shadow-lg font-medium'
        : 'border-2 border-red-600 dark:bg-gray-800 text-red-600 dark:text-gray-300 hover:bg-red-300 hover:text-white'
    }`;

  return (
    <div className="flex flex-col lg:flex-row mt-8 md:mt-12 lg:mt-16 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-24 2xl:mx-32 mb-12 md:mb-16 lg:mb-20">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-2/5 xl:w-2/4 mb-6 lg:mb-0 lg:mr-8 xl:mr-12 flex justify-center lg:justify-start"
      >
        <div className="relative w-full max-w-md lg:max-w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[500px] rounded-lg md:rounded-xl overflow-hidden">
          <Image
            src="/183A9650.JPG"
            alt="Profile"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="w-full lg:w-3/5 xl:w-2/4 px-2 sm:px-4 lg:px-0 space-y-4 sm:space-y-6 lg:space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-3 sm:space-y-4"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold dark:text-gray-100">
            About Me
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 dark:text-gray-300 leading-relaxed">
            Electrical and Computer Engineering graduate with full-stack web development capabilities and additional machine learning expertise.
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap gap-2 sm:gap-3"
        >
          <button
            className={buttonClass('skills')}
            onClick={() => buttonHandler(skills, 'skills')}
          >
            Skills
          </button>
          <button
            className={buttonClass('experience')}
            onClick={() => buttonHandler(experience, 'experience')}
          >
            Experience
          </button>
          <button
            className={buttonClass('education')}
            onClick={() => buttonHandler(education, 'education')}
          >
            Education
          </button>
        </motion.div>

        {/* Content Display */}
        <motion.div
          key={activeButton}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="my-4 sm:my-6 space-y-3 sm:space-y-4"
        >
          {abouts.map((about: AboutItem, index: number) => (
            <motion.div
              key={about.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
            >
              <div className="text-red-600 dark:text-red-400 text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                {about.link ? (
                  <a
                    href={about.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    {about.name} 
                    <span className="text-sm">↗</span>
                  </a>
                ) : (
                  about.name
                )}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300 dark:text-gray-300 leading-relaxed">
                {about.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;