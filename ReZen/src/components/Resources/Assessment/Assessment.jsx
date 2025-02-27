import React from "react";
import { Link } from "react-router-dom";
import { FaBrain, FaSmile, FaHeartbeat, FaHandsHelping } from "react-icons/fa";
import { RiEmotionSadFill } from "react-icons/ri";
import { FaRegFaceFlushed } from "react-icons/fa6";

import { PiMaskSadFill } from "react-icons/pi";

const AssessmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f2e4] via-[#f3cca7] to-[#f4b063] flex flex-col items-center py-24 md:py-32 font-sora padding-x">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-10 md:mb-16 tracking-wide leading-tight">
          Choose an Assessment
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10">
          <AssessmentCard
            to="/depression-test"
            icon={<PiMaskSadFill className="text-5xl text-[#f0703a] mb-4" />}
            title="Depression Test"
            description="Take a test to check for symptoms of depression."
          />
          <AssessmentCard
            to="/anxiety-test"
            icon={<FaBrain className="text-5xl text-[#f0703a] mb-4" />}
            title="Anxiety Test"
            description="Take a test to check for symptoms of anxiety."
          />
          <AssessmentCard
            to="/anorexia-test"
            icon={<FaHeartbeat className="text-5xl text-[#f0703a] mb-4" />}
            title="Anorexia Test"
            description="Take a test to check for symptoms of anorexia."
          />
          <AssessmentCard
            to="/attitude-test"
            icon={<FaSmile className="text-5xl text-[#f0703a] mb-4" />}
            title="Attitude Test"
            description="Take a test to check what kind of attitude you have."
          />
          <AssessmentCard
            to="/emotional-intelligence-test"
            icon={<FaHandsHelping className="text-5xl text-[#f0703a] mb-4" />}
            title="Emotional Intelligence Test"
            description="Take a test to check your emotional intelligence."
          />
          <AssessmentCard
            to="/bulimia-test"
            icon={<RiEmotionSadFill className="text-5xl text-[#f0703a] mb-4" />}
            title="Bulimia Test"
            description="Take a test to check for symptoms of bulimia."
          />
          <AssessmentCard
            to="/ocd-test"
            icon={<FaRegFaceFlushed className="text-5xl text-[#f0703a] mb-4" />}
            title="OCD Test"
            description="Take a test to check for symptoms of OCD."
          />
        </div>
      </div>
    </div>
  );
};

const AssessmentCard = ({ to, icon, title, description }) => (
  <Link to={to}>
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 text-center hover:shadow-xl transform hover:scale-105 flex flex-col justify-between h-full">
      <div className="flex flex-col items-center">
        {icon}
        <h2 className="text-lg lg:text-xl font-semibold mb-4 text-[#f0703a]">
          {title}
        </h2>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
      <div className="mt-6">
        <button className="bg-[#f0703a] text-white py-2 px-4 rounded-lg shadow-sm hover:bg-[#d95e28] transition duration-200">
          Start Now
        </button>
      </div>
    </div>
  </Link>
);

export default AssessmentPage;
