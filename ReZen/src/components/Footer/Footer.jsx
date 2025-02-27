import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/Logo1.svg";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] py-8 border-t font-sora lg:py-16 padding-x">
      <div className="mx-auto px-4 text-sm lg:text-base">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-y-12 lg:gap-8">
          {/* About ReZen */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-gray-800 font-semibold mb-4">ABOUT REZEN</h4>
            <ul className="text-gray-700 text-center lg:text-left space-y-3">
              <li>
                <Link to="/faq">About Us</Link>
              </li>
              <li>Careers</li>
              <li>
                <Link to="#">Media</Link>
              </li>
              <li>
                <Link to="/volunteer">For Therapists</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Offerings */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-gray-800 font-semibold mb-4">OFFERINGS</h4>
            <ul className="text-gray-700 text-center lg:text-left space-y-3">
              <li>
                <a href="https://chat.whatsapp.com/FHud0xMwIdp10qcQIvGcDx">
                  Diagnosis and Therapy
                </a>
              </li>
              <li>
                <a href="#">Self-care and Progress</a>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/FHud0xMwIdp10qcQIvGcDx">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-gray-800 font-semibold mb-4">SERVICES</h4>
            <ul className="text-gray-700 text-center lg:text-left space-y-3">
              <li>
                <Link to="/depression">Depression</Link>
              </li>
              <li>
                <Link to="/addiction">Addiction</Link>
              </li>
              <li>
                <Link to="/anxiety">Anxiety</Link>
              </li>
              <li>
                <Link to="/ocd">OCD</Link>
              </li>
              <li>
                <Link to="/women-problems">Women Problem</Link>
              </li>
              <li>
                <Link to="/social-anxiety">Social Anxiety</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription & Social Handles */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto space-y-5">
            {/* Logo */}
            <img src={logo} alt="ReZen Logo" className="h-10 lg:h-14 w-auto" />

            {/* Newsletter */}
            <h4 className="text-gray-800 font-semibold mb-4">
              Subscribe to our Newsletter
            </h4>
            <div className="flex items-center bg-transparent border-2 border-gray-700 rounded-full px-2 py-1 min-w-80 relative">
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-transparent text-gray-600 outline-none flex-grow placeholder-gray-600 px-4 py-1"
              />
              <button className="absolute right-0.5 top-0.5 text-white px-2.5 py-1.5 rounded-full bg-gradient-to-r from-[#f0703a] to-[#f28850] hover:to-[#f07a46] transition">
                Subscribe
              </button>
            </div>

            {/* Social Media Handles */}
            <div className="flex space-x-6 mt-4">
              <a
                href="https://www.linkedin.com/company/rezen.in/"
                className="text-[#f0703a] hover:text-[#c33b01] text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/ReZen_in"
                className="text-[#f0703a] hover:text-[#c33b01] text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/rezen.in/"
                className="text-[#f0703a] hover:text-[#c33b01] text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://chat.whatsapp.com/FHud0xMwIdp10qcQIvGcDx"
                className="text-[#f0703a] hover:text-[#c33b01] text-2xl"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Copyright and Links */}
            <p className="text-gray-600 text-center lg:text-left mt-4">
              &copy; 2025 ReZen. All rights reserved.
            </p>
          </div>
        </div>

        {/* Emergency Helpline */}
        <div className="mt-8 text-center lg:text-left">
          <p className="text-gray-800 font-medium text-sm">
            Emergency Helpline: If you are in crisis or need urgent support,
            please call
            <span className="text-[#f0703a] font-bold"> 1-800 891 4416</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
