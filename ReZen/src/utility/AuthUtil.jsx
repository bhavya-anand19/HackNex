import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        try {
          const userRef = doc(db, "users", authUser.uid);
          const userSnap = await getDoc(userRef);

          setUser(
            userSnap.exists()
              ? { uid: authUser.uid, email: authUser.email, ...userSnap.data() }
              : { uid: authUser.uid, email: authUser.email }
          );
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
      }
      setLoading(false); // Stop loading
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};
