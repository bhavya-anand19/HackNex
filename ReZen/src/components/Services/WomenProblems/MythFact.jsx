import React from "react";

import { Link } from "react-router-dom";

const MythFactSection = () => {
  return (
    <div className="bg-gray-100 py-32 md:px-20 px-12">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-14 text-gray-700">
        What you should know about women’s mental health...
      </h2>
      <div className="max-w-6xl mx-auto grid gap-y-12 gap-x-20 lg:grid-cols-2">
        {/* Myth-Fact Box 1 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-red-500 text-lg font-bold flex items-center mb-4">
            <span className="mr-2">✖</span> Myth
          </h3>
          <p className="mb-4">
            Hormonal changes alone cause all mental health issues in women.
          </p>
          <h3 className="text-green-500 text-lg font-bold flex items-center mb-4">
            <span className="mr-2">✔</span> Fact
          </h3>
          <p>
            While hormonal fluctuations (e.g., during menstrual cycles,
            pregnancy, or menopause) can impact mental health, factors such as
            genetics, environment, and lifestyle also play significant roles.
            Mental health conditions require comprehensive care beyond just
            hormone regulation.
          </p>
        </div>

        {/* Myth-Fact Box 2 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-red-500 text-lg font-bold flex items-center mb-4">
            <span className="mr-2">✖</span> Myth
          </h3>
          <p className="mb-4">
            Women are more emotional and therefore more likely to exaggerate
            their mental health struggles.
          </p>
          <h3 className="text-green-500 text-lg font-bold flex items-center mb-4">
            <span className="mr-2">✔</span> Fact
          </h3>
          <p>
            Mental health issues are real and should not be dismissed as
            exaggerated emotions. Both men and women can experience significant
            mental health challenges that require proper attention and
            treatment, regardless of gender stereotypes.
          </p>
        </div>
      </div>

      {/* Explore Care Options Button */}
      <div className="flex justify-center mt-16">
        <Link to="/book-free-session">
          <button className="bg-[#f0703a] text-white px-5 py-3 md:text-base text-sm font-semibold rounded-md hover:bg-[#cc6235] transition-all duration-300">
            Explore Care Options
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MythFactSection;
