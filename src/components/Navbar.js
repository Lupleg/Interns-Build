import React from "react";
import ContactUs from "./ContactUs";

const Navbar = () => {
  return (
    <div className="flex justify-between  w-4/5 md:w-11/12 lg:w-4/5 md:mx-auto mx-auto">
      <div className="flex gap-x-2 justify-center items-center ">
        <img
          src="https://seeklogo.com/images/F/front-logo-5E94F18365-seeklogo.com.png"
          className="w-4 md:w-6 lg:w-8"
        ></img>
        <p className="text-xl md:text-2xl lg:text-4xl font-bold">Front</p>
      </div>

      <div className="lg:flex lg:justify-center lg:text-md lg:items-center lg:gap-x-6 lg:font-medium hidden lg:block">
        <a>Product</a>
        <a>Solutions</a>
        <a>Pricing</a>
        <a>Resources</a>
        <ContactUs />
      </div>
    </div>
  );
};

export default Navbar;
