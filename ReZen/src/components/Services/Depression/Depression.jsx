import React from "react";
import { Link } from "react-router-dom";
import depression from "../../../assets/Depression1.png";
import DepressionSymptoms from "./DepressionSymptoms";
import { NotSure, SupportSection } from "../Consult";

import DepressionFaq from "./DepressionFaq";

import { Toaster } from "react-hot-toast";
function DepressionHero() {
  return (
    <section className="w-full py-16 lg:py-10 padding-x items-center bg-[#ffd8c2] flex flex-col-reverse lg:flex-row gap-10">
      {/* Left Side: Text */}
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 text-balance">
        <h2 className="text-3xl md:text-3xl xl:text-4xl font-bold text-darker">
          Let us fight through depression
        </h2>
        <p className="text-base text-gray-600">
          You don't have to go through it alone. We provide you with the right
          support and resources to help you on your mental health journey.
          Together, we can navigate through the darkest times towards brighter
          days.
        </p>
        <Link to="/book-free-session">
          <button className="primaryBtn text-sm sm:text-base">
            Book Free Session
          </button>
        </Link>
      </div>

      {/* Right Side: Image */}
      <div className="lg:w-1/2 w-full">
        <img
          src={depression} // replace with actual image path
          alt="Fighting Depression"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

function Depression() {
  return (
    <main className="overflow-x-hidden font-sora">
      <Toaster
        position="top-center"
        toastOptions={{ duration: 3000 }}
        reverseOrder={false}
      />
      <DepressionHero />
      <DepressionSymptoms />
      <NotSure />
      <DepressionFaq />
      <SupportSection />
    </main>
  );
}

export default Depression;
