import React from 'react'; 
import Image from 'next/image'; 

const Herob = () => ( 
  <div className="flex items-center justify-center flex-wrap gap-24 w-full mx-auto h-auto sm:flex-nowrap sm:overflow-x-auto"> 
    {['/Logo/Logo.png', '/Logo/Logo (1).png', '/Logo/Logo (2).png', '/Logo/Logo (3).png', '/Logo/Logo (4).png', '/Logo/Logo (5).png', '/Logo/Logo (6).png'].map((src, index) => ( 
      <Image 
        key={index} 
        src={src} 
        alt={`Logo ${index + 1}`} 
        width={85} 
        height={87} 
        className="inline-block" 
      /> 
    ))} 
  </div> 
);

export default Herob;
