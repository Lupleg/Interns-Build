import { Link } from "react-router-dom";

const ContactMenu = () => {
  return (
    <div className="text-left lg:flex lg:p-5 w-full lg:w-80 lg:mx-auto lg:absolute top-20 lg:right-60 bg-white lg:shadow-md lg:rounded-lg">
      <div className="py-1">
        <ul>
          <li>
            <div className="my-2 lg:px-4 py-2 text-left font-bold text-xs text-pink-500">
              <div>
                <p>
                  <span>GET IN TOUCH</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <button className="lg:px-4 py-2 lg:hover:bg-gray-100 hover:rounded-lg my-2">
              <div>
                <Link to="/request-demo">
                  <p className="text-left text-slate-700">
                    <span className="font-bold text-base">Talk to Sales</span>
                    <div className="mt-1 text-sm font-normal">
                      Got a specific question for our Sales team? Get an answer
                      here
                    </div>
                  </p>
                </Link>
              </div>
            </button>
          </li>
          <li>
            <button className="lg:px-4 py-2 lg:hover:bg-gray-100 hover:rounded-lg my-2">
              <div>
                <Link to="/contact">
                  <p className="text-left text-slate-700">
                    <span className="font-bold text-base">
                      Email us for support
                    </span>
                    <div className="mt-1 text-sm font-normal">
                      Need help using Front? Our team of product experts is here
                      to troubleshoot
                    </div>
                  </p>
                </Link>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMenu;
