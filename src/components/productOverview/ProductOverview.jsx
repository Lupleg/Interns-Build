import React from "react";
import Navbar from "../Navbar";
import IntegratedApps from "./IntegrateApps";
import ExploreCapabilities from "./ExploreCapabilities";
import Slider from "./Slider";
import Informative from "./Informative";
import CardCrousel from "./CardCrousel";
import Footer from "../Footer";
import ProductHeader from "./ProductHeader";
import GetEveryMessage from "./GetEveryMessage";

const productOverview = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <ProductHeader /> */}
      {/* <Informative text="In comes Front. Wow every customer with fast, accurate, and human responses." /> */}
      <GetEveryMessage heading="Get every message into the right hands without manual work" />
      {/* <IntegratedApps /> */}
      {/* <ExploreCapabilities /> */}
      {/* <Slider /> */}
      {/* <CardCrousel /> */}
      {/* <Informative text="Streamline your customer communication with Front" /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default productOverview;

