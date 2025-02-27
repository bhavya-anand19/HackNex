import React from "react";
import { Link } from "react-router-dom";
import behaviour from "../../../assets/behavior.png";

const SocialAnxietySymptoms = () => {
  return (
    <div className="w-full py-6 padding-x mt-10 lg:mt-20">
      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center text-gray-700">
        Recognizing Signs of Social Anxiety
      </h2>

      {/* Centered Symptoms Section */}
      <div className="mt-10 flex justify-center">
        <div className="max-w-4xl w-full flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-12 lg:space-x-16">
          {/* First Column of Symptoms */}
          <ul className="w-full md:w-1/2 space-y-3 list-disc">
            <li className="text-gray-500 text-sm lg:text-base">
              Intense fear of being judged or scrutinized by others in social
              situations
            </li>
            <li className="text-gray-500 text-sm lg:text-base">
              Avoiding social gatherings, even if you want to attend
            </li>
            <li className="text-gray-500 text-sm lg:text-base">
              Physical symptoms like sweating, trembling, or nausea when faced
              with social interactions
            </li>
          </ul>

          {/* Second Column of Symptoms */}
          <ul className="w-full md:w-1/2 space-y-3 list-disc">
            <li className="text-gray-500 text-sm lg:text-base">
              Overthinking or obsessing over past social encounters and fearing
              you made a mistake
            </li>
            <li className="text-gray-500 text-sm lg:text-base">
              Difficulty speaking in front of groups or meeting new people
            </li>
            <li className="text-gray-500 text-sm lg:text-base">
              A strong desire to avoid eye contact or public settings
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/book-free-session">
          <button className="bg-[#f0703a] text-white px-5 py-3 md:text-base text-sm font-semibold rounded-md hover:bg-[#cc6235] transition-all duration-300">
            Explore Treatment Options
          </button>
        </Link>
      </div>

      {/* Unsure about symptoms section */}
      <div className="py-8 sm:px-6 md:px-10 mt-14 flex justify-center mx-auto">
        <div className="w-full bg-slate-200 p-6 rounded-2xl shadow-md flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center mb-4 lg:mb-0 lg:mr-5">
            <div className="px-2 py-2 h-full rounded-full">
              <img src={behaviour} alt="Icon" className="w-20" />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-ellipsis md:text-left">
              <h4 className="text-lg font-semibold text-gray-700 py-1">
                Unsure about your symptoms?
              </h4>
              <p className="text-gray-500 text-sm py-1">
                Speak to a professional to better understand your mental health
                and how we can assist you.
              </p>
            </div>
          </div>

          <Link to="/book-free-session">
            <button className="bg-[#f0703a] text-white px-3 md:px-4 py-2 lg:px-7 md:py-3.5 font-semibold text-sm rounded-md hover:bg-[#cc6235] transition-all duration-300">
              TAKE ASSESSMENT
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialAnxietySymptoms;
