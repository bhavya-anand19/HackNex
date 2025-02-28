import { useEffect, useState } from "react";
import { fetchTherapists } from "../../utility/firestoreUtils";
import { Link } from "react-router-dom";

const TherapistsDisplay = () => {
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTherapists = async () => {
      const data = await fetchTherapists();
      setTherapists(data);
      setLoading(false);
    };
    getTherapists();
  }, []);

  if (loading)
    return <p className="text-center text-[#f0703a] text-lg">Loading...</p>;

  return (
    <div className="bg-gradient-to-b from-[#f6f2e4] via-[#f3cca7] to-[#f4b063] min-h-screen py-24 md:py-32 font-sora px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#f0703a] text-center mb-10 md:mb-16 xl:mb-20 tracking-wide leading-tight">
          Meet Our Therapists
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {therapists.map((therapist) => (
            <div
              key={therapist.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-300 transition-all transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              {/* Therapist Image */}
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4033963/pexels-photo-4033963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt={therapist.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
              </div>

              {/* Therapist Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#f0703a] mb-2">
                  {therapist.name}
                </h3>
                <p className="text-gray-700 font-medium">
                  {therapist.specialization}
                </p>
                <p className="text-gray-600 mt-1">
                  Experience: {therapist.experience} years
                </p>
                <p className="text-gray-600 mt-1">
                  Location: {therapist.location || "Not specified"}
                </p>

                {/* Book Now Button */}
                <Link to={`/book-session/${therapist.id}`}>
                  <button className="mt-6 w-full bg-[#f0703a] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#d95219] transition-all duration-300">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TherapistsDisplay;
