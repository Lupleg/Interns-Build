import React, { useState } from "react";

const Solutions = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      Solutions
      <div
        className={`mt-8 absolute top-60 px-0 py-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 ${isHovered ? "block" : "hidden"} bg-white shadow-lg rounded-md`}
      >
        <div className="flex pt-5">
          <div className="w-1/2 pr-4 border-r border-gray-300">
            <h2 className="pl-5 text-lg text-red-600 font-semibold mb-2">
              Industries
            </h2>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 md:w-1/2 p-2">
                <div className="hover:bg-gray-100 p-4 pb-3 bg-white rounded-md">
                  <h2 className="text-base font-semibold">
                    <a href="#">Technology</a>
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Work together to deliver unparalled customer experience
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/2 p-2">
                <div className="hover:bg-gray-100 p-4 pb-3 bg-white rounded-md">
                  <h2 className="text-base font-semibold">
                    <a href="#">Financial Services</a>
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Respond faster to nuanced questions -and build trust along
                    the way
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/2 p-2">
                <div className="hover:bg-gray-100 p-4 pb-3 bg-white rounded-md">
                  <h2 className="text-base font-semibold">
                    <a href="#">Logistics</a>
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Balance high email response with your fastest response rate
                    yet
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 p-2">
                <div className="hover:bg-gray-100 p-4 pb-3 bg-white rounded-md">
                  <h2 className="text-base font-semibold">
                    <a href="#">Manufacturing</a>
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Fulfill complex orders with ease-and build customers for
                    life
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 p-2">
                <div className="hover:bg-gray-100 p-4 pb-3 bg-white rounded-md">
                  <h2 className="text-base font-semibold">
                    <a href="#">Professional services</a>
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Deliver extraordinary client experiences at scale
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 p-2">
                <div className="hover:bg-gray-100 p-4 pb-3 bg-white rounded-md">
                  <h2 className="text-base font-semibold">
                    <a href="#">Travel</a>
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Make every guest, partner, and vendor feel like a VIP at
                    scale
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 pl-4">
            <h2 className="pl-5 text-lg text-red-600 font-semibold mb-2">
              Teams
            </h2>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 md:w-1/2 p-2">
                <div className="hover:bg-gray-100 p-3 bg-white rounded-md">
                  <h2 className="text-base font-semibold">
                    <a href="#">Customer Services and Support</a>
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Engage effortlessly with customers across evry channel
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/2 p-2">
                <div className="hover:bg-gray-100 p-3 bg-white rounded-md">
                  <h2 className="text-base font-semibold">
                    <a href="#">Operations</a>
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Centralize information and impress customers with ease
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 p-2">
                <div className="hover:bg-gray-100 p-3 bg-white rounded-md">
                  <h2 className="text-base font-semibold">
                    <a href="#">Inbound Sales</a>
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Send quotes and close deals faster than ever before
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 p-2">
                <div className="hover:bg-gray-100 p-3 bg-white rounded-md">
                  <h2 className="text-base font-semibold">
                    <a href="#">Account Management</a>
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Manage and deliver for clients without headache
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 p-2">
                <div className="hover:bg-gray-100 p-3 bg-white rounded-md">
                  <h2 className="text-base font-semibold">
                    <a href="#">Success</a>
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Drive net retention by making every customer feel like your
                    only on
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
