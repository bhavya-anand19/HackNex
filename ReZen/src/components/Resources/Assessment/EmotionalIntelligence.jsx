import React, { useState } from "react";

const emotionalIntelligenceTestQuestions = [
  "I am aware of my emotions as I experience them.",
  "I know how my emotions influence my decisions.",
  "I understand why I behave the way I do in different situations.",
  "I can easily recognize the emotions of others.",
  "I am good at managing my stress.",
  "I can regulate my emotions when I need to.",
  "I handle difficult situations with calm and composure.",
  "I am comfortable talking about my emotions.",
  "I empathize with others’ feelings.",
  "I stay positive even in challenging situations.",
  "I find it easy to understand the emotions of those around me.",
];

const options = [
  "Definitely agree",
  "Slightly agree",
  "Slightly disagree",
  "Definitely disagree",
];

function EmotionalIntelligenceTest() {
  const [answers, setAnswers] = useState(
    Array(emotionalIntelligenceTestQuestions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState("");

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
    setError("");

    if (currentQuestionIndex + 1 < emotionalIntelligenceTestQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const calculateScore = () => {
    return answers.reduce((score, answer) => {
      return score + (answer !== null ? 3 - answer : 0);
    }, 0);
  };

  const handleSubmit = () => {
    const score = calculateScore();
    let resultMessage = "";
    if (score <= 11) resultMessage = "Low emotional intelligence.";
    else if (score <= 22) resultMessage = "Moderate emotional intelligence.";
    else resultMessage = "High emotional intelligence.";

    setResult(resultMessage);
    setSubmitted(true);
  };

  const handleNext = () => {
    if (answers[currentQuestionIndex] === null) {
      setError("Please select an answer before proceeding.");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setError("");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setError("");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 sm:py-24 lg:py-36 padding-x">
      <div className="bg-slate-100 shadow-lg p-6 sm:p-8 lg:p-12 rounded-lg max-w-xl sm:max-w-2xl lg:max-w-5xl w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center text-[#f0703a] hover:scale-105 transform transition-all">
          Emotional Intelligence Test
        </h1>

        <div className="w-full bg-gray-300 rounded-full h-2 sm:h-3 mb-6 sm:mb-8">
          <div
            className="bg-[#f0703a] h-2 sm:h-3 rounded-full transition-all"
            style={{
              width: `${
                (answers.filter((a) => a !== null).length /
                  emotionalIntelligenceTestQuestions.length) *
                100
              }%`,
            }}
          ></div>
        </div>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          Question {currentQuestionIndex + 1} of{" "}
          {emotionalIntelligenceTestQuestions.length}
        </p>

        {!submitted ? (
          <>
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <h2 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-gray-800">
                {emotionalIntelligenceTestQuestions[currentQuestionIndex]}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                {options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    onClick={() =>
                      handleAnswerChange(currentQuestionIndex, optionIndex)
                    }
                    className={`cursor-pointer p-3 sm:p-4 text-center rounded-lg transition-all border-2 ${
                      answers[currentQuestionIndex] === optionIndex
                        ? "bg-[#f0703a] text-white"
                        : "bg-white text-gray-900 hover:bg-[#f0703a] hover:text-white"
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
              {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
            </div>

            <div className="flex justify-between mt-6 sm:mt-8">
              <button
                onClick={handlePrevious}
                className={`text-center py-2 px-6 sm:py-2.5 sm:px-8 font-semibold rounded-lg ${
                  currentQuestionIndex === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#f0703a] text-white hover:bg-[#cc6235] transition-all"
                }`}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              {currentQuestionIndex + 1 <
              emotionalIntelligenceTestQuestions.length ? (
                <button
                  onClick={handleNext}
                  className="bg-[#f0703a] text-white text-center py-2 px-6 sm:py-2.5 sm:px-8 font-semibold rounded-lg hover:bg-[#cc6235] transition-all"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-[#f0703a] text-white text-center py-2 px-6 sm:py-2.5 sm:px-8 font-semibold rounded-lg hover:bg-[#cc6235] transition-all"
                >
                  Submit
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Your Results:
            </h2>
            <p className="text-base sm:text-lg">{result}</p>
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentQuestionIndex(0);
                  setAnswers(
                    Array(emotionalIntelligenceTestQuestions.length).fill(null)
                  );
                }}
                className="bg-[#f0703a] text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-[#cc6235] transition-all"
              >
                Retake Test
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-gray-800 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-gray-700 transition-all"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmotionalIntelligenceTest;
