import Productprops from "./Productprops";
import { useState } from "react";
import { Link } from "react-router-dom";
// import ProductItem from "./ProductItem";

function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
    // console.log("click ho gya");
  };
  const ProductItem = () => {
    return (
      <div className="text-left lg:flex lg:p-5 w-full lg:w-4/5 lg:mx-auto lg:absolute top-20 lg:right-20 bg-white lg:shadow-md lg:rounded-lg">
        {/* here */}
        {/* <button className='border-2'>Click</button> */}

        <div className=" md:border-r-2 ml-4 mb-10	md:w-2/6">
          <p className="font-bold lg:px-2 text-pink-500 text-xs">
            WHAT IS FRONT?
          </p>
          <div className="md:grid md:grid-rows-2 ">
            <Link to="/product">
              <Productprops
                heading="Product Overview"
                content="Learn how front helps build stronger customer relationships and operation efficiency"
              />
            </Link>

            <Productprops
              heading="Front in 2-min"
              content="See how front keeps all responses fast, accurate, and human"
            />
          </div>
        </div>
        <div></div>
        <div className=" md:w-3/5 md:ml-9 ml-4">
          <p className="font-bold lg:px-2 text-pink-500 text-xs ">
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
    <li
      className="  py-6 list-none border-2 border-transparent hover:border-b-black"
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      <button className="text-left">
        <span className="font-semibold py-2 px- mt-9 rounded  ">Products</span>
        {/* {ProductItem()} */}
        {isOpen && ProductItem()}
      </button>
    </li>
  );
}

export default Products;
