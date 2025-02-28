import { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { toast } from "react-hot-toast";

const Dashboard = () => {
  const [sessions, setSessions] = useState([]);
  const userId = "user123"; // Replace with actual logged-in user ID

  useEffect(() => {
    const q = query(collection(db, "sessions"), where("userId", "==", userId));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const sessionData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSessions(sessionData);
    });

    return () => unsubscribe();
  }, []);

  // Function to cancel a session
  const handleCancelSession = async (sessionId) => {
    try {
      await deleteDoc(doc(db, "sessions", sessionId));
      toast.success("Session canceled successfully!");
    } catch (error) {
      console.error("Error canceling session:", error);
      toast.error("Failed to cancel session.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 mb-56">
      <h2 className="text-3xl font-semibold text-[#f0703a] text-center mb-6">
        Your Booked Sessions
      </h2>

      {sessions.length === 0 ? (
        <p className="text-gray-500 text-center">No sessions booked yet.</p>
      ) : (
        <div className="grid gap-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="p-5 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {session.therapistName}
              </h3>
              <p className="text-gray-600">
                <strong>Date:</strong> {session.date}
              </p>
              <p className="text-gray-600">
                <strong>Time:</strong> {session.time}
              </p>
              <p className="text-gray-600">
                <strong>Call Type:</strong>{" "}
                {session.callType === "video"
                  ? "📹 Video Call"
                  : "📞 Phone Call"}
              </p>

              <button
                onClick={() => handleCancelSession(session.id)}
                className="mt-3 bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Cancel Session
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
