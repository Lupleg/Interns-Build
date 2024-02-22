import React from "react";
import { HiArrowSmRight } from "react-icons/hi";

const PricingWorkflows = () => {
  return (
    <div className='py-12 bg-gradient-to-bl from-sky-950 to-blue-900 text-white'>
      <h1 className='text-center md:mb-14 mb-8 font-bold text-3xl md:text-4xl lg:text-5xl'>
        Customize to fit your workflows
      </h1>
      <div className='flex flex-col md:flex-row justify-center items-start ml-8 gap-16'>
        <div className='whitespace-normal md:w-96 overflow-hidden md:mr-16 mr-8 text-xl'>
          <img
            src='https://front.com/_next/image?url=%2Fassets%2FPremiumChannel_blogheader_926x484.png&w=640&q=75'
            alt=''
            className='object-cover w-full md:h-80 h-auto rounded-md align-top'
          />
          <p className='mt-3 pb-3 font-bold'>
            Telegram and Dialpad SMS have entered the chat: expand your channels
            without worsening app-switching burnout
          </p>
          <a href='#' className='text-base font-semibold'>
            Read more{" "}
            <span className='inline-block align-middle'>
              <HiArrowSmRight size={25} />
            </span>
          </a>
        </div>

        <div className='mt-0 md:mt-0 whitespace-normal md:w-96 overflow-hidden md:ml-16 text-xl mr-8'>
          <img
            src='https://front.com/_next/image?url=%2Fwebassets%2Fillustrations%2Fintegrations-resource-image.png&w=640&q=75'
            alt=''
            className='object-cover w-full md:h-80 h-auto rounded-md align-top'
          />
          <p className='mt-3 font-bold pb-3'>
            Manage all of your favorite apps, right within Front
          </p>
          <a href='#' className='text-base font-semibold'>
            See all integrations{" "}
            <span className='inline-block align-middle'>
              <HiArrowSmRight size={25} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingWorkflows;
