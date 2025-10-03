"use client";
import React from 'react';
import { SiAdventofcode } from "react-icons/si";
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define the type for each work item
interface WorkItem {
  name: string;
  description: string;
  link: string;
}

function Work() {
  const works: WorkItem[] = [
    {
      name: 'Employee Hierarchy Management System',
      description: 'Employee hierarchy system with organizational visualization, role management, and responsive profile tracking using Next.js.',
      link: 'https://organization-s-employee-hierarchy.vercel.app/',
    },
    {
      name: 'Mini E-commerce Product Catalog',
      description: 'A responsive e-commerce frontend built with Next.js and TypeScript. It delivers a dynamic user experience with product filtering, cart management, and smooth animations.',
      link: 'https://mini-ecommerce-iklvwk434-simon19f3s-projects.vercel.app/',
    },
    {
      name: 'Real-Time-Weather-Dashboard',
      description: 'A full-stack web application that provides real-time weather information for cities worldwide with caching capabilities for improved performance.',
      link: 'https://github.com/simon19f3/Real-Time-Weather-Dashboard',
    },
    {
      name: 'Payment Request System',
      description: 'A backend service for payment request management with granular access control. Features role-based permissions for admin and superadmin tiers, built using Express.js.',
      link: 'https://github.com/simon19f3/Payment-Approval-API',
    },
  ];

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-40 my-10 md:my-20">
      <div className="text-center text-5xl md:text-7xl font-bold">
        My Work
      </div>

      <div className="grid grid-cols-3 gap-4 md:gap-8 lg:gap-10 mt-10">
        {works.map((work: WorkItem) => (
          <div key={work.name}>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-lg object-cover"
            >
              
               <Image
                        src="/1611723379.webp"
                        alt="Sample"
                        width={500}
                        height={500}
                        className="h-48 sm:h-56 md:h-64 lg:h-72 w-full relative object-cover"
                />
              <div
                className="absolute inset-0 transform transition-all duration-700 translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-red-600 to-transparent flex flex-col items-center justify-center p-2 sm:p-4 text-white text-center"
              >
                <h1 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">{work.name}</h1>
                <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-8">{work.description}</p>
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  <SiAdventofcode className="text-4xl sm:text-3xl md:text-5xl hover:scale-110 transition-transform pb-1.5" />
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/simon19f3"
          className="text-lg md:text-xl border rounded-lg border-red-600 hover:bg-red-600 py-3 px-10 md:px-16 transition-colors duration-300"
        >
          View More Projects
        </a>
      </div>
    </div>
  );
}

export default Work;