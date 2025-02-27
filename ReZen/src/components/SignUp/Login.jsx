import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import loginImg from "../../assets/Login-img.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [loginInput, setLoginInput] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, loginInput, password);
      console.log("User logged in successfully.");
      toast.success("User logged in successfully.");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error(error.message); // Show specific Firebase error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf6f4] padding-x py-16">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex">
        {/* Left: Graphic Section */}
        <div className="hidden md:flex w-1/2 bg-[#fef4ef] justify-center items-center">
          <img
            src={loginImg}
            alt="Login Illustration"
            className="h-full w-full"
          />
        </div>
        {/* Right: Form Section */}
        <div className="w-full md:w-1/2 px-7 sm:px-12 py-8 sm:py-11 md:px-14 lg:px-18 xl:px-20 md:py-16">
          <h1
            className="text-2xl md:text-3xl font-extrabold md:mb-4 mb-2 text-gray-800 text-center mt-1"
            style={{ textShadow: "2px 2px 4px #ff8552" }}
          >
            Welcome Back!
          </h1>
          <p className="text-gray-500 mb-10 md:mb-16 text-center">
            Login to your account and continue your journey with us.
          </p>

          {/* Login Form */}
          <form className="space-y-5 md:space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label
                className="block text-gray-700 text-sm md:text-base font-medium"
                htmlFor="loginInput"
              >
                Username or Email
              </label>
              <input
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
                type="text"
                id="loginInput"
                name="loginInput"
                className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0703a] focus:border-transparent placeholder:text-sm"
                placeholder="Enter your username or email"
                required
              />
            </div>

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
                className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0703a] focus:border-transparent placeholder:text-sm"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-[#f0703a] text-white py-2 md:py-2.5 rounded-lg font-semibold shadow-md hover:bg-[#cc6235] transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm md:text-base mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#f0703a] font-medium hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
