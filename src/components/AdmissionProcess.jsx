import React from "react";

const AdmissionProcess = () => {
  const admissionSteps = [
    { id: 1, title: "Step 1", description: "Submit Application Form" },
    { id: 2, title: "Step 2", description: "Pay Application Fee" },
    { id: 3, title: "Step 3", description: "Submit Required Documents" },
    { id: 4, title: "Step 4", description: "Attend Admission Interview" },
    { id: 5, title: "Step 5", description: "Receive Admission Decision" },
    // Add more admission steps as needed
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {admissionSteps.map((step) => (
            <div key={step.id} className="bg-white shadow rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {/* You can add more details about each step if needed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
