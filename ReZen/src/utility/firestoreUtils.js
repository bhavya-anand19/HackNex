import { collection, addDoc, getDocs } from "firebase/firestore";
import { therapists } from "../therapistData";
import { db } from "../firebase"; // ✅ Import only db

const therapistsCollection = collection(db, "therapists");

// Function to check if data is already uploaded
const checkExistingTherapists = async () => {
    const snapshot = await getDocs(therapistsCollection);
    return snapshot.docs.length > 0; // If there are documents, return true
};

// Function to upload therapists if not already uploaded
export const uploadTherapistsIfNeeded = async () => {
    try {
        const exists = await checkExistingTherapists();
        if (exists) {
            console.log("Therapists data already exists. Skipping upload.");
            return;
        }

        for (const therapist of therapists) {
            await addDoc(therapistsCollection, therapist);
        }

        console.log("Therapists added successfully!");
    } catch (error) {
        console.error("Error adding therapists: ", error);
    }
};

// Function to fetch therapists from Firestore
export const fetchTherapists = async () => {
    try {
        const querySnapshot = await getDocs(therapistsCollection);
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching therapists:", error);
        return [];
    }
};
