import React from "react";
import Productprops from "./Productprops";
import { Link } from "react-router-dom";

const ProductItem = () => {
  return (
    <div className=" mx-auto   bg-white  rounded-lg  border-  w-full mt- text-left mr- ">
      {/* here */}
      {/* <button className='border-2'>Click</button> */}

      <div className=" md: ml- mb-10	md:w-">
        <p className="font-bold	 text-pink-500  md:text-sm text-xs">
          WHAT IS FRONT?
        </p>
        <div className="md: md: ">
          <Link to="/product">
            <Productprops
              heading="Product Overview"
              content="Learn how front helps build stronger customer relationship and operastion efficency"
            />
          </Link>

          <Productprops
            heading="Front in 2-minute"
            content="See how front keeps all responses fast,accurate,and human"
          />
        </div>
      </div>
      <div></div>
      <div className=" md:w- md:">
        <p className="font-bold text-pink-500 md:text-sm text-xs ">
          CAPABILITIES
        </p>
        <div className="md: md: md:">
          <Productprops
            heading="Collaboration"
            content="Work more efficiently with next-level team coordination"
          />
          <Productprops
            heading="Workflow automation"
            content="Organise, route, ans resolve communication at scale"
          />
          <Productprops
            heading="Analytics"
            content="Inform decisions with team performance, workflow, and customer insights"
          />
          <Productprops
            heading="Omnichannel inbox"
            content="Manage shared inboxes for all channels in one place"
          />
          <Productprops
            heading="Knowledge Base"
            content="Resolve customer inquiries faster and unlock deflection to scale your product"
          />
          <Productprops
            heading="Live chat"
            content="Support customers in real time on your website or app and automate flows with chatbots"
          />
          <Productprops
            heading="Integrations & API"
            content="Seamlessly connect other systems to sync customer data,context,and channels"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
