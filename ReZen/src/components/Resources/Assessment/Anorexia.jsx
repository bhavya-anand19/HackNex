import React, { useState } from "react";

const anorexiaTestQuestions = [
  "I am terrified of being overweight",
  "I avoid eating when I am hungry",
  "I have eating binges where I feel I might not be able to stop",
  "I cut my food into small pieces before eating",
  "I know the calorie content of everything I eat",
  "I avoid foods high in carbohydrates",
  "Others have said to me to eat more",
  "I have made myself vomit after eating",
  "I feel extreme guilt after eating",
  "I am preoccupied by my desire to be thinner",
  "I think about burning up calories when I exercise",
  "Other people think I am too thin",
  "I am preoccupied with the thought of having fat on my body",
  "I take longer to eat meals than other people do",
  "I avoid foods that are sugary",
  "I eat diet foods",
  "I feel that food controls my life",
  "I am self-controlled around food",
  "I feel that others pressurize me to eat",
  "I give a lot of time and thought to food",
  "I feel uncomfortable if I eat sweets",
  "I engage in dieting behavior",
  "I like my stomach to be empty",
  "I have the impulse to vomit after eating",
  "I like to try new, rich foods",
];

const anorexiaOptions = [
  "Definitely agree",
  "Slightly agree",
  "Slightly disagree",
  "Definitely disagree",
];

function AnorexiaTest() {
  const [answers, setAnswers] = useState(
    Array(anorexiaTestQuestions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState("");

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
    setError(""); // Clear error when a valid answer is selected

    // Move to the next question automatically
    if (currentQuestionIndex + 1 < anorexiaTestQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const calculateAnorexiaScore = () => {
    return answers.reduce((score, answer) => {
      return score + (answer !== null ? 3 - answer : 0);
    }, 0);
  };

  const handleSubmit = () => {
    const score = calculateAnorexiaScore();
    let resultMessage = "";
    if (score <= 21) resultMessage = "Low risk of anorexia.";
    else if (score <= 42) resultMessage = "Moderate risk of anorexia.";
    else resultMessage = "High risk of anorexia. Seek professional help.";

    setResult(resultMessage);
    setSubmitted(true);
  };

  const handleNext = () => {
    if (answers[currentQuestionIndex] === null) {
      setError("Please select an answer before proceeding.");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setError(""); // Clear error when moving to the next question
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setError(""); // Clear error when going back
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 sm:py-24 lg:py-36 padding-x">
      <div className="bg-slate-100 shadow-lg p-6 sm:p-8 lg:p-12 rounded-lg max-w-xl sm:max-w-2xl lg:max-w-5xl w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-[#f0703a] hover:scale-105 transform transition-all">
          Anorexia Test
        </h1>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-2 sm:h-3 mb-6 sm:mb-8">
          <div
            className="bg-[#f0703a] h-2 sm:h-3 rounded-full transition-all"
            style={{
              width: `${
                (answers.filter((a) => a !== null).length /
                  anorexiaTestQuestions.length) *
                100
              }%`,
            }}
          ></div>
        </div>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          Question {currentQuestionIndex + 1} of {anorexiaTestQuestions.length}
        </p>

        {!submitted ? (
          <>
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <h2 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-gray-800">
                {anorexiaTestQuestions[currentQuestionIndex]}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                {anorexiaOptions.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    onClick={() =>
                      handleAnswerChange(currentQuestionIndex, optionIndex)
                    }
                    className={`cursor-pointer p-3 sm:p-4 w-full text-center rounded-lg transition-all border-2 ${
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

            {/* Navigation Buttons */}
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
              {currentQuestionIndex + 1 < anorexiaTestQuestions.length ? (
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
            <p className="text-sm sm:text-lg">{result}</p>
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentQuestionIndex(0);
                  setAnswers(Array(anorexiaTestQuestions.length).fill(null));
                }}
                className="bg-[#f0703a] text-white py-2 px-6 rounded-lg hover:bg-[#cc6235] transition-all"
              >
                Retake Test
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-all"
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

export default AnorexiaTest;
