import React from "react";

const ResearchPapers = ({ researchLinks }) => {
  return (
    <div className="mt-8 container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        Recommended Research Papers
      </h2>
      <ul className="list-disc list-inside">
        {researchLinks.map((link, index) => (
          <li key={index} className="mb-2">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchPapers;
