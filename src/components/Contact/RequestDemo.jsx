import React from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import Navbar from "../Navbar";

const RequestDemo = () => {
  return (
    <>
      <Navbar />
      <div className="md:flex md:flex-col-2">
        <div className="py-2 bg-gradient-to-bl from-orange-300 to-orange-200 md:w-3/6 text-black md:pl-20">
          <div className="w-11/12 mx-auto">
            <p className="text-lg md:text-4xl my-6 text-left md:pr-16 tracking-wide font-normal">
              "Forget about ticketing platforms and conventional email!{" "}
              <strong>There is so much potential with Front.</strong>
            </p>
            <div className="flex items-center pt-3 pr-3">
              <img
                className="rounded-full mr-4 w-14"
                src="https://front.com/_next/image?url=https%3A%2F%2Ffront.com%2Fassets%2Fauthors%2Flaura-ene.png&w=64&q=75"
                alt=""
              />
              <span className="inline-block">
                <h2 className="text-base font-semibold">Laura Ene</h2>
                <p className="text-sm">
                  Customer Success Team Lead at Hootsuite
                </p>
              </span>
            </div>
            <p className="pt-8 hidden md:block font-semibold">
              Join the 8,500+ companies relying on Front
            </p>
            <div className="hidden md:flex md:flex-col md:flex-wrap">
              <div className="flex">
                <img
                  className="h-28 w-28 pr-3"
                  src="https://front.com/webassets/logos/customers/shopify-logo.svg"
                  alt=""
                />

                <img
                  className="h-28 w-28 pl-3"
                  src="https://front.com/webassets/logos/customers/cisco.svg"
                  alt=""
                />

                <img
                  className="h-28 w-28 pl-4"
                  src="https://front.com/assets/godaddy.svg"
                  alt=""
                />
              </div>

              <div className="flex py-0">
                <img
                  className="h-22 w-28 pr-3"
                  src="https://front.com/webassets/logos/customers/workday.svg"
                  alt=""
                />
                <img
                  className="h-22 w-28 pl-3"
                  src="https://front.com/assets/mailchimp.svg"
                  alt=""
                />

                <img
                  className="h-22 w-28 pl-4"
                  src="https://front.com/assets/carvana.svg"
                  alt=""
                />
              </div>
            </div>

            <p className="font-semibold pb-4 pt-5 hidden md:block">
              And we don't let them down
            </p>

            <div className="md:flex pt-4 hidden">
              <img
                className="h-28 w-28"
                src="https://front.com/assets/award-badges/Momentum-Leader-Winter-2024.svg"
                alt=""
              />

              <img
                className="h-28 w-28"
                src="https://front.com/assets/award-badges/Best-Relationship-Winter-2024.svg"
                alt=""
              />

              <img
                className="h-28 w-28"
                src="https://front.com/assets/award-badges/Best-Usability-Winter-2024.svg"
                alt=""
              />

              <img
                className="h-28 w-28"
                src="https://front.com/assets/award-badges/Best-Results-Winter-2024.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="md:flex md:flex-col items-center pl-58 text-center">
            <h2 className="font-semibold text-lg pb-3">Get started</h2>
            <p className="text-3xl font-bold">Tell us a bit about you</p>
          </div>

          <div className="w-4/5 mx-auto mt-2 md:w-full md:ml-16">
            <form action="#">
              <div className="md:grid md:grid-cols-1 md:gap-4 pt-3">
                <div>
                  <label
                    htmlFor="workEmail"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    id="workEmail"
                    placeholder="You@Company.com"
                    className="mt-1 block w-full rounded-md border-gray-300 bg-neutral-200 p-3 shadow-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-3">
                  <div className="col-span-1">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-800"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Jamie"
                      className="mt-3 block w-full rounded-md border-gray-300 shadow-sm bg-neutral-200 p-3"
                    />
                  </div>
                  <div className="col-span-1 pl-3">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Smith"
                      className="mt-3 block w-full rounded-md border-gray-300 shadow-sm bg-neutral-200 p-3"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-3">
                  <div className="col-span-1">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Your Company"
                      className="mt-3 block w-full rounded-md border-gray-300 shadow-sm bg-neutral-200 p-3"
                    />
                  </div>
                  <div className="col-span-1 pl-3">
                    <label
                      htmlFor="jobTitle"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      id="jobTitle"
                      placeholder="e.g., Director of Operations"
                      className="mt-3 block w-full rounded-md border-gray-300 shadow-sm bg-neutral-200 p-3"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="col-span-1">
                    <label
                      htmlFor="companySize"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Company Size
                    </label>
                    <select
                      name="companySize"
                      id="companySize"
                      className="mt-3 block w-full rounded-md bg-neutral-200 p-3 shadow-sm"
                    >
                      <option value="" disabled selected>
                        Select One
                      </option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-100">51-100 employees</option>
                      <option value="101-150">101-150 employees</option>
                      <option value="151-250">151-250 employees</option>
                      <option value="251-1000">251-1000 employees</option>
                      <option value="1001+">1,001+ employees</option>
                    </select>
                  </div>
                  <div className="col-span-1 pl-3">
                    <label
                      htmlFor="industry"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Industry
                    </label>
                    <select
                      name="industry"
                      id="industry"
                      className="mt-3 block w-full rounded-md p-3 shadow-sm bg-neutral-200"
                    >
                      <option value="" disabled selected>
                        Select One
                      </option>
                      <option value="Technology">Technology</option>
                      <option value="Logistics">Logistics</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Professional services">
                        Professional services
                      </option>
                      <option value="Travel & Hospitality">
                        Travel & Hospitality
                      </option>
                      <option value="Health Care">Health Care</option>
                      <option value="Non-profit">Non-profit</option>
                      <option value="Education">Education</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Consumer Services">
                        Consumer Services
                      </option>
                      <option value="1001+">Other</option>
                    </select>
                  </div>
                </div>
                <div className="pt-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-800 pb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      className="block w-full pl-16 p-3 sm:text-sm rounded-md bg-neutral-200"
                      placeholder="Phone Number"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <RiArrowDropDownFill />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 md:text-left">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-950 hover:bg-gradient-to-r from-red-950 to-blue-950"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDemo;
