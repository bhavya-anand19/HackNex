import { Link } from "react-router-dom";
import unsure from "../../assets/unsure.jpg";

export function NotSure() {
  return (
    <div className="w-full bg-[#fdf1db] py-10 padding-x ">
      <div className="px-6 md:px-10 flex flex-col lg:flex-row items-center justify-between">
        <div className="space-y-8 text-center lg:text-left py-10">
          <h2 className="text-lg lg:text-2xl font-semibold text-gray-700">
            Unsure which care is best for you?
          </h2>
          <p className="text-gray-600 text-sm lg:text-base">
            Finding the right mental health treatment is a crucial part of your
            wellness journey. Speak with our expert coaches for a tailored
            recommendation to meet your needs.
          </p>
          <Link to="/book-free-session">
            <button className="mt-8 bg-[#f0703a] text-white px-4 py-2.5 font-semibold text-xs lg:text-sm rounded-md hover:bg-[#cc6235] transition-all duration-300">
              CONSULT A COACH NOW
            </button>
          </Link>
        </div>

        <div className="lg:w-5/12 mt-6 lg:mt-0 flex justify-end">
          <div className="relative">
            <img
              src={unsure}
              alt="Supportive Hands"
              className="w-40 h-auto rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SupportSection() {
  return (
    <section className="bg-[#f2f4ef] py-12 lg:py-20 padding-x">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex-shrink-0">
          <div className="bg-[#d7e0cd] rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F97316"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
        </div>
        {/* Text Section */}
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-xl font-bold text-[#4e5a48]">
            Need someone to talk to about your mental health?
          </h2>
          <p className="text-base text-[#4e5a48] mt-2">
            If you or someone you know is struggling, we are here to help. Reach
            out to our professional team to find support.
          </p>
        </div>

        <div>
          <Link to="/book-free-session">
            {" "}
            <button className="px-6 py-3 border border-[#f0703a] text-[#f0703a] rounded-full hover:bg-[#f0703a] hover:text-white transition">
              Get Support Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
