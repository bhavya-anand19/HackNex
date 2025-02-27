import React, { useState } from "react";

const bulimiaTestQuestions = [
  "Do you have a regular daily eating pattern?",
  "Would you say you are a strict dieter?",
  "If you break your diet, do you feel like a failure?",
  "Do you count calories all the time, regardless of being on a diet?",
  "Do you ever fast for a whole day as a way of controlling your weight?",
  "Does your eating pattern severely disrupt your life?",
  "Would you say food, or thoughts of food, dominates your life?",
  "Do you ever eat so much that you become uncomfortably full?",
  "Would you say you can control your eating?",
  "Do you worry that you have very little control over what you eat?",
  "Do you ever experience overpowering urges to binge eat?",
  "Does the thought of becoming fat terrify you?",
  "When you feel anxious, do you tend to eat?",
  "Do you turn to food as a comfort, for instance when feeling sad or anxious?",
  "Do you ever eat large amounts of food, very quickly, outside of meal times?",
  "Do you ever binge on large amounts of food?",
  "Are you ashamed of your eating habits?",
  "Are you able to leave food on your plate, if you are full?",
  "Do you ever lie about how much you have eaten?",
  "Does the amount you eat depend on how hungry you are?",
  "Do you feel miserable following binges?",
  "Do you ever feel extreme guilt following a period of overeating?",
  "Do you ever eat in secret?",
  "Do you eat ‘normally’ in front of others, but then binge on your own?",
];

const options = ["Yes", "No"];

function BulimiaTest() {
  const [answers, setAnswers] = useState(
    Array(bulimiaTestQuestions.length).fill(null)
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

    if (currentQuestionIndex + 1 < bulimiaTestQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const calculateScore = () => {
    const yesAnswers = answers.filter((answer) => answer === 0).length;
    let resultMessage = "";
    if (yesAnswers >= 15)
      resultMessage = "You may be at high risk for bulimia.";
    else if (yesAnswers >= 7)
      resultMessage = "You may have a moderate risk for bulimia.";
    else resultMessage = "Low risk for bulimia.";
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
      <div className="bg-slate-100 shadow-lg p-6 sm:p-10 md:p-12 rounded-lg max-w-5xl w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 md:mb-16 text-center text-[#f0703a] hover:scale-105 transform transition-all">
          Are You At Risk for Bulimia?
        </h1>

        <div className="w-full bg-gray-300 rounded-full h-2 sm:h-3 mb-6 sm:mb-8">
          <div
            className="bg-[#f0703a] h-2 sm:h-3 rounded-full transition-all"
            style={{
              width: `${
                (answers.filter((a) => a !== null).length /
                  bulimiaTestQuestions.length) *
                100
              }%`,
            }}
          ></div>
        </div>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
          Question {currentQuestionIndex + 1} of {bulimiaTestQuestions.length}
        </p>

        {!submitted ? (
          <>
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <h2 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-gray-800">
                {bulimiaTestQuestions[currentQuestionIndex]}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {options.map((option, optionIndex) => (
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

            <div className="flex justify-between mt-6 sm:mt-8">
              <button
                onClick={handlePrevious}
                className={`text-center py-2 px-4 sm:py-2.5 sm:px-8 font-semibold rounded-lg ${
                  currentQuestionIndex === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#f0703a] text-white hover:bg-[#cc6235] transition-all"
                }`}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              {currentQuestionIndex + 1 < bulimiaTestQuestions.length ? (
                <button
                  onClick={handleNext}
                  className="bg-[#f0703a] text-white text-center py-2 px-4 sm:py-2.5 sm:px-8 font-semibold rounded-lg hover:bg-[#cc6235] transition-all"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-[#f0703a] text-white text-center py-2 px-4 sm:py-2.5 sm:px-8 font-semibold rounded-lg hover:bg-[#cc6235] transition-all"
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
                  setAnswers(Array(bulimiaTestQuestions.length).fill(null));
                }}
                className="bg-[#f0703a] text-white py-2 px-4 sm:py-2.5 sm:px-6 rounded-lg hover:bg-[#cc6235] transition-all"
              >
                Retake Test
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-gray-800 text-white py-2 px-4 sm:py-2.5 sm:px-6 rounded-lg hover:bg-gray-700 transition-all"
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

export default BulimiaTest;
