import React, { useState } from "react";
import ContactMenu from "./ContactMenu";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      className="py-6 border-2 border-transparent hover:border-b-black"
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      <button>
        <div>Contact Us</div>
        {isOpen && <ContactMenu />}
      </button>
    </li>
  );
};

export default Contact;
