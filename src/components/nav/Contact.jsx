import React, { useState } from "react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Menu = () => {
    return (
      <div className="absolute top-6 left-0 mt-0 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-left py-4 px-8">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <ul rows="3">
            <li>
              <div className="my-4 px-4 py-2 text-left text-xs text-red-600">
                <div>
                  <p>
                    <span className="text-left font-semibold rounded">
                      GET IN TOUCH
                    </span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <button
                className="px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:rounded my-4"
                role="menuitem"
              >
                <div>
                  <p>
                    <span className="text-left font-semibold rounded">
                      Talk to Sales
                    </span>
                    <div className="mt-1 font-normal">
                      Got a specific question for our Sales team? Get an answer
                      here
                    </div>
                  </p>
                </div>
              </button>
            </li>
            <li>
              <button
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded my-4 text-left"
                role="menuitem"
              >
                <div>
                  <p>
                    <span className="text-left font-semibold rounded">
                      Email us for support
                    </span>
                    <div className="mt-1 font-normal">
                      Need help using Front? Our team of product experts is here
                      to troubleshoot
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
    <li>
      <button
        className="relative"
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        <span className="font-semibold py-2 px-4 rounded">Contact Us</span>
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
