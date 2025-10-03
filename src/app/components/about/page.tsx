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
      link: 'https://www.coursera.org/learn/supervised-machine-learning-regression-and-classification', // Example link
    },
  ];

  const [abouts, setAbouts] = useState<AboutItem[]>(skills);

  const buttonHandler = (variable: AboutItem[]) => {
    setAbouts(variable);
  };

  return (
    <div className="flex flex-col md:flex-row mt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-40 h-screen mb-10 md:mb-20">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full md:w-2/4 h-auto"
      >
        <Image
          src="/183A9650.JPG"
          alt="Sample"
          width={500}
          height={500}
          className="w-full h-auto max-h-[80vh] sm:max-h-[60vh] md:max-h-[70vh] object-cover rounded-lg"
        />
      </motion.div>
      <div className="w-full md:w-2/5 px-4 sm:px-8 py-6 md:py-0 space-y-6 sm:space-y-8">
        <motion.div className="space-y-4 sm:space-y-6">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold dark:text-gray-100">
            About Me
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Electrical and Computer Engineering graduate with full-stack web development capabilities and additional machine learning expertise.
          </p>
        </motion.div>
        <div className="flex flex-row space-x-4 text-base sm:text-lg md:text-xl">
          <button
            className="hover:underline hover:decoration-red-500 hover:text-red-500"
            onClick={() => buttonHandler(skills)}
          >
            Skills
          </button>
          <button
            className="hover:underline hover:decoration-red-500 hover:text-red-500"
            onClick={() => buttonHandler(experience)}
          >
            Experience
          </button>
          <button
            className="hover:underline hover:decoration-red-500 hover:text-red-500"
            onClick={() => buttonHandler(education)}
          >
            Education
          </button>
        </div>
        <div className="my-4 sm:my-6">
          {abouts.map((about: AboutItem) => (
            <div key={about.name} className="my-3 sm:my-4">
              <div className="text-red-600 text-lg sm:text-xl">
                {about.link ? (
                  <a
                    href={about.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {about.name}
                  </a>
                ) : (
                  about.name
                )}
              </div>
              <div className="space-y-3 text-base sm:text-lg font-light dark:text-gray-300">
                {about.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;