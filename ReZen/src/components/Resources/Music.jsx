import React from "react";

const AudioResources = () => {
  const audios = [
    {
      title:
        "Overcome Any Addiction: Dopamine Receptor Repair Energy Frequency",
      link: "https://drive.google.com/file/d/16l9Lz72iYpFlqTitopjq0Ka8dxQGbYdn/preview",
    },
    {
      title: "Sound Therapy to Reduce Anxiety, Mental Health & Depression",
      link: "https://drive.google.com/file/d/1pWHpylxA7hExSL6ITSPy3lVoq0u97c5y/preview",
    },
  ];

  // Function to open the audio in a new tab when clicked
  const handleAudioClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="bg-gradient-to-b from-[#f6f2e4] via-[#f3cca7] to-[#f4b063] min-h-screen py-24 md:py-32 font-sora padding-x">
      <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-10 md:mb-16 tracking-wide leading-tight">
          Explore Our Audio Resources from Professionals
        </h1>

        {/* Audios Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 md:gap-8 xl:gap-12 sm:gap-5 md:mx-6">
          {audios.map((audio, index) => (
            <div
              key={index}
              className="cursor-pointer shadow-lg rounded-lg overflow-hidden bg-white hover:scale-105 transition-transform duration-300 p-4 text-gray-700  hover:text-[#f0703a]"
              onClick={() => handleAudioClick(audio.link)}
            >
              {/* Audio Player */}
              <iframe
                className="w-full h-40 sm:h-48 lg:h-56 pointer-events-none rounded-lg"
                src={audio.link}
                allow="autoplay"
                title={audio.title}
              ></iframe>

              {/* Audio Title */}
              <div className="p-4">
                <h2 className="text-base sm:text-lg font-semibold text-center py-2">
                  {audio.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioResources;
