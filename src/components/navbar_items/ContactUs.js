import React, { useState } from "react";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Popup = () => {
    return (
      <div className="absolute top-10 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Talk to Sales
          </button>
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Email us for support
          </button>
        </div>
      </div>
    );
  };
  return (
    <li onMouseOver={() => setIsOpen(true)} onMouseOut={() => setIsOpen(false)}>
      <li className="relative">
        <button className="font-semibold py-2 px-4 rounded">
          Contact Us {isOpen && Popup()}
        </button>
      </li>
    </li>
  );
};

export default ContactUs;
