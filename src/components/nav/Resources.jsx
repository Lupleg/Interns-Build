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
        className={`flex flex-col space-y-2 ${rb ? "border-r border-gray-200 pr-4" : ""}`}
      >
        <p className="font-bold text-lg">{col}</p>
        <ul className="space-y-1">
          {pars.map((par) => (
            <li>
              <button className="flex flex-col space-y-1">
                <div>
                  <p>
                    <span className="font-bold text-base">{par.span}</span>
                    <span className="text-sm">{par.txt}</span>
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
      <div className="flex justify-between bg-white p-4 rounded shadow-lg">
        <Column col={menu.col1.title} rb={true} pars={menu.col1.pars} />
        <Column col={menu.col2.title} rb={true} pars={menu.col2.pars} />
        <Column col={menu.col3.title} rb={false} pars={menu.col3.pars} />
      </div>
    );
  };

  return (
    <li className="relative group">
      <button
        className="focus:outline-none"
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        Resources
      </button>
      {isOpen && <Menu />}
    </li>
  );
}

export default Resources;
