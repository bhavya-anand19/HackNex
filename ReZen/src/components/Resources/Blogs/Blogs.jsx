import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="bg-[#fdf1db] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mb-12">
          Our Latest Blog Posts
        </h2>

        <div className="space-y-12">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Large Blog */}
            <Link to="/tobacco-addiction" className="block">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl mx-auto">
                <img
                  src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg"
                  alt="Tobacco Addiction"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-700">
                    Tobacco Addiction: Understanding and Overcoming
                  </h3>
                </div>
              </div>
            </Link>

            {/* Two Smaller Blogs */}
            <div className="space-y-10">
              <Link to="/counseling-vs-psychotherapy" className="block">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex max-w-xl mx-auto">
                  <img
                    src="https://images.pexels.com/photos/935977/pexels-photo-935977.jpeg"
                    alt="Counseling vs Psychotherapy"
                    className="w-1/3 object-cover"
                  />
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-700">
                      Counseling vs Psychotherapy: What’s the Difference?
                    </h3>
                  </div>
                </div>
              </Link>

              <Link to="/sleep-in-recovery" className="block">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex max-w-xl mx-auto">
                  <img
                    src="https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg"
                    alt="Sleep in Recovery"
                    className="w-1/3 object-cover"
                  />
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-700">
                      Sleep in Recovery: The Key to Healing
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Second Row (Same Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Large Blog */}
            <Link to="/medication-for-ocd" className="block">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl mx-auto">
                <img
                  src="https://images.pexels.com/photos/4050332/pexels-photo-4050332.jpeg"
                  alt="Medication for OCD"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-700">
                    Medication for OCD: What to Know
                  </h3>
                </div>
              </div>
            </Link>

            {/* Two Smaller Blogs */}
            <div className="space-y-10">
              <Link to="/anxiety-disorders" className="block">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex max-w-xl mx-auto">
                  <img
                    src="https://images.pexels.com/photos/2128817/pexels-photo-2128817.jpeg"
                    alt="Anxiety Disorders"
                    className="w-1/3 object-cover"
                  />
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-700">
                      Anxiety Disorders: How to Cope
                    </h3>
                  </div>
                </div>
              </Link>

              <Link to="/depression-worsening" className="block">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex max-w-xl mx-auto">
                  <img
                    src="https://images.pexels.com/photos/9890222/pexels-photo-9890222.jpeg"
                    alt="Depression Worsening"
                    className="w-1/3 object-cover"
                  />
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-700">
                      When Depression Worsens: Signs and Steps
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
