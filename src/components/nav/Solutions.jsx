import React, { useState } from "react";
import SolutionItem from "./SolutionItem";

const Solutions = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer py-6 border-2 border-transparent hover:border-b-black list-none"
    >
      Solutions {isHovered && <SolutionItem />}
    </li>
  );
};

export default Solutions;
