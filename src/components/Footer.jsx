import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="px-8 py-10 md:px-16 lg:px-20 xl:mx-10 2xl:mx-20">
      <nav className="grid grid-cols-2 lg:grid-cols-5 gap-8 border-b-2 border-slate-500">
        <div className="mb-4">
          <p className="text-pink-500 text-sm font-bold mb-10">Product</p>
          <ul>
            <li className="mb-5 py-2">
              <a href="a">Product</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Pricing</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Integrations Directory</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Developer Portal</a>
            </li>
            <li className="font-semibold mb-5 py-2">
              <a href="a">Get Started</a>
            </li>
            <li className="font-semibold mb-5 py-2">
              <a href="a">Download App</a>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="text-pink-500 text-sm font-bold mb-10">Using Front</p>
          <ul>
            <li className="mb-5 py-2">
              <a href="a">Collaboration</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Workflow automation</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Analytics</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Omnichannel inbox</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Knowledge Base</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Live chat</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Integrations &amp; API</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Front for Customer Support</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Front for Logistics</a>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="text-pink-500 text-sm font-bold mb-10">Resources</p>
          <ul>
            <li className="mb-5 py-2">
              <a href="a">Blog</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Front Community</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Front Academy</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Help Center</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Customer Stories</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Channel Partnerships</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Front Admin Certification</a>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="text-pink-500 text-sm font-bold mb-10">Learn</p>
          <ul>
            <li className="mb-5 py-2">
              <a href="a">Guide to 100% CSAT</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">The future of customer operations</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">5 tips to scale customer support with AI</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">7 best customer service software</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Front's Support Report</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Front vs. Zendesk</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Front vs. Freshdesk</a>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="text-pink-500 text-sm font-bold mb-10">Comapany</p>
          <ul>
            <li className="mb-5 py-2">
              <a href="a">About Us</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Careers</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Press</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Security</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Legal</a>
            </li>
            <li className="mb-5 py-2">
              <a href="a">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex flex-col lg:flex-row-reverse justify-between pt-8 pb-10">
        <ul className="lg:flex hidden w-full h-10 lg:justify-between lg:w-1/4">
          <li>
            <a href="a">
              <FaTwitter size={30} />
            </a>
          </li>
          <li>
            <a href="b">
              <FaFacebookF size={30} />
            </a>
          </li>
          <li>
            <a href="c">
              <FaLinkedinIn size={30} />
            </a>
          </li>
          <li>
            <a href="d">
              <FaInstagram size={30} />
            </a>
          </li>
        </ul>
        <ul className=" flex flex-col lg:flex-row lg:flex-wrap lg:justify-center">
          <li className="lg:px-4 py-2 xl:py-0">
            <a href="a">SaaS Services Agreement</a>
          </li>
          <li className="lg:px-4 py-2 xl:py-0">
            <a href="b">Privacy Notice</a>
          </li>
          <li className="lg:px-4 py-2 xl:py-0">
            <a href="c">Cookie Policy</a>
          </li>
          <li className="lg:px-4 py-2 xl:py-0">
            <a href="d">Status</a>
          </li>
        </ul>
        <p className="mt-10 lg:m-0">
          © 2024 FrontApp, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
