import React from "react";

const VideoResources = () => {
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
    {
      title: "How Medications Help with Anxiety Disorder",
      link: "https://drive.google.com/file/d/1IJUWCf9INm4ampS0VFCHB6044lwEAxMH/preview",
      duration: "2 mins watch",
    },
    {
      title: "Stress vs Anxiety: Know the Difference",
      link: "https://drive.google.com/file/d/1Tk8jZzWPUffYHWYktJfLXgOuibLWQ_qE/preview",
      duration: "2 mins watch",
    },
    {
      title: "Signs - You May Have High-Functioning Depression",
      link: "https://drive.google.com/file/d/1VRjOFCKc8_wcGdUMs8eiImlAh6rLUttj/preview",
      duration: "2 mins watch",
    },
    {
      title: "Understanding Link between Addiction",
      link: "https://drive.google.com/file/d/1Y_-hPD_5AW78dko_bEq7Q6CkGaShnBRd/preview",
      duration: "3 mins watch",
    },
    {
      title: "Understanding OCD: The 7 Types Explained",
      link: "https://drive.google.com/file/d/11P9wbp8L3qyOsiFngbo_X6GwdULNRb_K/preview",
      duration: "4 mins watch",
    },
    {
      title: "Why Your Body Changes When You Feel Anxious",
      link: "https://drive.google.com/file/d/1zjqXFHNDD78N8VNKlR3hrEEIMVI9ntxI/preview",
      duration: "4 mins watch",
    },
  ];

  // Function to open the video in a new tab when clicked
  const handleVideoClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="bg-gradient-to-b from-[#f6f2e4] via-[#f3cca7] to-[#f4b063] min-h-screen py-24 md:py-32 font-sora padding-x">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-10 md:mb-16 xl:mb-20 tracking-wide leading-tight">
          Explore Our Video Resources from Professionals
        </h1>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-6 gap-12">
          {videos.map((video, index) => (
            <div
              key={index}
              className="cursor-pointer shadow-lg rounded-lg bg-white hover:scale-105 transition-transform duration-300 group p-4"
              onClick={() => handleVideoClick(video.link)}
            >
              {/* Video Player */}
              <div>
                <iframe
                  className="w-full h-48 rounded-lg"
                  src={video.link}
                  allow="autoplay"
                  title={video.title}
                ></iframe>
              </div>

              {/* Video Title */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#f0703a] transition-colors duration-300">
                  {video.title}
                </h2>
                <p className="text-sm text-gray-600 group-hover:text-[#f0703a] transition-colors duration-300">
                  {video.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoResources;
