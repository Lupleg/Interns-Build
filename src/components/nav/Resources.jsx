import React from 'react'

function Resources() {
  return (
    <div className="resources-card p-4 bg-white-100 rounded-md shadow-md md:mx-40 sm:mx-20 mx-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
      <div className="col-span-1 bg-white-100 p-4 text-left border-b md:border-b-0 md:border-r border-grey mb-4 md:mb-0">
        <h1 className="text-2xl font-bold mb-4">
          <span className="text-red-500">Explore</span>
        </h1>
        <div className="flex flex-col items-left">
          <h2 className="font-bold mb-2 text-black">Blog</h2>
          <p className="text-sm text-black">
            Stories that focus on building stronger customer relationships
          </p>
        </div>
        <div className="flex flex-col items-left mt-4">
          <h2 className="font-bold mb-2 text-black">Customer Stories</h2>
          <p className="text-sm text-black">
            See how our customers are powering business with fronts
          </p>
        </div>
        <div className="flex flex-col items-left mt-4">
          <h2 className="font-bold mb-2 text-black">
            Front's Support Report
          </h2>
          <p className="text-sm text-black">
            See our support team’s real data and performance metrics, pulled
            from Front Analytics
          </p>
        </div>
        <div className="flex flex-col items-left mt-4">
          <h2 className="font-bold mb-2 text-black">Security</h2>
          <p className="text-sm text-black">
            Ensure your data’s confidentiality, integrity, and availability
          </p>
        </div>
      </div>
      <div className="col-span-1 bg-white-100 p-4 text-left border-b md:border-b-0 md:border-r border-grey mb-4 md:mb-0">
        <h1 className="text-2xl font-bold mb-4 ">
          <span className="text-red-500">Learn</span>
        </h1>
        <div className="flex flex-col items-left">
          <h2 className="font-bold mb-2 text-black">Guides & Webinars</h2>
          <p className="text-sm text-black">
            Sign up for trainings, watch videos, and download resources
          </p>
        </div>
        <div className="flex flex-col items-left mt-4">
          <h2 className="font-bold mb-2 text-black">Front Community</h2>
          <p className="text-sm text-black">
            Ask questions, get answers, and connect with fellow Front users
            and experts
          </p>
        </div>
        <div className="flex flex-col items-left mt-4">
          <h2 className="font-bold mb-2 text-black">Front's Academy</h2>
          <p className="text-sm text-black">
            Enroll in courses to learn best practices and achieve your goals
            with Front
          </p>
        </div>
        <div className="flex flex-col items-left mt-4">
          <h2 className="font-bold mb-2 text-black">Help Centre</h2>
          <p className="text-sm text-black">
            Need help with Front? Search for answers or browse our knowledge
            base
          </p>
        </div>
      </div>
      <div className={`col-span-1 bg-white-100 p-4 text-left ${window.innerWidth > 768 ? 'border-b md:border-b-0 md:border-r border-grey' : ''} mb-4 md:mb-0`}>
        <h1 className="text-2xl font-bold mb-4">
          <span className="text-red-500">Connect</span>
        </h1>
        <div className="flex flex-col items-left">
          <h2 className="font-bold mb-2 text-black">
            Intergration Directory
          </h2>
          <p className="text-sm text-black">
            Customize Front for your business with 110 integrations
          </p>
        </div>
        <div className="flex flex-col items-left mt-4">
          <h2 className="font-bold mb-2 text-black">Developer Portal</h2>
          <p className="text-sm text-black">
            Learn about Front’s APIs and build your own custom integrations
          </p>
        </div>
        <div className="flex flex-col items-left mt-4">
          <h2 className="font-bold mb-2 text-black">Channel Paerneships</h2>
          <p className="text-sm text-black">
            Partner with us to expand your services, drive new business, and
            get support
          </p>
        </div>
        <div className="flex flex-col items-left mt-4">
          <h2 className="font-bold mb-2 text-black">Dowload app</h2>
          <p className="text-sm text-black">Get fronts on your devices</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Resources