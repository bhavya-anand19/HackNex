import React from "react";
import { useState } from "react";

const DepressionFaq = () => {
  const questions = [
    {
      question: "What is the difference between sadness and depression?",
      answer:
        "Sadness is a normal emotion often triggered by life events, while depression is a medical condition that affects mood, energy levels, and daily functioning over an extended period.",
    },
    {
      question: "What are the different symptoms of depression?",
      answer:
        "Symptoms of depression include prolonged sadness, loss of interest in activities, changes in appetite, fatigue, feelings of worthlessness, and difficulty concentrating.",
    },
    {
      question: "How to overcome depression?",
      answer:
        "Overcoming depression often requires a combination of therapy, medication, lifestyle changes, and support from loved ones. Seeking help from a mental health professional is crucial.",
    },
    {
      question: "What are the causes of depression?",
      answer:
        "Depression can be caused by a combination of genetic, biological, environmental, and psychological factors, including trauma, stress, and imbalances in brain chemistry.",
    },
    {
      question:
        "What is the difference between therapy, psychiatry, and self-care for depression?",
      answer:
        "Therapy focuses on talking to a mental health professional, psychiatry involves medical treatment and medication management, while self-care includes personal actions like exercise and mindfulness to improve mood.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-6 mt-20 sm:mx-auto padding-x">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-12 text-gray-800">
        Depression: Your Top Questions, Answered
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

export default DepressionFaq;
