import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

const SessionBooking = () => {
  const { therapistId } = useParams();
  const navigate = useNavigate();
  const [therapist, setTherapist] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [callType, setCallType] = useState("video");

  useEffect(() => {
    const fetchTherapistDetails = async () => {
      const docRef = doc(db, "therapists", therapistId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setTherapist(docSnap.data());
      }
    };
    fetchTherapistDetails();
  }, [therapistId]);

  const availableTimes = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];

  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time.", { position: "top-center" });
      return;
    }

    const sessionData = {
      therapistId,
      therapistName: therapist?.name,
      date: selectedDate,
      time: selectedTime,
      callType,
      userId: "user123",
    };

    await setDoc(
      doc(db, "sessions", `${therapistId}-${selectedDate}-${selectedTime}`),
      sessionData
    );

    toast.success("Session booked successfully!", {
      position: "top-right",
    });
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto mt-16 p-6 bg-white shadow-lg rounded-lg mb-48">
      {therapist && (
        <div className="flex items-center gap-4">
          <img
            src="https://images.pexels.com/photos/4033963/pexels-photo-4033963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt={therapist.name}
            className="w-16 h-16 rounded-full object-cover shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold text-[#f0703a]">
              {therapist.name}
            </h2>
            <p className="text-gray-600">{therapist.specialization}</p>
          </div>
        </div>
      )}

      {/* Date Selection */}
      <div className="mt-6">
        <label className="block font-semibold text-gray-700">
          Select Date:
        </label>
        <input
          type="date"
          className="w-full p-3 border border-gray-300 rounded-lg mt-1 outline-none focus:ring-2 focus:ring-[#f0703a] transition"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* Time Selection */}
      <div className="mt-6">
        <label className="block font-semibold text-gray-700">
          Select Time:
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
          {availableTimes.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`p-3 border rounded-lg text-sm font-semibold text-gray-700 transition-all ${
                selectedTime === time
                  ? "bg-[#f0703a] text-white shadow-lg"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Call Type Selection */}
      <div className="mt-6">
        <label className="block font-semibold text-gray-700">Call Type:</label>
        <div className="flex gap-4 mt-2">
          <button
            onClick={() => setCallType("video")}
            className={`w-full p-3 border rounded-lg text-lg font-semibold transition-all ${
              callType === "video"
                ? "bg-[#f0703a] text-white shadow-lg"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            Video Call
          </button>
          <button
            onClick={() => setCallType("phone")}
            className={`w-full p-3 border rounded-lg text-lg font-semibold transition-all ${
              callType === "phone"
                ? "bg-[#f0703a] text-white shadow-lg"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            Phone Call
          </button>
        </div>
      </div>

      {/* Confirm Booking Button */}
      <button
        onClick={handleConfirmBooking}
        className="mt-6 w-full bg-[#f0703a] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#d95219] shadow-md transition-all"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default SessionBooking;
