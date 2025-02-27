// GriefAndLoss.js
import React from "react";

const GriefAndLoss = () => {
  return (
    <div className="bg-[#fdf1db] text-[#373f61] px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Understanding Grief and Loss
        </h1>
        <p className="text-lg mb-4">
          Grief is a natural response to loss, involving feelings of sadness,
          longing, and emotional pain. It is a complex process that can affect
          individuals differently.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Common Stages of Grief</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Denial</li>
          <li>Anger</li>
          <li>Bargaining</li>
          <li>Depression</li>
          <li>Acceptance</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Coping Strategies for Grief
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Therapy: Talking with a counselor can aid in processing loss.</li>
          <li>
            Support groups: Connecting with others who’ve experienced loss.
          </li>
          <li>Self-care: Allowing oneself time and patience during grief.</li>
        </ul>

        <p className="font-semibold mt-4">Sources:</p>
        <ul className="list-disc list-inside">
          <li>American Psychological Association</li>
          <li>Grief Recovery Institute</li>
        </ul>
      </div>
    </div>
  );
};

export default GriefAndLoss;
