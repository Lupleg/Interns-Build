import React, { useState } from "react";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
      >
        Contact Us
      </button>
      {isOpen && (
        <div className="absolute top-10 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Talk to Sales
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Email us for support
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
