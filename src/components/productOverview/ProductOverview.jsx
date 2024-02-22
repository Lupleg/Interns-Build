import React from "react";
import Navbar from "../Navbar";
import IntegratedApps from "./IntegrateApps";
import ExploreCapabilities from "./ExploreCapabilities";
import Slider from "./Slider";
import Informative from "./Informative";
import CardCrousel from "./CardCrousel";
import Footer from "../Footer";
import ProductHeader from "./ProductHeader";
import Pitch from "./Pitch";
import { pitchOne, pitchTwo, pitchThree } from "./pitchItems";

const productOverview = () => {
  return (
    <div>
      <Navbar />
      <ProductHeader />
      <Informative text="In comes Front. Wow every customer with fast, accurate, and human responses." />
      <Pitch pitchItem={pitchOne} />
      <Pitch pitchItem={pitchTwo} />
      <Pitch pitchItem={pitchThree} />
      <IntegratedApps />
      <ExploreCapabilities />
      <Slider />
      <CardCrousel />
      <Informative text="Streamline your customer communication with Front" />
      <Footer />
    </div>
  );
};

export default productOverview;
