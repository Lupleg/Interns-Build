import React from "react";
import Marquee from "react-fast-marquee";
function Slider() {
  return (
    <div className="sm:px-8 md:px-16 lg:px-24 lg:mx-8 xl:px-32  xl:mx-20 mb-24 mt-10">
      <div className="flex flex-col md:gap-10 sm:gap-8 lg:gap-16">
        <div className="md:text-xl lg:text-2xl xl:text-4xl font-semibold mx-4//5 mx-auto">
          <h2 className="text-center ">
            8,000+ businesses choose Front for every customer conversation —
            from simple&nbsp;to&nbsp;complex
          </h2>
        </div>
        <div>
          <Marquee pauseOnHover="true" speed={35} className="mt-10 md:mt-4">
            <div className="size-2/4">
              <img
                src="https://front.com/assets/pages/homepage-v2/logos/social-proof/sennder.svg"
                alt=""
              />
            </div>
            <div className="size-2/4">
              <img
                src="https://front.com/assets/pages/homepage-v2/logos/social-proof/WizardPins.svg"
                alt=""
              />
            </div>
            <div className="size-2/4">
              <img
                src="https://front.com/assets/pages/homepage-v2/logos/social-proof/Branch.svg"
                alt=""
              />
            </div>
            <div className="size-2/4">
              <img
                src="https://front.com/assets/pages/homepage-v2/logos/social-proof/Carvana.svg"
                alt=""
              />
            </div>
            <div className="size-2/4">
              <img
                src="https://front.com/assets/pages/homepage-v2/logos/social-proof/ClickUp.svg"
                alt=""
              />
            </div>
            <div className="size-2/4">
              <img
                src="https://front.com/assets/pages/homepage-v2/logos/social-proof/Culture-Amp.svg"
                alt=""
              />
            </div>
            <div className="size-2/4">
              <img
                src="https://front.com/assets/pages/homepage-v2/logos/social-proof/Dropbox.svg"
                alt=""
              />
            </div>
            <div className="size-2/4">
              <img
                src="https://front.com/assets/pages/homepage-v2/logos/social-proof/GoDaddy.svg"
                alt=""
              />
            </div>
            <div className="size-2/4">
              <img
                src="https://front.com/assets/pages/homepage-v2/logos/social-proof/Hootsuite.svg"
                alt=""
              />
            </div>
            <div className="size-2/4">
              <img
                src="https://front.com/assets/pages/homepage-v2/logos/social-proof/Lydia.svg"
                alt=""
              />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Slider;
