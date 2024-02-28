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
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='cursor-pointer'
    >
      Solutions {isHovered && <SolutionItem/>}
    </div>
  );
};

export default Solutions;
