import React from "react";
import { useState } from "react";

const AnxietyFaq = () => {
  const questions = [
    {
      question: "What is an anxiety disorder?",
      answer:
        "An anxiety disorder is a mental health condition characterized by excessive worry, fear, or nervousness, which can interfere with daily life.",
    },
    {
      question: "What are the types of anxiety disorders?",
      answer:
        "Common types of anxiety disorders include Generalized Anxiety Disorder (GAD), Panic Disorder, Social Anxiety Disorder, and Phobias.",
    },
    {
      question: "What causes anxiety disorders?",
      answer:
        "Anxiety disorders can be caused by a combination of genetic factors, brain chemistry, environmental stress, and traumatic life events.",
    },
    {
      question: "Is it possible to prevent an anxiety disorder?",
      answer:
        "While it may not be possible to prevent anxiety disorders completely, managing stress, seeking therapy, and adopting healthy habits can help reduce the risk.",
    },
    {
      question:
        "What is the difference between therapy, psychiatry, and self-care for anxiety?",
      answer:
        "Therapy involves talking to a mental health professional to address anxiety. Psychiatry may include medication for managing symptoms, while self-care includes lifestyle changes like exercise and mindfulness.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-6 mt-20 sm:mx-auto padding-x">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-12 text-gray-800">
        Your questions about Anxiety, answered
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

export default AnxietyFaq;
