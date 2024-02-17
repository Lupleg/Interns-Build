import React from "react";

const Button = ({text,width,height}) => {
  return (
    <div>
      <button className={`w-${width} p-3 h-${height} font-normal my-4 rounded-full text-white shadow-lg bg-pink-500  hover:shadow-pink-500 `} >
        {text}
      </button>
    </div>
  );
};

export default Button;
