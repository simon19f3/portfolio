"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt} from "react-icons/fa";

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
      description: 'Real-time Chat App: Full-stack application built with Node.js backend and React frontend using WebSockets for instant messaging. Supports multiple users, online status, and maintains last 50 messages in memory.',
      link: 'https://github.com/simon19f3/Real-Time-Chat-Dashboard',
    },
    {
      name: 'Payment Request System',
      description: 'A backend service for payment request management with granular access control. Features role-based permissions for admin and superadmin tiers, built using Express.js.',
      link: 'https://github.com/simon19f3/Payment-Approval-API',
    },
  ];

  return (
    <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-16 xl:mx-24 2xl:mx-32 my-8 md:my-12 lg:my-16 xl:my-20">
      {/* Header */}
      <div className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 md:mb-12 lg:mb-16">
        My Work
      </div>

      {/* Work Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
        {works.map((work: WorkItem, index: number) => (
          <motion.div
            key={work.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 w-full overflow-hidden">
              <Image
                src="/1611723379.webp"
                alt={work.name}
                width={500}
                height={500}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0 flex flex-col justify-end p-3 sm:p-4 md:p-5 text-white">
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 line-clamp-2">
                  {work.name}
                </h1>
                <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 line-clamp-3 leading-tight">
                  {work.description}
                </p>
                <div className="flex justify-center">
                  <a 
                    href={work.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    {/* <SiAdventofcode className="text-2xl sm:text-3xl md:text-4xl" /> */}
                     <FaExternalLinkAlt className="text-3xl sm:text-3xl md:text-4xl" />
                      
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile/Default Info (Visible without hover on mobile) */}
            <div className="p-3 sm:p-4 bg-gray-900 group-hover:bg-red-600 transition-colors duration-300">
              <h2 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 line-clamp-2">
                {work.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 group-hover:text-white line-clamp-2 leading-tight">
                {work.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12 md:mt-16 lg:mt-20 flex justify-center">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/simon19f3"
          className="text-base sm:text-lg md:text-xl border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-2 sm:py-3 px-8 sm:px-12 md:px-16 rounded-lg transition-all duration-300 font-medium"
        >
          View More Projects
        </motion.a>
      </div>
    </div>
  );
}

export default Work;