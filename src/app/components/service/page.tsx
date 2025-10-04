import React from 'react'
import { FaCode, FaMicrochip, FaBrain } from "react-icons/fa";

function Service() {
  interface ServiceItem {
    icon: React.ReactNode;
    name: string;
    description: string;
    link: string;
    link2: string;
  }
  
  const myServices: ServiceItem[] = [
    {
      icon: <FaCode />,
      name: 'Application Development',
      description: 'I develop and customize software applications, leveraging JavaScript and TypeScript for robust solutions from design to deployment.',
      link: 'https://github.com/simon19f3/Real-Time-Weather-Dashboard',
      link2: 'https://share.vidyard.com/watch/KT65wcjKEwR4MoqfrkZYrX'
    },
    {
      icon: <FaBrain />,
      name: 'Machine learning',
      description: 'Skilled in implementing various machine learning algorithms for practical solutions.',
      link: 'https://github.com/simon19f3/Voice-Smoother', 
      link2: 'none'
    },
    {
      icon: <FaMicrochip />,
      name: 'Hardware Design',
      description: 'My technical background encompasses end-to-end hardware design using Proteus, MATLAB, and Simulink, integrated with robust signal analysis capabilities',
      link: 'https://github.com/simon19f3/Smart-Elevator-System-with-Traction-Control',
      link2: 'none'
    },
  ]

  return (
    <div className='mx-4 sm:mx-6 md:mx-8 lg:mx-16 xl:mx-24 2xl:mx-32 mt-20 md:mt-24 lg:mt-28 xl:mt-32 mb-16 md:mb-20 lg:mb-24'>
      {/* Header */}
      <div className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-8 md:pb-12 lg:pb-16'>
        My Services
      </div>
      
      {/* Services Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
        {myServices.map((myService: ServiceItem) => (
          <div 
            key={myService.name} 
            className='shadow-md bg-gray-900 px-4 py-6 sm:px-5 sm:py-7 md:px-6 md:py-8 lg:px-7 lg:py-9 xl:px-8 xl:py-10 hover:bg-red-600 duration-300 hover:-translate-y-2 lg:hover:-translate-y-3 rounded-xl md:rounded-2xl lg:rounded-3xl transition-all transform relative overflow-hidden group'
          >
            {/* Icon */}
            <div className='text-4xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-360'>
               {myService.icon}
            </div>
            
            {/* Title */}
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7'>
              {myService.name}
            </h1>
            
            {/* Description */}
            <p className='text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 leading-relaxed'>
              {myService.description}
            </p>
            
            {/* Links Container */}
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4'>
              {/* First Link - Always visible */}
              <a 
                href={myService.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs sm:text-sm md:text-base underline hover:text-gray-200 transition-colors duration-200 inline-block hover:scale-105 transform"
              >
                Learn More
              </a>
              
              {/* Second Link - Conditional */}
              {myService.link2 && myService.link2 !== 'none' && (
                <a 
                  href={myService.link2} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs sm:text-sm md:text-base underline hover:text-gray-200 transition-colors duration-200 inline-block hover:scale-105 transform"
                >
                  View Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service