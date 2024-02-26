/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Button from "./Button";
import Contact from "./nav/Contact";
import Products from "./nav/Products";
import Solutions from "./nav/Solutions";
import Resources from "./nav/Resources";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const NavButton = ({ text, openState, toggleFunc }) => (
    <button
      className="flex justify-between border-b-2 pb-3"
      onClick={toggleFunc}>
      {text}
      {!openState && <RiArrowDropDownLine size={30} />}
      {openState && <RiArrowDropUpLine size={30} />}
    </button>
  );

  return (
    <div className="sticky top-0 bg-white z-50 shadow-md">
      <div className="flex justify-between w-4/5 md:w-11/12 lg:w-4/5 md:mx-auto mx-auto">
        <div className="flex gap-x-2 justify-center items-center">
          <img
            src="https://seeklogo.com/images/F/front-logo-5E94F18365-seeklogo.com.png"
            className="w-4 md:w-6 lg:w-8"
            alt="Logo"
          />
          <p className="text-xl md:text-2xl lg:text-4xl font-bold">Front</p>
        </div>

        <ul className="lg:flex lg:justify-center lg:text-md lg:items-center lg:gap-x-6 lg:font-medium hidden lg:block">
          <Products />
          <Solutions />
          <Link to="pricing">Pricing</Link>
          <Resources />
          <Contact />
        </ul>
        <div className="hidden lg:block lg:flex lg:gap-x-8 lg:justify-center items-center">
          <a className="text-md my-auto font-medium">Sign In</a>
          <Button text="Get Started" width="auto" />
        </div>
        <div className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={toggleMenu} size={30} />
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col gap-y-8 w-full font-bold align-center justify-center">
            <NavButton
              text="Products"
              openState={false}
              toggleFunc={() => {}}
            />
            <NavButton
              text="Solutions"
              openState={false}
              toggleFunc={() => {}}
            />
            <NavButton
              text="Resources"
              openState={false}
              toggleFunc={() => {}}
            />
            <NavButton text="Pricing" openState={false} toggleFunc={() => {}} />
            <NavButton
              text="Contact Us"
              openState={false}
              toggleFunc={() => {}}
            />
            <NavButton text="Sign In" openState={false} toggleFunc={() => {}} />
            <div className="">
              <Button text="Get Started" width="80" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
