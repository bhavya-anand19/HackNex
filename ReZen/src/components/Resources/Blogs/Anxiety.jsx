// AnxietyDisorders.js
import React from "react";

const AnxietyDisorders = () => {
  return (
    <div className="bg-[#fdf1db] text-[#373f61] px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          How can Anxiety Affect You in the Long Run?
        </h1>
        <p className="text-lg mb-4">
          Anxiety disorders are mental illnesses that cause unexplainable
          amounts of stress or fear regarding possible future events, and
          interfere with one’s daily functioning. This stress is usually very
          overwhelming and out of proportion to the impact of the future event.
        </p>
        <p className="text-lg mb-4">
          {" "}
          They are lifelong illnesses, meaning they cannot be “cured”. While
          they won’t go away completely, there are many ways to manage the
          symptoms so that it doesn’t affect your daily life.
        </p>
        <h1 className="text-3xl font-bold mb-6">
          What Are Anxiety Disorders? How to Identify and Cope with Them
        </h1>
        <p className="text-lg mb-4">
          Anxiety disorders are a group of mental health conditions
          characterized by excessive fear or worry...
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Types of Anxiety Disorders
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Generalized Anxiety Disorder (GAD):</strong> Involves
            chronic and exaggerated worry.
          </li>
          <li>
            <strong>Panic Disorder:</strong> Characterized by unexpected panic
            attacks.
          </li>
          <li>
            <strong>Social Anxiety Disorder:</strong> Intense fear of social
            situations.
          </li>
          <li>
            <strong>Phobias:</strong> Extreme fear of specific objects or
            situations.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Symptoms of Anxiety Disorders
        </h2>
        <p className="mb-4">Common symptoms of anxiety disorders include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Excessive worry</li>
          <li>Restlessness or feeling on edge</li>
          <li>Difficulty concentrating</li>
          <li>
            Physical symptoms such as increased heart rate, sweating, and
            trembling
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Coping with Anxiety Disorders
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Therapy: Cognitive Behavioral Therapy (CBT) is often effective.
          </li>
          <li>
            Medication: Anti-anxiety medications and antidepressants can help.
          </li>
          <li>
            Lifestyle changes: Regular exercise, healthy eating, and sufficient
            sleep.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">When to Seek Help</h2>
        <p className="mb-4">
          If anxiety is interfering with your daily life, it's important to seek
          help from a mental health professional. Early intervention can prevent
          symptoms from worsening.
        </p>

        <p className="font-semibold mt-4">Sources:</p>
        <ul className="list-disc list-inside">
          <li>National Institute of Mental Health (NIMH)</li>
          <li>Anxiety and Depression Association of America (ADAA)</li>
        </ul>
      </div>
    </div>
  );
};

export default AnxietyDisorders;
