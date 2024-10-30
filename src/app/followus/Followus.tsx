import React from 'react'
import Image from 'next/image'

import Newbutton from '../components/newButton/Newbutton'

function Followus() {
  return (

<>

<div className='flex flex-col-reverse md:flex-row justify-center items-center gap-5 h-full w-full px-10'>
  <Image 
    src="/assets/catty.jpeg" 
    width={500} 
    height={300} 
    alt="dog" 
    className='rounded-3xl hover:scale-105 transition-all duration-1000 w-full md:w-1/2' 
  />
  <div className='flex flex-col w-full md:w-1/2'>
    <div className='flex flex-col items-start gap-10'>
      <h2 className='text-4xl font-semibold'>Follow us on</h2>
      <p className='text-justify'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        <br /> fugiat nulla pariatur sint occaecat cupidatat non proident, sunt in culpa qui.
      </p>
    </div>
    <div className='flex flex-col md:flex-row gap-3 justify-evenly mt-10'>
      <Newbutton title="Facebook"/>
      <Newbutton title="Youtube"/>
      <Newbutton title="TikTok"/>
      <Newbutton title="Twitter"/>
    </div>
    
    <div className='flex flex-col md:flex-row gap-4 mt-32 self-end'>
      <Image 
        src="/assets/image1.png" 
        width={400} 
        height={600} 
        alt="dog" 
        className='rounded-3xl hover:scale-105 transition-transform duration-1000 w-full md:w-1/2'
      />
      <Image 
        src="/assets/image2.jpg" 
        width={300} 
        height={400} 
        alt="dog" 
        className='rounded-3xl hover:scale-105 transition-transform duration-1000 w-full md:w-1/2'
      />
    </div>
  </div>
</div>

</>


  )
}

export default Followus