import React from "react";
import { useState } from "react";

const Pitch = ({ pitchItem }) => {
  const [expanded, setExpanded] = useState(0);
  const [vid, setVid] = useState(pitchItem.body[0].vid);
  const [image, setImage] = useState(pitchItem.body[0].image);
  const handleExpand = (index, vid, image) => {
    setExpanded(index);
    setVid(vid);
    setImage(image);
  };

  return (
    <div className="block m-20">
      <div className="grid grid-flow-col grid-cols-12 gap-x-5 text-[rgb(0,27,56)]">
        <div className="flex flex-col mb-[60px] ml-auto mr-auto col-start-3 col-end-[-3] row-start-1 row-end-auto gap-[1.875rem] text-center max-w-[58rem]">
          <h2 className="text-[2rem]/[2.375rem] font-semibold tracking-[-0.01em] m-0 block ms-0">
            {pitchItem.heading}
          </h2>
        </div>
        <div className="mb-0 block col-start-7 col-end-[-1] self-start rounded-[10px] overflow-hidden">
          {vid && (
            <video className="block w-full max-w-full h-auto align-middle object-contain overflow-clip overflow-clip-margin">
              <source src={vid} />
            </video>
          )}
          {image && (
            <img
              className="block w-full max-w-full h-auto align-middle object-contain overflow-clip overflow-clip-margin"
              src={image}
            />
          )}
        </div>
        <div className="block col-span-6">
          <ol className="flex flex-col gap-[30px] list-none pr-24 my-4 mx-0">
            {pitchItem.body.map((item, index) => (
              <li
                className={`list-item list-none pl-3 border-l-4 border-solid ${index === expanded ? "border-[rgb(0,27,56)]" : "border-transparent"}`}
              >
                <p
                  className="block text-[1.5rem]/[2.125rem] font-semibold cursor-pointer my-4 mx-0"
                  onClick={() => handleExpand(index, item.vid, item.image)}
                >
                  {item.p}
                </p>
                {index === expanded && (
                  <div className="block text-[16px]/[1.5rem] mt-[20px]">
                    {item.div}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
