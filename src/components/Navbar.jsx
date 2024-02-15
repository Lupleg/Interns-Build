import React from "react";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Button from "./Button";
import Contact from "./nav/Contact";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Products from "./nav/Products";
import Solutions from "./nav/Solutions";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const [productsOpen, setProductsOpen] = useState(false);
  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
  };

  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const toggleSolutions = () => {
    setSolutionsOpen(!solutionsOpen);
  };

  const [resourcesOpen, setResourcesOpen] = useState(false);
  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
  };

  const [contactsOpen, setContactsOpen] = useState(false);
  const toggleContacts = () => {
    setContactsOpen(!contactsOpen);
  };
  return (
    <div>
      <div className="flex justify-between  w-4/5 md:w-11/12 lg:w-4/5 md:mx-auto mx-auto">
        <div className="flex gap-x-2 justify-center items-center ">
          <img
            src="https://seeklogo.com/images/F/front-logo-5E94F18365-seeklogo.com.png"
            className="w-4 md:w-6 lg:w-8"
          ></img>
          <p className="text-xl md:text-2xl lg:text-4xl font-bold">Front</p>
        </div>

        <ul className="lg:flex lg:justify-center lg:text-md lg:items-center lg:gap-x-6 lg:font-medium hidden">
          <Products />
          <Solutions />
          <li>Pricing</li>
          <li>Resources</li>
          <Contact />
        </ul>

        <div className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
        </div>

        <div className="hidden lg:block lg:gap-x-8 lg:justify-center">
          <a className="text-md my-auto font-medium">Sign In</a>
          <Button />
        </div>
      </div>

      <div className="flex lg:hidden w-4/5 mx-auto mt-4">
        {isOpen && (
          <div className="flex flex-col gap-y-8 w-full font-bold align-center justify-center">
            <button
              className="flex  justify-between border-b-2 pb-3"
              onClick={toggleProducts}
            >
              {" "}
              Products{!productsOpen && <RiArrowDropDownLine size={30} />}{" "}
              {productsOpen && <RiArrowDropUpLine size={30} />}{" "}
            </button>
            <button
              className="flex justify-between border-b-2 pb-3"
              onClick={toggleSolutions}
            >
              Solutions{!solutionsOpen && <RiArrowDropDownLine size={30} />}{" "}
              {solutionsOpen && <RiArrowDropUpLine size={30} />}
            </button>
            <button
              className="flex justify-between border-b-2 pb-3"
              onClick={toggleResources}
            >
              Resources{!resourcesOpen && <RiArrowDropDownLine size={30} />}{" "}
              {resourcesOpen && <RiArrowDropUpLine size={30} />}
            </button>
            <button className="flex justify-between border-b-2 pb-3">
              Pricing
            </button>
            <button
              className="flex justify-between border-b-2 pb-3"
              onClick={toggleContacts}
            >
              Contacts{!contactsOpen && <RiArrowDropDownLine size={30} />}{" "}
              {contactsOpen && <RiArrowDropUpLine size={30} />}
            </button>
            <button className="flex justify-between border-b-2 pb-3">
              Sign In
            </button>

            <div className="mx-auto">
              {" "}
              <Button />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
