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
    <div className="m-8 md:m-20">
      <div className="text-[rgb(0,27,56)] md:grid md:grid-flow-col md:grid-cols-12 md:gap-x-5">
        <div className="mb-[30px] max-w-[58rem] text-center md:col-start-3 md:col-end-[-3] md:row-start-1 md:row-end-auto md:mb-[60px] md:ml-auto md:mr-auto md:flex md:flex-col md:gap-[1.875rem]">
          <h2 className="text-[1.5rem]/[1.875rem] font-semibold tracking-[-0.01em] md:m-0 md:ms-0 md:text-[2rem]/[2.375rem]">
            {pitchItem.heading}
          </h2>
        </div>
        <div className="mb-0 overflow-hidden md:col-start-7 md:col-end-[-1] md:self-start">
          {vid && (
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              className="md:overflow-clip-margin rounded-lg align-middle md:h-auto md:w-full md:max-w-full md:overflow-clip md:object-contain"
            >
              <source src={vid} />
            </video>
          )}
          {image && (
            <img
              className="md:overflow-clip-margin rounded-lg align-middle md:h-auto md:w-full md:max-w-full md:overflow-clip md:object-contain"
              src={image}
              alt=""
            />
          )}
        </div>
        <div className="md:col-span-6">
          <ol className="my-[30px] list-none md:mx-0 md:my-4 md:flex md:flex-col md:gap-[30px] md:pr-24">
            {pitchItem.body.map((item, index) => (
              <li
                className={`list-item list-none border-l-4 border-solid pl-3 ${index === expanded ? "border-[rgb(0,27,56)]" : "border-transparent"}`}
              >
                <p
                  className="my-4 cursor-pointer font-semibold md:mx-0 md:text-[1.5rem]/[2.125rem]"
                  onClick={() => handleExpand(index, item.vid, item.image)}
                >
                  {item.p}
                </p>
                {index === expanded && (
                  <div className="mt-[20px] text-[14px]/[1.25rem] md:text-[16px]/[1.5rem]">
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
