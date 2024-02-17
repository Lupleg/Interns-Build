import React from "react";

const Raymond = () => {
  const list_items = [
    {
      p: "Centralize your channels",
      div: "Goodbye, tab juggling. Funnel all of your inbound messages from email, social media, SMS, voice, and more into a single place.",
    },
    {
      p: "Route messages automatically",
      div: "Get messages to the right person by setting rules based on message content (like keywords) or data from other systems (like account info from Salesforce). No forwarding or distribution lists necessary.",
    },
    {
      p: "Assign clear ownership",
      div: "There’s no question about who’s responsible for following up when messages are automatically assigned to individual owners based on availability, expertise, or workload.",
    },
    {
      p: "Let tags do the work",
      div: "Label messages with tags for pulling reports, quick visual cues, powering rules, or filtering searches.",
    },
  ];
  return (
    <div>
      <div className="text-base text-[rgb(0,27,56)] font-sans leading-normal box-border border border-gray-200 grid grid-cols-12 gap-5">
        <div className="row-start-1 text-center max-w-[58rem] mx-auto flex flex-col gap-8 mb-16 col-start-3 col-end-10">
          <h2 className="m-0 font-semibold tracking-tighter text-2xl leading-9">
            Get every message into the right hands without manual work
          </h2>
        </div>
        <div className="rounded-lg overflow-hidden col-start-7 col-end-13 self-start mb-0">
          <video
            loop=""
            autoplay=""
            playsinline=""
            className="block align-middle max-w-full h-auto w-full"
            muted=""
          >
            <source src="https://front.com/assets/features/centralize-animated.mp4" />
          </video>
        </div>
        <div className="col-start-1 col-end-6">
          <ol className="m-0 p-0 list-none flex flex-col gap-8">
            {list_items.map((item, index) => (
              <li
                data-expanded={index === 0 ? "true" : "false"}
                className="pl-3 border-l border-transparent"
              >
                <p>{item.p}</p>
                <div>{item.div}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Raymond;
