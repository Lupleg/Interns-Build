import React, { useState } from "react";

function Tables({ heading, additionalRowsData }) {
  const [showAdditionalRows, setShowAdditionalRows] = useState(true);

  const toggleRows = (event) => {
    event.preventDefault();
    setShowAdditionalRows(!showAdditionalRows);
  };
  const generateAdditionalRows = () => {
    if (showAdditionalRows) {
      return null;
    }

    return (
      <>
        {additionalRowsData.map((row, indexRow) =>
          Array.isArray(row) ? (
            <tr key={indexRow} className="border">
              {row.map((item, indexCol) => {
                let className = "";

                if (indexCol >= 0) {
                  className += "w-1/5";
                }

                // Apply background color grey if index is 4
                if (indexCol === 3) {
                  className += " bg-gray-100"; // Use Tailwind color classes
                }

                // Apply padding 2px if index is 1
                if (indexCol === 0) {
                  className += " p-2"; // Use Tailwind spacing classes
                }

                return (
                  <td key={indexCol} className={className}>
                    {item}
                  </td>
                );
                // <td key={indexCol}>{item}</td>
              })}
            </tr>
          ) : null
        )}
      </>
    );
  };

  return (
    <tbody>
      <tr className="border">
        <td colSpan={5}>
          <div className="flex justify-between px-5 py-4">
            <div>
              <p className="text-2xl font-semibold">{heading}</p>
            </div>
            <div>
              <button onClick={toggleRows}>
                {showAdditionalRows ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </td>
      </tr>
      {generateAdditionalRows()}
    </tbody>
  );
}

export default Tables;
