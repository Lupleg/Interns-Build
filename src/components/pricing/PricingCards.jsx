import React from 'react'
import { useState } from 'react';
import Button from '../Button';
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaArrowRight} from "react-icons/fa6";

const PricingCards = () => {
  
  const [isLeftButtonClicked, setIsLeftButtonClicked] = useState(true);

  const handleLeftButtonClick = () => {
    setIsLeftButtonClicked(true);
  };

  const handleRightButtonClick = () => {
    setIsLeftButtonClicked(false);
  };
  
  return (
    <div className='py-10 flex flex-col items-center justify-center align-center'>
        <div className='md:4/6 lg:w-2/3 xl:w-6/12 mx-auto text-center'>
            <p className=' font-bold text-3xl md:text-4xl lg:text-5xl p-4'>Choose your plan to deliver exceptional service</p>
        </div>

        <div className='flex gap-x-2 sm:gap-x-6 md:gap-x-10 justify-center align-center mt-10'>
            <button className={` text-semibold text-xs ${
          isLeftButtonClicked ? 'bg-black text-white' : 'bg-white text-black border-2'
        } rounded-t-lg p-1 sm:p-3`} onClick={handleLeftButtonClick}>FOR MOST BUSINESSES</button>
            <button className={` text-semibold text-xs ${
          isLeftButtonClicked ? 'bg-white text-black border-2' : 'bg-black text-white'
        } rounded-t-lg p-1 sm:p-3`} onClick={handleRightButtonClick}>FOR SMALLER TEAMS</button>
        </div>

        <div className={`py-8 md:py-10 w-full lg:py-14 bg-gradient-to-b from-red-100 to-zinc-50 ${isLeftButtonClicked ? 'block' :'hidden'}`}>
        <div className={`flex flex-col  gap-y-8 lg:mx-auto  lg:flex-row w-4/5 mx-auto lg:gap-x-6 `}>
          <div className=' p-6 rounded-xl bg-white z-20 shadow-md'>
            <p className='font-semibold text-3xl'>Growth</p>
            <p className='py-1'>For teams looking to streamline support workflows and improve performance</p>
            <p className='font-semibold text-3xl mt-12'>$59 <sup className='text-lg'>USD</sup> <span className='font-normal text-sm text-gray-400'>/seat/mo</span></p>
            <p className='text-gray-400 py-2 text-sm'>Billed annually, minimum 2 seats</p>
            <Button text="Get Started" width="11/12"/>
            <hr className='my-2'/>

            <div>
              <p className='font-bold  mt-4'>Deliver exceptional service with...</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span> Omnichannel shared inboxes</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span> Real-time collaboration features</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span> Up to 20 rules to automate workflows</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span> Analytics on team performance, customer satisfaction, SLAs and more</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span>Built-in knowledge base, live chat with chatbots, and 50+ integrations</p>
            </div>
            
            <hr className='block lg:hidden my-6'/>
            <div className=' flex block lg:hidden justify-center align-items'>
              <p className='flex inline-flex items-center gap-x-1 font-semibold hover:cursor-pointer'>See all features <span><FaArrowRight/></span></p>
            </div>
            
          </div>

          <div className=' p-6 rounded-xl bg-white z-20 shadow-md'>
            <div className="flex items-center">
            <p className='font-semibold text-3xl inline-flex items-center'>Scale <span className='bg-black text-white text-xs px-2 py-1 rounded-md inline-block ml-4'>MOST POPULAR</span></p>
            </div>
            
            <p className='py-1'>For teams that need total workflow flexibility and advanced user management</p>
            <p className='font-semibold text-3xl mt-12'>$99 <sup className='text-lg'>USD</sup> <span className='font-normal text-sm text-gray-400'>/seat/mo</span></p>
            <p className='text-gray-400 py-2 text-sm'>Billed annually, minimum 20 seats</p>
            <Button text="Talk to sales" width="11/12"/>
            <hr className='my-2'/>

            <div>
              <p className='font-bold  mt-4'>Get everything in Growth, plus...</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span>Multiple workspaces for distinct teams</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span> User management with SSO, SCIM provisioning, and custom permissions</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span> No-code dynamic objects to connect backend systems and up to 200 rules</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span> Analytics by customer from your CRM</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span>Onboarding and solution design</p>
            </div>

            <hr className='block lg:hidden my-6'/>
            <div className=' flex block lg:hidden justify-center align-items'>
              <p className='flex inline-flex items-center gap-x-1 font-semibold hover:cursor-pointer'>See all features <span><FaArrowRight/></span></p>
            </div>
            
          </div>

          <div className=' p-6 rounded-xl bg-white z-20 shadow-md'>
            <p className='font-semibold text-3xl'>Premier</p>
            <p className='py-1'>For teams looking to streamline support workflows and improve performance</p>
            <p className='font-semibold text-3xl mt-12'>$229 <sup className='text-lg'>USD</sup> <span className='font-normal text-sm text-gray-400'>/seat/mo</span></p>
            <p className='text-gray-400 py-2 text-sm'>Billed annually, minimum 50 seats</p>
            <Button text="Talk to sales" width="11/12"/>
            <hr className='my-2'/>

            <div>
              <p className='font-bold  mt-4'>Everything in Scale and...</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span> Highest usage caps across all features</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span> Additional success services including Premier Onboarding</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span> Custom Build Hours including API advisory and integration development</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span> Video conferencing support</p>
            </div>

            <hr className='block lg:hidden my-6'/>
            <div className=' flex block lg:hidden justify-center align-items'>
              <p className='flex inline-flex items-center gap-x-1 font-semibold hover:cursor-pointer '>See all features <span><FaArrowRight/></span></p>
            </div>
            
          </div>
              
        </div>
              <div className='flex justify-center align-center'>
              <p  className=' mx-auto inline-center   gap-x-2 mt-8 hidden lg:block hover:cursor-pointer text-xs font-semibold'>Compare all plans <span className=' align-middle inline-block'>  <FaArrowRight/></span></p>
              </div>
              
        </div>

        <div className={`py-8 md:py-10 lg:py-14 ${isLeftButtonClicked ? 'hidden' : 'block'} w-full bg-gradient-to-b from-slate-200 to-zinc-50` }>

          <div className='flex flex-col lg:flex-row w-4/5 lg:w-4/6 mx-auto flex shadow-lg rounded-xl bg-white'>
            <div className='p-6 px-8 border-b-2 lg:border-r-2 lg:pr-14 '>
                <p className='font-semibold text-3xl'>Starter</p>
                <p className='py-1'>For smaller teams looking to bring customer support workflows into one place</p>
                <p className='font-semibold text-3xl mt-12'>$19 <sup className='text-lg'>USD</sup> <span className='font-normal text-sm text-gray-400'>/seat/mo</span></p>
                <p className='text-gray-400 pt-1 text-sm'>Billed annually, 2-10 seats</p>
                <p className='text-gray-400 pb-3  text-sm'>Monthly plan also available</p>
                <Button text="Get Started" width="11/12"/>
            </div>

            <div className='h-full border-1'>

            </div>

            <div className='px-8 py-2 pb-10 lg:pr-24'>
              <p className='font-bold  mt-4'>Features</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span>Omnichannel shared inboxes</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span> Team collaboration on customer messages</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span> Included knowledge base and website live chat</p>
              <p className='flex align-center mt-4 gap-x-3 '><span className='my-auto'><IoCheckmarkOutline color='gray-400'/></span> Access to most 3rd-party integrations</p>

            </div>

            <hr className='block lg:hidden '/>
            <div className=' flex block lg:hidden justify-center align-items'>
              <p className='flex inline-flex items-center gap-x-1 font-semibold hover:cursor-pointer py-8 '>See all features <span><FaArrowRight/></span></p>
            </div>
          </div>

          <div className='flex justify-center align-center'>
              <p  className=' mx-auto inline-center   gap-x-2 mt-16 hidden lg:block hover:cursor-pointer text-xs font-semibold'>Compare all plans <span className=' align-middle inline-block'>  <FaArrowRight/></span></p>
          </div>
          
        </div>

        <div className={`border-2 w-4/5 block lg:hidden my-10 text-center py-14 bg-slate-200 ${isLeftButtonClicked ? 'hidden' : 'block'}`}>
              <p className='font-semibold text-lg sm:text-2xl'>Compare plans and all features</p>
              <button className='p-3 px-8 border-2 rounded-full mt-6 bg-sky-600 font-semibold text-white'><a href="/public/assets/Front-Pricing-One-Pager-2023-03-06.pdf" target='_blank' rel="noopener noreferrer"> Download PDF</a></button>
        </div>

        
    </div>
  )
}

export default PricingCards