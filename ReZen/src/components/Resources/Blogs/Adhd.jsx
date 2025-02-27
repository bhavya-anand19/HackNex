// AdultADHD.js
import React from "react";

const AdultADHD = () => {
  return (
    <div className="bg-[#fdf1db] text-[#373f61] px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Understanding Adult ADHD</h1>
        <p className="text-lg mb-4">
          Adult ADHD is a mental health disorder marked by symptoms of
          inattention, hyperactivity, and impulsivity. While typically diagnosed
          in childhood, it can continue into adulthood.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Symptoms of Adult ADHD</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Difficulty concentrating on tasks</li>
          <li>Impulsivity and difficulty controlling behaviors</li>
          <li>Challenges with organization</li>
          <li>Forgetfulness in daily activities</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Coping Strategies for Adult ADHD
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Therapy: CBT can help with behavior modification.</li>
          <li>Medication: Stimulants and non-stimulants can improve focus.</li>
          <li>Organizational tools: Use planners and reminders for tasks.</li>
        </ul>

        <p className="font-semibold mt-4">Sources:</p>
        <ul className="list-disc list-inside">
          <li>
            CHADD (Children and Adults with Attention-Deficit/Hyperactivity
            Disorder)
          </li>
          <li>Mayo Clinic</li>
        </ul>
      </div>
    </div>
  );
};

export default AdultADHD;
