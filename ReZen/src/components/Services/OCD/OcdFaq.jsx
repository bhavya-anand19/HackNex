import React from "react";
import { useState } from "react";

const OcdFaq = () => {
  const questions = [
    {
      question: "What is OCD?",
      answer:
        "Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by recurring, unwanted thoughts (obsessions) and/or repetitive behaviors (compulsions).",
    },
    {
      question: "What are the signs and symptoms of OCD?",
      answer:
        "Common symptoms of OCD include intrusive thoughts, repetitive behaviors, rituals, and an overwhelming need to perform certain actions to reduce anxiety.",
    },
    {
      question: "What are the types of OCD?",
      answer:
        "There are various types of OCD, including contamination OCD, symmetry OCD, checking OCD, and intrusive thoughts OCD.",
    },
    {
      question: "What are the causes of OCD?",
      answer:
        "OCD may be caused by genetic factors, abnormal brain structure or function, environmental stressors, or a history of trauma.",
    },
    {
      question: "What is the difference between obsessions and compulsions?",
      answer:
        "Obsessions are unwanted, distressing thoughts or urges, while compulsions are repetitive behaviors or rituals performed to ease anxiety caused by obsessions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-6 mt-20 sm:mx-auto padding-x">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-12 text-gray-800">
        Your questions about OCD, answered
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

export default OcdFaq;
