import React from "react";
import { Link } from "react-router-dom";
import socialAnxiety from "../../../assets/socialAnxiety.png";
import SocialAnxietySymptoms from "./SocialAnxietySymptoms";
import { NotSure, SupportSection } from "../Consult";

import SocialAnxietyFaq from "./SocialAnxietyFaq";
import { Toaster } from "react-hot-toast";
const SocialAnxietyHero = () => {
  return (
    <section className="w-full py-16 lg:py-10 padding-x items-center bg-[#ffd8c2] flex flex-col-reverse lg:flex-row gap-10">
      {/* Left Side: Text */}
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 text-balance">
        <h2 className="text-3xl md:text-3xl xl:text-4xl font-bold text-darker">
          Take Control of Social Anxiety Together
        </h2>
        <p className="text-base text-gray-600">
          Facing challenges with social anxiety? You're not alone. Our platform
          provides the support and tools to help you manage your social anxiety.
          With professional guidance and a compassionate community, we'll help
          you regain confidence and find peace in social interactions.
        </p>
        <Link to="/book-free-session">
          <button className="primaryBtn text-sm sm:text-base">
            Book Free Session
          </button>
        </Link>
      </div>

      {/* Right Side: Image */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          src={socialAnxiety} // replace with actual image path
          alt="Managing Social Anxiety"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto"
        />
      </div>
    </section>
  );
};

function SocialAnxiety() {
  return (
    <main className="overflow-x-hidden font-sora">
      <Toaster
        position="top-center"
        toastOptions={{ duration: 3000 }}
        reverseOrder={false}
      />
      <SocialAnxietyHero />
      <SocialAnxietySymptoms />
      <NotSure />
      <SocialAnxietyFaq />
      <SupportSection />
    </main>
  );
}

export default SocialAnxiety;
