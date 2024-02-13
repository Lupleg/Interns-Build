import React, { useState } from "react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Menu = () => {
    return (
      <div className="absolute top-10 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-left py-4 px-8">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <p className="font-medium text-pink-500">GET IN TOUCH</p>
          <ul rows="2">
            <li>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 my-4 text-left"
                role="menuitem"
              >
                <div>
                  <p>
                    <span className="text-left font-bold">Talk to Sales</span>
                    <div className="mt-1">
                      Got a specific question for our Sales team? Get an answer here
                    </div>
                  </p>
                </div>
              </button>
            </li>
            <li>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 my-4 text-left"
                role="menuitem"
              >
                <div>
                  <p>
                    <span className="text-left font-bold text-left">Email us for support</span>
                    <div className="mt-1">
                      Need help using Front? Our team of product experts is here to troubleshoot
                    </div>
                  </p>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  return (
    <li >
      <button className="relative" onMouseOver={() => setIsOpen(true)} onMouseOut={() => setIsOpen(false)}>
        <span className="font-semibold py-2 px-4 rounded">
          Contact Us
        </span>
        {/* <div> */}
        {/*   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24"> */}
        {/*     <path d="M18.872 15.136L12 9l-6.872 6.136" stroke="#001B38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> */}
        {/*     </path> */}
        {/*   </svg> */}
        {/* </div> */}
        {isOpen && Menu()}
      </button>
    </li>
  );
};

export default Contact;
