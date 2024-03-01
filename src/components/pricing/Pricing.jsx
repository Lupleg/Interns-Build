import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Connect from "./Connect";
import PricingCards from "./PricingCards";
import PricingWorkflows from "./PricingWorkflows";
import Slider from "../productOverview/Slider";
import Informative from "../productOverview/Informative";
import Features from "./Features";

const Pricing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      {!isOpen && (
        <>
          <PricingCards />
          <Connect />
          <Features />
          <PricingWorkflows />
          <div className="w-full py-20 mx-auto bg-gradient-to-b from-neutral-50 via-red-200 to-cyan-100 flex flex-col gap-y-2 lg:gap-y-20">
            <Slider />
            <div className="w-4/5 sm:w-3/6 mx-auto">
              <Informative
                text="Deliver exceptional service at scale"
                width="56"
              />
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Pricing;

