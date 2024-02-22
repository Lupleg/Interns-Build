import React from "react";
import Button from "../Button";

const Header = () => {
  return (
    <div>
        <div className="w-11/12 md:w-4/5 lg:w-3/4 my-5 mx-auto justify-center items-center text-center">
            <p className="md:text-6xl sm:text-4xl text-3xl lg:text-7xl font-bold md:px-10"> The <span className="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">efficiency</span> of a help desk with the <span className="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">familiarity</span> of email</p>
            <p className="sm:px-5 my-7 w-11/12 sm:w-4/5 lg:w-3/5 md:text-xl mx-auto text-gray-500 text-sm sm:text-md">Front is a customer operations platform that enables teams to streamline communication and deliver exceptional service at scale.</p>
            <Button text="Get Started" width="32"/>
        </div>

      <div className="md:w-4/5 mx-auto">
        <video
          src="https://front.com/assets/pages/homepage-winter2022/videos/product-overview.mp4"
          autoPlay
        ></video>
      </div>
    </div>
  );
};

export default Header