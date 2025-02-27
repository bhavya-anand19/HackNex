// BipolarDisorder.js
import React from "react";

const BipolarDisorder = () => {
  return (
    <div className="bg-[#fdf1db] text-[#373f61] px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Understanding Bipolar Disorder
        </h1>
        <p className="text-lg mb-4">
          Bipolar disorder is a mental health condition that causes extreme mood
          swings between emotional highs (mania or hypomania) and lows
          (depression).
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Symptoms of Bipolar Disorder
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Episodes of mania or hypomania</li>
          <li>Periods of depression</li>
          <li>Erratic mood changes</li>
          <li>Difficulty maintaining stable relationships</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Coping Strategies for Bipolar Disorder
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Therapy: Psychoeducation and CBT can help manage mood swings.</li>
          <li>
            Medication: Mood stabilizers and antidepressants may be prescribed.
          </li>
          <li>
            Regular routines: Maintaining a stable routine can improve mood
            stability.
          </li>
        </ul>

        <p className="font-semibold mt-4">Sources:</p>
        <ul className="list-disc list-inside">
          <li>National Institute of Mental Health</li>
          <li>Depression and Bipolar Support Alliance</li>
        </ul>
      </div>
    </div>
  );
};

export default BipolarDisorder;
