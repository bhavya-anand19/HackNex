// PTSD.js
import React from "react";

const PTSD = () => {
  return (
    <div className="bg-[#fdf1db] text-[#373f61] px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">What is PTSD?</h1>
        <p className="text-lg mb-4">
          Post-Traumatic Stress Disorder (PTSD) is a mental health condition
          triggered by experiencing or witnessing a traumatic event.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Symptoms of PTSD</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Flashbacks or intrusive thoughts</li>
          <li>Avoidance of reminders of the trauma</li>
          <li>Increased anxiety and arousal</li>
          <li>Negative changes in mood and cognition</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Coping Strategies for PTSD
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Therapy: Trauma-focused CBT or EMDR can help reduce symptoms.</li>
          <li>Medication: Antidepressants and anti-anxiety medications.</li>
          <li>
            Support groups: Connecting with others can provide comfort and
            understanding.
          </li>
        </ul>

        <p className="font-semibold mt-4">Sources:</p>
        <ul className="list-disc list-inside">
          <li>National Institute of Mental Health</li>
          <li>PTSD Alliance</li>
        </ul>
      </div>
    </div>
  );
};

export default PTSD;
