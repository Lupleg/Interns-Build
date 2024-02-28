import { Link } from "react-router-dom";

const ContactMenu = () => {
  return (
    <div className="lg:absolute left-0 mt-0 w-full lg:w-80 lg:rounded lg:shadow-lg bg-white lg:ring-1 lg:ring-black lg:ring-opacity-5 text-left py-4 lg:px-8">
      <div className="py-1">
        <ul>
          <li>
            <div className="my-2 lg:px-4 py-2 text-left text-sm text-red-600">
              <div>
                <p>
                  <span className="text-left font-semibold rounded">
                    GET IN TOUCH
                  </span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <button className="lg:px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:rounded my-2">
              <div>
                <Link to="/request-demo">
                  <p>
                    <span className="text-left font-semibold rounded">
                      Talk to Sales
                    </span>
                    <div className="mt-1 font-normal">
                      Got a specific question for our Sales team? Get an answer
                      here
                    </div>
                  </p>
                </Link>
              </div>
            </button>
          </li>
          <li>
            <button className="lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded my-4 text-left">
              <div>
                <Link to="/contact">
                  <p>
                    <span className="text-left font-semibold rounded">
                      Email us for support
                    </span>
                    <div className="mt-1 font-normal">
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
