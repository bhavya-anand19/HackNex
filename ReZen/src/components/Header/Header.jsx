import React from "react";
import { useState, useEffect, useRef } from "react";
import logo from "../../assets/Logo.svg";
import { FaChevronDown, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../../index.css";
import toast, { Toaster } from "react-hot-toast";
import "../../index.css";
import { useAuth } from "../hooks/useAuth"; // Import useAuth hook
import { auth } from "../firebase";

const handleButtons = () => {
  // Displaying a custom toast notification
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">
              Feature Coming Soon!
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-darker hover:text-darkest focus:outline-none focus:ring-2 focus:ring-darker"
        >
          Close
        </button>
      </div>
    </div>
  ));
};

const Navbar = () => {
  const { user, loading } = useAuth();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  let dropdownTimer = null;

  // Toggle dropdowns: only one at a time can be open
  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null); // Close if already open
    } else {
      setActiveDropdown(dropdown); // Open the clicked dropdown
    }
  };

  const handleMouseEnter = (dropdown) => {
    clearTimeout(dropdownTimer);
    setActiveDropdown(dropdown); // Open the hovered dropdown
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      setActiveDropdown(null); // Close after delay
    }, 200); // Timeout for smooth transition
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

   useEffect(() => {
    // Listen for authentication changes globally
    const unsubscribe = auth.onAuthStateChanged(() => {
      // Force re-render when user logs in/out
      setIsOpen(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out from Firebase
      navigate("/"); // Redirect to home after logout
      setIsOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const dropdownAnimation = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{ duration: 3000 }}
        reverseOrder={false}
      />
      <nav className="bg-white font-sora">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex padding-x justify-between items-center py-6 md:py-7"
        >
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} className="h-9 md:h-12 xl:h-14" alt="Logo" />
          </Link>

          {/* Hamburger for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="relative text-xl sm:text-2xl md:text-3xl text-[#cc6235]"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Nav Links for Large Screens */}
          <div className="hidden lg:flex lg:items-center lg:space-x-3 xl:space-x-5 justify-end pl-5">
            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("about")}
                className="flex items-center text-gray-600 hover:text-[#f0703a] lg:text-sm xl:text-base font-semibold whitespace-nowrap"
              >
                About Us
                <FaChevronDown
                  className={`ml-1 transform transition-transform duration-300 ${
                    activeDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    variants={dropdownAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute bg-white shadow-lg border mt-2 rounded-lg w-56 p-4 space-y-3 text-base transition-opacity duration-200 ease-in-out z-50"
                  >
                    <Link to="/">
                      <span className="block px-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                        Home
                      </span>
                    </Link>
                    <Link to="/team">
                      <span className="block px-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                        Team
                      </span>
                    </Link>
                    <Link to="/faq">
                      <span className="block px-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                        FAQs
                      </span>
                    </Link>

                    <Link to="/contact-us">
                      <span className="block px-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                        Contact Us
                      </span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center text-gray-700 hover:text-[#f0703a] font-semibold lg:text-sm xl:text-base"
              >
                Services
                <FaChevronDown
                  className={`ml-1 transform transition-transform duration-300 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    variants={dropdownAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute bg-white border shadow-lg mt-2 rounded-lg w-[550px] p-8 text-base transition-opacity duration-200 ease-in-out z-50 flex"
                  >
                    <div className="w-5/12 border-r pr-6 flex flex-col justify-start">
                      <h3 className="text-gray-400 text-xs font-semibold uppercase mb-4">
                        Our Services
                      </h3>
                      <Link to="/depression">
                        <span className="block pl-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          Depression
                        </span>
                      </Link>
                      <Link to="/addiction">
                        <span className="block pl-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          Addiction
                        </span>
                      </Link>
                      <Link to="/anxiety">
                        <span className="block pl-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          Anxiety
                        </span>
                      </Link>
                      <Link to="/ocd">
                        <span className="block pl-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          OCD
                        </span>
                      </Link>
                      <Link to="/women-problems">
                        <span className="block pl-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          Women Problems
                        </span>
                      </Link>
                      <Link to="/social-anxiety">
                        <span className="block pl-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          Social Anxiety
                        </span>
                      </Link>
                    </div>
                    <div className="w-7/12 pl-6 flex flex-col justify-start">
                      <h3 className="text-gray-400 text-xs font-semibold uppercase mb-4">
                        Partners
                      </h3>
                      <h4 className="text-gray-400 text-xs font-semibold uppercase mb-2">
                        For Organisations
                      </h4>
                      <span className="block pl-4 py-3 text-gray-600 cursor-pointer hover:text-[#f0703a] hover:font-bold">
                        Employee Well-being Programme
                      </span>
                      <span className="block pl-4 py-3 text-gray-600 cursor-pointer hover:text-[#f0703a] hover:font-bold">
                        Our Approach & Offerings
                      </span>
                      <span className="block pl-4 py-3 text-gray-600 cursor-pointer hover:text-[#f0703a] hover:font-bold">
                        Corporate Webinars
                      </span>
                      <h4 className="text-gray-400 text-xs font-semibold uppercase mt-4 mb-2">
                        Colleges and Universities
                      </h4>
                      <span className="block pl-4 py-3 text-gray-600 cursor-pointer hover:text-[#f0703a] hover:font-bold">
                        College Well-being Programme
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("resources")}
                className="flex items-center text-gray-700 hover:text-[#f0703a] lg:text-sm xl:text-base font-semibold"
              >
                Resources
                <FaChevronDown
                  className={`ml-1 transform transition-transform duration-300 ${
                    activeDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "resources" && (
                  <motion.div
                    variants={dropdownAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute bg-white shadow-lg border mt-2 rounded-lg w-56 p-4 space-y-3 text-base transition-opacity duration-200 ease-in-out z-50"
                  >
                    <Link to="/all-resources">
                      <span className="block px-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                        All Resources
                      </span>
                    </Link>
                    <Link to="/blogs">
                      <span className="block px-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                        Blogs
                      </span>
                    </Link>
                    <Link to="/music">
                      <span className="block px-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                        Music
                      </span>
                    </Link>
                    <Link to="/videos">
                      <span className="block px-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                        Videos
                      </span>
                    </Link>
                    <Link to="/assessments">
                      <span className="block px-4 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                        Assessment
                      </span>
                    </Link>
                    <button onClick={handleButtons}>
                      <span className="block px-4 pb-2 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                        Exercises
                      </span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Experts Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("experts")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("experts")}
                className="flex items-center text-gray-700 hover:text-[#f0703a] lg:text-sm xl:text-base font-semibold"
              >
                Experts
                <FaChevronDown
                  className={`ml-1 transform transition-transform duration-300 ${
                    activeDropdown === "experts" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "experts" && (
                  <motion.div
                    variants={dropdownAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute bg-white shadow-lg border mt-2 rounded-lg w-56 p-4 space-y-3 text-base transition-opacity duration-200 ease-in-out z-50"
                  >
                    <span className="block px-4 py-3 text-gray-600 cursor-pointer hover:text-[#f0703a] hover:font-bold">
                      Therapists
                    </span>

                    <span className="block px-4 py-3 text-gray-600 cursor-pointer hover:text-[#f0703a] hover:font-bold">
                      Psychiatrists
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/chatbot"
              className="text-gray-700 hover:text-[#f0703a] font-semibold lg:text-sm xl:text-base"
            >
              Chatbot
            </Link>

            {/* Login button */}
            <div className="flex items-center lg:space-x-3 xl:space-x-5 relative">
              {/* Login Button */}
              {!user ? (
                <Link
                  to="/signup"
                  className="px-3 py-2 text-sm xl:px-5 xl:text-base font-semibold text-center
          bg-gradient-to-r from-[#f0703a] to-[#f28850] text-white rounded
          hover:bg-darker hover:scale-105 transition"
                >
                  Login
                </Link>
              ) : (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center space-x-2 px-3 py-2 text-sm xl:text-base font-semibold text-[#f0703a] hover:text-[#fa804b] transition"
                  >
                    <FaUserCircle className="text-xl xl:text-2xl" />
                    <span>Welcome, {user.name}!</span>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-lg overflow-hidden"
                    >
                      <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition text-medium"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-[#f0703a] hover:bg-gray-100 transition text-medium"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu */}

        {mobileMenuOpen && (
          <div>
            <div
              className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40 overflow-auto"
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveDropdown(null); // Close dropdowns when clicking outside
              }}
            />
            {/* Navbar Content */}
            <div className="lg:hidden bg-white shadow-lg w-2/3 sm:w-1/2 md:w-2/5 h-screen fixed top-0 right-0 z-50">
              <div className="lg:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="absolute top-8 right-7 text-xl sm:text-2xl md:text-3xl text-[#cc6235] focus:outline-none"
                >
                  {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

              <ul className="flex flex-col space-y-8 md:space-y-10  py-8 px-6 mt-14 md:mt-20">
                {/* About us */}
                <li className="text-left">
                  <button
                    onClick={() => toggleDropdown("about")}
                    className="text-gray-700 hover:text-[#f0703a] font-semibold flex items-center w-full"
                  >
                    About Us
                    <FaChevronDown
                      className={`ml-1 transform transition-transform duration-300 ${
                        activeDropdown === "about" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "about" && (
                    <div className="mt-1 text-sm font-semibold">
                      <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                        <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          Home
                        </span>
                      </Link>
                      <Link to="/team" onClick={() => setMobileMenuOpen(false)}>
                        <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          Team
                        </span>
                      </Link>
                      <Link to="/faq" onClick={() => setMobileMenuOpen(false)}>
                        <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          FAQs
                        </span>
                      </Link>
                      <Link
                        to="/contact-us"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          Contact Us
                        </span>
                      </Link>
                    </div>
                  )}
                </li>

                {/* Services */}
                <li className="text-left">
                  <button
                    onClick={() => toggleDropdown("services")}
                    className="text-gray-700 hover:text-[#f0703a] font-semibold flex items-center w-full"
                  >
                    Services
                    <FaChevronDown
                      className={`ml-1 transform transition-transform duration-300 ${
                        activeDropdown === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "services" && (
                    <div className="mt-1 text-sm font-semibold">
                      {/* "Our Services" Section */}
                      <div className="flex flex-col  mt-4">
                        <h3 className="text-gray-400 text-xs font-semibold uppercase mb-3">
                          Our Services
                        </h3>
                        <Link
                          to="/depression"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                            Depression
                          </span>
                        </Link>
                        <Link
                          to="/addiction"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                            Addiction
                          </span>
                        </Link>
                        <Link
                          to="/anxiety"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                            Anxiety
                          </span>
                        </Link>
                        <Link
                          to="/ocd"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                            OCD
                          </span>
                        </Link>
                        <Link
                          to="/women-problems"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                            Women Problems
                          </span>
                        </Link>
                        <Link
                          to="/social-anxiety"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                            Social Anxiety
                          </span>
                        </Link>
                      </div>

                      {/* "Partners" Section */}
                      <div className="flex flex-col mt-6">
                        <h3 className="text-gray-400 text-xs font-semibold uppercase mb-3">
                          Partners
                        </h3>

                        {/* For Organisations Subsection */}
                        <h4 className="text-gray-400 text-xs font-semibold uppercase mb-2">
                          For Organisations
                        </h4>
                        <span className="block pl-2 py-3 text-gray-600 cursor-pointer hover:text-[#f0703a] hover:font-bold">
                          Employee Well-being Programme
                        </span>
                        <span className="block pl-2 py-3 text-gray-600 cursor-pointer hover:text-[#f0703a] hover:font-bold">
                          Our Approach & Offerings
                        </span>
                        <span className="block pl-2 py-3 text-gray-600 cursor-pointer hover:text-[#f0703a] hover:font-bold">
                          Corporate Webinars
                        </span>

                        {/* Colleges and Universities Subsection */}
                        <h4 className="text-gray-400 text-xs font-semibold uppercase mt-4 mb-2">
                          Colleges and Universities
                        </h4>
                        <span className="block pl-2 py-3 text-gray-600 cursor-pointer hover:text-[#f0703a] hover:font-bold">
                          College Well-being Programme
                        </span>
                      </div>
                    </div>
                  )}
                </li>

                {/* Resources */}
                <li className="text-left">
                  <button
                    onClick={() => toggleDropdown("resources")}
                    className="text-gray-700 hover:text-[#f0703a] font-semibold flex items-center w-full"
                  >
                    Resources
                    <FaChevronDown
                      className={`ml-1 transform transition-transform duration-300 ${
                        activeDropdown === "resources" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "resources" && (
                    <div className="mt-1 text-sm font-semibold">
                      <Link
                        to="/all-resources"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          All
                        </span>
                      </Link>
                      <Link
                        to="/blogs"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          Blogs
                        </span>
                      </Link>
                      <Link
                        to="/music"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          Music
                        </span>
                      </Link>
                      <Link
                        to="/videos"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          Videos
                        </span>
                      </Link>
                      <Link
                        to="/assessments"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          Assessments
                        </span>
                      </Link>
                      <button onClick={handleButtons}>
                        <span className="block px-2 py-3 text-gray-600 hover:text-[#f0703a] hover:font-bold">
                          Exercises
                        </span>
                      </button>
                    </div>
                  )}
                </li>

                <li className="text-left">
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    to="/blogs"
                    className="text-gray-700 hover:text-[#f0703a] font-semibold"
                  >
                    Blogs
                  </Link>
                </li>

                <li className="text-left">
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    to="/chatbot"
                    className="text-gray-700 hover:text-[#f0703a] font-semibold"
                  >
                    Chatbot
                  </Link>
                </li>

                {/* Login Button */}
                <li className="pt-6 relative" ref={dropdownRef}>
                  {!user ? (
                    // Login Button when user is not logged in
                    <Link
                      to="/signup"
                      onClick={() => setMobileMenuOpen(false)}
                      className="mt-7 relative py-3 
        text-sm 
        border bg-gradient-to-r from-[#f0703a] to-[#f28850] text-white
        font-semibold 
        rounded-md 
        transition-all duration-300 
        hover:font-bold 
        hover:bg-darker   
        hover:scale-105 
        before:content-[''] 
        before:absolute before:inset-0 
        before:rounded 
        block text-center w-full"
                    >
                      Login
                    </Link>
                  ) : (
                    // Welcome, User! + Profile Icon (Now at the top)
                    <div className="absolute top-0 left-0 w-full flex justify-start items-center py-3 bg-white">
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center space-x-2 text-sm font-semibold text-[#f0703a] hover:text-[#fa804b] transition"
                      >
                        <FaUserCircle className="text-xl" />
                        <span>Welcome, {user.name}!</span>
                      </button>

                      {/* Dropdown for Profile and Logout */}
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: -10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg border rounded-lg overflow-hidden z-1111111"
                        >
                          <Link
                            to="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition text-medium"
                          >
                            Profile
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 text-sm text-[#f0703a] hover:bg-gray-100 transition text-medium"
                          >
                            Logout
                          </button>
                        </motion.div>
                      )}
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
