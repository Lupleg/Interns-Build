import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Connect = () => {
  return (
    <div  className="mb-10">
      <div className="text-3xl  font-bold text-gray-900 text-center py-12 px-3 w-4/5 mx-auto ">
        <h1>Personalize your plan with add-ons</h1>
      </div>

      <div>
        <div className="bg-gray-100">
        <div className="grid grid-cols-1 gap-10 w-11/12 md:w-4/5 mx-auto rounded-lg mx-auto lg:grid-cols-2 xl:grid-cols-3 md:px-20 py-10 sm:py-14">
          <div className="p-8 bg-white rounded-lg drop-shadow-lg w-11/12 mx-auto">
            <img className="pb-4" src="https://front.com/_next/image?url=https%3A%2F%2Ffront.com%2Fassets%2Fintegrations%2Fdialpad%2Ficon.png&w=64&q=75" />
            <h1  className="font-bold text-2xl">Dialpad SMS</h1>
            <p className="text-2xl text-gray-500">for $100/month</p>
            <p className="py-4">
              Integrate Dialpad to text with customers right from your inbox
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg drop-shadow-lg w-11/12 mx-auto">
            <img className="pb-4" src="https://front.com/_next/image?url=https%3A%2F%2Ffront.com%2Fassets%2Fintegrations%2Fgooglebusinessmessages%2Ficon.png&w=64&q=75" />
            <h1 className="font-bold text-2xl">Google Business Messages</h1>
            <p className="text-2xl text-gray-500">for $100/month</p>
            <p className="py-4">
            Easily respond to customers who find your business profile on Google Search or Maps.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg drop-shadow-lg w-11/12 mx-auto">
            <img className="pb-4" src="https://front.com/_next/image?url=https%3A%2F%2Ffront.com%2Fassets%2Fintegrations%2Ftelegram%2Ftelegram_logo.png&w=64&q=75" />
            <h1  className="font-bold text-2xl">Telegram</h1>
            <p className="text-2xl text-gray-500">for $100/month</p>
            <p className="py-4">
            Connect a Telegram bot as a channel to manage conversations in Front.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg drop-shadow-lg xl:col-span-3 w-11/12 mx-auto">
            <img className="pb-4" src="https://front.com/_next/image?url=https%3A%2F%2Ffront.com%2Fassets%2Fintegrations%2Fwhatsapp%2FDigital_Glyph_Green.png&w=64&q=75" />
            <h1  className="font-bold text-2xl">WhatsApp</h1>
            <p className="text-2xl text-gray-500">Starting at $70/month</p>
            <p className="py-4">
            Quickly respond to WhatsApp messages alongside other customer communication.
            </p>
          </div>
        </div>
        <div className="text-center w-4/5 mx-auto  rounded-lg py-10 pd-20 flex flex-col justify-center align-center">
          <p className="font-bold flex  py-auto mx-auto text-center">Connect with our sales team <span className="align-middle pt-1.5 pl-1"><FaArrowRight/></span></p>
          <p className="text-gray-500"> 
            Add-ons are currently only available on the Growth plan or higher
          </p>
        </div>
        </div>
       
        
      </div>
    </div>
  );
};

export default Connect;
