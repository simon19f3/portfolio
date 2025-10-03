import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";

function Service() {
  interface ServiceItem {
   
    name: string;
    description: string;
    link: string;
  }
  const myServices:ServiceItem[]=[
    {
      name:'Appliction Development',
      description:'I develop and customize software applications, leveraging JavaScript and TypeScript for robust solutions from design to deployment.',
      link:' https://github.com/simon19f3/Real-Time-Chat-Dashboard'},
    {name:'Machine learning',
      description:'Skilled in implementing various machine learning algorithms for practical solutions.',
      link:'https://github.com/simon19f3/Voice-Smoother', 
    },
  {name:'Hardware Design',
    description:'My technical background encompasses end-to-end hardware design using Proteus, MATLAB, and Simulink, integrated with robust signal analysis capabilities',
    link:'https://github.com/simon19f3/Smart-Elevator-System-with-Traction-Control'
},

]
  return (
    <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-40 mt-32   mb-20'>
    <div className='text-center text-5xl md:text-7xl font-bold pb-10 md:pb-20'>
        My Services
    </div>
    <div className='grid grid-cols-3 gap-4 md:gap-8 lg:gap-12'>
        {myServices.map((myService:ServiceItem) => (
            <div 
                key={myService.name} 
                className='shadow-md bg-gray-900 px-4 py-6 md:px-8 md:py-10 hover:bg-red-600 duration-300 hover:-translate-y-3 rounded-2xl md:rounded-3xl'
            >
                <div className='text-5xl md:text-7xl mb-6 md:mb-10'>
                    <IoLogoLinkedin />
                </div>
                <h1 className='text-xl md:text-3xl lg:text-4xl mb-4 md:mb-8'>
                    {myService.name}
                </h1>
                <p className='text-sm md:text-base mb-4 md:mb-8'>
                    {myService.description}
                </p>
                <a href={myService.link} target="_blank" rel="noopener noreferrers" className="text-sm md:text-base underline hover:text-gray-200">
                          learn more
                </a>
            </div>
        ))}
    </div>
</div>
  )
}

export default Service