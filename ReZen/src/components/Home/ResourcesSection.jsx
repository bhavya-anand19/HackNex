import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const resources = [
  {
    title: "Tobacco Addiction",
    image: "https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg",
    type: "ARTICLE | 3 MIN",
    link: "/tobacco-addiction",
  },
  {
    title: "Healing from Trauma",
    video:
      "https://drive.google.com/file/d/1H-ohkfHj_wGLehI7bd2mFbkkLQidK_Eu/preview",
    type: "VIDEO | 5 MIN",
    isVideo: true,
  },
  {
    title: "Counseling vs Psychotherapy",
    image:
      "https://images.pexels.com/photos/935977/pexels-photo-935977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "ARTICLE | 4 MIN",
    link: "/counseling-vs-psychotherapy",
  },
];

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // Medium screens
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, // Mobile screens
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const MentalHealthResources = () => {
  return (
    <div className="bg-gradient-to-b from-[#fdf7ee] to-[#fde2b9] py-16 md:py-20 lg:py-24 padding-x">
      <div className="max-w-7xl mx-auto text-center">
        {" "}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
          Mental Health <span className="text-[#f0703a]">Resources </span>
        </h2>
        <p className="text-gray-600 mt-5 text-base md:text-lg">
          Awareness is the first step to change. Check out our digital library
          to learn more about mental health.
        </p>
        <div className="mt-14">
          {/* For desktop */}
          <div className="hidden lg:grid max-w-5xl mx-auto grid-cols-3 gap-10">
            {" "}
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.isVideo ? resource.video : resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md overflow-hidden p-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                {resource.isVideo ? (
                  <iframe
                    src={resource.video}
                    title={resource.title}
                    className="w-full h-48 rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                )}
                <div className="pt-4 pb-2">
                  <p className="text-xs text-gray-500">{resource.type}</p>
                  <p className="text-base font-semibold text-gray-700">
                    {resource.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* For mobile */}
          <div className="lg:hidden max-w-4xl mx-auto">
            {" "}
            <Slider {...settings}>
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  to={resource.isVideo ? resource.video : resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-md p-4 overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out min-h-[322px]"
                >
                  {resource.isVideo ? (
                    <iframe
                      src={resource.video}
                      title={resource.title}
                      className="w-full h-44"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-44 object-cover rounded-lg"
                    />
                  )}
                  <div className="pt-4 pb-2">
                    <p className="text-xs text-gray-500">{resource.type}</p>
                    <p className="text-lg font-semibold text-gray-700">
                      {resource.title}
                    </p>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
        <div className="mt-10">
          <Link to="/all-resources">
            <button className="bg-gradient-to-r from-[#f0703a] to-[#fd975f] hover:to-[#f07a46] transition-all duration-300 hover:scale-105 text-white text-lg font-semibold py-3 px-10 rounded-full">
              View All Resources &rarr;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthResources;
