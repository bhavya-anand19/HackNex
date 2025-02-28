import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home.jsx";

import Blogs from "./components/Resources/Blogs/Blogs.jsx";

import Signup from "./components/SignUp/SignUp.jsx";
import Chatbot from "./components/Chatbot/Chatbot.jsx";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Depression from "./components/Services/Depression/Depression.jsx";
import Login from "./components/SignUp/Login.jsx";
import Addiction from "./components/Services/Addiction/Addiction.jsx";
import SocialAnxiety from "./components/Services/SocialAnxiety/SocialAnxiety.jsx";
import Ocd from "./components/Services/OCD/Ocd.jsx";
import Anxiety from "./components/Services/Anxiety/Anxiety.jsx";
import Women from "./components/Services/WomenProblems/Women.jsx";

import FAQPage from "./components/AboutUs/FaqPage.jsx";

import AnxietyDisorders from "./components/Resources/Blogs/Anxiety.jsx";
import DepressionWorsening from "./components/Resources/Blogs/Depression.jsx";
import MedicationForOCD from "./components/Resources/Blogs/Medication.jsx";
import SleepInRecovery from "./components/Resources/Blogs/SleepRecovery.jsx";
import CounselingVsPsychotherapy from "./components/Resources/Blogs/CounselingVsPsychotherapy.jsx";
import TobaccoAddiction from "./components/Resources/Blogs/TobaccoAddiction.jsx";

import VideoResources from "./components/Resources/Videos.jsx";
import AudioResources from "./components/Resources/Music.jsx";
import DepressionTest from "./components/Resources/Assessment/DepressionTest.jsx";
import AssessmentPage from "./components/Resources/Assessment/Assessment.jsx";
import BulimiaTest from "./components/Resources/Assessment/BulimiaTest.jsx";
import AnxietyTest from "./components/Resources/Assessment/AnxietyTest.jsx";
import BookFreeSession from "./components/Home/BookFreeSession.jsx";
import EmotionalIntelligenceTest from "./components/Resources/Assessment/EmotionalIntelligence.jsx";
import AttitudeTest from "./components/Resources/Assessment/Attitude.jsx";
import AnorexiaTest from "./components/Resources/Assessment/Anorexia.jsx";
import OcdTest from "./components/Resources/Assessment/OcdTest.jsx";

import AdultADHD from "./components/Resources/Blogs/Adhd.jsx";
import GriefAndLoss from "./components/Resources/Blogs/Grief.jsx";
import PTSD from "./components/Resources/Blogs/Ptsd.jsx";
import GAD from "./components/Resources/Blogs/Gad.jsx";
import BipolarDisorder from "./components/Resources/Blogs/BipolarDisorder.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import Resources from "./components/Resources/AllResources.jsx";
import AllResources from "./components/Resources/AllResources.jsx";

import { uploadTherapistsIfNeeded } from "./utility/firestoreUtils.js";
import TherapistsDisplay from "./components/Therapists/therapistsDisplay.jsx";
import SessionBooking from "./components/SessionBooking/SessionBooking.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    uploadTherapistsIfNeeded();
  }, []);
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />

        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="chatbot" element={<Chatbot />} />
        <Route path="depression" element={<Depression />} />
        <Route path="addiction" element={<Addiction />} />
        <Route path="anxiety" element={<Anxiety />} />
        <Route path="ocd" element={<Ocd />} />
        <Route path="social-anxiety" element={<SocialAnxiety />} />
        <Route path="women-problems" element={<Women />} />

        <Route path="faq" element={<FAQPage />} />

        <Route path="adhd" element={<AdultADHD />} />
        <Route path="grief-and-loss" element={<GriefAndLoss />} />
        <Route path="ptsd" element={<PTSD />} />
        <Route path="gad" element={<GAD />} />
        <Route path="bipolar-disorder" element={<BipolarDisorder />} />
        <Route path="/anxiety-disorders" element={<AnxietyDisorders />} />
        <Route path="/depression-worsening" element={<DepressionWorsening />} />
        <Route path="/medication-for-ocd" element={<MedicationForOCD />} />
        <Route path="/sleep-in-recovery" element={<SleepInRecovery />} />
        <Route
          path="/counseling-vs-psychotherapy"
          element={<CounselingVsPsychotherapy />}
        />
        <Route path="/tobacco-addiction" element={<TobaccoAddiction />} />

        <Route path="/all-resources" element={<AllResources />} />
        <Route path="/videos" element={<VideoResources />} />
        <Route path="/music" element={<AudioResources />} />
        <Route path="/assessments" element={<AssessmentPage />} />
        <Route path="/depression-test" element={<DepressionTest />} />
        <Route path="/bulimia-test" element={<BulimiaTest />} />
        <Route path="/anxiety-test" element={<AnxietyTest />} />
        <Route path="/book-free-session" element={<BookFreeSession />} />
        <Route
          path="/emotional-intelligence-test"
          element={<EmotionalIntelligenceTest />}
        />
        <Route path="/attitude-test" element={<AttitudeTest />} />
        <Route path="/anorexia-test" element={<AnorexiaTest />} />
        <Route path="/ocd-test" element={<OcdTest />} />
        <Route path="/therapists-display" element={<TherapistsDisplay />} />
        <Route path="/book-session/:therapistId" element={<SessionBooking />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
