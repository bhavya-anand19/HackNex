import React from "react";
import { Link } from "react-router-dom";
import anxiety from "../../../assets/anxiety1.png";
import AnxietySymptoms from "./AnxietySymptoms";
import { NotSure, SupportSection } from "../Consult";

import AnxietyFaq from "./AnxietyFaq";
import { Toaster } from "react-hot-toast";

function AnxietyHero() {
  return (
    <section className="w-full py-16 lg:py-10 padding-x items-center bg-[#ffd8c2] flex flex-col-reverse lg:flex-row gap-10">
      {/* Left Side: Text */}
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 text-balance">
        <h2 className="text-3xl md:text-3xl xl:text-4xl font-bold text-darker">
          Take Control of Anxiety Together
        </h2>
        <p className="text-base text-gray-600">
          Facing anxiety challenges? You're not alone. Our platform provides the
          support and tools to help you manage your anxiety. With professional
          guidance and a compassionate community, we'll help you find balance
          and peace of mind.
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
          src={anxiety} // replace with actual image path
          alt="Managing Anxiety"
          className="w-full h-auto "
        />
      </div>
    </section>
  );
}

function Anxiety() {
  return (
    <main className="overflow-x-hidden font-sora">
      <Toaster
        position="top-center"
        toastOptions={{ duration: 3000 }}
        reverseOrder={false}
      />
      <AnxietyHero />
      <AnxietySymptoms />
      <NotSure />
      <AnxietyFaq />
      <SupportSection />
    </main>
  );
}

export default Anxiety;
