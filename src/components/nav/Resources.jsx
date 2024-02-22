import React, { useState } from "react";

function Resources() {
  const menu = {
    col1: {
      title: "EXPLORE",
      pars: [
        {
          span: "Blog",
          txt: "Stories that focus on building stronger customer relationships",
        },
        {
          span: "Customer Stories",
          txt: "See how our customers are powering their businesses with Front",
        },
        {
          span: "Front’s Support Report",
          txt: "See our support team’s real data and performance metrics, pulled from Front Analytics",
        },
        {
          span: "Security",
          txt: "Ensure your data’s confidentiality, integrity, and availability",
        },
      ],
    },
    col2: {
      title: "LEARN",
      pars: [
        {
          span: "Guides & Webinars",
          txt: "Sign up for trainings, watch videos, and download resources",
        },
        {
          span: "Front Community",
          txt: "Ask questions, get answers, and connect with fellow Front users and experts",
        },
        {
          span: "Front Academy",
          txt: "Enroll in courses to learn best practices and achieve your goals with Front",
        },
        {
          span: "Help Center",
          txt: "Need help with Front? Search for answers or browse our knowledge base",
        },
      ],
    },
    col3: {
      title: "CONNECT",
      pars: [
        {
          span: "Integrations Directory",
          txt: "Customize Front for your business with 110 integrations",
        },
        {
          span: "Developer Portal",
          txt: "Learn about Front’s APIs and build your own custom integrations",
        },
        {
          span: "Channel Partnerships",
          txt: "Partner with us to expand your services, drive new business, and get support",
        },
        {
          span: "Download App",
          txt: "Get Front on your devices",
        },
      ],
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const Column = ({ col, rb, pars }) => {
    return (
      <div
        className={`flex flex-col px-4 md:w-80 bg-white ${rb ? "border-r border-gray-200 pr-4" : ""}`}
      >
        <p className="p-2 font-bold text-xs text-pink-500">{col}</p>
        <ul>
          {pars.map((par) => (
            <li>
              <button className="flex flex-col p-2 hover:bg-gray-100 hover:rounded">
                <div>
                  <p className="text-left text-slate-700 my-2">
                    <h2 className="font-bold text-base text-left">
                      {par.span}
                    </h2>
                    <span className="text-sm font-normal text-left">
                      {par.txt}
                    </span>
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const Menu = () => {
    return (
      <div className="text-left md:flex p-5 w-4/5 mx-auto absolute top-24 md:right-20 bg-white shadow-md rounded-lg">
        <Column col={menu.col1.title} rb={true} pars={menu.col1.pars} />
        <Column col={menu.col2.title} rb={true} pars={menu.col2.pars} />
        <Column col={menu.col3.title} rb={false} pars={menu.col3.pars} />
      </div>
    );
  };

  return (
    <li>
      <button
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        <span>Resources</span>
        {isOpen && <Menu />}
      </button>
    </li>
  );
}

export default Resources;
