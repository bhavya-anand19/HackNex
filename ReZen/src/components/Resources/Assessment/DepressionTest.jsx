import React, { useState } from "react";

const depressionTestQuestions = [
  "I feel overwhelmingly sad at times",
  "When I think of the future I feel hopeless",
  "I feel like a complete failure",
  "I get a lot of satisfaction / joy from doing things",
  "I feel guilty about something most of the time",
  "I feel like I am being punished",
  "I feel disappointed (even disgusted) with myself",
  "The bad things in my life aren’t all my fault",
  "I am often on the brink of tears or cry",
  "I feel irritated and annoyed by things in my life",
  "I am very interested in other people’s lives and like to listen to them",
  "I find it easy to make decisions, big and small",
  "I think I am unattractive or ugly",
  "I find it really hard to do anything, especially work",
  "My sleep patterns have been really disrupted",
  "I am so tired I don’t have the energy to do anything",
  "My appetite has changed a lot",
  "I have lost a lot of weight",
  "I am very concerned, even preoccupied, with my physical health",
  "I am not interested in sexual relations at all",
  "I have thought about ending my life",
];

const options = [
  "Definitely agree",
  "Slightly agree",
  "Slightly disagree",
  "Definitely disagree",
];

function DepressionTest() {
  const [answers, setAnswers] = useState(
    Array(depressionTestQuestions.length).fill(null)
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

    if (currentQuestionIndex + 1 < depressionTestQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const calculateScore = () => {
    const yesAnswers = answers.filter((answer) => answer === 0).length;
    let resultMessage = "";
    if (yesAnswers >= 15)
      resultMessage = "You may be at high risk for depression.";
    else if (yesAnswers >= 7)
      resultMessage = "You may have a moderate risk for depression.";
    else resultMessage = "Low risk for depression.";
    return resultMessage;
  };

  const handleSubmit = () => {
    const riskAssessment = calculateScore();
    setResult(riskAssessment);
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
          Depression Risk Test
        </h1>

        <div className="w-full bg-gray-300 rounded-full h-2 sm:h-3 mb-6 sm:mb-8">
          <div
            className="bg-[#f0703a] h-2 sm:h-3 rounded-full transition-all"
            style={{
              width: `${
                (answers.filter((a) => a !== null).length /
                  depressionTestQuestions.length) *
                100
              }%`,
            }}
          ></div>
        </div>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          Question {currentQuestionIndex + 1} of{" "}
          {depressionTestQuestions.length}
        </p>

        {!submitted ? (
          <>
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <h2 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-gray-800">
                {depressionTestQuestions[currentQuestionIndex]}
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
              {currentQuestionIndex + 1 < depressionTestQuestions.length ? (
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
                  setAnswers(Array(depressionTestQuestions.length).fill(null));
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

export default DepressionTest;
