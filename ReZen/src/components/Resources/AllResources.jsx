import React from "react";
import { Link } from "react-router-dom";
import { PiMaskSadFill } from "react-icons/pi";
import { FaBrain, FaHeartbeat } from "react-icons/fa";

function AllResources() {
  const videos = [
    {
      title: "Breaking the Silence - Understanding Social Anxiety",
      link: "https://drive.google.com/file/d/16XINAkYKKbl5B4QZJWwVUUBwbiBhVlZI/preview",
      duration: "2 mins watch",
    },
    {
      title: "Counseling vs Psychotherapy - Which One?",
      link: "https://drive.google.com/file/d/1rLpOGXpU204VKk38qYAKmh9P6lNxxlDX/preview",
      duration: "5 mins watch",
    },
    {
      title: "Healing from Trauma - Strategies",
      link: "https://drive.google.com/file/d/1H-ohkfHj_wGLehI7bd2mFbkkLQidK_Eu/preview",
      duration: "2 mins watch",
    },
  ];

  const articles = [
    {
      title: "Tobacco Addiction - Understanding and Coping",
      link: "/tobacco-addiction",
      src: "https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg",
    },
    {
      title: "Counseling vs Psychotherapy",
      link: "/counseling-vs-psychotherapy",
      src: "https://images.pexels.com/photos/935977/pexels-photo-935977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Medication for OCD - What You Need to Know",
      link: "/medication-for-ocd",
      src: "https://images.pexels.com/photos/4050332/pexels-photo-4050332.jpeg",
    },
  ];

  const assessments = [
    {
      title: "Depression Test",
      link: "/depression-test",
      icon: <PiMaskSadFill className="text-5xl text-[#f0703a] mb-4" />,
    },
    {
      title: "Anxiety Test",
      link: "/anxiety-test",
      icon: <FaBrain className="text-5xl text-[#f0703a] mb-4" />,
    },
    {
      title: "Anorexia Test",
      link: "/anorexia-test",
      icon: <FaHeartbeat className="text-5xl text-[#f0703a] mb-4" />,
    },
  ];

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#f6f2e4] via-[#f3cca7] to-[#f4b063] min-h-screen py-24 md:py-32 font-sora padding-x">
      {/* Videos Section */}
      <div className="mb-36 lg:mb-48">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Watch Expert-Recommended Videos
        </h2>
        <p className="text-gray-700 mb-12 text-center text-lg md:text-xl">
          Gain valuable insights from short, informative videos curated by
          mental health experts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group cursor-pointer shadow-lg rounded-xl bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-4 flex flex-col"
              onClick={() => handleClick(video.link)}
            >
              <iframe
                className="w-full h-52 rounded-lg"
                src={video.link}
                allow="autoplay"
                title={video.title}
              ></iframe>
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-[#f0703a] transition-colors duration-300 mb-2">
                  {video.title}
                </h2>
                <p className="text-sm text-gray-600 group-hover:text-[#f0703a] transition-colors duration-300">
                  {video.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/videos"
            className="px-8 py-3 text-white bg-[#f0703a] rounded-md hover:bg-[#cc6235] transition-all text-lg"
          >
            View All Videos
          </Link>
        </div>
      </div>

      {/* Articles Section */}
      <div className="mb-36 lg:mb-48">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Explore Insightful Articles
        </h2>
        <p className="text-gray-700 mb-12 text-center text-lg md:text-xl">
          Read detailed articles to expand your knowledge on mental health
          topics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col cursor-pointer"
              onClick={() => handleClick(article.link)}
            >
              <img
                src={article.src}
                className="w-full h-40 object-cover mb-4 rounded-t-xl"
              />
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#f0703a] transition-colors duration-300 mb-4">
                {article.title}
              </h3>
              <button className="mt-auto text-sm font-medium text-[#f0703a] hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/blogs"
            className="px-8 py-3 text-white bg-[#f0703a] rounded-md hover:bg-[#cc6235] transition-all text-lg"
          >
            View All Articles
          </Link>
        </div>
      </div>

      {/* Assessments Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Take Mental Health Assessments
        </h2>
        <p className="text-gray-700 mb-12 text-center text-lg md:text-xl">
          Assess your mental health with our easy-to-use online tests.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assessments.map((assessment, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex items-center cursor-pointer"
              onClick={() => handleClick(assessment.link)}
            >
              <div className="flex flex-col flex-1 justify-center items-center">
                {assessment.icon}
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#f0703a] transition-colors duration-300 mb-4">
                  {assessment.title}
                </h3>
                <button className="mt-auto px-6 py-2 text-white bg-[#f0703a] rounded-md hover:bg-[#cc6235] transition-all text-sm">
                  Take Test
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/assessments"
            className="px-8 py-3 text-white bg-[#f0703a] rounded-md hover:bg-[#cc6235] transition-all text-lg"
          >
            View All Assessments
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AllResources;
