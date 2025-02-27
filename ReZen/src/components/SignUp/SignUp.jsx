import React from "react";
import { useState } from "react";
import signupImg from "../../assets/signup-image.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          name, // Corrected: Use name from state
          email: user.email,
        });
      }

      toast.success("Account created successfully");

      setTimeout(() => {
        navigate("/login");
      }, 200);
    } catch (error) {
      toast.error(error.message || "An error occurred while signing up");
    }
  };

  return (
    <div className="bg-[#faf6f4] min-h-screen flex items-center justify-center padding-x py-16">
      <div className="flex max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left: Image Section */}
        <div className="hidden md:flex w-1/2 bg-[#fef4ef] justify-center items-center">
          <img
            src={signupImg}
            alt="Signup Illustration"
            className="h-full w-full"
          />
        </div>

        {/* Right: Form Section */}
        <div className="w-full md:w-1/2 px-7 sm:px-12 py-8 sm:py-11 md:px-14 lg:px-18 xl:px-20 md:py-16 space-y-3">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-gray-800 md:mt-1 mb-10 md:mb-12"
            style={{ textShadow: "2px 2px 4px #ff8552" }}
          >
            Join ReZen
          </h1>

          <form
            className="space-y-3 md:space-y-5 lg:space-y-6"
            onSubmit={handleSignUp}
          >
            {/* Name Field */}
            <div className="space-y-2">
              <label
                className="block text-gray-700 text-sm md:text-base font-medium"
                htmlFor="name"
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
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                className="block text-gray-700 text-sm md:text-base font-medium"
                htmlFor="email"
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
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                className="block text-gray-700 text-sm md:text-base font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                name="password"
                className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0703a] placeholder:text-sm"
                placeholder="Choose a password"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label
                className="block text-gray-700 text-sm md:text-base font-medium"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                id="confirm-password"
                name="confirm-password"
                className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0703a] placeholder:text-sm"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#f0703a] text-white py-2 md:py-2.5 rounded-lg font-medium hover:bg-[#cc6235] transition duration-300"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm md:text-base mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#f0703a] font-medium hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
