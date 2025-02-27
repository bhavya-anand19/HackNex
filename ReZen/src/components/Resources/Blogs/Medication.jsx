// MedicationForOCD.js
import React from "react";

const MedicationForOCD = () => {
  return (
    <div className="bg-[#fdf1db] text-[#373f61] px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Medication for Obsessive-Compulsive Disorder (OCD)
        </h1>
        <p className="mb-4">
          Obsessive-Compulsive Disorder (OCD) is a mental health condition where
          a person has unwanted thoughts, images, or urges (obsessions) that
          make them feel anxious. To cope with this anxiety, the person may feel
          driven to perform certain behaviors or mental acts (compulsions)
          repeatedly. While OCD cannot be cured, it can be managed with the
          right treatment. Medication plays an important role in treating OCD.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Types of Medications Used for OCD
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Antidepressants: SSRIs like fluoxetine, sertraline</li>
          <li>Antipsychotics: Risperidone, olanzapine</li>
          <li>Anti-anxiety medications: Benzodiazepines</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          How Effective is Medication for OCD?
        </h2>
        <p className="mb-4">
          Medication is an important part of OCD treatment and can help reduce
          symptom severity, allowing people to better engage in therapy. SSRIs
          are the first choice for treating OCD and have been shown to be
          effective in many studies. However, it may take several weeks for
          SSRIs to start working, and the dosage may need to be adjusted over
          time.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Things to Keep in Mind</h2>
        <ul>
          <li>
            Medication should be taken as prescribed by your doctor. Do not stop
            or change your medication without talking to your doctor first.
          </li>
          <li>
            It may take several weeks or months for medication to start working.
            Be patient and stick with your treatment plan.
          </li>
          <li>
            Medication works best when combined with therapy, such as
            Cognitive-Behavioral Therapy (CBT). Therapy can help you learn
            coping strategies to manage your OCD.
          </li>
          <li>
            Side effects are possible with any medication. If you experience
            side effects, talk to your doctor. They may adjust your dosage or
            switch you to a different medication.
          </li>
        </ul>
        <p className="mb-4">
          Remember, OCD is a treatable condition. With the right combination of
          medication and therapy, it is possible to manage your symptoms and
          improve your quality of life. If you or a loved one is struggling with
          OCD, don't hesitate to seek help from a mental health professional.
        </p>
      </div>
    </div>
  );
};

export default MedicationForOCD;
