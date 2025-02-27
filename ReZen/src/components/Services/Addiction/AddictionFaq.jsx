import React from "react";
import { useState } from "react";

const AddictionFaq = () => {
  const questions = [
    {
      question: "What is Alcohol Addiction?",
      answer:
        "Alcohol addiction, also known as alcoholism, is a chronic disease characterized by an inability to control alcohol consumption despite negative consequences.",
    },
    {
      question: "What are the causes of Alcohol Addiction?",
      answer:
        "Causes of alcohol addiction include genetic predisposition, psychological factors, environmental influences, and social pressures.",
    },
    {
      question: "What are the stages of Alcohol Addiction?",
      answer:
        "Alcohol addiction progresses through stages, including experimentation, regular use, risky use, dependence, and full addiction.",
    },
    {
      question: "What are the main signs & symptoms of Alcohol Addiction?",
      answer:
        "Symptoms include cravings for alcohol, inability to limit drinking, withdrawal symptoms, neglecting responsibilities, and continued use despite problems.",
    },
    {
      question:
        "Which mental health condition most commonly co-occurs with Alcohol Addiction?",
      answer:
        "Depression is one of the most common mental health conditions that co-occurs with alcohol addiction, often leading to a vicious cycle of both conditions worsening.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-6 mt-20 sm:mx-auto padding-x">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-12 text-gray-800">
        Alcohol Use Disorder: Common Questions and Answers
      </h2>

      {questions.map((item, index) => (
        <div
          key={index}
          className="my-7 py-1 border border-gray-300 rounded-lg"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-4 text-base font-semibold text-gray-700 flex justify-between items-center pr-8"
          >
            {item.question}
            <span
              className={`transform transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <svg
                className="w-5 h-5 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4 text-sm text-gray-600">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AddictionFaq;
