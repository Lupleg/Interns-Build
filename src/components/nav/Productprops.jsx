import React from "react";

const Productprops = (props) => {
  return (
    <div className="lg:px-2 mt-4 mr-5 text-slate-700 lg:hover:bg-gray-100 lg:hover:rounded-lg">
      <p className="font-bold text-base">{props.heading}</p>
      <p className="my-1 font-normal text-sm">{props.content}</p>
    </div>
  );
};

export default Productprops;
