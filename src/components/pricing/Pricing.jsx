import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import PricingCards from "./PricingCards";
import PricingWorkflows from "./PricingWorkflows";
import Features from "./Features";

const Pricing = () => {
  return (
    <div>
      <Navbar />

      <PricingCards />
      <Features />
      <PricingWorkflows />

      <Footer />
    </div>
  );
};

export default Pricing;
