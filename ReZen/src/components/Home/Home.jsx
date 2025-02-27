import React from "react";
import Hero from "./Hero";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../../index.css";
import WhyUs from "./WhyUs";
import depression from "../../assets/depression.png";
import alcohol from "../../assets/alcohol.png";
import gad from "../../assets/gad.png";
import ocd from "../../assets/ocd.png";
import bipolar from "../../assets/bipolar.png";
import adultADHD from "../../assets/adhd.png";
import diag from "../../assets/Diagnosis.png";
import selfCare from "../../assets/self-care.png";
import community from "../../assets/community.png";
import socialAnxiety from "../../assets/social-anxiety.png";
import women from "../../assets/women.png";
import ptsd from "../../assets/ptsd.png";
import tobacco from "../../assets/tobacco.png";
import grief from "../../assets/grief.png";
import anxiety from "../../assets/anxiety.png";
import Testimonial from "./Testimonial";
import ResourcesSection from "./ResourcesSection";
import care from "../../assets/care.jpeg";
import { FaCheckCircle, FaSyncAlt } from "react-icons/fa";

// What's Bothering You Section
const Bothering = () => {
  const data = [
    {
      title: "Depression",

      label: "Learn More",
      icon: depression,
      link: "/depression",
    },
    {
      title: "Anxiety",

      label: "Learn More",
      icon: anxiety,
      link: "/anxiety",
    },
    {
      title: "Adult ADHD",

      label: "Learn More",
      icon: adultADHD,
      link: "adhd",
    },
    {
      title: "Obsessive Compulsive Disorder (OCD)",

      label: "Learn More",
      icon: ocd,
      link: "/ocd",
    },
    {
      title: "Bipolar Disorder",

      label: "Learn More",
      icon: bipolar,
      link: "bipolar-disorder",
    },
    {
      title: "Generalised Anxiety Disorder (GAD)",

      label: "Learn More",
      icon: gad,
      link: "/gad",
    },

    {
      title: "Alcohol Addiction",

      label: "Learn More",
      icon: alcohol,
      link: "/addiction",
    },
    {
      title: "Social Anxiety",

      label: "Learn More",
      icon: socialAnxiety,
      link: "/social-anxiety",
    },
    {
      title: "Women Health",

      label: "Learn More",
      icon: women,
      link: "/women-problems",
    },
    {
      title: "Tobacco Addiction",

      label: "Learn More",
      icon: tobacco,
      link: "/addiction",
    },
    {
      title: "Post-Traumatic Stress Disorder (PTSD)",

      label: "Learn More",
      icon: ptsd,
      link: "ptsd",
    },
    {
      title: "Grief and Loss",

      label: "Learn More",
      icon: grief,
      link: "grief-and-loss",
    },
  ];

  return (
    <div className="w-full bg-[#ffffff] h-fit flex flex-col justify-center items-center padding-x py-10 md:py-16 lg:py-20 font-sora">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center leading-snug mb-4">
        What is <span className="text-[#f0703a]">Bothering </span> You?
      </h2>
      <p className="text-base md:text-lg text-gray-600 text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16 md:px-6">
        We're here to help you navigate through your mental health journey with
        care, support, and the right resources.
      </p>

      <div className="relative lg:w-10/12 w-full md:w-11/12 h-fit p-4 lg:px-5 md:px-10">
        <Swiper
          loop={true}
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next-arrow",
            prevEl: ".custom-prev-arrow",
          }}
          breakpoints={{
            1024: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 8 },
            540: { slidesPerView: 2, spaceBetween: 4 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={item.link}>
                <div
                  className="bg-white border-2 shadow-[#b97a5f] shadow-lg border-[#f0703a] px-4 md:px-5 py-4 lg:py-7 rounded-2xl flex flex-col justify-center items-center mx-4 space-y-4 relative transition-all duration-300 hover:shadow-[#8d604d] hover:shadow-2xl"
                  style={{
                    height: "100%",
                    overflow: "visible", // Ensures expansion is visible
                  }}
                >
                  <div className="flex flex-row [@media(min-width:540px)]:flex-col items-center space-x-1 sm:space-x-0 sm:space-y-4 min-h-[120px] sm:min-h-[170px] md:min-h-[210px] lg:min-h-[240px]">
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={`Icon for ${item.title}`}
                        className="w-12 sm:w-16 md:w-20 lg:w-28 xl:w-32 transition-transform duration-300 hover:scale-110"
                      />
                    )}
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 text-center">
                      {item.title}
                    </h2>
                  </div>

                  <Link to={item.link}>
                    <button className="bg-gradient-to-r from-[#f0703a] to-[#f28850] hover:to-[#f07a46] text-white px-5 py-2.5 rounded-full font-medium hover:scale-105 transition-all duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div
          className="custom-prev-arrow absolute top-[42%] sm:top-[48%] md:top-[47%] lg:top-[46%] 
  -translate-y-1/2 left-[-10px] sm:left-[-20px] md:left-[-30px] lg:left-[-40px] 
  cursor-pointer bg-[#f0703a] hover:bg-[#cc6235] 
  w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 
  flex items-center justify-center rounded-full"
        >
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
            viewBox="4 4 16 16"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6"></path>
          </svg>
        </div>

        <div
          className="custom-next-arrow absolute top-[42%] sm:top-[48%] md:top-[47%] lg:top-[46%] 
  -translate-y-1/2 right-[-10px] sm:right-[-20px] md:right-[-30px] lg:right-[-40px] 
  cursor-pointer bg-[#f0703a] hover:bg-[#cc6235] 
  w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 
  flex items-center justify-center rounded-full"
        >
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
            viewBox="4 4 16 16"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6l6 6-6 6"></path>
          </svg>
        </div>
      </div>

      <div className="w-full px-6 md:px-10 md:mt-12 lg:mt-24 xl:mt-28">
        <h2 className="text-base lg:text-xl font-semibold text-center text-gray-800">
          We specialise in treating a{" "}
          <span className="text-[#f0703a]">wide range </span> of mental health
          concerns. Get in touch to know more.
        </h2>
        <div className="w-full pb-10 px-6 md:px-10 flex justify-center">
          <div className="md:w-11/12 bg-white p-6 mt-10 rounded-2xl shadow-xl flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center mb-6 lg:mb-0">
              <div className="lg:ml-8 text-center lg:text-left">
                <h4 className="text-lg font-bold text-gray-800 py-1 md:pr-4">
                  <span className="text-[#f0703a]">Unsure </span> about your
                  problem?
                </h4>
                <p className="text-gray-500 text-base py-1 md:pr-4">
                  Talk to one of Rezen’s mental health experts to understand how
                  we can help.
                </p>
              </div>
            </div>

            <Link to="/book-free-session">
              <button className="bg-[#f0703a] text-white px-3 md:px-4 py-2 lg:px-6 md:py-3.5 font-semibold text-sm rounded-md hover:bg-[#cc6235] transition-all duration-300">
                GET CONNECTED FOR ASSESSMENT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

//Healthcare Offerings Section

const OfferingsSection = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  const offerings = [
    {
      id: 1,
      title: "Diagnosis and Therapy",
      image: diag,
      points: [
        "Personalized care and treatment plans",
        "Cognitive behavioral therapy and mindfulness",
        "Expert diagnosis and therapy services",
      ],
      buttonText: "Get Started",
      buttonLink: "https://chat.whatsapp.com/FHud0xMwIdp10qcQIvGcDx",
    },
    {
      id: 2,
      title: "Self-care and Progress",
      image: selfCare,
      points: [
        "Track your self-care journey with personalized tools",
        "Set and monitor mental health goals",
        "Mindfulness exercises, journaling prompts, and reflections",
      ],
      buttonText: "Download",
      buttonLink: "/app-prod-release.apk",
    },
    {
      id: 3,
      title: "Community",
      image: community,
      points: [
        "Group discussions and peer support",
        "Expert advice from mental health professionals",
        "Build meaningful connections with others",
      ],
      buttonText: "Join the Community",
      buttonLink: "https://chat.whatsapp.com/FHud0xMwIdp10qcQIvGcDx",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fff5e6] to-[#ffdca7] py-10 md:py-16 lg:py-20 xl:py-28 padding-x">
      {/* Title and Description */}
      <div className="text-center mb-10 md:mb-14 lg:mb-20 xl:mb-24 mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Our Healthcare <span className="text-[#f0703a]"> Offerings </span>
        </h2>
        <p className="text-base md:text-lg text-gray-500">
          We provide a holistic range of mental health services, designed to
          support your well-being every step of the way.
        </p>
      </div>

      {/* Offerings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 xl:gap-8 place-items-center rounded-xl">
        {offerings.map((offering) => (
          <div
            key={offering.id}
            className={`flip-card w-full h-[370px] md:h-[400px] lg:h-[440px] xl:h-[480px] relative cursor-pointer ${
              flippedCard === offering.id ? "flipped" : ""
            }`}
            onClick={() => handleFlip(offering.id)}
            onMouseEnter={() => handleFlip(offering.id)}
            onMouseLeave={() => setFlippedCard(null)}
          >
            <div className="flip-card-inner w-full h-full relative transition-transform duration-700 transform-style-3d hover:shadow-xl">
              {/* Front Side */}
              <div className="flip-card-front absolute w-full h-full flex flex-col justify-center items-center bg-white shadow-lg rounded-xl p-5">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-40 md:h-52 lg:h-60 object-cover rounded-lg mb-3 md:mb-5 lg:mb-8"
                />
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 text-center">
                  {offering.title}
                </h3>
                <div className="absolute top-5 right-5 bg-gray-100 p-2 rounded-full shadow-md flex items-center justify-center animate-bounce">
                  <FaSyncAlt className="text-[#f0703a] text-xl" />
                </div>
              </div>

              {/* Back Side */}
              <div className="flip-card-back absolute w-full h-full flex flex-col justify-evenly items-center bg-[#f3f4f6] shadow-lg rounded-xl p-5 rotate-y-180">
                <div className="text-center flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-5 lg:mb-7 xl:mb-9">
                    {offering.title}
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm md:text-base text-left w-full px-4">
                    {offering.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#f0703a] text-lg" />{" "}
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={offering.buttonLink}
                  className="w-full text-center mt-4"
                >
                  <button className="bg-gradient-to-r from-[#f0703a] to-[#f28850] hover:to-[#f07a46] text-white px-12 py-3.5 rounded-full font-semibold text-lg hover:scale-110 transition-all duration-300">
                    {offering.buttonText}
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const NewsSection = () => {
  const newsArticles = [
    {
      title: "How does Education Affect Mental Health?",
      author: "Dr. Nicola Williams, Ph.D",
      link: "https://www.news-medical.net/health/How-does-Education-Affect-Mental-Health.aspx",
      description:
        "Discover the powerful link between education and mental well-being, and how learning can influence emotional health.",
    },
    {
      title: "Analyzing the Stigma Surrounding Mental Health",
      author: "Sarah Moore",
      link: "https://www.news-medical.net/health/Analyzing-the-Stigma-Surrounding-Mental-Health.aspx",
      description:
        "A closer look at the causes of mental health stigma and its impact on individuals seeking support.",
    },
  ];

  return (
    <section className="bg-[#ffffff] py-16 md:py-20 lg:py-24 xl:py-36 padding-x">
      <div className="flex flex-col md:flex-row md:justify-end items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-20">
          {/* Left Side: Title, Description, and Button */}
          <div className="lg:col-span-1 flex flex-col justify-center gap-4 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              In The <span className="text-[#f0703a]"> News </span>
            </h2>
            <p className="text-gray-700 leading-loose lg:mb-6 lg:mr-5">
              Stay updated on the latest{" "}
              <span className="text-gray-900 font-semibold">
                mental health trends, research{" "}
              </span>
              , and{" "}
              <span className="text-gray-900 font-semibold">innovations </span>.
              Explore how the world embraces mental wellness and how we
              contribute to personalized care.
            </p>
            <div>
              <button className="bg-gradient-to-r from-[#f0703a] to-[#fd975f] hover:to-[#f07a46] transition-all duration-300 hover:scale-105 text-white text-lg font-semibold py-3 px-10 rounded-full">
                View All News &rarr;
              </button>
            </div>
          </div>

          {/* Right Side: News Articles */}
          <div className="lg:col-span-2 ]">
            <div className="space-y-6">
              {newsArticles.map((article, index) => (
                <a
                  key={index}
                  href={article.link}
                  className="bg-gradient-to-b from-[#fdf7ee] to-[#ffecd0] border-[#f0703a] border p-6 shadow-lg rounded-2xl flex flex-col md:flex-row items-start md:items-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 no-underline"
                >
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-[#f0703a] mt-2">
                      {article.title}
                    </h3>
                    <span className="block text-sm text-gray-500 mt-1">
                      {article.author}
                    </span>
                    <p className="text-gray-600 mt-2">{article.description}</p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="text-[#f0703a] mt-4 md:mt-0 md:ml-4 self-start md:self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FreeSession = () => {
  return (
    <section
      id="free-session"
      className="bg-white text-center py-16 md:py-20 lg:py-24 padding-x"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Your <span className="text-[#f0703a]"> First Session </span> is on Us
        </h2>
        <p className="text-base lg:text-lg text-gray-600 mb-10 lg:mb-14">
          Start your journey towards better mental health with no strings
          attached. Enjoy a complimentary first session and see how we can help.
        </p>
        <Link to="/book-free-session">
          <button className="bg-[#f0703a] text-white text-lg font-semibold py-3.5 px-12 rounded-md hover:bg-[#cc6235] hover:scale-110 transition-all duration-300 transform">
            Book Session Now
          </button>
        </Link>
      </div>
    </section>
  );
};

const NeedHelp = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className="mt-12 py-16 md:py-20 lg:py-24 padding-x">
      {/* Text and Image Section */}
      <div className="grid lg:grid-cols-2 lg:gap-6">
        {/* Text part */}
        <div className="lg:w-full text-center lg:text-left">
          <h2 className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-900 mb-8">
            Concerned about <span className="text-[#f0703a]">someone’s </span>
            well-being?
          </h2>
          <p className="mt-2 text-sm lg:text-base text-gray-600 sm:text-md">
            Watching a loved one struggle is tough. The right care matters. Our
            Care Consultant is here to help you find the{" "}
            <span className="text-gray-900 font-semibold">best support</span>{" "}
            for yourself or a loved one.
          </p>

          {/* Conditional Button */}
          {!showForm && (
            <div className="mt-8 lg:mt-10">
              <button
                className="bg-gradient-to-r from-[#f0703a] to-[#fd975f] hover:to-[#f07a46] transition-all duration-300 hover:scale-105 text-white text-lg font-semibold py-3 px-10 rounded-full"
                onClick={handleButtonClick}
              >
                {" "}
                Connect with Us
              </button>
            </div>
          )}
        </div>

        {/* Image part */}
        <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
          <img
            src={care}
            alt="Care Consultant"
            className="rounded-full w-52 lg:w-64"
          />
        </div>
      </div>

      {showForm && (
        <div className="mt-12 px-4 py-6 sm:p-6 bg-white shadow-lg rounded-lg border border-gray-200 max-w-full md:max-w-max overflow-hidden mx-auto">
          <form className="space-y-4 md:space-y-0 md:flex md:items-center md:gap-4 md:flex-wrap">
            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full md:w-auto">
              <label className="text-sm font-semibold text-gray-700 mb-1 sm:mb-0 sm:mr-4 w-full sm:w-24 md:w-auto">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full sm:flex-1 px-2 py-1.5 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#f0703a] placeholder:text-sm box-border"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full md:w-auto">
              <label className="text-sm font-semibold text-gray-700 mb-1 sm:mb-0 sm:mr-4 w-full sm:w-24 md:w-auto">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:flex-1 px-2 py-1.5 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#f0703a] placeholder:text-sm box-border"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full md:w-auto">
              <label className="text-sm font-semibold text-gray-700 mb-1 sm:mb-0 sm:mr-4 w-full sm:w-24 md:w-auto">
                Mobile No.
              </label>
              <input
                type="tel"
                placeholder="Your mobile number"
                className="w-full sm:flex-1 px-2 py-1.5 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#f0703a] placeholder:text-sm box-border"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full md:w-auto">
              <label className="text-sm font-semibold text-gray-700 mb-1 sm:mb-0 sm:mr-4 w-full sm:w-24 md:w-auto">
                Age
              </label>
              <input
                type="number"
                placeholder="Age of Patient"
                className="w-full sm:flex-1 px-2 py-1.5 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#f0703a] placeholder:text-sm box-border"
              />
            </div>
            <div className="flex items-center w-full md:w-auto">
              <button
                type="submit"
                className="bg-[#f0703a] text-white px-6 md:px-5 py-2 md:py-2.5 rounded-md font-semibold hover:bg-[#cc6235] w-full md:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
const Assistance = () => {
  return (
    <div className="flex justify-center py-7 bg-[#f0703a] text-white padding-x">
      <p className="text-center text-sm md:text-base">
        If you need any assistance, feel free to contact us at{" "}
        <a
          href="mailto:contact@rezen.in"
          className="text-[#fff7e9] font-semibold hover:underline"
        >
          contact@rezen.in
        </a>{" "}
        or{" "}
        <a
          href="tel:+918409412228"
          className="text-[#fff7e9] font-semibold hover:underline"
        >
          +918409412228
        </a>
        . We’re here to support you every step of the way.
      </p>
    </div>
  );
};

function Home() {
  return (
    <main className="overflow-x-hidden font-sora">
      <Hero />

      <Bothering />
      <OfferingsSection />
      <WhyUs />
      <FreeSession />
      <ResourcesSection />
      <NewsSection />
      <Testimonial />
      <NeedHelp />
      <Assistance />
    </main>
  );
}

export default Home;
