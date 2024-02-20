import React from "react";
import PO_props from "./PO_props";
// import Button from "./components/Button";
const ProductHeader = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-blue-800 to-blue-950 transform-rotate-209 ">
        <div className="w-11/12 mx-auto">
          <div className=" h-3/4 text-center md:text-left text-white   lg:flex flex-cols-2 gap-y-4">
            <div className="2xl: m-auto ">
              <h1 className="text-4xl py-7 font-bold text-black-500   md: lg:">
                How teams deliver exceptional service at scale
              </h1>
              <p className=" py-7 text-xl md: my-5">
                Front is a new way to route, respond to, and measure all your
                customer conversations
              </p>
              {/* <Button /> */}
              

            </div>
            <div className="flex justify-center items-center m-auto">
              <img src="https://front.com/_next/image?url=https%3A%2F%2Ffront.com%2Fassets%2Fpages%2Fproduct-2023%2Fhero%2Fhero.png&w=828&q=75" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-bold text-black-500 p-12">
          Does this sound familiar?
        </h1>
        <div className="p-10 md:grid grid-cols-2 gap-10 md:m-10 lg:grid-cols-4">
          <PO_props
            photo="https://front.com/assets/pages/product-2023/glyphs/shared-inbox.svg"
            content="We're overwhelmed with too many inbound messages"
          />
          <PO_props
            photo="https://front.com/assets/pages/product-2023/glyphs/insights-analytics.svg"
            content="Our teams need to collaborate more easily"
          />
          <PO_props
            photo="https://front.com/assets/pages/product-2023/glyphs/team-collaboration.svg"
            content="We struggle to scale and maintain personalization"
          />
          <PO_props
            photo="https://front.com/assets/pages/product-2023/glyphs/live-chat.svg"
            content="We want to track and improve customer experience"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
