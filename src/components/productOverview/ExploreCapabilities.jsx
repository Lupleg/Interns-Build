import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ExploreCapabilities = () => {
  return (
    <div className='bg-blue-950 text-white pl-16'>
      <div className='pt-10'>
        <h1 className='text-5xl pb-5'>Explore all of Front's capabilities</h1>
        <p className='pt-5'>Learn more about our product</p>
        <a href=''>
          <FaArrowRightLong className=' ' />
        </a>

        <div className='grid grid-cols-2'>
          <div className='col-span-1 flex flex-col mt-12 mb-14'>
            <div className='pb-8'>
              <h1 className='text-xl'>Collaboration </h1>
              <a href=''>
                <span>
                  <FaArrowRightLong />
                </span>
              </a>
              <p>Work more efficiently with next-level team coordination</p>
            </div>

            <div className='pb-8'>
              <h1 className='text-xl'>Omnichannel inbox</h1>
              <a href='' className='text-xl'>
                <FaArrowRightLong />
              </a>
              <p>Manage shared inboxes for all channels in one place</p>
            </div>

            <div className='pb-8'>
              <h1 className='text-xl'>Knowledge Base</h1>
              <a href='' className='text-xl'>
                <FaArrowRightLong />
              </a>
              <p>Resolve customer inquiries faster with smart deflection</p>
            </div>
            <div className='pb-8'>
              <h1 className='text-xl'>Integrations & API</h1>
              <a href='' className='text-xl'>
                <FaArrowRightLong />
              </a>
              <p>
                Seamlessly connect other systems to sync data, context and
                channels
              </p>
            </div>
          </div>
          <div className='col-span-1 flex flex-col mt-14 mb-14'>
            <div className='pb-8'>
              <h1 className='text-xl'>Workflow automation</h1>
              <a href='' className='text-xl'>
                <FaArrowRightLong />
              </a>
              <p>Organize, route and resolve conversations at scale</p>
            </div>
            <div className='pb-8'>
              <h1 className='text-xl'>Analytics</h1>
              <a href='' className='text-xl'>
                <FaArrowRightLong />
              </a>
              <p>
                Inform decisions with team workflows, insights and team
                performance
              </p>
            </div>
            <div className='pb-8'>
              <h1 className='text-xl'>Live chat</h1>
              <a href='' className='text-xl'>
                <FaArrowRightLong />
              </a>
              <p>Support customers on your website or app in real time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCapabilities;
