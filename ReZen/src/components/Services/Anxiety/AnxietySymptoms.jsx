import React from "react";
import behaviour from "../../../assets/behavior.png";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const HandleButton = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">
              Feature Coming Soon!
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-darker hover:text-darkest focus:outline-none focus:ring-2 focus:ring-darker"
        >
          Close
        </button>
      </div>
    </div>
  ));
};

const AnxietySymptoms = () => {
  return (
    <div className="w-full py-6 padding-x mt-10 lg:mt-20">
      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center text-gray-700">
        Recognizing Signs of Anxiety
      </h2>

      {/* Centered Symptoms Section */}
      <div className="mt-10 flex justify-center">
        <div className="max-w-4xl w-full flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-12 lg:space-x-16">
          <ul className="space-y-3 list-disc">
            <li className="text-gray-500 text-sm lg:text-base">
              Constant worrying or feeling overwhelmed by daily tasks
            </li>
            <li className="text-gray-500 text-sm lg:text-base">
              Experiencing physical symptoms such as a racing heart, sweating,
              or trembling
            </li>
            <li className="text-gray-500 text-sm lg:text-base">
              Difficulty concentrating or staying focused due to intrusive
              thoughts
            </li>
          </ul>

          <ul className="space-y-3 list-disc">
            <li className="text-gray-500 text-sm lg:text-base">
              Avoiding social situations or activities for fear of judgment or
              embarrassment
            </li>
            <li className="text-gray-500 text-sm lg:text-base">
              Restlessness or feeling on edge, often without a clear cause
            </li>
            <li className="text-gray-500 text-sm lg:text-base">
              Sleep disturbances, such as trouble falling asleep or staying
              asleep, due to persistent worry
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={HandleButton}
          className="bg-[#f0703a] text-white px-5 py-3 md:text-base text-sm font-semibold rounded-md hover:bg-[#cc6235] transition-all duration-300"
        >
          Explore Treatment Options
        </button>
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

export default AnxietySymptoms;
