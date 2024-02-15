import React from "react";
import { useState, useEffect } from "react";

function Helpdesk() {
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

  return (
    <div className="lg:px-28 md:px-24 sm:px-20 px-8">
      <section className="pt-24">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-center lg:text-5xl mb-10">
          The best from email and help desks
        </h2>
        {isMediumScreen ? (
          <div>
            <div className="grid gap-y-10 grid-cols-1 justify-items-center">
              <div>
                <img
                  src="https://front.com/_next/image?url=%2Fassets%2Fpages%2Fhomepage-winter2022%2Fcomparison%2Fsummary-illustration.png&w=1080&q=75"
                  alt="Services"
                />
              </div>
              <div className="text-center font-bold text-xl">
                With Front, there’s no <em>but</em>.
              </div>
              <div className="text-center text-lg">
                Email is personal, but inefficient. Ticketing is efficient, but
                impersonal. With Front, there’s no but. Built-in collaboration,
                personalization, and scalability; all in one place.
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-x-14 grid-cols-3">
            <div className="grid gap-y-10 justify-item-center">
              <div>
                <img
                  src="https://front.com/_next/image?url=%2Fassets%2Fpages%2Fhomepage-winter2022%2Fcomparison%2FEMAIL.png&w=828&q=75"
                  alt="Email"
                />
              </div>
              <div>
                <h3 className="text-center font-bold text-xl mb-2">Email</h3>
                <p className="text-center text-lg">
                  Great for building relationships, but not efficient,
                  intelligent, or scalable.
                </p>
              </div>
            </div>
            <div className="grid gap-y-10 justify-item-center">
              <div>
                <img
                  src="https://front.com/_next/image?url=%2Fassets%2Fpages%2Fhomepage-winter2022%2Fcomparison%2FFRONT.png&w=828&q=75"
                  alt="hand"
                />
              </div>

              <div>
                <h3 className="text-center font-bold text-xl mb-2">
                  With Front, there’s no <em>but</em>.
                </h3>
                <p className="text-center text-lg">
                  Built-in collaboration. Built for personalization. Built to
                  scale.
                </p>
              </div>
            </div>
            <div className="grid gap-y-10 justify-item-center">
              <div>
                <img
                  src="https://front.com/_next/image?url=%2Fassets%2Fpages%2Fhomepage-winter2022%2Fcomparison%2FTICKETING.png&w=828&q=75"
                  alt="helpdesk"
                />
              </div>
              <div>
                <h3 className="text-center font-bold text-xl mb-2">
                  Help desks
                </h3>
                <p className="text-center text-lg">
                  Handles high-volume well, but not built for collaboration or
                  personalization at scale.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Helpdesk;
