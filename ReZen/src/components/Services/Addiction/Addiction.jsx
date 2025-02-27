import React from "react";
import { Link } from "react-router-dom";
import addiction from "../../../assets/addiction1.png";
import AddictionSymptoms from "./AddictionSymptoms";
import { NotSure, SupportSection } from "../Consult";
import { Toaster } from "react-hot-toast";
import AddictionFaq from "./AddictionFaq";

function AddictionHero() {
  return (
    <section className="w-full py-16 lg:py-10 padding-x items-center bg-[#ffd8c2] flex flex-col-reverse lg:flex-row gap-10">
      {/* Left Side: Text */}
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 text-balance">
        <h2 className="text-3xl md:text-3xl xl:text-4xl font-bold text-darker">
          Overcome Alcohol Addiction Together
        </h2>
        <p className="text-base text-gray-600">
          Struggling with alcohol addiction? You're not alone. Our platform
          offers the support and resources you need to take back control of your
          life. With guidance and a strong community, we'll help you on your
          journey toward recovery.
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
          src={addiction} // replace with actual image path
          alt="Overcoming Alcohol Addiction"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

function Addiction() {
  return (
    <main className="overflow-x-hidden font-sora">
      <Toaster
        position="top-center"
        toastOptions={{ duration: 3000 }}
        reverseOrder={false}
      />
      <AddictionHero />
      <AddictionSymptoms />
      <NotSure />
      <AddictionFaq />
      <SupportSection />
    </main>
  );
}

export default Addiction;
