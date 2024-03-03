import React from "react";

const SolutionItem = () => {
  return (
    <div className="pt-2 lg:absolute lg:top-20 px-0 py-2 left-1/2 lg:-translate-x-1/2 lg:w-3/4 bg-white lg:shadow-lg lg:rounded-md w-full">
      <div>
        <div className="pt-5 lg:flex lg:flex-row">
          <div className="w-full lg:w-1/2 lg:border-r lg:border-gray-300">
            <h2 className="lg:pl-5 text-xs text-pink-500 font-bold mb-6">
              INDUSTRIES
            </h2>
            <div className="lg:flex lg:flex-wrap">
              <div className="lg:p-2 lg:w-1/2">
                <div className="lg:hover:bg-gray-100 text-slate-700 lg:p-4 pb-3 bg-white rounded-lg">
                  <h2 className="text-base font-bold">
                    <a href="#">Technology</a>
                  </h2>
                  <p className="text-sm font-normal">
                    Work together to deliver unparalled customer experience
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2 lg:p-2">
                <div className="lg:hover:bg-gray-100 text-slate-700 lg:p-4 pb-3 bg-white rounded-lg">
                  <h2 className="text-base font-bold">
                    <a href="#">Financial Services</a>
                  </h2>
                  <p className="text-sm font-normal">
                    Respond faster to nuanced questions--and build trust along
                    the way
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2 lg:p-2">
                <div className="lg:hover:bg-gray-100 text-slate-700 lg:p-4 pb-3 bg-white rounded-lg">
                  <h2 className="text-base font-bold">
                    <a href="#">Logistics</a>
                  </h2>
                  <p className="text-sm font-normal">
                    Balance high email response with your fastest response rate
                    yet
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:p-2">
                <div className="lg:hover:bg-gray-100 text-slate-700 lg:p-4 pb-3 bg-white rounded-lg">
                  <h2 className="text-base font-bold">
                    <a href="#">Manufacturing</a>
                  </h2>
                  <p className="text-sm font-normal">
                    Fulfill complex orders with ease-and build customers for
                    life
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:p-2">
                <div className="lg:hover:bg-gray-100 text-slate-700 lg:p-4 pb-3 bg-white rounded-lg">
                  <h2 className="text-base font-bold">
                    <a href="#">Professional services</a>
                  </h2>
                  <p className="text-sm font-normal">
                    Deliver extraordinary client experiences at scale
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:p-2">
                <div className="lg:hover:bg-gray-100 text-slate-700 lg:p-4 pb-3 bg-white rounded-lg">
                  <h2 className="text-base font-bold">
                    <a href="#">Travel</a>
                  </h2>
                  <p className="text-sm font-normal">
                    Make every guest, partner, and vendor feel like a VIP at
                    scale
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="lg:pl-5 text-xs text-pink-500 font-bold my-6">
              TEAMS
            </h2>
            <div className="lg:flex lg:flex-wrap">
              <div className="w-full lg:w-1/2 lg:p-2">
                <div className="lg:hover:bg-gray-100 text-slate-700 lg:p-3 bg-white pb-3 rounded-lg">
                  <h2 className="text-base font-bold">
                    <a href="#">Customer Services and Support</a>
                  </h2>
                  <p className="text-sm font-normal">
                    Engage effortlessly with customers across evry channel
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-1/2 lg:p-2">
                <div className="lg:hover:bg-gray-100 text-slate-700 lg:p-3 bg-white pb-3 rounded-lg">
                  <h2 className="text-base font-bold">
                    <a href="#">Operations</a>
                  </h2>
                  <p className="text-sm font-normal">
                    Centralize information and impress customers with ease
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:p-2">
                <div className="lg:hover:bg-gray-100 text-slate-700 lg:p-3 bg-white pb-3 rounded-lg">
                  <h2 className="text-base font-bold">
                    <a href="#">Inbound Sales</a>
                  </h2>
                  <p className="text-sm font-normal">
                    Send quotes and close deals faster than ever before
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:p-2">
                <div className="lg:hover:bg-gray-100 text-slate-700 lg:p-3 bg-white pb-3 rounded-lg">
                  <h2 className="text-base font-bold">
                    <a href="#">Account Management</a>
                  </h2>
                  <p className="text-sm font-normal">
                    Manage and deliver for clients without headache
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:p-2">
                <div className="lg:hover:bg-gray-100 text-slate-700 lg:p-3 bg-white pb-3 rounded-lg">
                  <h2 className="text-base font-bold">
                    <a href="#">Success</a>
                  </h2>
                  <p className="text-sm font-normal">
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

export default SolutionItem;
