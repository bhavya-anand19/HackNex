import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Importing icons for the dropdown arrow

const faqData = {
  generic: [
    {
      question: "What is ReZen?",
      answer:
        "ReZen is an online platform for affordable, accessible, and personalized mental health care, offering therapy sessions, habit trackers, 24/7 support, and community engagement.",
    },
    {
      question: "How do I sign up on the ReZen platform?",
      answer:
        "You can sign up by visiting our website, clicking the 'Get Started' button or downloading our app, and filling out the registration form with your personal details.",
    },
    {
      question: "How old do I need to be to use ReZen’s services?",
      answer:
        "Our services are open to users aged 16 and above. For minors, guardian approval is required for therapy sessions.",
    },
    {
      question:
        "What makes ReZen different from other mental health platforms?",
      answer:
        "ReZen provides a holistic ecosystem by integrating therapy, tracking tools, community support, and medication delivery all under one roof.",
    },
  ],
  therapy: [
    {
      question: "What types of therapy are available?",
      answer:
        "ReZen offers video, voice, and chat therapy sessions with certified professionals. You can choose the type of session based on your preferences.",
    },
    {
      question: "How do I book a therapy session?",
      answer:
        "Log in to your account, go to the therapy section, choose a therapist and session type, and select a time slot that suits you.",
    },
    {
      question: "Are therapy sessions confidential?",
      answer:
        "Yes, all therapy sessions at ReZen are confidential and adhere to strict privacy protocols to protect your personal information.",
    },
  ],
  community: [
    {
      question: "How can I join the community events?",
      answer:
        "You can join our community events by accessing the 'Events' section on your personalized dashboard. We offer yoga, art therapy, and more.",
    },
    {
      question: "What is the ReZen community feed?",
      answer:
        "The community feed is a supportive social space where users can share experiences, find mentors, and connect with others on similar mental health journeys.",
    },
    {
      question: "Can I remain anonymous in the community?",
      answer:
        "Yes, users can participate in the community anonymously to ensure they feel safe while sharing their mental health journey.",
    },
  ],
  technical: [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
    },
    {
      question: "What should I do if I encounter a technical issue?",
      answer:
        "If you experience a technical issue, contact our support team at support@rezen.com or use our 24/7 chatbot for immediate assistance.",
    },
    {
      question: "Is ReZen compatible with mobile devices?",
      answer:
        "Yes, ReZen is fully responsive and works on both desktop and mobile devices for a seamless experience.",
    },
  ],
};

const FAQPage = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (section, index) => {
    if (openQuestion?.section === section && openQuestion?.index === index) {
      setOpenQuestion(null); // Close the question if clicked again
    } else {
      setOpenQuestion({ section, index });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6f2e4] via-[#f3cca7] to-[#ffbe69] py-24 md:py-32 font-sora padding-x">
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-10 md:mb-16 tracking-wide leading-tight">
          Frequently Asked Questions
        </h1>

        {/* FAQ Sections */}
        {Object.keys(faqData).map((section) => (
          <div key={section} className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#f0703a] mb-6 capitalize tracking-wide">
              {section}
            </h2>
            {faqData[section].map((item, index) => (
              <div
                key={index}
                className={`mb-6 p-6 rounded-xl transition-all duration-300 ${
                  openQuestion?.section === section &&
                  openQuestion?.index === index
                    ? "bg-gradient-to-br from-[#fff8f4] to-[#fde5d3] shadow-lg scale-105 border border-[#f0703a]"
                    : "bg-white shadow-md hover:shadow-lg hover:scale-[1.02]"
                } cursor-pointer`}
                onClick={() => toggleQuestion(section, index)}
              >
                {/* Question and Dropdown Icon */}
                <div className="flex justify-between items-center">
                  <span
                    className={`lg:text-lg font-medium ${
                      openQuestion?.section === section &&
                      openQuestion?.index === index
                        ? "text-[#f0703a]"
                        : "text-[#333]"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span>
                    {openQuestion?.section === section &&
                    openQuestion?.index === index ? (
                      <FiChevronUp className="text-[#f0703a] text-2xl transition-transform duration-300 transform rotate-180" />
                    ) : (
                      <FiChevronDown className="text-gray-400 text-2xl transition-transform duration-300" />
                    )}
                  </span>
                </div>

                {/* Answer with Smooth Expand Animation */}
                {openQuestion?.section === section &&
                  openQuestion?.index === index && (
                    <div className="mt-4 text-[#555] leading-relaxed text-base max-h-[250px] overflow-hidden transition-all duration-500 ease-in-out">
                      {item.answer}
                    </div>
                  )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
