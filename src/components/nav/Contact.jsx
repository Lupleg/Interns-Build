import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Menu = () => {
    return (
      <div className="absolute top-9 left-0 mt-0 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-left py-4 px-8">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <ul rows="3">
            <li>
              <div className="my-2 px-4 py-2 text-left text-sm text-red-600">
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
                className="px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:rounded my-2"
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
                  <Link to="contact">
                  <p>
                    <span className="text-left font-semibold rounded">
                      Email us for support
                    </span>
                    <div className="mt-1 font-normal">
                      Need help using Front? Our team of product experts is here
                      to troubleshoot
                    </div>
                  </p>
                  </Link>
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
        
        {isOpen && Menu()}
      </button>
    </li>
  );
};

export default Contact;
