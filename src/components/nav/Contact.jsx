import React, { useState } from "react";
import ContactMenu from "./ContactMenu";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="list-none relative flex justify-stretch">
      <button
        // className="relative"
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        <div className="py-2 rounded">Contact Us</div>
        {isOpen && <ContactMenu />}
      </button>
    </li>
  );
};

export default Contact;
