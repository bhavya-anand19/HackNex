import React, { useState } from "react";
import toast from "react-hot-toast";
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

const BodyProblems = () => {
  const [selected, setSelected] = useState("anorexia");

  const data = {
    anorexia: {
      description:
        "Anorexia nervosa is an eating disorder characterized by weight loss and an intense fear of gaining weight.",
      symptoms: [
        "Extreme weight loss",
        "Distorted body image",
        "Preoccupation with food",
        "Intense fear of gaining weight",
        "Skipping meals or restricting intake",
        "Excessive exercise",
      ],
      myths: [
        {
          myth: "Only women suffer from anorexia",
          fact: "Anorexia affects all genders",
        },
        {
          myth: "You can tell someone has anorexia by their appearance",
          fact: "Anorexia is not always visible",
        },
      ],
    },
    bulimia: {
      description:
        "Bulimia nervosa is an eating disorder characterized by binge eating followed by purging to prevent weight gain.",
      symptoms: [
        "Binge eating followed by purging",
        "Feeling a lack of control over eating",
        "Excessive concern about body weight",
        "Using laxatives or diuretics",
        "Exercising excessively",
        "Fear of weight gain",
      ],
      myths: [
        {
          myth: "Bulimia is less serious than anorexia",
          fact: "Bulimia can be just as dangerous",
        },
        {
          myth: "Bulimics always vomit",
          fact: "Not all bulimics purge through vomiting",
        },
      ],
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 py-4 padding-x">
      <div className="w-full max-w-4xl md:py-14 lg:py-28">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center text-gray-800 mt-10 xl:mt-14">
          Body Health Issues
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Learn more about common body health issues and their related symptoms
          and myths.
        </p>

        {/* Button Group */}
        <div className="flex justify-center gap-4 mb-14">
          <button
            className={`px-4 py-2 rounded ${
              selected === "anorexia"
                ? "bg-[#ff6f61] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelected("anorexia")}
          >
            Anorexia
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selected === "bulimia"
                ? "bg-[#ff6f61] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelected("bulimia")}
          >
            Bulimia
          </button>
        </div>

        {/* Content Box */}
        <div className="p-8 md:px-16 md:py-10 lg:px-20 lg:py-14 border rounded-lg bg-white shadow-lg max-w-full mx-auto space-y-6">
          {/* Box Title and Description */}
          <h2 className="text-lg lg:text-xl font-bold text-[#ff6f61]">
            {selected === "anorexia" ? "Anorexia" : "Bulimia"}
          </h2>
          <p className="text-sm text-gray-700">{data[selected].description}</p>

          {/* Symptoms and Myths & Facts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Symptoms Column */}
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-sm font-semibold mb-3">Symptoms</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                {data[selected].symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </div>

            {/* Myths and Facts Column */}
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-sm font-semibold mb-3">Myths & Facts</h3>
              <ul className="space-y-2 text-sm">
                {data[selected].myths.map((item, index) => (
                  <li key={index}>
                    <strong>Myth:</strong> {item.myth} <br />
                    <strong>Fact:</strong> {item.fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Centered Button */}
          <div className="flex justify-center py-4 pt-8">
            <button
              onClick={HandleButton}
              className="bg-[#fe5748] text-white px-5 py-3 md:text-base text-sm font-semibold rounded-md hover:bg-[#db2c1c] transition-all duration-300"
            >
              Explore Treatment Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyProblems;
