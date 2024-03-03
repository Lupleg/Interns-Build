import React, { useState, useEffect } from "react";
import Header from "./features/Header";
import Feature from "./features/Feature";
import NotAnd from "./features/NotAnd";
import Helpdesk from "./features/Helpdesk";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingPage = () => {
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
          <Header />
          <Feature />
          <NotAnd />
          <Helpdesk />
          <Footer />
        </>
      )}
    </div>
  );
};

export default LandingPage;

