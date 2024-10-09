import React from 'react'
import Image from 'next/image'
import Button from '../components/button/Button'

function Footer() {
  return (
    <>
      <div className="min-h-screen w-screen bg-white flex flex-col md:flex-row justify-evenly items-center p-4">
        <div className="mb-16 md:mb-[360px]">
          <div className="flex gap-4 items-center">
            <Image src="/assets/paw.svg" width={44} height={45} alt="Flowbite Logo" />
            <h2 className="font-semibold text-2xl my-4">PET X</h2>
          </div>
          <p className="font-semibold text-sm md:text-base">
            Copyright © Pet X | Designed by <span className="hover:text-pink-300 transition-all duration-500 hover:cursor-pointer">BRIX <br />Templates</span> - Powered by <span className="hover:text-pink-500 transition-all duration-300 hover:cursor-pointer">Webflow</span>
          </p>
        </div>

        <div className="mb-16">
          <h2 className="font-medium text-lg md:text-2xl">Pages</h2>
          <ul className="my-4">
            {["Preview", "Home V1", "Home V2", "Home V3", "About", "Services", "Services single", "Vets", "Vets single", "Blog V1", "Blog V2", "Blog V3"].map((page) => (
              <li key={page} className="my-2 text-sm md:text-base hover:text-pink-300 transition-all duration-500 hover:cursor-pointer">
                {page}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-16">
          <ul className="my-4">
            {["Blog post", "Blog category", "Shop", "Shop single", "Pricing", "Contact V1", "Contact V2", "Contact V3", "Location", "Location single", "Coming soon"].map((item) => (
              <li key={item} className="my-2 text-sm md:text-base hover:text-pink-300 transition-all duration-500 hover:cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="font-medium text-lg md:text-2xl">Utility Pages</h2>
          <ul className="my-4">
            {["Start here", "Style guide", "404 not found", "Password protected", "Licences", "ChangeLog", "MoreWebflow Templates"].map((item) => (
              <li key={item} className="my-2 text-sm md:text-base hover:text-pink-300 transition-all duration-500 hover:cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-16 md:mb-40">
          <h2 className="font-medium text-lg md:text-2xl">Contact Us</h2>
          <div className="flex gap-2 items-center">
            <Image src="/assets/loc1.svg" width={50} height={50} alt="Location Icon" />
            <p className="my-4 text-sm md:text-base hover:text-pink-300 transition-all duration-500 hover:cursor-pointer">
              1234 S Normandie Ave #14 <br /> Los Angeles, CA 404440
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image src="/assets/mail1.svg" width={50} height={50} alt="Mail" />
            <p className="my-4 text-sm md:text-base hover:text-pink-300 transition-all duration-500 hover:cursor-pointer">
              contact@pet.com
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image src="/assets/phone1.svg" width={50} height={50} alt="Phone" />
            <p className="my-4 text-sm md:text-base hover:text-pink-300 transition-all duration-500 hover:cursor-pointer">
              (1234)-1234-1234
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[85%] mt-20 bg-red-200 rounded-3xl p-4 md:p-8">
        <div className="w-full md:w-[500px]">
          <Image src="/assets/dogncat.png" width={500} height={500} alt="vet" className="object-contain" />
        </div>
        <div className="w-full md:w-[434px] text-center md:text-left mt-4 md:mt-40">
          <h1 className="text-2xl md:text-5xl text-slate-800 font-bold">
            Give your pet the best - Contact us!
          </h1>
        </div>
        <div className="relative mt-8 md:mt-40">
          <Button title={"Book an appointment"} />
          <p className="mt-4 md:mt-0 text-sm md:text-base hover:text-purple-800 hover:cursor-pointer">
            Browse all services
          </p>
          <Image src="/assets/arrow.svg" width={20} height={20} alt="arrow" className=" hidden mt-2 md:mt-0" />
        </div>
      </div>
    </>
  );
}

export default Footer;
