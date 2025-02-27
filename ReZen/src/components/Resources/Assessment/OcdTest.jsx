import React, { useState } from "react";

const ocdTestQuestions = [
  "I experience unwanted thoughts repeatedly, and I am not able to stop them.",
  "I have the urge to carry out certain actions repeatedly in order to relieve my anxiety.",
  "I am uncomfortable when items in my surroundings are not arranged as they should be.",
  "I rearrange items in my surroundings till they are perfectly placed.",
  "I worry about getting contaminated from unclean surfaces.",
  "It is compulsory for me to repeatedly and thoroughly clean myself, sometimes even when I simply feel unclean.",
  "I experience uncontrollable urges to check electrical appliances/gas stoves/locks and so on.",
  "I get forbidden thoughts/images (sexual, hostile, and violent) resulting in guilt.",
  "I feel the need to absolve myself of guilt-inducing thoughts/images by doing something to undo them.",
  "The thought of me engaging in blasphemous thoughts/actions worries me.",
  "I feel the urge to pray and devote myself to religious activity to make amends for my sins.",
  "The possible uncertainty about a situation is unsettling for me.",
  "I feel the need to repeatedly ask others for assurance about events I have doubts about.",
  "I experience remarkable distress as a result of the repetitive, unwanted thoughts and urges.",
  "I am unable to ignore the intrusive thoughts and/or stop myself from engaging in repetitive actions.",
  "I avoid certain objects or situations out of worry of getting unwanted thoughts leading to repetitive behavior.",
];

const ocdOptions = [
  "Definitely agree",
  "Slightly agree",
  "Slightly disagree",
  "Definitely disagree",
];

function OcdTest() {
  const [answers, setAnswers] = useState(
    Array(ocdTestQuestions.length).fill(null)
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

    if (currentQuestionIndex + 1 < ocdTestQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const calculateOCDScore = () => {
    return answers.reduce((score, answer) => {
      return score + (answer !== null ? 3 - answer : 0);
    }, 0);
  };

  const handleSubmit = () => {
    const score = calculateOCDScore();
    let resultMessage = "";
    if (score <= 21) resultMessage = "Low risk of OCD.";
    else if (score <= 42) resultMessage = "Moderate risk of OCD.";
    else resultMessage = "High risk of OCD. Seek professional help.";

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
          OCD Test
        </h1>

        <div className="w-full bg-gray-300 rounded-full h-2 sm:h-3 mb-6 sm:mb-8">
          <div
            className="bg-[#f0703a] h-2 sm:h-3 rounded-full transition-all"
            style={{
              width: `${
                (answers.filter((a) => a !== null).length /
                  ocdTestQuestions.length) *
                100
              }%`,
            }}
          ></div>
        </div>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          Question {currentQuestionIndex + 1} of {ocdTestQuestions.length}
        </p>

        {!submitted ? (
          <>
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <h2 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-gray-800">
                {ocdTestQuestions[currentQuestionIndex]}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                {ocdOptions.map((option, optionIndex) => (
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
              {currentQuestionIndex + 1 < ocdTestQuestions.length ? (
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
                  setAnswers(Array(ocdTestQuestions.length).fill(null));
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

export default OcdTest;
