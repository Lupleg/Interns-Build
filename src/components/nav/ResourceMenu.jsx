import { resourceMenuItem } from "./resourceMenuItem";

const ResourceMenu = () => {
  const Column = ({ col, rb, pars }) => {
    return (
      <div
        className={`lg:flex lg:flex-col py-3 lg:px-4 lg:w-80 bg-white ${rb ? "lg:border-r lg:border-gray-200 lg:pr-4" : ""}`}
      >
        <p className="lg:p-2 font-bold text-xs text-pink-500">{col}</p>
        <ul>
          {pars.map((par) => (
            <li>
              <button className="lg:flex lg:flex-col py-1 lg:p-2 hover:bg-gray-100 hover:rounded">
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
  return (
    <div className="text-left lg:flex lg:p-5 w-full lg:border-4 lg:border-transparent lg:w-4/5 lg:mx-auto lg:absolute top-20 lg:right-20 bg-white lg:shadow-md lg:rounded-lg">
      <Column
        col={resourceMenuItem.col1.title}
        rb={true}
        pars={resourceMenuItem.col1.pars}
      />
      <Column
        col={resourceMenuItem.col2.title}
        rb={true}
        pars={resourceMenuItem.col2.pars}
      />
      <Column
        col={resourceMenuItem.col3.title}
        rb={false}
        pars={resourceMenuItem.col3.pars}
      />
    </div>
  );
};

export default ResourceMenu;
