import React from 'react'
import Image from 'next/image'
import Button from '../components/button/Button'


export default function Ourvets() {
  return (

    <>
    

    <div className="text-3xl sm:text-4xl md:text-5xl text-slate-800 font-semibold pt-20 sm:pt-32 md:pt-40 bg-slate-100  pb-20 text-center">
       
           <h2 className='bottom-6'>  Our vets</h2>
             
    </div>
             
    <div className='flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 px-3 sm:px-0'>  
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5 border-2 border-slate-700 rounded-3xl items-center justify-center py-5 sm:py-10 h-full w-full sm:w-3/4 md:w-1/3 bg-white px-3 ">
        <Image src="/assets/doc1.png" width={200} height={300} alt="doc" className='rounded-3xl hover:scale-105 transition-all duration-1000' />  
        <div className='flex-col px-3'>
            <p className="font-semibold text-xl"> Dr. John Carter</p>
            <p className='text-lg my-3'>Veterinarian</p> 
            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro nisi reiciendis hic reprehenderit.</p> 
        </div>         
    </div>
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5 border-2 border-slate-700 rounded-3xl items-center justify-center py-5 sm:py-10 h-full w-full sm:w-3/4 md:w-1/3 bg-white px-3">
        <Image src="/assets/doc2.png" width={200} height={300} alt="doc" className='rounded-3xl hover:scale-105 transition-all duration-1000' />  
        <div className='flex-col px-3'>
            <p className="font-semibold text-xl"> Dr. Lilly Woods</p>
            <p className='text-lg my-3'>Veterinarian</p> 
            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro nisi reiciendis hic reprehenderit.</p> 
        </div>         
    </div>


</div>

<div className='flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center my-10 gap-5 md:gap-8'>
    <Button title={"Book an appointment"} className="text-base sm:text-lg lg:text-lg xl:text-xl px-4 sm:px-6 xl:px-8" />
    <div className='flex items-center'>
        <p className='pt-4 md:pt-0 text-center md:text-left'>Browse all vets</p> 
        <Image src="/assets/arrow.svg" width={50} height={50} alt="arrow" className='hidden md:block pt-1 mx-2' />
    </div>
</div>

    
    
    </>
  )
}


