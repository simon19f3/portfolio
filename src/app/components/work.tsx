import React from 'react';
import { SiAdventofcode } from "react-icons/si";
import Link from 'next/link'
function Work() {
   const works:any=[
    {name:'Language Model FineTuning',
      description:'A simple example of fine tuning a large language model to be domain specific',
      link:'https://github.com/AwraGame'},
    {name:'Machine learning',
      description:'I possess expertise in various machine learning algorithms, including model training, and am proficient in deploying models on cloud platforms',
      link:'https://chat.deepseek.com/a/chat/s/da7b7c1d-5123-463b-a530-e8d39b640181', 
    },
  {name:'Hardware Design',
    description:'I have expertise in hardware design using tools like Proteus, MATLAB, and Simulink, as well as proficiency in signal analysis.',
    link:'https://chat.deepseek.com/a/chat/s/da7b7c1d-5123-463b-a530-e8d39b640181'
},
{name:'Hardwaree Design',
    description:'I have expertise in hardware design using tools like Proteus, MATLAB, and Simulink, as well as proficiency in signal analysis.',
    link:'https://chat.deepseek.com/a/chat/s/da7b7c1d-5123-463b-a530-e8d39b640181'
}
] 
    return (
    <div className='mx-40 '>
      <div className=' text-7xl'>My Work</div>
      <div className='grid grid-cols-3  mt-10'>
                { works.map((work:any)=>(  
                    <div key={work.name} className=' mr-10 mb-12' >
                    <div  className="group relative overflow-hidden  object-cover ">
                          
                            <img
                            src='https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1611723380/1611723379.jpg'
                            alt='upload'
                            className="h-72 w-full relative object-cover"
                            />
                          
                          <div className='absolute inset-0 transform transition-all duration-700
                                            translate-y-full group-hover:translate-y-0 
                                            bg-gradient-to-t from-red-600 to-transparent 
                                            flex flex-col items-center justify-center p-4 text-white '>
                                <h1 className='text-xl mb-4'>{work.name}</h1>
                                <p className='text-center mb-8'>{work.description}</p>
                                <Link href={work.link}>
                                <SiAdventofcode className='text-7xl hover:scale-110 transition-transform' />
                                </Link>
                          </div>
                    </div>
                    </div>
                 ))}
                
                    
                
     
      </div>
      <div className='my-16 place-self-center 2xl box-border '><Link href='https://github.com/simon19f3' className='text-2xl border rounded-lg border-red-600 hover:bg-red-600 py-3 px-16'>See More</Link></div>
    </div>  
  )
}

export default Work;