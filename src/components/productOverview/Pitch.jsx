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
    <div className="md:m-20 m-8">
      <div className="md:grid md:grid-flow-col md:grid-cols-12 md:gap-x-5 text-[rgb(0,27,56)]">
        <div className="md:flex md:flex-col mb-[30px] md:mb-[60px] md:ml-auto md:mr-auto md:col-start-3 md:col-end-[-3] md:row-start-1 md:row-end-auto md:gap-[1.875rem] text-center max-w-[58rem]">
          <h2 className="text-[1.5rem]/[1.875rem] md:text-[2rem]/[2.375rem] font-semibold tracking-[-0.01em] md:m-0 md:ms-0">
            {pitchItem.heading}
          </h2>
        </div>
        <div className="mb-0 md:col-start-7 md:col-end-[-1] md:self-start overflow-hidden">
          {vid && (
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              className="rounded-lg md:w-full md:max-w-full md:h-auto align-middle md:object-contain md:overflow-clip md:overflow-clip-margin"
            >
              <source src={vid} />
            </video>
          )}
          {image && (
            <img
              className="rounded-lg md:w-full md:max-w-full md:h-auto align-middle md:object-contain md:overflow-clip md:overflow-clip-margin"
              src={image}
            />
          )}
        </div>
        <div className="md:col-span-6">
          <ol className="md:flex md:flex-col md:gap-[30px] list-none md:pr-24 my-[30px] md:my-4 md:mx-0">
            {pitchItem.body.map((item, index) => (
              <li
                className={`list-item list-none pl-3 border-l-4 border-solid ${index === expanded ? "border-[rgb(0,27,56)]" : "border-transparent"}`}
              >
                <p
                  className="md:text-[1.5rem]/[2.125rem] font-semibold cursor-pointer my-4 md:mx-0"
                  onClick={() => handleExpand(index, item.vid, item.image)}
                >
                  {item.p}
                </p>
                {index === expanded && (
                  <div className="text-[14px]/[1.25rem] md:text-[16px]/[1.5rem] mt-[20px]">
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
