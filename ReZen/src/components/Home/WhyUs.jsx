import React from "react";
import expertDiagnosis from "../../assets/diagnosis_1.png";
import personalisedTherapy from "../../assets/personalisedTherapy.png";
import holisticSolution from "../../assets/HolisticSolution.png";

const WhyUs = () => {
  return (
    <section className="bg-[#ffffff] py-10 md:py-16 lg:py-20 xl:py-28 relative overflow-hidden padding-x">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-10 md:mb-16">
          Why <span className="text-[#f0703a]">Choose</span> Us?
        </h2>

        {/* Grid Layout to Avoid Wrapping Issues */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 xl:gap-16  mx-auto">
          {/* Expert Diagnosis */}
          <div className="flex items-center gap-6">
            <img
              src={expertDiagnosis}
              alt="Expert Diagnosis"
              className="w-14 sm:w-16 md:w-20 border-2 border-[#f0703a] rounded-full p-2"
            />
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Expert Diagnosis
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Gain clarity with advanced mental health assessments.
              </p>
            </div>
          </div>

          {/* Personalized Therapy */}
          <div className="flex items-center gap-6">
            <img
              src={personalisedTherapy}
              alt="Personalized Therapy"
              className="w-14 sm:w-16 md:w-20 border-2 border-[#f0703a] rounded-full p-2"
            />
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Personalized Therapy
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                One-on-one sessions tailored to your unique needs.
              </p>
            </div>
          </div>

          {/* Holistic Solutions */}
          <div className="flex items-center gap-6">
            <img
              src={holisticSolution}
              alt="Holistic Solutions"
              className="w-14 sm:w-16 md:w-20 border-2 border-[#f0703a] rounded-full p-2"
            />
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Holistic Solutions
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Integrative wellness for complete mental health care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
