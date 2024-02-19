import React from "react";

const GetEveryMessage = () => {
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
      <div className="">
        <div className="">
          <h2 className="">
            Get every message into the right hands without manual work
          </h2>
        </div>
        <div className="">
          <video
            loop=""
            autoplay=""
            playsinline=""
            className=""
            muted=""
          >
            <source src="https://front.com/assets/features/centralize-animated.mp4" />
          </video>
        </div>
        <div className="">
          <ol className="">
            {list_items.map((item, index) => (
              <li
                data-expanded={index === 0 ? "true" : "false"}
                className=""
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

export default GetEveryMessage;
