import React from "react";
import { useState } from "react";

const SocialAnxietyFaq = () => {
  const questions = [
    {
      question: "What is Social Anxiety?",
      answer:
        "Social anxiety is a condition where individuals feel intense fear or discomfort in social situations, leading to avoidance and distress.",
    },
    {
      question:
        "What is the difference between shyness and Social Anxiety disorder?",
      answer:
        "Shyness is a personality trait where individuals feel nervous in certain social situations, but Social Anxiety disorder is a medical condition that causes overwhelming fear and avoidance, severely impacting daily life.",
    },
    {
      question: "What are the main signs and symptoms of Social Anxiety?",
      answer:
        "Symptoms include excessive self-consciousness, fear of being judged, avoiding social situations, physical symptoms like sweating and trembling, and difficulty speaking in groups.",
    },
    {
      question: "How to manage Social Anxiety?",
      answer:
        "Managing Social Anxiety often involves therapy, such as Cognitive Behavioral Therapy (CBT), practicing relaxation techniques, gradual exposure to feared situations, and sometimes medications prescribed by a healthcare professional.",
    },
    {
      question:
        "How do therapy & psychiatry help in treating Social Anxiety disorder?",
      answer:
        "Therapy, especially CBT, helps individuals identify and change negative thought patterns. Psychiatry can offer medications to manage anxiety symptoms, providing a holistic treatment plan.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-6 mt-20 sm:mx-auto padding-x">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-12 text-gray-800">
        Your questions about Social Anxiety, answered
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

export default SocialAnxietyFaq;
