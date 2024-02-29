import React from "react";
import { FaSearch } from "react-icons/fa";

function ContactNav() {
  return (
    <div className="py-8  mx-auto bg-gradient-to-br from-cyan-400 via-zinc-50 to-red-300 pb-12">
      <div className="flex flex-wrap justify-between items-center h-14 w-11/12 lg:w-3/5 mx-auto ">
        <div className="flex flex items-center h-full min-w-max">
          <div className=" mr-8 flex items-center h-14">
            <a href="#">
              <img
                src="https://seeklogo.com/images/F/front-logo-5E94F18365-seeklogo.com.png"
                className="w-6 h-12 md:w-6 lg:w-8 mr-4 min-w-8"
              ></img>
            </a>
            <div className="h-12 border border-gray-200"></div>
          </div>
          <a href="#">
            <h1 className="text-xl font-medium">Front Help Center</h1>
          </a>
        </div>

        <div className="ml-4  flex items-center h-full">
          <div>
            <button className="hover:bg-gray-200 w-32 px-2 rounded-full py-1 font-medium">
              Login to Front
            </button>
          </div>
          <div>
            <button className="text-white bg-blue-900 rounded-full py-1 px-2 w-28 ml-2 font-medium">
              Contact us
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center justify-center w-full mt-8">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium pt-10 w-4/5  md:w-1/3">
          Need Help with Front?
        </h1>
        <div className="bg-gray-200 lg:w-2/5 md:w-4/5 sm:w-10/12 w-4/5 h-10 rounded-lg flex items-center mt-8 mx-auto px-4">
          <FaSearch size={14} className="mr-2 text-2xl transform scale-75" />
          <input
            type="text"
            placeholder="Search"
            className="border-none bg-transparent focus:outline-none w-3/6"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactNav;
