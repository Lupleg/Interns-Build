import React, { useState } from "react";
import ResourceMenu from "./ResourceMenu";

const Resources = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="py-6 border-2 border-transparent hover:border-b-black"
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      <button>
        <div>Resources</div>
        {isOpen && <ResourceMenu />}
      </button>
    </li>
  );
};

export default Resources;
