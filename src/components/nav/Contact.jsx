import React, { useState } from "react";
import ContactMenu from "./ContactMenu";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="py-6 border-4 border-transparent hover:border-b-black">
      <button
        // className="relative"
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        <div>Contact Us</div>
        {isOpen && <ContactMenu />}
      </button>
    </li>
  );
};

export default Contact;
