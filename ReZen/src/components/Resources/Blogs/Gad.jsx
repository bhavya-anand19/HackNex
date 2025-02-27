// GAD.js
import React from "react";

const GAD = () => {
  return (
    <div className="bg-[#fdf1db] text-[#373f61] px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          What is Generalized Anxiety Disorder?
        </h1>
        <p className="text-lg mb-4">
          Generalized Anxiety Disorder (GAD) is a mental health condition
          characterized by excessive and chronic worry about a variety of
          topics. Individuals with GAD often feel on edge, and their worry is
          out of proportion to the situation.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Symptoms of GAD</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Constant worry and anxiety</li>
          <li>Restlessness</li>
          <li>Muscle tension and physical discomfort</li>
          <li>Difficulty sleeping</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Coping Strategies for GAD
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Therapy: CBT can help manage anxious thoughts.</li>
          <li>Medication: Anti-anxiety medications can provide relief.</li>
          <li>
            Mindfulness practices: Regular mindfulness exercises can reduce
            anxiety.
          </li>
        </ul>

        <p className="font-semibold mt-4">Sources:</p>
        <ul className="list-disc list-inside">
          <li>American Psychological Association</li>
          <li>Mental Health America</li>
        </ul>
      </div>
    </div>
  );
};

export default GAD;
