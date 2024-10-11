import React from "react";
import Image from "next/image";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import About from "../about/page";
import Ourvets from "../ourVets/page";


function Hero() {
  return (
    <>
      <div className="overflow-x-hidden  flex flex-col h-full w-full bg-slate-100">
        <div className="bg-purple-200 w-full max-w-[1200px] h-auto md:h-[600px] mx-auto rounded-2xl flex flex-col md:flex-row justify-center items-center p-5 md:mx-20">
          <div className="md:w-[434px] w-full text-center md:text-left">
            <h1 className="text-3xl md:text-5xl text-slate-800 font-bold">
              Trustworthy vets putting your pets first
            </h1>
            <p className="my-5 md:my-10 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipiselit sed do tempor
              incididunt ut labore et dolore magna aliqua ut enim.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <Image
              src="/assets/vet1.png"
              width={500}
              height={500}
              alt="vet"
              className="w-full md:w-[500px] h-auto"
            />
          </div>
        </div>

        <div className="hidden md:flex md:flex-col md:justify-around md:gap-6 md:items-center md:mt-10 lg:flex-row lg:justify-center lg:items-center lg:gap-10 xl:gap-14">
  <Button title={"Book an appointment"} className="lg:text-lg xl:text-xl lg:px-6 xl:px-8" />
  
  <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-4">
    <p className="relative mt-3 md:mt-0 lg:mt-0 md:left-5 lg:left-0 hover:text-purple-800 hover:cursor-pointer text-base lg:text-lg xl:text-xl">
      Browse all services
    </p>
    
    <Image
      src="/assets/arrow.svg"
      width={25}
      height={25}
      alt="arrow"
      className="relative mt-2 md:left-7 md:bottom-[65px] lg:bottom-0 lg:ml-3 lg:mt-0"
    />
  </div>
</div>



        <div className="flex md:flex-col flex-col justify-between items-center bg-slate-100 py-10 md:py-20">
          
            <h2 className="text-3xl md:text-5xl text-slate-800">
              Our pet care services
            </h2> 
            <p className="my-5 px-3 md:my-10 text-justify">
              Lorem ipsum dolor sit amet consectetur adipiselit sed do
              tempor incididunt ut labore et dolore magna aliqua ut enim.
            </p>
          
          
        </div>

        <div className="w-full flex flex-col md:flex-row justify-evenly items-center bg-slate-100 py-10">
          <div className="w-full md:w-auto flex justify-center mb-10">
            <Image
              src="/assets/vet2.png"
              alt="Vet Image"
              width={500}
              height={900}
              className="rounded-3xl w-full md:w-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-full md:max-w-5xl">
            <Card
              product="In-house Laboratory"
              price="$19 USD / Hour"
              desc="Lorem ipsum dolor sit amet consectetur adipiselit sed do eiusmod"
              img="/assets/tt.svg"
            />
            <Card
              product="Diagnostics"
              price="$49 USD / Hour"
              desc="Lorem ipsum dolor sit amet consectetur adipiselit sed do eiusmod"
              img="/assets/diagnostic.svg"
            />
            <Card
              product="Vaccinations"
              price="$39 USD / Hour"
              desc="Lorem ipsum dolor sit amet consectetur adipiselit sed do eiusmod"
              img="/assets/syringe.svg"
            />
            <Card
              product="Wellness Care"
              price="$59 USD / Hour"
              desc="Lorem ipsum dolor sit amet consectetur adipiselit sed do eiusmod"
              img="/assets/wellnesscare.svg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 items-center pt-10 md:pt-24">
          <h2 className="text-3xl md:text-5xl text-slate-800">
            Our featured products
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipiselit sed do tempor
            incididunt <br /> ut labore et dolore magna aliqua ut enim.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly items-center gap-4 mt-5 md:mt-16">
          <Image
            src="/assets/vet3.png"
            width={400}
            height={400}
            alt="vet"
            className="rounded-3xl w-full md:w-auto"
          />
          <Image
            src="/assets/vet4.png"
            width={400}
            height={400}
            alt="vet"
            className="rounded-3xl w-full md:w-auto"
          />
          <Image
            src="/assets/vet5.png"
            width={400}
            height={400}
            alt="vet"
            className="rounded-3xl w-full md:w-auto"
          />
        </div>

        <div className=" hidden md:flex justify-around items-center mt-10">
          <p className="text-lg md:text-3xl">Small dog dish</p>
          <p className="text-lg md:text-3xl">Dog ball</p>
          <p className="text-lg md:text-3xl">Sand shovel</p>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center mt-10">
          <div className="relative">
            <Button title={"Add to Cart"} />
            <p className="relative left-8 md:left-[130px]  md:bottom-11 hover:text-purple-800 hover:cursor-pointer">
              Buy now
            </p>
            <Image
              src="/assets/arrow.svg"
              width={20}
              height={20}
              alt="arrow"
              className="relative left-24 md:left-[195px] bottom-[22px] md:bottom-[65px]"
            />
          </div>
        </div>

        <About />

        <div className="flex flex-col h-full w-full mt-10 md:mt-28">
          <div className="bg-green-200 w-full max-w-[1200px] h-auto md:h-[600px] mx-auto rounded-2xl flex flex-col md:flex-row justify-center items-center gap-10 p-5">
            <Image
              src="/assets/bigDog.png"
              width={400}
              height={430}
              alt="dog"
              className="w-full md:w-auto"
            />
            <div className="w-full md:w-[434px] text-center md:text-left">
              <h1 className="text-3xl md:text-5xl text-slate-800 font-bold ">
                Schedule your appointment today!
              </h1>
              <p className="my-5 md:my-10 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipiselit sed do tempor
                incididunt ut labore et dolore magna aliqua ut enim.
              </p>
              <Button title={"Book an appointment"} className="text-base sm:text-lg lg:text-lg xl:text-xl px-4 sm:px-6 xl:px-8"/>
            </div>
          </div>
            <Ourvets/>
        </div>
      </div>
    </>
  );
}

export default Hero;
