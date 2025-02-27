import React from "react";
import "../../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Anonymous, Cabin Crew, Delhi",
      text: "I was sceptical and afraid to be open to another person. I thought I could not do it, but [my therapist] has been very supportive in terms of my mental health journey and just allows me to feel my emotions and simplifies them for me.",
    },
    {
      name: "Rahul, Software Engineer, Mumbai",
      text: "The platform has completely changed how I deal with stress. I used to struggle with anxiety, but after engaging in therapy sessions, I feel more at peace. My therapist listens and gives advice that truly works for me.",
    },
    {
      name: "Priya, Marketing Executive, Bangalore",
      text: "I was hesitant at first, but now I can’t imagine how I would have managed without their support. The tools provided here are so practical and helpful, and my therapist is genuinely caring.",
    },
    {
      name: "Ananya, Graphic Designer, Hyderabad",
      text: "What I love about this service is how personal everything feels. I’ve been working on my mental health for years, and this has been the most impactful experience. It’s helped me regain my confidence.",
    },
    {
      name: "Ravi, Business Analyst, Pune",
      text: "Being part of this platform has helped me more than I ever thought possible. The insights I’ve gained and the personalized care have made a world of difference in how I handle work-related stress.",
    },
    {
      name: "Sara, HR Manager, Chennai",
      text: "I cannot recommend this enough. My therapist has guided me through some very dark times, and now I feel much more in control of my emotions. The level of support is phenomenal.",
    },
  ];

  return (
    <div className="w-screen bg-gradient-to-b from-[#fdf7ee] to-[#fde2b9] py-16 md:py-20 lg:py-24 padding-x">
      {/* Testimonial Section */}
      <div className="mx-auto flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0">
        {/* Left Side: Heading */}
        <div className="lg:w-[60%] text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Guiding countless individuals <br />
            to <span className="text-[#f0703a]">emotional wellness.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 lg:w-[70%]">
            Join us and take the first step towards a brighter future.
          </p>
        </div>

        {/* Right Side: Centered Testimonial Slider */}
        <div className="w-full flex justify-end relative h-fit">
          <div className="relative w-full lg:max-w-xl flex items-center justify-center">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="relative"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center"
                >
                  <div className="bg-white border-2 border-[#f0703a] p-8 sm:p-10 md:p-12 lg:p-10 rounded-3xl text-gray-700 text-center lg:min-h-[280px] flex flex-col gap-4 sm:max-w-full relative shadow-lg">
                    <p className="text-sm sm:text-base italic text-gray-700">
                      {testimonial.text}
                    </p>
                    <p className="mt-2 font-semibold text-sm sm:text-base text-gray-900">
                      {testimonial.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
