import React from "react";
import chatbot from "../../assets/chatbot.avif";
function Chatbot() {
  return (
    <>
      {/* Main Chatbot Section */}
      <div className="bg-[#ffded7] py-28 lg:py-16">
        <div className="mx-auto flex flex-col lg:flex-row items-center justify-center px-8 lg:px-20 lg:gap-16 xl:gap-20">
          {/* Image Section */}
          <div className="w-full lg:w-2/5 lg:ml-20 flex justify-center">
            <img src={chatbot} alt="AI Chatbot" className="rounded-lg" />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 mt-8 md:mt-10 md:pl-12 mb-10 text-center lg:text-left lg:mr-20">
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-gray-800">
              Meet Our AI Wellness Companion
            </h2>
            <h3 className="md:text-xl xl:text-2xl text-[#fe826c] font-semibold mb-6 mt-8">
              Personalized Support and Guidance at Any Time, From Anywhere.
            </h3>
            <p className="text-base xl:text-lg text-gray-700 mt-4 mb-8">
              Our AI chatbot is here to help, offering 24/7 access to
              personalized guidance and resources. Whether you need a comforting
              conversation or immediate assistance, the chatbot provides
              reliable support right when you need it, all within a confidential
              and secure environment.
            </p>
            <a
              href="https://rezen-c.streamlit.app/"
              className="inline-block bg-[#fe826c] text-white text-lg font-semibold py-3 px-16 rounded-lg shadow-md hover:bg-[#ea5b42] transition duration-300"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>

      {/* Why an AI Chatbot Section */}
      <section className="bg-slate-200 text-center mx-4 sm:mx-8 lg:mx-36 my-16 py-14 px-6 sm:px-14 lg:px-28 rounded-lg lg:my-32 xl:my-36">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
          Why an AI Chatbot for Mental Health?
        </h2>
        <p className="text-lg font-semibold text-gray-700 mb-8">
          In today’s fast-paced world, finding the right mental health support
          can be challenging. Our AI chatbot is designed to provide immediate,
          personalized help whenever you need it, bridging the gap between
          traditional therapy and everyday wellness support.
        </p>
        <a
          href="https://rezen-c.streamlit.app/"
          className="inline-block bg-[#fe826c] text-white text-lg font-semibold py-4 px-10 rounded-lg shadow-md hover:bg-[#ea5b42] transition duration-300"
        >
          Try Our AI Chatbot
        </a>
      </section>

      {/* Features Grid Section */}
      <div className="bg-[#f8eeda] py-10">
        <section className="mx-4 sm:mx-10 lg:mx-20 xl:mx-48 mt-5 lg:mt-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-600 text-center mb-16">
            What Can Our AI Chatbot Do For You?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Box */}
            <div className="bg-[#016070] text-white p-10 h-64 flex flex-col justify-center items-center rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:bg-[#024856]">
              <h3 className="text-xl font-semibold mb-3">
                24/7 Instant Support
              </h3>
              <p className="text-gray-200">
                Our AI chatbot is available around the clock, ensuring you have
                someone to talk to whenever you need.
              </p>
            </div>

            {/* Feature Box */}
            <div className="bg-[#016070] text-white p-10 h-64 flex flex-col justify-center items-center rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:bg-[#024856]">
              <h3 className="text-xl font-semibold mb-3">
                Personalized Conversations
              </h3>
              <p className="text-gray-200">
                The chatbot adapts to your unique needs, offering tailored
                advice based on your mental health history.
              </p>
            </div>

            {/* Feature Box */}
            <div className="bg-[#016070] text-white p-10 h-64 flex flex-col justify-center items-center rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:bg-[#024856]">
              <h3 className="text-xl font-semibold mb-3">
                Confidential & Secure
              </h3>
              <p className="text-gray-200">
                Your privacy is our priority. All conversations are fully
                encrypted and remain confidential.
              </p>
            </div>

            {/* Feature Box */}
            <div className="bg-[#016070] text-white p-10 h-64 flex flex-col justify-center items-center rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:bg-[#024856]">
              <h3 className="text-xl font-semibold mb-3">
                Self-Care Reminders
              </h3>
              <p className="text-gray-200">
                Receive regular wellness tips and self-care reminders to help
                maintain a balanced mental state.
              </p>
            </div>

            {/* Feature Box */}
            <div className="bg-[#016070] text-white p-10 h-64 flex flex-col justify-center items-center rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:bg-[#024856]">
              <h3 className="text-xl font-semibold mb-3">Crisis Mode</h3>
              <p className="text-gray-200">
                In times of heightened distress, the chatbot can provide
                immediate support or connect you with professional help.
              </p>
            </div>

            {/* Feature Box */}
            <div className="bg-[#016070] text-white p-10 h-64 flex flex-col justify-center items-center rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:bg-[#024856]">
              <h3 className="text-xl font-semibold mb-3">
                Integration with Therapists
              </h3>
              <p className="text-gray-200">
                The chatbot seamlessly connects you to licensed therapists for
                further assistance when needed.
              </p>
            </div>
          </div>
        </section>

        {/* Button Section */}
        <div className="mt-10 md:mt-14 lg:mt-20 text-center mx-auto mb-16">
          <a
            href="https://rezen-c.streamlit.app/"
            className="inline-block bg-[#fe826c] text-white text-lg font-semibold py-4 px-20 rounded-lg shadow-md hover:bg-[#ea5b42] transition duration-300"
          >
            Talk to Chatbot
          </a>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
