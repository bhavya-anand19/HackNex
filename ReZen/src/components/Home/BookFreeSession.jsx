import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const BookSession = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [problem, setProblem] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateStep1 = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Valid email is required";
    if (!phone || !/^\d{10}$/.test(phone))
      newErrors.phone = "Valid phone number is required";
    if (!age || age <= 0) newErrors.age = "Valid age is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gender || !problem || !date || !time) {
      toast.error("Please fill in all fields");
      return;
    }

    const payload = {
      name,
      email,
      phone: phone.toString(),
      age: parseInt(age, 10).toString(),
      gender,
      problem,
      date: date.toString(),
      time: time.toString(),
    };

    try {
      const response = await fetch(
        "https://api.rezen.in/api/v1/webpoints/book_session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success(result.msg || "Session booked successfully!");
        setIsSubmitted(true);
      } else {
        toast.error(result.msg || "Failed to book session. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while booking the session.");
    }
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const minDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const timeOptions = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
  ];

  return (
    <div className="bg-[#faf6f4] min-h-screen flex items-center px-7 py-8 sm:py-11 padding-x md:py-16 justify-center padding-x">
      <Toaster
        position="top-center"
        toastOptions={{ duration: 3000 }}
        reverseOrder={false}
      />
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Form Section */}
        <div className="w-full  space-y-3">
          {isSubmitted ? (
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-[#f0703a]">
                Thank You!
              </h1>
              <p className="text-gray-600 mb-6">
                Your session has been booked successfully.
              </p>
              <button
                onClick={handleGoHome}
                className="w-full bg-[#f0703a] text-white py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-[#cc6235] transition duration-300"
              >
                Back to Home
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-sm md:text-base font-medium text-gray-500 mb-4 text-center">
                Step {step} of 2
              </h2>

              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
                Book Your Free Session
              </h1>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm md:text-base font-medium"
                      >
                        Full Name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0703a] placeholder:text-sm"
                        placeholder="Enter full name"
                        required
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm md:text-base font-medium"
                      >
                        Email Address
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0703a] placeholder:text-sm"
                        placeholder="you@example.com"
                        required
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 text-sm md:text-base font-medium"
                      >
                        Phone Number
                      </label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0703a] placeholder:text-sm"
                        placeholder="Enter your phone number"
                        required
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="age"
                        className="block text-gray-700 text-sm md:text-base font-medium"
                      >
                        Age
                      </label>
                      <input
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        type="number"
                        id="age"
                        name="age"
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0703a] placeholder:text-sm"
                        placeholder="Enter your age"
                        required
                      />
                      {errors.age && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.age}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full bg-[#f0703a] text-white py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-[#cc6235] transition duration-300"
                    >
                      Next
                    </button>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="space-y-2">
                      <label
                        htmlFor="gender"
                        className="block text-gray-700 text-sm md:text-base font-medium"
                      >
                        Gender
                      </label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        id="gender"
                        name="gender"
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0703a] placeholder:text-sm text-sm sm:text-base"
                        required
                      >
                        <option value="" disabled hidden>
                          Select your gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                        <option value="prefer-not-to-say">
                          Prefer not to say
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="problem"
                        className="block text-gray-700 text-sm md:text-base font-medium"
                      >
                        Problem Facing
                      </label>
                      <select
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        id="problem"
                        name="problem"
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0703a] placeholder:text-sm text-sm sm:text-base"
                        required
                      >
                        <option value="" disabled hidden>
                          Select your issue
                        </option>
                        <option value="depression">Depression</option>
                        <option value="anxiety">Anxiety</option>
                        <option value="ocd">OCD</option>
                        <option value="women-issues">Women Issues</option>
                        <option value="adhd">ADHD</option>
                        <option value="others">Others</option>
                        <option value="dont-know">Don't Know</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="date"
                        className="block text-gray-700 text-sm md:text-base font-medium"
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0703a] placeholder:text-sm text-sm sm:text-base"
                        required
                        min={minDate()}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="time"
                        className="block text-gray-700 text-sm md:text-base font-medium"
                      >
                        Preferred Time
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        id="time"
                        name="time"
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0703a] placeholder:text-sm text-sm sm:text-base"
                        required
                      >
                        <option value="" disabled hidden>
                          Select a time
                        </option>
                        {timeOptions.map((timeOption, index) => (
                          <option key={index} value={timeOption}>
                            {timeOption}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={handlePreviousStep}
                      className="w-full bg-gray-300 hover:bg-gray-400 sm:py-2.5 py-2 font-semibold rounded-lg"
                    >
                      Previous
                    </button>

                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-full bg-[#f0703a] text-white py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-[#cc6235] transition duration-300 mt-3"
                    >
                      Book Session
                    </button>
                  </>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookSession;
