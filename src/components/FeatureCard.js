import React from "react";

export default function FeatureCard({ title, points }) {
  return (
    <div className="bg-[#f2e2cd] lg:min-h-[400px] rounded-lg shadow-lg p-6 w-full lg:w-[32%] justify-evenly	flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <ul className="list-disc pl-5 text-gray-700 text-left">
        {points.map((point, index) => (
          <li key={index} className="mb-2">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
