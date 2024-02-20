import React from "react";
import { HiArrowSmRight } from "react-icons/hi";

const ExploreCapabilities = () => {
  return (
    <div className='py-16 bg-gradient-to-bl from-sky-950 to-blue-900'>
      <div className='max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='lg:ml-16 sm:ml-4 '>
          <h2 className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
            Explore all of Front's capabilities
          </h2>

          <p className='mt-4 max-w-2xl lg:text-xl sm:text-base text-white'>
            Learn more about our product
            <span className='inline-block px-2 align-middle'>
              <a href=''>
                <HiArrowSmRight size={25} />
              </a>
            </span>
          </p>
        </div>
        <div className='mt-16 pb-8 sm:ml-4'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            <div className='relative pb-8 lg:ml-14'>
              <dt>
                <p className='text-xl font-medium leading-6 text-white'>
                  Collaboration
                  <span className='inline-block pl-2 px-2 align-middle'>
                    <a href=''>
                      <HiArrowSmRight />
                    </a>
                  </span>
                </p>
              </dt>
              <dd className='mt-2 text-base text-white'>
                Work more efficiently with next-level team coordination
              </dd>
            </div>
            <div className='relative pb-8 lg:ml-14'>
              <dt>
                <p className='text-xl font-medium leading-6 text-white'>
                  Workflow automation
                  <span className='inline-block pl-2 px-2 align-middle'>
                    <a href=''>
                      <HiArrowSmRight />
                    </a>
                  </span>
                </p>
              </dt>
              <dd className='mt-2 text-base text-white'>
                Organize, route, and resolve conversations at scale
              </dd>
            </div>
            <div className='relative pb-8 lg:ml-14'>
              <dt>
                <p className='text-xl font-medium leading-6 text-white'>
                  Omnichannel inbox
                  <span className='inline-block pl-2 px-2 align-middle'>
                    <a href=''>
                      <HiArrowSmRight />
                    </a>
                  </span>
                </p>
              </dt>
              <dd className='mt-2 text-base text-white'>
                Manage shared inboxes for all channels in one place
              </dd>
            </div>
            <div className='relative pb-8 lg:ml-14'>
              <dt>
                <p className='text-xl font-medium leading-6 text-white'>
                  Analytics
                  <span className='inline-block pl-2 px-2 align-middle'>
                    <a href=''>
                      <HiArrowSmRight />
                    </a>
                  </span>
                </p>
              </dt>
              <dd className='mt-2 text-base text-white'>
                Inform decisions with team workflows, insights, and team
                performance
              </dd>
            </div>
            <div className='relative lg:ml-14 pb-8'>
              <dt>
                <p className='text-xl font-medium leading-6 text-white'>
                  Knowledge Base
                  <span className='inline-block pl-2 px-2 align-middle'>
                    <a href=''>
                      <HiArrowSmRight />
                    </a>
                  </span>
                </p>
              </dt>
              <dd className='mt-2 text-base text-white'>
                Resolve customer inquiries faster with smart deflection
              </dd>
            </div>

            <div className='relative lg:ml-14 pb-8'>
              <dt>
                <p className='text-xl font-medium leading-6 text-white'>
                  Live chat
                  <span className='inline-block pl-2 px-2 align-middle'>
                    <a href=''>
                      <HiArrowSmRight />
                    </a>
                  </span>
                </p>
              </dt>
              <dd className='mt-2 text-base text-white'>
                Support customers on your website or app in real time
              </dd>
            </div>
            <div className='relative lg:ml-14'>
              <dt>
                <p className='text-xl font-medium leading-6 text-white'>
                  Integrations & API
                  <span className='inline-block pl-2 px-2 align-middle'>
                    <a href=''>
                      <HiArrowSmRight />
                    </a>
                  </span>
                </p>
              </dt>
              <dd className='mt-2 text-base text-white'>
                Seemlessly connect other systems to sync data, context and channels
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ExploreCapabilities;
