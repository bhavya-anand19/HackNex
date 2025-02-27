import { useState } from "react";
import React from "react";
const WomensHealthFaq = () => {
  const questions = [
    {
      question: "What are common women’s health issues?",
      answer:
        "Common women’s health issues include reproductive health problems, menstrual disorders, menopause symptoms, and conditions such as polycystic ovary syndrome (PCOS) and endometriosis.",
    },
    {
      question: "What is PCOS and how does it affect women?",
      answer:
        "Polycystic Ovary Syndrome (PCOS) is a hormonal disorder causing enlarged ovaries with small cysts on the outer edges. It can lead to irregular menstrual cycles, acne, weight gain, and fertility issues.",
    },
    {
      question: "How can women manage menstrual pain effectively?",
      answer:
        "Managing menstrual pain can involve using over-the-counter pain relievers, applying heat to the lower abdomen, practicing relaxation techniques, and ensuring regular exercise. If pain is severe, consulting a healthcare provider is recommended.",
    },
    {
      question: "What are the signs of menopause?",
      answer:
        "Signs of menopause include irregular periods, hot flashes, night sweats, mood changes, sleep problems, and vaginal dryness. These symptoms occur due to the decline in estrogen levels as women age.",
    },
    {
      question: "How can regular health checkups improve women's health?",
      answer:
        "Regular checkups, including Pap smears, mammograms, and bone density tests, help in early detection of health issues like cancer, osteoporosis, and reproductive problems, ensuring timely treatment and better outcomes.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-6 mt-20 sm:mx-auto padding-x">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-12 text-gray-800">
        Women's Health: Important Questions Answered
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

export default WomensHealthFaq;
