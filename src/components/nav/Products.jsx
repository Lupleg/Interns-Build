import Productprops from "./Productprops";
import { useState } from "react";

function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const ProductItem = () => {
    return (
      <div className="App md:flex p-5 w-4/5 mx-auto absolute top-16 left-10 bg-white shadow-md rounded-lg">
        {/* here */}
        {/* <button className='border-2'>Click</button> */}

        <div className="md:border-r-2 ml-4 mb-10 md:w-2/6">
          <p className="font-bold text-pink-500 md:text-sm text-xs">
            WHAT IS FRONT?
          </p>
          <div className="md:grid md:grid-rows-2">
            <Productprops
              heading="Product Overview"
              content="Learn how front helps build stronger customer relationship and operastion efficency"
            />
            <Productprops
              heading="Front in 2-minute"
              content="See how front keeps all responses fast,accurate,and human"
            />
          </div>
        </div>
        <div className=" md:w-3/5 md:ml-9 ml-4">
          <p className="font-bold	 text-pink-500 md:text-sm text-xs ">
            CAPABILITIES
          </p>
          <div className="md:grid md:grid-cols-2 md:gap-x-7">
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

  return (
    <li>
      <button
        className="text-left"
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        <span className="font-semibold py-2 px-4 rounded">Products</span>

        {isOpen && ProductItem()}
      </button>
    </li>
  );
}

export default Products;
