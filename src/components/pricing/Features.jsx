import React from "react";
import { useState, useEffect } from "react";
import Tables from "./Tables";

function Features() {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth <= 1024);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const tick = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 mx-auto flex items-center">
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
  return (
    <div className="lg:px-24 xl:px-32 2xl:mx-28">
      {isMediumScreen ? (
        <div className="mt-12 px-5 pt-24 pb-20 flex flex-col sm:gap-4">
          <p className="text-center font-semibold text-2xl font-sans">
            Compare plans and all the features
          </p>
          <div className="flex justify-center">
            <button className="w-40 p-3 px-6 h-12 font-normal my-4 rounded-full text-white shadow-lg bg-blue-500">
              Download PDF
            </button>
          </div>
        </div>
      ) : (
        <section className="">
          <div className="pt-8 pb-9">
            <h3 className="text-center font-semibold text-5xl font-sans mb-14">
              Features by plan
            </h3>

            <div className="max-w-full overflow-x-auto sticky top-32 bg-white ">
              <table className="w-full table-auto">
                <tbody>
                  <tr>
                    <td className="w-1/5">
                      <div className="p-1 bg-gray-200 rounded-md">
                        <div className="p-2">
                          <div className="flex mb-2">
                            <div className="mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6">
                                <path
                                  fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className="font-bold">Included</div>
                          </div>
                          <div className="flex">
                            <div className="font-bold mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6">
                                <path
                                  fillRule="evenodd"
                                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className="font-bold">Available add-on</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/5">
                      <div className="p-4 mt-2 ml-4 border-2 rounded-lg">
                        <h3 className="py-4 text-2xl font-semibold text-center">
                          Starter
                        </h3>
                        <center>
                          <button className="w-40 p-3 px-6 h-12 font-normal rounded-full text-white shadow-lg bg-pink-600 hover:shadow-pink-600 mb-4">
                            Get started
                          </button>
                        </center>
                      </div>
                    </td>
                    <td>
                      <div className="p-4 mt-2 ml-4 border-2 rounded-lg">
                        <h3 className="py-4 text-2xl font-semibold text-center">
                          Growth
                        </h3>
                        <center>
                          <button className="w-40 p-3 px-6 h-12 font-normal rounded-full text-white shadow-lg bg-pink-600 hover:shadow-pink-600 mb-4">
                            Get started
                          </button>
                        </center>
                      </div>
                    </td>
                    <td className="w-1/5">
                      <div className="p-4 mt-2 ml-4 border-2 rounded-lg">
                        <h3 className="py-4 text-2xl font-semibold text-center">
                          Scale
                        </h3>
                        <center>
                          <button className="w-40 p-3 px-6 h-12 font-normal rounded-full text-white shadow-lg bg-pink-600 hover:shadow-pink-600 mb-4">
                            Talk to sales
                          </button>
                        </center>
                      </div>
                    </td>
                    <td className="w-1/5">
                      <div className="p-4 mt-2 ml-4 border-2 rounded-lg">
                        <h3 className="py-4 text-2xl font-semibold text-center">
                          Premier
                        </h3>
                        <center>
                          <button className="w-40 p-3 px-6 h-12 font-normal rounded-full text-white shadow-lg bg-pink-600 hover:shadow-pink-600 mb-4">
                            Talk to sales
                          </button>
                        </center>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 mb-14">
              <table className="w-full">
                <Tables
                  heading="Omnichannel communications"
                  additionalRowsData={[
                    ["Email", tick, tick, tick, tick],
                    ["WhatsApp and SMS", tick, tick, tick, tick],
                    ["Social channels", tick, tick, tick, tick],
                    ["Third-party chat", tick, tick, tick, tick],
                    ["Website forms", tick, tick, tick, tick],
                    [
                      "Voice communication and telephony",
                      tick,
                      tick,
                      tick,
                      tick,
                    ],
                    ["Premium channel add-ons", tick, tick, tick, tick],
                    [
                      "Connect any messaging platform via API",
                      tick,
                      tick,
                      tick,
                      tick,
                    ],
                  ]}
                />

                <Tables
                  heading="Collaborative, easy-to-use inbox"
                  additionalRowsData={[
                    ["Shared inbox", tick, tick, tick, tick],
                    ["Assignments", tick, tick, tick, tick],
                    ["Tags", tick, tick, tick, tick],
                    ["Internal comments", tick, tick, tick, tick],
                    ["Shared drafts", tick, tick, tick, tick],
                    ["Scheduling messages", tick, tick, tick, tick],
                    ["Snoozing messages", tick, tick, tick, tick],
                    ["Message templates", tick, tick, tick, tick],
                    ["Calendar", tick, tick, tick, tick],
                    ["Meeting scheduling", tick, tick, tick, tick],
                    ["Individual view", tick, tick, tick, tick],
                    ["Guest accounts", tick, tick, tick, tick],
                    ["Summarize with AI", tick, tick, tick, tick],
                    ["Compose with AI", tick, tick, tick, tick],
                  ]}
                />
                <Tables
                  heading="Rules & workflow automation"
                  additionalRowsData={[
                    [
                      "Rule limits",
                      <p className="text-center">10</p>,
                      <p className="text-center">20</p>,
                      <p className="text-center">200</p>,
                      <p className="text-center">1000</p>,
                    ],
                    ["Individual rules", tick, tick, tick, tick],
                    ["Ready-to-use rule templates", tick, tick, tick, tick],
                    ["Round-robin assignment", tick, tick, tick, tick],
                    ["Load balancing", tick, tick, tick, tick],
                    ["Response time SLA rules", tick, tick, tick, tick],
                    ["Required tagging rules", tick, tick, tick, tick],
                    ["Rules using customer data", tick, tick, tick, tick],
                    ["Webhooks", tick, tick, tick, tick],
                    ["Company rules", tick, tick, tick, tick],
                    ["Smart rules", tick, tick, tick, tick],
                  ]}
                />
                <Tables
                  heading="Live chat & chatbots"
                  additionalRowsData={[
                    [
                      "Customizable chat widget for web and mobile",
                      tick,
                      tick,
                      tick,
                      tick,
                    ],
                    [
                      "Capture the website URL that chat visitors are on",
                      tick,
                      tick,
                      tick,
                      tick,
                    ],
                    ["End user identification", tick, tick, tick, tick],
                    ["Set offline hours", tick, tick, tick, tick],
                    ["Email transcript summaries", tick, tick, tick, tick],
                    ["Customizable pre-chat form", tick, tick, tick, tick],
                    ["Advanced message routing", tick, tick, tick, tick],
                    ["CSAT integration", tick, tick, tick, tick],
                    [
                      "Hide teammate name/avatar from chat visitors",
                      tick,
                      tick,
                      tick,
                      tick,
                    ],
                    ["Chatbots", tick, tick, tick, tick],
                  ]}
                />
                <Tables
                  heading="Knowledge base"
                  additionalRowsData={[
                    ["Import tools", tick, tick, tick, tick],
                    [
                      "Published articles",
                      <p className="text-center">Up to 1000</p>,
                      <p className="text-center">Up to 5000</p>,
                      <p className="text-center">Up to 10,000</p>,
                      <p className="text-center">Unlimited</p>,
                    ],
                    [
                      "Category nesting levels",
                      <p className="text-center">Up to 1</p>,
                      <p className="text-center">Up to 2</p>,
                      <p className="text-center">Up to 5</p>,
                      <p className="text-center">Up to 5</p>,
                    ],
                    [
                      "Custom branding",
                      <p className="text-center">Limited</p>,
                      tick,
                      tick,
                      tick,
                    ],
                    [
                      "Multiple knowledge bases",
                      tick,
                      <p className="text-center">Up to 2</p>,
                      <p className="text-center">Up to 50</p>,
                      <p className="text-center">Up to 100</p>,
                    ],
                    ["Custom domain", tick, tick, tick, tick],
                    ["Front Chat integration", tick, tick, tick, tick],
                    ["Google Analytics integration", tick, tick, tick, tick],
                    ["Multi-language support", tick, tick, tick, tick],
                  ]}
                />
                <Tables
                  heading="CRM"
                  additionalRowsData={[
                    ["Manage contacts and accounts", tick, tick, tick, tick],
                    [
                      "Contact and account conversation history",
                      tick,
                      tick,
                      tick,
                      tick,
                    ],
                    [
                      "Custom contact / account / teammate / inbox fields",
                      tick,
                      tick,
                      tick,
                      tick,
                    ],
                    ["CSV upload contacts/accounts", tick, tick, tick, tick],
                    [
                      "Salesforce accounts and contacts sync",
                      tick,
                      tick,
                      tick,
                      tick,
                    ],
                    [
                      "HubSpot accounts and contacts sync",
                      tick,
                      tick,
                      tick,
                      tick,
                    ],
                    [
                      "Microsoft Dynamics 365 accounts sync",
                      tick,
                      tick,
                      tick,
                      tick,
                    ],
                  ]}
                />
                <Tables
                  heading="Integrations"
                  additionalRowsData={[
                    ["Ecommerce", tick, tick, tick, tick],
                    ["Project management", tick, tick, tick, tick],
                    ["Knowledge base", tick, tick, tick, tick],
                    ["Payments", tick, tick, tick, tick],
                    ["Analytics and data", tick, tick, tick, tick],
                    ["Storage", tick, tick, tick, tick],
                    ["Conferencing", tick, tick, tick, tick],
                    ["Developer", tick, tick, tick, tick],
                    ["Custom integrations via plugins", tick, tick, tick, tick],
                    ["Automation", tick, tick, tick, tick],
                    ["CRM", tick, tick, tick, tick],
                    ["Dynamic objects", tick, tick, tick, tick],
                    [
                      "Dynamic objects with third-party data",
                      tick,
                      tick,
                      tick,
                      tick,
                    ],
                    [
                      "API rate limits",
                      <p className="text-center">50/Min</p>,
                      <p className="text-center">100/Min</p>,
                      <p className="text-center">200/Min</p>,
                      <p className="text-center">500/min</p>,
                    ],
                    [
                      "Close to 100 out-of-the-box integrations",
                      <p className="text-center">
                        <a href="b">View all</a>
                      </p>,
                      <p className="text-center">
                        <a href="b">View all</a>
                      </p>,
                      <p className="text-center">
                        <a href="b">View all</a>
                      </p>,
                      <p className="text-center">
                        <a href="b">View all</a>
                      </p>,
                    ],
                  ]}
                />
                <Tables
                  heading="Analytics"
                  additionalRowsData={[
                    ["Team Performance reports", tick, tick, tick, tick],
                    ["Tags reports", tick, tick, tick, tick],
                    ["SLA reports", tick, tick, tick, tick],
                    ["CSAT reports", tick, tick, tick, tick],
                    ["Report scheduling", tick, tick, tick, tick],
                    [
                      "Filter reports by Inbox, Tag, Channel",
                      tick,
                      tick,
                      tick,
                      tick,
                    ],
                    [
                      "Analytics exports (in-app and API)",
                      tick,
                      tick,
                      tick,
                      tick,
                    ],
                    [
                      "Data retention window",
                      tick,
                      <p className="text-center">6 Months</p>,
                      <p className="text-center">24 Months</p>,
                      <p className="text-center">Unlimited</p>,
                    ],
                    ["Account-based analytics", tick, tick, tick, tick],
                    ["Company-wide analytics", tick, tick, tick, tick],
                  ]}
                />
                <Tables
                  heading="Security & team management"
                  additionalRowsData={[
                    ["GDPR ready", tick, tick, tick, tick],
                    ["SOC 2 Type II Certified", tick, tick, tick, tick],
                    ["OAuth-based SSO", tick, tick, tick, tick],
                    ["SAML based SSO", tick, tick, tick, tick],
                    ["SCIM/User provisioning", tick, tick, tick, tick],
                    ["Teammate groups", tick, tick, tick, tick],
                    ["Teammate groups sync", tick, tick, tick, tick],
                    ["Teammate activity export", tick, tick, tick, tick],
                    ["Workspaces", tick, tick, tick, tick],
                    ["E-discovery extracts", tick, tick, tick, tick],
                    ["IP restrictions", tick, tick, tick, tick],
                    ["Teammate templates", tick, tick, tick, tick],
                    ["Shared Views", tick, tick, tick, tick],
                    ["Shifts", tick, tick, tick, tick],
                    ["Custom roles and permissions", tick, tick, tick, tick],
                  ]}
                />
                <Tables
                  heading="Support and Services"
                  additionalRowsData={[
                    ["Award-winning Front support", tick, tick, tick, tick],
                    ["Tailored onboarding", tick, tick, tick, tick],
                    ["Solution design", tick, tick, tick, tick],
                    ["Dedicated account team", tick, tick, tick, tick],
                    ["Advanced Success Services", tick, tick, tick, tick],
                    ["Custom Build Hours", tick, tick, tick, tick],
                    [
                      "Participation in pre-release and beta features",
                      tick,
                      tick,
                      tick,
                      tick,
                    ],
                    ["Executive sponsorship", tick, tick, tick, tick],
                  ]}
                />
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Features;
