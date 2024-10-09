"use client"



import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';


function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <h2 className='text-3xl sm:text-4xl md:text-5xl text-slate-800 font-semibold pt-20 sm:pt-32 md:pt-40 bg-slate-100 pl-10 sm:pl-16 md:pl-20'>
        About us
      </h2>
      <div className='bg-slate-100 h-auto w-screen flex flex-col md:flex-row justify-center items-start px-4 sm:px-10 md:px-20 gap-6'>
        <div className='flex-1 mt-10'>
          <p className='text-justify font-medium text-sm sm:text-base md:text-lg'>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum duis aute irure dolor in reprehenderit in voluptate velit esse cillumsint occaecat cupidatat non proident.
          </p>
          <Image src="/assets/vet6.png" width={600} height={600} alt="vet" className='mt-10 rounded-3xl w-full h-auto' />
        </div>
        <div className='flex-1 mt-10'>
          <p className='text-justify font-medium text-sm sm:text-base md:text-lg'>
            Duis aute irure dolor in reprehenderit in voluptate velit ese cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident irure dolor in reprehenderit in voluptate velit esse cillumsint occaecat cupidatat non proident.
          </p>
          <Image src="/assets/vet7.png" width={600} height={600} alt="vet" className='mt-10 rounded-3xl w-full h-auto' />
        </div>
      </div>
      
      <div className='flex flex-wrap justify-around items-center my-10 sm:my-20'>
        <div className='text-center'>
          <p className='text-4xl sm:text-5xl md:text-6xl text-red-500 font-bold'>245+</p>
          <p className="text-lg sm:text-xl mt-2 sm:mt-5">Happy Clients</p>
        </div>
        <div className='text-center'>
          <p className='text-4xl sm:text-5xl md:text-6xl text-purple-500 font-bold'>50+</p>
          <p className="text-lg sm:text-xl mt-2 sm:mt-5">Expert Veterinarians</p>
        </div>
        <div className='text-center'>
          <p className='text-4xl sm:text-5xl md:text-6xl text-blue-500 font-bold'>360+</p>
          <p className="text-lg sm:text-xl mt-2 sm:mt-5">Healthy Pets</p>
        </div>
        <div className='text-center'>
          <p className='text-4xl sm:text-5xl md:text-6xl text-green-300 font-bold'>8Y+</p>
          <p className="text-lg sm:text-xl mt-2 sm:mt-5">Years of Experience</p>
        </div>
      </div>

      <div className='px-4 sm:px-10 md:px-20'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='h-full text-black rounded-xl mb-20'>
              <div className='flex justify-center items-center'>
                <Image
                  src={d.img}
                  width={500}
                  height={500}
                  alt="slider"
                  className='object-cover w-full h-auto'
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

const data = [
  {
    img: "/assets/slide1.jpg",
  },
  {
    img: "/assets/slide2.jpg",
  },
  {
    img: "/assets/slide3.jpg",
  }
];

export default About;
