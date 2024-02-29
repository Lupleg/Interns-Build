import React from "react";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Button from "./Button";
import Contact from "./nav/Contact";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Products from "./nav/Products";
import Solutions from "./nav/Solutions";
import Resources from "./nav/Resources";
import { Link } from "react-router-dom";
import ProductItem from "./nav/ProductItem";
import ResourceMenu from "./nav/ResourceMenu";
import ContactMenu from "./nav/ContactMenu";
import SolutionItem from "./nav/SolutionItem";
import Pricing from "./nav/Pricing";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
    if (!isOpen) {
      setProductsOpen(false);
      setSolutionsOpen(false);
      setResourcesOpen(false);
      setContactsOpen(false);
    }
  };

  const [productsOpen, setProductsOpen] = useState(false);
  const toggleProducts = () => {
    if (!productsOpen) {
      setSolutionsOpen(false);
      setResourcesOpen(false);
      setContactsOpen(false);
    }
    setProductsOpen(!productsOpen);
  };

  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const toggleSolutions = () => {
    if (!solutionsOpen) {
      setProductsOpen(false);
      setResourcesOpen(false);
      setContactsOpen(false);
    }
    setSolutionsOpen(!solutionsOpen);
  };

  const [resourcesOpen, setResourcesOpen] = useState(false);
  const toggleResources = () => {
    if (!resourcesOpen) {
      setProductsOpen(false);
      setSolutionsOpen(false);
      setContactsOpen(false);
    }
    setResourcesOpen(!resourcesOpen);
  };

  const [contactsOpen, setContactsOpen] = useState(false);
  const toggleContacts = () => {
    if (!contactsOpen) {
      setProductsOpen(false);
      setSolutionsOpen(false);
      setResourcesOpen(false);
    }
    setContactsOpen(!contactsOpen);
  };

  return (
    <div className="sticky top-0 bg-white z-50 shadow-md">
      <div className="flex justify-between  w-4/5 md:w-11/12 lg:w-4/5 md:mx-auto mx-auto">
        <Link className="flex gap-x-2 justify-center items-center " to="/">
          <img
            src="https://seeklogo.com/images/F/front-logo-5E94F18365-seeklogo.com.png"
            className="w-4 md:w-6 lg:w-8"
          ></img>
          <p className="text-xl md:text-2xl lg:text-4xl font-bold">Front</p>
        </Link>

        <ul className="lg:flex lg:justify-center lg:text-md lg:items-center lg:gap-x-6 lg:font-medium hidden lg:block">
          <Products />
          <Solutions />

          <Link to="pricing">
            <Pricing />
          </Link>
          <Resources />
          <Contact />
        </ul>

        <div className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={toggleMenu} size={30} />
        </div>

        <div className="hidden lg:block lg:flex lg:gap-x-8 lg:justify-center">
          <a className="text-md my-auto font-medium">Sign In</a>
          <Button text="Get Started" width="32" />
        </div>
      </div>

      <div className="flex lg:hidden block w-4/5 mx-auto mt-4">
        {isOpen && (
          <div className="flex flex-col gap-y-8 w-full font-bold align-center justify-center">
            <button
              className={`flex  justify-between ${productsOpen ? "" : "border-b-2"} pb-3`}
              onClick={toggleProducts}
            >
              Products {!productsOpen && <RiArrowDropDownLine size={30} />}{" "}
              {productsOpen && <RiArrowDropUpLine size={30} />}{" "}
            </button>
            {productsOpen && <ProductItem />}
            <button
              className={`flex justify-between ${solutionsOpen ? "" : "border-b-2"} pb-3`}
              onClick={toggleSolutions}
            >
              Solutions{!solutionsOpen && <RiArrowDropDownLine size={30} />}{" "}
              {solutionsOpen && <RiArrowDropUpLine size={30} />}
            </button>
            {solutionsOpen && <SolutionItem />}
            <button
              className={`flex justify-between ${resourcesOpen ? "" : "border-b-2"} pb-3`}
              onClick={toggleResources}
            >
              Resources{!resourcesOpen && <RiArrowDropDownLine size={30} />}{" "}
              {resourcesOpen && <RiArrowDropUpLine size={30} />}
            </button>
            {resourcesOpen && <ResourceMenu />}
            <button className="flex justify-between border-b-2 pb-3">
              Pricing
            </button>
            <button
              className={`flex justify-between ${contactsOpen ? "" : "border-b-2"} pb-3`}
              onClick={toggleContacts}
            >
              Contacts{!contactsOpen && <RiArrowDropDownLine size={30} />}{" "}
              {contactsOpen && <RiArrowDropUpLine size={30} />}
            </button>
            {contactsOpen && <ContactMenu />}
            <button className="flex justify-between border-b-2 pb-3">
              Sign In
            </button>
            <div className="">
              {" "}
              <Button text="Get Started" width="full" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
